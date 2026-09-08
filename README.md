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

## 1. Canonical public architecture

```text
HOME / index.html
│
├── विद्यालय
│
├── शैक्षणिक गतिविधियाँ ▼
│   ├── माध्यमिक स्तर (कक्षा 9–10)
│   ├── उच्च माध्यमिक स्तर (कक्षा 11–12)
│   ├── अध्ययन सामग्री
│   └── शुल्क संरचना / Fee Structure
│       ├── Admission Fee
│       ├── Registration Fee
│       ├── Examination Fee
│       ├── Official विज्ञप्ति / Advertisement / Prospectus
│       └── Google Drive source archive
│
├── IT Services
├── सूचनाएँ
│
├── BSEB ▼
│   ├── BSEB Centre
│   ├── Secondary / माध्यमिक
│   ├── Intermediate / इंटरमीडिएट
│   ├── Forms & Notices
│   └── Archive
│
├── महत्वपूर्ण पोर्टल
├── Smart Class
│
├── सेवाएँ ▼
│   ├── विद्यार्थी सेवाएँ
│   ├── शिक्षक सेवाएँ
│   ├── प्रमाण-पत्र एवं अभिलेख
│   └── प्रपत्र
│
├── दस्तावेज़ ▼
│   ├── Official Documents Centre
│   ├── Education Department
│   ├── DEO Siwan
│   ├── BSEB Documents
│   └── Google Drive File Server
│
├── मार्गदर्शिका
└── संपर्क
```

The same hierarchy is used by the Admin Control Centre so the administrator does not need to learn a second structure.

## 2. Fee Structure ownership

`fee-structure.html` is the **single canonical public page** for Admission, Registration and Examination fees.

Fee amounts must not be duplicated across the homepage, `bseb.html`, `secondary.html` or `intermediate.html`. Those pages only link to the canonical fee page.

Every fee record should carry:

- purpose;
- level/class;
- session/exam year;
- category;
- official source PDF/URL;
- verification date/status;
- Google Drive archive location.

## 3. Canonical Google Drive source folders

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

Website records should link to the official source and, when available, the school Drive copy of the same PDF.

## 4. Public page ownership

| Page | Responsibility |
|---|---|
| `index.html` | main public navigation and school overview |
| `fee-structure.html` | canonical Admission / Registration / Examination fee structure |
| `official-updates.html` | current source-checked intelligence |
| `notices.html` | dated notices and archived deadlines |
| `bseb.html` | BSEB service/portal hub; links to fee structure |
| `secondary.html` | Secondary portals/forms/notices; links to fee structure |
| `intermediate.html` | OFSS/Intermediate portals/forms/notices; links to fee structure |
| `portals.html` | official portal home pages |
| `portal-guides.html` | task guidance and source context |
| `official-documents.html` | official document catalogue |
| `education-department.html` | Education Department records |
| `deo-siwaan.html` | Siwan district education archive |
| `smart-class.html` | BEPC Smart Class integration |
| `it-services.html` | school tools and automation catalogue |
| `admin-content.html` | canonical Admin Control Centre |

## 5. Admin Control Centre

Canonical page: `admin-content.html`

```text
Admin Login
  ↓
Admin Dashboard
  ↓
Admin Control Centre
  ↓
Manage → Change Map → Review Queue → Final Permission
```

The Admin Change Map follows the same public hierarchy. For `शैक्षणिक गतिविधियाँ`, it explicitly maps to:

- `index.html → academics`
- `guide.html → study material`
- `fee-structure.html → Admission / Registration / Examination fees`

For BSEB, the Change Map links to the canonical fee page instead of duplicating fee data.

## 6. Official-source update system

- `official-updates.html` — public current-information centre.
- `CURRENT-OFFICIAL-UPDATES.md` — detailed dated research register.
- `SOURCES-2026-09-08.md` — source snapshot.
- `README-OFFICIAL-SOURCES.md` — source-maintenance rules.
- `BSEB-FEE-REFERENCE.md` — detailed fee verification notes.
- `CHANGELOG.md` — repository change history.

Every current-information item should record authority/source, official URL/PDF, notice date, session/exam year, last verification date and status (`Verified`, `Re-verify before action`, `Expired/Archived`, `Review Required`).

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

> The website is the interface. Official विज्ञप्ति/advertisement/prospectus PDFs are the evidence. Fee information has one canonical page under शैक्षणिक गतिविधियाँ. Source files belong in Google Drive. AI may prepare changes; humans verify and approve important actions.
