import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const TEXT_MODEL = "gemini-3.6-flash";
const IMAGE_MODEL = "gemini-3.1-flash-image";
const MAX_WEB_BYTES = 1_500_000;
const MAX_FILE_BYTES = 8_000_000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function isPublicHttpUrl(value: string) {
  try {
    const u = new URL(value);
    if (!/^https?:$/.test(u.protocol)) return false;
    const host = u.hostname.toLowerCase();
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "0.0.0.0" ||
      host === "::1" ||
      host.endsWith(".local") ||
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
    ) return false;
    return true;
  } catch {
    return false;
  }
}

async function readLimited(response: Response, maxBytes: number) {
  const declared = Number(response.headers.get("content-length") || "0");
  if (declared && declared > maxBytes) {
    throw new Error(`Remote content is larger than ${maxBytes} bytes.`);
  }
  const reader = response.body?.getReader();
  if (!reader) return await response.text();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel();
      throw new Error(`Remote content exceeded ${maxBytes} bytes.`);
    }
    chunks.push(value);
  }
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

async function callGemini(
  apiKey: string,
  model: string,
  parts: Array<Record<string, unknown>>,
) {
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts }] }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw Object.assign(
      new Error(data?.error?.message || "Gemini API error."),
      { status: response.status },
    );
  }
  return data;
}

function extractText(data: any) {
  return data?.candidates?.[0]?.content?.parts
    ?.map((part: { text?: string }) => part.text || "")
    .join("") || "";
}

function extractImages(data: any) {
  return (data?.candidates?.[0]?.content?.parts || [])
    .filter((part: any) => part?.inlineData?.data)
    .map((part: any) => ({
      mimeType: part.inlineData.mimeType || "image/png",
      data: part.inlineData.data,
      dataUrl: `data:${part.inlineData.mimeType || "image/png"};base64,${part.inlineData.data}`,
    }));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed. Use POST." }, 405);

  try {
    const geminiApiKey = Deno.env.get("GEMINI_API_KEY");
    if (!geminiApiKey) return json({ error: "GEMINI_API_KEY secret is not configured." }, 500);

    const body = await req.json();
    const action = body?.action || "ask";
    const prompt = typeof body?.prompt === "string" ? body.prompt : "";
    const model = typeof body?.model === "string" ? body.model : TEXT_MODEL;

    const allowedActions = [
      "ask",
      "analyze",
      "generate-readme",
      "analyze-webpage",
      "analyze-file",
      "generate-image",
    ];
    if (!allowedActions.includes(action)) {
      return json({ error: `Invalid action. Allowed actions: ${allowedActions.join(", ")}` }, 400);
    }

    if (action === "analyze-webpage") {
      const pageUrl = typeof body?.url === "string" ? body.url.trim() : "";
      if (!pageUrl || !isPublicHttpUrl(pageUrl)) {
        return json({ error: "A valid public http(s) webpage URL is required." }, 400);
      }
      const pageResponse = await fetch(pageUrl, {
        headers: { "User-Agent": "UMV-Tetahali-AI-Workbench/1.0" },
        redirect: "follow",
      });
      if (!pageResponse.ok) {
        return json({ error: `Unable to read webpage: HTTP ${pageResponse.status}` }, 502);
      }
      const html = await readLimited(pageResponse, MAX_WEB_BYTES);
      const text = stripHtml(html).slice(0, 120000);
      const reviewPrompt = `You are the controlled AI reviewer/editor for UCHCH MADHYAMIK VIDYALAY, TETAHALI (UDISE 10160203806). Review the public webpage below. Never invent official facts, contacts, credentials, dates, URLs or school data. Clearly separate verified content from recommendations. Return: 1) current page purpose and structure, 2) strengths, 3) missing/weak sections, 4) duplication or information-architecture problems, 5) Hindi/English wording improvements, 6) recommended navigation/sections, 7) an improved HTML draft that preserves verified facts only, 8) a concise human-approval checklist. Source URL: ${pageUrl}\n\nPAGE TEXT:\n${text}\n\nUSER INSTRUCTION:\n${prompt || "Perform the complete review."}`;
      const data = await callGemini(geminiApiKey, TEXT_MODEL, [{ text: reviewPrompt }]);
      return json({ success: true, action, model: TEXT_MODEL, source_url: pageUrl, output: extractText(data) });
    }

    if (action === "analyze-file") {
      const file = body?.file;
      if (!file || typeof file?.data !== "string" || typeof file?.mimeType !== "string") {
        return json({ error: "file.data (base64), file.mimeType and optional file.name are required." }, 400);
      }
      const approxBytes = Math.floor(file.data.length * 0.75);
      if (approxBytes > MAX_FILE_BYTES) return json({ error: `File is larger than ${MAX_FILE_BYTES} bytes.` }, 413);
      const filePrompt = prompt || "Extract the important information, fields, dates, entities and actionable items. Preserve the source facts and identify anything that requires human verification.";
      const parts: Array<Record<string, unknown>> = [
        { text: `You are the document intelligence module for UCHCH MADHYAMIK VIDYALAY, TETAHALI (UDISE 10160203806). Do not invent facts. Analyze the supplied file. Return a structured, verification-friendly result.\n\nTASK:\n${filePrompt}` },
        { inline_data: { mime_type: file.mimeType, data: file.data } },
      ];
      const data = await callGemini(geminiApiKey, TEXT_MODEL, parts);
      return json({ success: true, action, model: TEXT_MODEL, file: { name: file.name || "uploaded-file", mimeType: file.mimeType }, output: extractText(data) });
    }

    if (action === "generate-image") {
      if (!prompt) return json({ error: "Image generation prompt is required." }, 400);
      const imagePrompt = `Create a professional, clean, school-appropriate visual for UCHCH MADHYAMIK VIDYALAY, TETAHALI. Do not fabricate official logos, seals, phone numbers, UDISE details or government emblems. If text is requested, use the user's exact text where possible.\n\nUSER IMAGE REQUEST:\n${prompt}`;
      const data = await callGemini(geminiApiKey, IMAGE_MODEL, [{ text: imagePrompt }]);
      const images = extractImages(data);
      return json({ success: true, action, model: IMAGE_MODEL, output: extractText(data), images });
    }

    if (!prompt) return json({ error: "Prompt string is required." }, 400);
    const data = await callGemini(geminiApiKey, model, [{ text: prompt }]);
    return json({ success: true, action, model, output: extractText(data) });
  } catch (err) {
    const status = Number((err as any)?.status) || 500;
    return json({ error: err instanceof Error ? err.message : String(err), ...(status !== 500 ? { gemini_status: status } : {}) }, status);
  }
});
