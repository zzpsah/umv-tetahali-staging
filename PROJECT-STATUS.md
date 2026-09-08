# PROJECT STATUS — UMV Tetahali Staging

**School:** UCHCH MADHYAMIK VIDYALAY, TETAHALI  
**UDISE:** 10160203806  
**Block:** Barharia  
**District:** Siwan, Bihar  
**Status date:** 08 September 2026

## Current staging state

### Public website

Implemented canonical navigation:

```text
विद्यालय
शैक्षणिक गतिविधियाँ ▼
  ├── माध्यमिक स्तर (कक्षा 9–10)
  ├── उच्च माध्यमिक स्तर (कक्षा 11–12)
  ├── अध्ययन सामग्री
  └── शुल्क संरचना / Fee Structure
IT Services
सूचनाएँ
BSEB ▼
  ├── BSEB Centre
  ├── Secondary
  ├── Intermediate
  ├── Forms & Notices
  └── Archive
महत्वपूर्ण पोर्टल
Smart Class
सेवाएँ ▼
  ├── विद्यार्थी सेवाएँ
  ├── शिक्षक सेवाएँ
  ├── प्रमाण-पत्र एवं अभिलेख
  └── प्रपत्र
दस्तावेज़ ▼
  ├── Official Documents Centre
  ├── Education Department
  ├── DEO Siwan
  ├── BSEB Documents
  └── Google Drive File Server
मार्गदर्शिका
संपर्क
```

Desktop and mobile navigation both follow this structure.

### Fee Structure

`fee-structure.html` is the single canonical public page for:

- Admission fee
- Registration fee
- Examination fee
- official विज्ञप्ति / advertisement / prospectus links
- verification status
- Google Drive source archive links

BSEB, Secondary and Intermediate pages do not own separate fee tables; they link to this page.

Canonical Drive source folders:

```text
UMV Tetahali/
└── 01_Official_Documents/
    └── BSEB/
        ├── Secondary/
        │   └── Fee_and_Admission_Source_PDFs/
        └── Intermediate/
            └── Fee_and_Admission_Source_PDFs/
```

### Admin Control Centre

Canonical path:

`admin-login.html → admin-dashboard.html → admin-content.html`

Three main Admin views remain:

1. Manage
2. Review Queue
3. AI Monitor

The Admin Change Map follows the public hierarchy. `शैक्षणिक गतिविधियाँ` maps to:

- `index.html → academics`
- `guide.html → study material`
- `fee-structure.html → Admission / Registration / Examination fees`

BSEB changes route to `bseb.html`, `secondary.html`, `intermediate.html`, `notices.html` and the canonical `fee-structure.html` where fee information is involved.

### Official-source governance

- Original official PDF/page remains source of truth.
- AI/manual changes first enter Review Queue.
- Approval does not itself publish.
- Final permission is required before staging/public/backend application.
- Production promotion remains separate.
- Supabase schema/data changes remain unapproved unless explicitly authorized.
- Government portal final submit/payment actions remain human-controlled.

### Current supporting pages

- `official-updates.html` — current source-checked information
- `CURRENT-OFFICIAL-UPDATES.md` — dated research register
- `BSEB-FEE-REFERENCE.md` — detailed fee verification notes
- `README-OFFICIAL-SOURCES.md` — source rules
- `README.md` — canonical architecture/project map
- `CHANGELOG.md` — implementation history

## Not yet implemented

- Automatic live source crawler/change detection
- Supabase content CMS tables
- Google Drive automatic PDF ingestion/publishing
- Full audit history backend
- Production promotion of current staging changes

## Final rule

The public website should stay simple. Fee information has one home under `शैक्षणिक गतिविधियाँ → शुल्क संरचना`. Official PDFs belong in Google Drive. AI can prepare and compare changes; human approval controls publication and irreversible actions.
