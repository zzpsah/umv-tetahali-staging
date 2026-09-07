# Gemini AI Office — UMV Tetahali (Staging)

## Purpose

`ai-office.html` is the staging browser interface for the school's controlled Gemini gateway. It is designed as the first UI layer for future document AI and agent workflows.

## Current verified architecture

```text
Browser: ai-office.html
        |
        | POST JSON
        v
Supabase Edge Function
 gemini-ai-gateway
        |
        | server-side GEMINI_API_KEY
        v
Gemini API
 gemini-3.6-flash
        |
        v
{ success, action, model, output }
        |
        v
Human review / approved workflow
```

Gateway endpoint:
`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/gemini-ai-gateway`

The Gemini API key is **never stored in this repository or sent to the browser**.

## Supported actions

- `ask` — general question or instruction
- `analyze` — analysis workflow
- `generate-readme` — README drafting workflow

Request format:

```json
{
  "action": "ask",
  "prompt": "Reply with exactly: GEMINI GATEWAY TEST OK",
  "model": "gemini-3.6-flash"
}
```

Expected success shape:

```json
{
  "success": true,
  "action": "ask",
  "model": "gemini-3.6-flash",
  "output": "GEMINI GATEWAY TEST OK"
}
```

## Staging test result

The gateway was successfully tested independently with the response:

`GEMINI GATEWAY TEST OK`

This verifies the Edge Function → Gemini path. Browser-side invocation must still be tested from the published staging page.

## How to use

1. Open the staging AI Office page.
2. Choose an action.
3. Enter a non-sensitive prompt.
4. Click **Gemini को भेजें** or **Gateway Test**.
5. Review the returned output.
6. Do not treat AI output as an official record without human verification.

## Security rules

- Never enter Gemini API keys into HTML, JavaScript, GitHub, Google Sites, or browser storage.
- Never place passwords, OTPs, CAPTCHA values, private student records, or confidential documents in prompts.
- Production must use authenticated users, authorization/least privilege, rate limiting as appropriate, logging, and human approval for sensitive actions.
- Staging is not production and should not be used for confidential records.

## Future agent architecture

```text
AI Agent
├── ask
├── analyze
├── document.extract
├── document.generate
├── drive.list       [future, authenticated]
├── drive.read       [future, authorized]
├── drive.create     [future, approval required]
├── github.read      [future]
├── github.update    [future, approval required]
└── audit.log        [future]
```

The Gemini model should provide reasoning/content generation; privileged operations should be performed by explicitly authorized tools rather than by giving the model unrestricted credentials.

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

Do not copy this page to the production repository until browser testing, authentication and authorization have been finalized.

## Troubleshooting

### `Missing Authorization header`
This came from an older gateway implementation that manually required an Authorization header. If JWT verification is disabled for staging and this exact error remains, confirm the newly deployed function code is actually active.

### Model 404 / unavailable
The old `gemini-2.5-flash` model produced a 404 for this account. The working staging configuration is `gemini-3.6-flash`.

### Browser CORS error
Confirm the Edge Function returns CORS headers for `POST` and `OPTIONS`, and inspect the browser network response. Do not solve CORS by exposing the Gemini key.

### Gateway returns success but UI fails
Inspect the browser Network response and confirm the JSON fields `success`, `action`, `model`, and `output` are present.

## Files

```text
ai-office.html
└── Browser UI + gateway client

it-services/ai-office/README.md
└── This documentation
```
