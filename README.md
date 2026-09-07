# UCHCH MADHYAMIK VIDYALAY, TETAHALI

## Digital School Website + IT Services + Automation

This repository is the **staging/development version** of the digital platform for **UCHCH MADHYAMIK VIDYALAY, TETAHALI**, Barharia, Siwan, Bihar.

The README is the project's **living map**. Whenever a page, integration, important link, workflow, asset, or architecture rule changes, update the README and the detailed `knowledge-base.md`.

> **Staging first:** develop and test here before promoting anything to the live repository.
>
> **Database safety:** do not change database tables/schema/data unless explicitly requested.
>
> **Source of truth:** original official PDFs/images and authoritative government sources take priority over copied summaries.

---

## 1. School Information

| Field | Value |
|---|---|
| School | UCHCH MADHYAMIK VIDYALAY, TETAHALI |
| Hindi name | उच्च माध्यमिक विद्यालय, तेतहली |
| UDISE | `10160203806` |
| Category | 10 - Secondary with Higher Secondary |
| Type | 3 - Co-Educational |
| Classes | 9 to 12 |
| Status | Operational |
| Management | Department of Education |
| District | SIWAN |
| Block | BARHARIA |
| Cluster | U.M.S. BARHARIA. |
| Latitude | `26.326081` |
| Longitude | `84.470910` |

### Academic mediums
- Secondary: Hindi_English, Hindi_English_Urdu
- Higher Secondary: Hindi_English, Urdu_English, Hindi_English_Urdu

Do not invent principal name, phone, email, facilities, opening hours, or other school facts unless verified from an authoritative source.

---

## 2. Platform Architecture

```text
Public Website / Google Sites entry
            │
            ▼
     GitHub Pages Staging
            │
 ┌──────────┼──────────────────────┐
 ▼          ▼                      ▼
School   IT Services        Portal Guidance
Pages    OCR/AI/Tools        Guides + PDFs
            │
            ▼
       Supabase / Auth
            │
     ┌──────┴──────┐
     ▼             ▼
Edge Functions   Future Roles
     │
 ┌───┴───────────────┐
 ▼                   ▼
External Portals   Google Drive / Apps Script
```

Google Drive is the intended file repository. Apps Script is the planned automation/document layer. Supabase is the structured/authentication layer. Public GitHub Pages must never be treated as private storage.

---

## 3. Navigation Convention

- Main navigation labels are **Hindi only**.
- Dropdown contents are **Hindi + English**.
- Dropdowns open on hover/focus and close when pointer/focus leaves.
- `BSEB` remains a separate module from Education Department.
- **Portal ≠ Document:** live portal links and official PDFs are different records.
- Important Links normally use the portal **Home Page**. Task-specific login/registration/download links belong in the Portal Guidance Centre.

Main navigation:

```text
विद्यालय
शैक्षणिक गतिविधियाँ ▼
IT Services
सूचनाएँ
BSEB ▼
महत्वपूर्ण पोर्टल
Smart Class
सेवाएँ ▼
दस्तावेज़ ▼
मार्गदर्शिका
संपर्क
```

---

## 4. Current Page Map

| Page | Purpose |
|---|---|
| `index.html` | Main public school website |
| `it-services.html` | IT tools and automation directory |
| `ai-workbench.html` | AI Workbench: AI-assisted controlled workspace |
| `notices.html` | Date-wise notices/circulars |
| `official-documents.html` | Official document catalogue |
| `education-department.html` | Education Department documents |
| `deo-siwaan.html` | DEO Siwan documents |
| `deo-darbhanga.html` | DEO Darbhanga documents |
| `bseb.html` | BSEB central module |
| `secondary.html` | BSEB Secondary module |
| `intermediate.html` | BSEB Intermediate module |
| `portals.html` | Important live government/education portals |
| `portal-guides.html` | **Step-by-step Portal Guidance Centre** |
| `smart-class.html` | Smart Class / BEPC integration |
| `login.html` | Future role-based entry |
| `admin-login.html` | Admin authentication |
| `admin-dashboard.html` | Restricted administration |
| `private-documents.html` | Private/confidential workspace |
| `prapatra.html` | Forms / प्रपत्र |
| `guide.html` | Digital office guide |
| `margdarshika.html` | Detailed मार्गदर्शिका |
| `niyamawali.html` | Rules & Regulations |
| `drive-structure.html` | Google Drive architecture |

---

## 5. Portal Guidance Centre — NEW

**Page:** `portal-guides.html`

**Purpose:** `पोर्टल मार्गदर्शन — महत्वपूर्ण सरकारी एवं शैक्षणिक पोर्टलों के उपयोग से संबंधित सहायता सामग्री।`

Every portal guide follows this standard:

```text
Portal
  ↓
Purpose / Who is it for?
  ↓
Official Home
  ↓
Registration / Login
  ↓
Services / Modules
  ↓
Step-by-step procedure
  ↓
Required documents / data
  ↓
Precautions / common errors
  ↓
Official letter / notification / order / guideline
  ↓
Original official PDF
  ↓
Related school workflow
```

### Current guides

1. **OFSS Bihar** — Intermediate admission; official home, CAF workflow and Common Prospectus PDF.
2. **e-Shikshakosh Bihar** — school/teacher/education-service workflow; login and record-verification guidance.
3. **UDISE+** — school data/reporting workflow and official 2024–25 key-results PDF reference.
4. **SHVR** — Swachh Evam Harit Vidyalaya Rating; self-assessment and official resources/manuals.
5. **BSEB Secondary** — registration/exam workflow, 2027–28 registration portal and official exam advertisement PDF.
6. **BSEB Intermediate** — registration/exam/declaration workflow and verified official PDFs.
7. **BEPC School Tracker** — ICT/Smart Class workflow and server-side authenticated integration notes.
8. **National Scholarship Portal (NSP)** — OTR, scholarship application and verification workflow.
9. **Bihar e-Kalyan** — student welfare/scholarship workflow.
10. **Bihar Post-Matric Scholarship — Institute** — institution registration and verification workflow.
11. **SATHEE** — student learning/exam preparation resources and official booklet PDF.
12. **Bihar VidyaSathi** — education/scholarship information discovery with official-portal verification rule.
13. **विद्यार्थी सहयोग कार्यक्रम** — grievance/request/suggestion registration, tracking, helpline 1100 and official information.

### Maintenance policy

Portal guides are living documents. When a portal changes its URL, login flow, menu, service, session/year, date, eligibility, notification or PDF:

1. Verify from the official source.
2. Update the relevant guide.
3. Update `portals.html` only if the Home Page/card changes.
4. Add the original official PDF/letter where available.
5. Preserve useful historical documents as archive/reference.
6. Update `knowledge-base.md` and README when the change is materially architectural or workflow-related.

---

## 6. Important Portals — Current Inventory

`portals.html` currently groups live services under:

### School Administration
- OFSS Bihar
- e-Shikshakosh Bihar
- UDISE+
- SHVR

### BSEB
- Secondary Exam
- Intermediate Exam/Registration
- Secondary Registration 2027–28
- BSEB Official Home

### ICT / Lab / Smart Class
- BEPC School Tracker

### Scholarship
- National Scholarship Portal
- Bihar e-Kalyan
- Bihar PMS Institute

### Students & Parents
- SATHEE
- OFSS Bihar
- Bihar VidyaSathi
- विद्यार्थी सहयोग शिविर

The Important Links page now follows the rule that **Home Page links are preferred**, while specific service URLs are documented in `portal-guides.html`.

---

## 7. Verified Portal URLs & Official Documents

### BSEB
- Secondary Registration 2027–28: `https://reg28.biharboardonline.org/`
- BSEB Secondary Home: `https://www.biharboardonline.org/home`
- Secondary Exam: `https://exam.biharboardonline.org/home`
- Intermediate Home: `https://intermediate.biharboardonline.com/`
- Intermediate Registration Card: `https://intermediate.biharboardonline.com/Reg/DownloadRegCard.aspx`
- Intermediate Student Registration Card: `https://intermediate.biharboardonline.com/StudentRegCardDownload.aspx`
- Commerce Private PDF: `https://intermediate.biharboardonline.com/assets/Notifications/CommercePrivate.pdf`
- Declaration Not Uploaded list PDF: `https://intermediate.biharboardonline.com/assets/Notifications/Declaration%20Not%20Uploaded%20college%20List._3.pdf`
- Exam Advertisement PDF: `https://examapi.biharboardonline.org/files/others/exam-advertisement.pdf`
- Matric Exam AC Notification PDF: `https://examapi.biharboardonline.org/files/others/matric-exam-ac-notification.pdf`
- Compartment Application Form PDF: `https://examapi.biharboardonline.org/files/others/compart-application-form.pdf`

### Other current official/portal resources
- OFSS: `https://ofssbihar.net/`
- e-Shikshakosh: `https://eshikshakosh.bihar.gov.in/`
- UDISE+: `https://udiseplus.gov.in/`
- SHVR: `https://shvr.education.gov.in/`
- SHVR resources: `https://shvr.education.gov.in/resources`
- BEPC Tracker: `https://tracker.bepcssa.in/`
- NSP: `https://nsp.gov.in/`
- Bihar e-Kalyan: `https://ekalyan.bihar.gov.in/`
- Bihar PMS Institute: `https://instpmsonline.bihar.gov.in/`
- SATHEE: `https://sathee.iitk.ac.in/`
- Bihar VidyaSathi: `https://www.biharvidyasathi.com/`
- विद्यार्थी सहयोग: `https://vidyarthisahyog.bihar.gov.in/`

Only publish direct PDFs/pages after verification. Never invent URLs.

---

## 8. मार्गदर्शिका & नियमावली

`margdarshika.html` now contains a dedicated **पोर्टल मार्गदर्शन** card linking to `portal-guides.html` and a **📜 नियम एवं विनियम** card linking to `niyamawali.html`.

`niyamawali.html` is the public rules/regulations repository. Official source documents should be attached/linked when verified.

---

## 9. IT Services

Current service inventory:

1. Photo & Signature Studio
2. Chandra OCR
3. Gemini Document Vision (technical/legacy reference)
4. Student Reference Matching
5. Google Drive Upload
6. BSEB Registration Assistant
7. BEPC Smart Class Automation
8. Smart Autofill — Chrome Extension
9. **AI Workbench**
10. AI / Agent Automation

### AI Workbench

Public-facing name is **AI Workbench**. Features include Ask AI, Webpage Review, File/PDF analysis and Image Generation. Workflow:

`Read → Extract → Diagnose → Suggest → Draft → Human Review`

Gateway:
`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/gemini-ai-gateway`

Backend actions designed for the gateway:
`ask`, `analyze`, `generate-readme`, `analyze-webpage`, `analyze-file`, `generate-image`.

Never expose API keys in GitHub/frontend/chat.

### Smart Autofill

Manifest V3 extension. Scans actual webpage labels/placeholders/ARIA/nearby text; supports text/email/tel/number, textarea, select, radio and checkbox; skips hidden/disabled/readOnly/password/file/submit; dispatches input/change; highlights filled fields and supports rescanning multi-step forms.

The original ZIP is an install artifact and should not be claimed as stored in GitHub unless actually uploaded.

---

## 10. BEPC Smart Class Architecture

Official tracker:
`https://tracker.bepcssa.in/`

Backend:
`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/bepc-smart-tracker`

Flow:

```text
Smart Class dashboard
      ↓
Supabase Edge Function
      ↓
Server-side BEPC credentials
      ↓
GET ASP.NET login page
      ↓
Read hidden state / dynamic token
      ↓
POST login
      ↓
Preserve session cookies
      ↓
Request authenticated Smart Class page
      ↓
Extract tables / records
      ↓
Structured JSON
      ↓
Dashboard
```

Credentials must remain server-side. During staging diagnostics JWT verification was disabled; **production must re-enable authentication/authorization before deployment.**

---

## 11. Student Registration / OCR Workflow

Current hardcopy is the primary source. Reference data is used to verify, not silently overwrite.

`Hardcopy/scan → OCR/AI → Current Form Data → Reference Matching + Photo/Signature → Discrepancy Review → Verified Record → BSEB Registration Assistance → Human Final Review → Submission`

---

## 12. PDF-First Document Workflow

```text
Original Official PDF/Image
        ↓
Extract
        ↓
Verify
        ↓
Automate
        ↓
Generate PDF/output
        ↓
Google Drive
        ↓
Website catalogue/link
```

Original official PDF/image remains the source of truth.

Drive architecture:

```text
UMV Tetahali/
├── 01_Official_Documents/
│   ├── Education_Department/
│   ├── DEO_Siwan/
│   ├── DEO_Darbhanga/
│   ├── School/
│   ├── BSEB/Secondary/
│   ├── BSEB/Intermediate/
│   └── Rules_Regulations/
├── 02_Forms/
├── 03_Notices_Circulars/
├── 04_School_Records/
├── 05_Private_Documents/
├── 06_Smart_Class/
├── 07_AI_Automation/
└── 99_Archive/
```

Root supplied by user:
`https://drive.google.com/drive/folders/1NfTXy76MbZwCII4E1_A90gpw6qntDal?usp=sharing`

Do not claim physical Drive folders were created unless Drive access confirms them.

---

## 13. Security Rules

- Never commit passwords, API secrets, service-role keys or private tokens.
- BEPC credentials stay server-side.
- Private student/teacher/admin documents never go into public GitHub.
- Public GitHub Pages is not private storage.
- Production Smart Class authorization must be enforced.
- AI agents use controlled tools and permissions.
- Sensitive actions should be auditable and may require human approval.
- Database changes are not authorized unless explicitly requested.

---

## 14. Staging → Production Workflow

- Staging: `zzpsah/umv-tetahali-staging`
- Production: `zzpsah/umv-tetahali`
- Staging URL: `https://zzpsah.github.io/umv-tetahali-staging/`

```text
Requirement
   ↓
Inspect current GitHub file
   ↓
Update staging
   ↓
Update README + knowledge-base when applicable
   ↓
Test staging
   ↓
User approval
   ↓
Promote to live
```

---

## 15. Documentation Files

- `README.md` — concise living project map and rules.
- `knowledge-base.md` — detailed operational memory, portal inventory, guide standards, verified links, workflows and maintenance rules.
- `portal-guides.html` — public user-facing step-by-step portal guidance.
- `margdarshika.html` — public मार्गदर्शिका hub.
- `niyamawali.html` — rules/regulations.

**Documentation rule:** meaningful page, portal, URL, workflow, security or architecture changes must be reflected in README/KB.

---

## 16. Current Status — 07 September 2026

| Area | Status |
|---|---|
| Public school website | Active staging |
| Important Portals | Active and categorized |
| Portal Guidance Centre | **Created with current portal guides** |
| Official PDF/resource references | Added where verified/available |
| मार्गदर्शिका → Portal Guidance | Connected |
| मार्गदर्शिका → Rules & Regulations | Connected |
| BSEB module | Active |
| Smart Class BEPC backend | Extraction foundation active |
| Production BEPC authorization | **Must be enforced before production** |
| AI Workbench | Active staging page; left unchanged in latest portal work |
| Google Drive architecture | Defined |
| Private document architecture | Defined/restricted foundation |
| Database changes | **Not authorized by default** |

---

## Final Principle

> **The website is the interface. Documents are the source. Authentication controls access. Portal guides explain the current process. Automation reduces repetitive work. AI assists controlled workflows. Humans remain responsible for important verification and approval.**
