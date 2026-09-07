# AI Workbench — UMV Tetahali

## उद्देश्य

AI Workbench existing school webpages/documents की सामग्री को समझने, gaps पहचानने, structure सुधारने और human-review के लिए revised draft तैयार करने के लिए है। यह अपने-आप existing page को overwrite नहीं करता।

## Current staging capabilities

- Ask AI: existing Gemini gateway से सामान्य प्रश्न/analysis/README drafting.
- Webpage Improve: public URL या pasted HTML/text को improvement prompt में बदलना.
- File/Document: text, Markdown, CSV, JSON और HTML files को browser में पढ़कर analysis prompt बनाना.
- Image Generation: image-capable gateway action के लिए request contract तैयार; backend action अलग से enable होना आवश्यक.
- PDF/image multimodal processing: backend gateway में dedicated file action enable होने के बाद production-ready.

## Existing webpage improvement workflow

```text
Existing webpage
      ↓
AI Workbench
      ↓
Read / Extract
      ↓
Find missing sections + duplication + weak wording
      ↓
Recommend information architecture
      ↓
Generate improved content / HTML draft
      ↓
Human verification
      ↓
Controlled GitHub update
```

### महत्वपूर्ण नियम

AI को official facts invent नहीं करने हैं। School name, UDISE, official notices, government links और other authoritative data source documents से verify होंगे। AI का draft सीधे production में publish नहीं होगा।

## Public webpage reader

Workbench URL field public pages के लिए है। Browser CORS policy के कारण हर external website का HTML सीधे fetch होना जरूरी नहीं है। ऐसी स्थिति में page content paste करना या server-side web-reader action लगाना होगा। Login-protected government portals के लिए authenticated automation अलग workflow है।

## File workflow

```text
PDF / Image / Document
        ↓
Upload
        ↓
Gateway multimodal analysis
        ↓
Extract fields / summarize / classify
        ↓
Verify against original PDF
        ↓
Structured output
```

Staging browser implementation currently handles text-like files directly. PDF/image binary analysis requires the server-side multimodal gateway action.

## Image generation

```text
Image prompt
    ↓
AI Workbench
    ↓
Supabase Edge Gateway
    ↓
Image-capable Gemini model
    ↓
Generated image
    ↓
Human review
```

The Gemini API key must remain a server-side secret. Never put it in HTML, JavaScript, GitHub, localStorage or a prompt.

## Security

- No API keys in frontend.
- No passwords, OTP, CAPTCHA, private student records or confidential files in staging prompts.
- Production gateway must use authentication, authorization, rate controls and audit logging.
- Sensitive actions require human approval.

## Promotion

```text
STAGING → Browser test → Security review → Human approval → PRODUCTION
```
