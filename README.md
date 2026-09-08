# UCHCH MADHYAMIK VIDYALAY, TETAHALI
## Digital School Portal — Staging

**UDISE:** `10160203806`  
**Block:** Barharia  
**District:** Siwan, Bihar  
**Classes:** 9–12  
**Environment:** `zzpsah/umv-tetahali-staging`

> Staging first. Production changes require separate approval.
>
> Government information is source/date/session sensitive. Original official PDF/page is the authority; AI/OCR is only a proposal until verified.
>
> Supabase schema/data changes are not authorized unless explicitly approved.

## 1. Current public architecture

```text
Homepage
  ├── विद्यालय
  ├── शैक्षणिक गतिविधियाँ
  │    ├── माध्यमिक स्तर (9–10)
  │    ├── उच्च माध्यमिक स्तर (11–12)
  │    ├── अध्ययन सामग्री
  │    └── शुल्क संरचना / Fee Structure
  ├── Current Official Updates
  ├── BSEB Centre
  ├── Notices & Circulars
  ├── Important Portals / Guides
  ├── Official Documents
  ├── Smart Class
  └── IT Services

Admin Login → Admin Dashboard → Admin Control Centre
             Manage → Change Map → Review Queue → Final Permission
```

## 2. Fee Structure ownership

`fee-structure.html` is the **single canonical public page** for Admission, Registration and Examination fees.

Fee amounts must not be duplicated across homepage, `bseb.html`, `secondary.html` or `intermediate.html`. Those pages link to the canonical fee page.

Current source-backed entries include:

- OFSS Intermediate Admission 2026–28 CAF: ₹350, verified from the official Common Prospectus.
- Secondary Registration / Annual Exam 2027 final-window reference: ₹450 Regular / ₹580 Independent-Private; re-verify from the applicable BSEB notification before payment.
- Matric Annual Examination 2026: ₹1,010 General / ₹895 SC-ST-EBC(BC-I), verified from official BSEB advertisement PDF.
- Intermediate registration/examination: do not hard-code current fees without directly verifying the applicable official BSEB notice/advertisement.

Every fee record should carry: purpose, level, session/year, category, source PDF/URL, verification date/status and Drive archive location.

## 3. Canonical Google Drive source folders

Created under the verified `UMV Tetahali` root:

```text
UMV Tetahali/
└── 01_Official_Documents/
    └── BSEB/
        ├── Secondary/
        │   └── Fee_and_Admission_Source_PDFs/
        └── Intermediate/
            └── Fee_and_Admission_Source_PDFs/
```

Secondary source folder:
`https://drive.google.com/drive/folders/1OYVQmVmf8y31TiaOGZ4Mnoc4mA8J2z7g`

Intermediate source folder:
`https://drive.google.com/drive/folders/1Bi2xzlwM-m1S8dmdD8iZd5lFBPpe9Nuy`

The researched PDFs were not already present in Drive during this review, so public pages currently link to the official source PDF/portal plus the canonical Drive folder. Replace/add individual Drive-file links once those source PDFs are uploaded; never invent a Drive file link.

## 4. Official-source update system

- `official-updates.html` — public current-information centre.
- `CURRENT-OFFICIAL-UPDATES.md` — detailed dated research register.
- `SOURCES-2026-09-08.md` — source snapshot.
- `README-OFFICIAL-SOURCES.md` — source-maintenance rules.
- `BSEB-FEE-REFERENCE.md` — detailed fee verification notes.
- `CHANGELOG.md` — repository change history.

Every current-information item should record authority/source, official URL/PDF, notice date, session/exam year, last verification date and status (`Verified`, `Re-verify before action`, `Expired/Archived`, `Review Required`).

## 5. Public page ownership

| Page | Responsibility |
|---|---|
| `index.html` | school identity, navigation and high-value links; no duplicated fee tables |
| `fee-structure.html` | **canonical Admission / Registration / Examination fee structure** |
| `official-updates.html` | current source-checked intelligence |
| `notices.html` | dated notices and archived deadlines |
| `bseb.html` | BSEB service/portal hub; links to fee structure |
| `secondary.html` | Secondary portals/forms/notices; links to fee structure |
| `intermediate.html` | OFSS/Intermediate portals/forms/notices; links to fee structure |
| `portals.html` | official home pages |
| `portal-guides.html` | task guidance and source context |
| `deo-siwaan.html` | Siwan district education notice archive |
| `smart-class.html` | BEPC Smart Class integration |
| `admin-content.html` | canonical Admin Control Centre |

## 6. Admin Control Centre

Canonical page: `admin-content.html`

```text
Manage
Review Queue
AI Monitor
```

Manage shows a permanent Change Map. Review Queue records before/after/source/affected outputs. Approval never means automatic publication; final permission is still required.

AI Monitor is a Phase-1 control UI only. Live crawling/change detection remains planned.

## 7. Data ownership

```text
GitHub → HTML/CSS/JS/templates/integration code
Supabase (future, after explicit approval) → structured content/audit metadata
Google Drive → original PDFs, official documents, forms and restricted/private files
```

## 8. Security / governance

- No passwords, OTPs, service-role keys or private tokens in GitHub.
- No confidential student/staff documents in public Pages.
- No OTP/CAPTCHA bypass or unauthorized scraping.
- AI/OCR must not silently overwrite verified data.
- Government information requires official-source verification.
- Final government portal submit/payment actions remain human-controlled.
- Historical information is archived, not silently deleted.

## Final principle

> The website is the interface. Official विज्ञप्ति/advertisement/prospectus PDFs are the evidence. Fee information has one canonical page under शैक्षणिक गतिविधियाँ. Source files belong in Google Drive; humans verify and approve important government information and irreversible actions.
