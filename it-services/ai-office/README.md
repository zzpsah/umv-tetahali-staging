# Gemini AI Office / AI Workbench — UMV Tetahali (Staging)

## Purpose

`ai-workbench.html` is the staging browser interface for the school's controlled Gemini gateway. It is designed for AI-assisted webpage review, document intelligence, content drafting and image generation while keeping API credentials server-side.

## Current architecture

```text
Browser: ai-workbench.html
        |
        | POST JSON / base64 file
        v
Supabase Edge Function
 gemini-ai-gateway
        |
        | server-side GEMINI_API_KEY
        v
Gemini API
 ├── gemini-3.6-flash       text / multimodal analysis
 └── gemini-3.1-flash-image image generation
        |
        v
AI output
        |
        v
Human verification / controlled update
```

Gateway endpoint:
`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/gemini-ai-gateway`

The Gemini API key is **never stored in this repository or sent to the browser**.

## Supported actions

- `ask` — general question or instruction
- `analyze` — analysis workflow
- `generate-readme` — README drafting workflow
- `analyze-webpage` — reads a public webpage server-side and reviews structure/content
- `analyze-file` — multimodal analysis of PDF/image/text files supplied as base64
- `generate-image` — image generation through the configured image-capable Gemini model

## Request examples

### Ask

```json
{
  "action": "ask",
  "prompt": "Reply with exactly: GEMINI GATEWAY TEST OK",
  "model": "gemini-3.6-flash"
}
```

### Webpage review

```json
{
  "action": "analyze-webpage",
  "url": "https://example.com/page.html",
  "prompt": "Check Hindi wording, missing sections and information architecture."
}
```

Only public `http(s)` URLs should be supplied. The gateway blocks common localhost/private-network targets. Login-protected pages require a separate authenticated automation workflow.

### File analysis

```json
{
  "action": "analyze-file",
  "prompt": "Extract fields, dates and missing information.",
  "file": {
    "name": "notice.pdf",
    "mimeType": "application/pdf",
    "data": "BASE64_DATA"
  }
}
```

The staging UI limits browser uploads to 8 MB. Do not upload confidential student records or credentials to the public staging page.

### Image generation

```json
{
  "action": "generate-image",
  "prompt": "Create a professional Hindi school cleanliness campaign poster for UMV Tetahali.",
  "model": "gemini-3.1-flash-image"
}
```

The response can contain generated image data as a data URL for display in the Workbench. Generated visuals are drafts and must be reviewed before official publication.

## Webpage reviewer workflow

```text
Existing public webpage
        ↓
Server-side fetch
        ↓
Extract readable text
        ↓
Gemini reviewer
        ↓
Structure + gaps + wording + recommendations
        ↓
Improved HTML/content draft
        ↓
Human verification
        ↓
Manual / controlled GitHub update
```

The reviewer is instructed not to invent official facts, contacts, dates, URLs or school data.

## Security rules

- Never enter Gemini API keys into HTML, JavaScript, GitHub, Google Sites, or browser storage.
- Never place passwords, OTPs, CAPTCHA values, private student records, or confidential documents in prompts/uploads.
- Production must use authenticated users, authorization/least privilege, rate limiting as appropriate, logging, and human approval for sensitive actions.
- The current gateway source committed in this repository is documentation/source reference; **GitHub commit does not deploy the Supabase Edge Function automatically** unless a separate deployment pipeline is configured.
- Do not treat AI output as an official record without human verification.

## Supabase deployment note

The current working Supabase function is separate from the GitHub Pages repository. The source is now stored at:

```text
supabase/functions/gemini-ai-gateway/index.ts
```

After reviewing this commit, deploy that source to the Supabase function `gemini-ai-gateway` and keep the existing `GEMINI_API_KEY` secret. Do not change the database/schema.

For production, restore JWT verification/authentication before exposing sensitive workflows.

## Future agent architecture

```text
AI Agent
├── ask
├── analyze-webpage
├── analyze-file
├── generate-image
├── document.extract       [future]
├── document.generate      [future]
├── drive.list             [future, authenticated]
├── drive.read             [future, authorized]
├── drive.create           [future, approval required]
├── github.read            [future]
├── github.update          [future, approval required]
└── audit.log              [future]
```

## Promotion rule

```text
STAGING
  ↓
Browser test
  ↓
Security review
  ↓
Workflow validation
  ↓
Human approval
  ↓
PRODUCTION
```

## Troubleshooting

### `Invalid action`
If the deployed Edge Function still says only `ask, analyze, generate-readme` are allowed, the new gateway source has not yet been deployed to Supabase. The GitHub source commit alone does not change the deployed function.

### Model 404 / unavailable
The previous `gemini-2.5-flash` configuration returned a model-unavailable error for this account. The verified text model is `gemini-3.6-flash`. Image generation uses a separate image-capable model.

### Browser CORS error
Confirm the Edge Function returns CORS headers for `POST` and `OPTIONS`. Do not solve CORS by exposing the Gemini key.

### Image request succeeds but no image appears
Check that the deployed gateway returns an `images` array containing `dataUrl` values. Confirm the configured image-capable model is enabled for the Gemini API key.

### Webpage review cannot read a site
The gateway only supports public HTTP(S) pages. Login-protected/private portals need authenticated automation and must not receive credentials through this public staging UI.

## Files

```text
ai-workbench.html
└── Browser UI + gateway client

supabase/functions/gemini-ai-gateway/index.ts
└── Gateway source reference

it-services/ai-office/README.md
└── This documentation
```
