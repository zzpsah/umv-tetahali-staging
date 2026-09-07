# UCHCH MADHYAMIK VIDYALAY, TETAHALI

## Digital School Website + IT Services + Automation

This repository is the **staging/development version** of the digital platform for **UCHCH MADHYAMIK VIDYALAY, TETAHALI**, Barharia, Siwan, Bihar.

The project is designed so that a person with basic web/IT knowledge can understand what every page does, where it leads, what is public, what is restricted, and how the future automation system fits together.

> **Staging first:** changes are developed and tested here before anything is promoted to the live repository.
>
> **Database safety:** no database/table/schema change should be made unless explicitly requested and the architecture has been finalized.

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

### Academic medium information

- **Secondary:** Hindi_English, Hindi_English_Urdu
- **Higher Secondary:** Hindi_English, Urdu_English, Hindi_English_Urdu

Do not invent principal name, phone, email, opening hours, facilities, or other school facts unless they are verified from an authoritative source.

---

## 2. What This Repository Is

The platform has two connected but distinct sides:

```text
PUBLIC / SCHOOL WEBSITE
        │
        ├── School information
        ├── Academic information
        ├── Notices & circulars
        ├── BSEB centre
        ├── Important portals
        ├── Smart Class
        ├── Services
        ├── Official Documents
        ├── Forms
        └── Guides

INTERNAL / OPERATIONAL IT SERVICES
        │
        ├── Photo & Signature processing
        ├── OCR / document extraction
        ├── Student data matching
        ├── BSEB registration assistance
        ├── Authenticated BEPC Smart Class integration
        ├── Google Drive file workflows
        └── Future AI agents / process automation
```

GitHub Pages provides the static web/application interface. Supabase provides authentication and future structured-data services. Google Drive is intended to be the document/file server. Google Apps Script is planned as an automation layer.

---

## 3. Main Website Navigation

The main navigation is intentionally **Hindi-only**. Dropdown items are **Hindi + English**.

Dropdowns use hover/focus behaviour and should disappear when the pointer leaves the navigation area.

```text
मुख्य पृष्ठ
│
├── विद्यालय
│
├── शैक्षणिक गतिविधियाँ ▼
│   ├── माध्यमिक स्तर / Secondary
│   ├── उच्च माध्यमिक स्तर / Higher Secondary
│   └── अध्ययन सामग्री / Study Material
│
├── IT Services
│
├── सूचनाएँ
│
├── BSEB ▼
│   ├── BSEB Centre
│   ├── Secondary
│   ├── Intermediate
│   ├── Forms & विज्ञप्तियाँ
│   └── Year-wise Archive
│
├── महत्वपूर्ण पोर्टल
│
├── Smart Class
│
├── सेवाएँ ▼
│   ├── विद्यार्थी सेवाएँ / Student Services
│   ├── शिक्षक सेवाएँ / Teacher Services
│   ├── प्रमाण-पत्र एवं अभिलेख / Certificates & Records
│   └── प्रपत्र / Forms
│
├── दस्तावेज़ ▼
│   ├── आधिकारिक दस्तावेज़ केन्द्र
│   ├── सूचना एवं परिपत्र
│   ├── शिक्षा विभाग
│   ├── DEO सिवान
│   ├── DEO दरभंगा
│   ├── BSEB दस्तावेज़
│   ├── विद्यालय एवं कार्यालय दस्तावेज़
│   ├── प्रपत्र
│   └── Google Drive File Server
│
├── मार्गदर्शिका
└── संपर्क
```

### Navigation rule

**Portal and document are different things.** A BSEB portal link must not be used as a substitute for an actual BSEB document. The Official Documents Centre is the file catalogue; BSEB pages are the portal/module layer.

---

## 4. Page Catalogue — What Each Page Does

### `index.html` — Main School Website

**Purpose:** public home page and central navigation hub.

Contains:
- School identity and verified school information
- Academic overview
- Important notices entry point
- BSEB entry point
- Important Portals entry point
- Smart Class entry point
- IT Services entry point
- Main navigation to documents, services and guides

**URL:** `https://zzpsah.github.io/umv-tetahali-staging/`

---

### `it-services.html` — IT Services & Automation Hub

**Purpose:** central directory for school-specific IT tools and automation.

Current/ planned tools:

1. **Photo & Signature Studio**
   - Upload student form/image/PDF
   - Detect photo and signature
   - Crop/clean/enhance
   - White background processing
   - Produce portal-ready JPG files

2. **Chandra OCR**
   - OCR for scanned/photographed forms and PDFs
   - Structured text/data extraction
   - Currently integrated as part of the processing workflow

3. **Gemini Document Vision**
   - AI-assisted visual identification of document regions such as student photo/signature

4. **Google Drive Upload**
   - Intended storage destination for processed files and generated documents
   - Actual Drive folder creation/access depends on Drive integration availability

5. **BSEB Registration Assistant**
   - Prepare verified registration data
   - Prepare photo/signature assets
   - Future portal assistance/automation
   - Human review before final submission

6. **Student Reference Matching**
   - Compare current form/OCR data with reference student data
   - Identify match, close match and mismatch
   - Never silently overwrite current submitted information

The current Photo & Signature Studio is linked as an external Streamlit tool.

---

### `notices.html` — Notice & Circular Centre

**Purpose:** central date-wise repository for notices, circulars, forms and विज्ञप्तियाँ.

Rules:
- Newest document first
- PDF-first
- Original government/department PDF is the source of truth
- Date + Type + Title + Description + Official Document/PDF
- Old documents remain available in archive
- If an exact official PDF cannot be verified, do not invent a PDF URL

Current BSEB 2027-related entries are being used as the first document set. The page is intended to become the central notice repository for BSEB, Education Department, DEO and School documents.

---

### `official-documents.html` — Official Documents Centre

**Purpose:** this is the **main File Catalogue**.

It is not simply a list of portals.

Main categories:

```text
आधिकारिक दस्तावेज़ केन्द्र
│
├── शिक्षा विभाग
├── जिला / DEO
│   ├── DEO Siwan
│   └── DEO Darbhanga
├── BSEB दस्तावेज़
│   ├── BSEB Student Documents
│   ├── BSEB Secondary Documents
│   └── BSEB Intermediate Documents
└── विद्यालय दस्तावेज़
```

Every actual file should have:

```text
Date
Type
Document / File Name
Description
Official Document / PDF
```

### File naming principle

Use a meaningful document name based on its actual purpose, for example:

- `BSEB Student Document`
- `BSEB Secondary Registration Document`
- `BSEB Intermediate Dummy Registration Card`
- `DEO Siwan Office Order`

Do not name every record simply `BSEB`.

---

### `bseb.html` — BSEB Centre

**Purpose:** dedicated BSEB portal/module page.

Contains separate areas for:
- Secondary
- Intermediate
- Forms & विज्ञप्तियाँ
- Archive

Important: this page contains **portal access and BSEB module navigation**. Actual official PDFs belong in the Official Documents Centre/catalogue.

---

### `secondary.html` — BSEB Secondary

**Purpose:** dedicated Secondary (Classes 9–10) portal page.

Current portal destinations include:
- Secondary Registration 2027–28
- Secondary Registration 2026–27
- Secondary Examination 2026–27

Secondary forms and विज्ञप्तियाँ are linked to the document centre rather than treating the portal itself as a document.

---

### `intermediate.html` — BSEB Intermediate

**Purpose:** dedicated Intermediate (Classes 11–12) portal page.

Current portal destinations include:
- Intermediate Examination 2027
- Intermediate Registration Card

Intermediate forms and विज्ञप्तियाँ belong in the document catalogue.

---

### `portals.html` — Important Government / Education Portals

**Purpose:** directory of external portals used by the school.

Current groups include:

```text
महत्वपूर्ण पोर्टल
│
├── School Administration
│   ├── OFSS Bihar
│   ├── e-Shikshakosh
│   ├── UDISE+
│   └── SHVR
│
├── BSEB
│   ├── Secondary Exam
│   ├── Intermediate Registration Card
│   ├── Secondary Registration
│   └── BSEB Official Home
│
├── ICT / Lab / Smart Class
│   └── BEPC School Tracker
│
└── Other school-use government/education portals
```

A portal is a live service destination. It is not automatically an official document.

---

### `smart-class.html` — Smart Class Dashboard

**Purpose:** display authenticated BEPC Smart Class/ICT tracker data in the school's own dashboard without sending the user to the BEPC login page for normal viewing.

The page calls the school's Supabase Edge Function:

```text
https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/bepc-smart-tracker
```

The frontend displays:
- Connection status
- Tables/records returned by the extractor
- Normalized records
- Tracker photos/media links when extracted
- Source links

Official source page:

```text
https://tracker.bepcssa.in/ICT_Smart_Class/SmartClass_Daily_Attendance.aspx
```

### BEPC authenticated integration

The Edge Function performs server-side authentication against the BEPC ASP.NET application.

Login flow:

```text
Smart Class Page
      │
      ▼
Supabase Edge Function
      │
      ├── Read BEPC username/password from server secrets
      ├── GET BEPC LoginPage.aspx
      ├── Read ASP.NET hidden fields
      ├── Read __VIEWSTATE / __EVENTVALIDATION
      ├── Read dynamic captcha token used by the page
      ├── POST login credentials + required form fields
      ├── Preserve session cookies
      ├── Request SmartClass_Daily_Attendance.aspx
      └── Extract tables / records / media links
      │
      ▼
Structured JSON
      │
      ▼
Smart Class Dashboard
```

### Security rule

BEPC credentials must **never be placed in browser JavaScript or GitHub**. They belong in server-side Supabase secrets.

The Smart Class function was tested with JWT verification disabled during staging troubleshooting. **Before production, authenticated access/JWT/role authorization must be re-enabled and enforced.**

---

### `login.html` — Role Selection

**Purpose:** common entry point for future role-based services.

Roles:
- Student
- Teacher
- Admin

Current status:
- Admin routes to the secure Admin Login.
- Student/Teacher login is a configuration placeholder until role-based access is implemented.

---

### `admin-login.html` — Secure Admin Login

**Purpose:** Supabase Auth login for restricted administration.

Features:
- Email/password authentication
- Remember session
- Password reset request
- No service-role key in browser
- Redirect to Admin Dashboard after successful login

---

### `admin-dashboard.html` — Admin Dashboard

**Purpose:** restricted administrative workspace.

Current entry points:
- Private & Confidential
- Restricted Documents
- Notice Management
- Automation

Authentication is checked through Supabase Auth. Unauthenticated users are redirected to Admin Login.

---

### `private-documents.html` — Private & Confidential Workspace

**Purpose:** admin-only workspace for restricted school records.

Planned/defined Drive areas include:
- Administration
- Teachers
- Students
- Confidential

**Important:** a frontend login gate alone does not secure a Drive file. Actual Google Drive permissions and authenticated server-side access must also be enforced.

Private/confidential files must never be placed in the public GitHub Pages repository.

---

### `prapatra.html` — Forms / प्रपत्र

**Purpose:** catalogue and editor for school forms.

Current example:
- **वेतन विपत्र / Vetan Vipatra**

Each form can have:
- Editable HTML version
- PDF/Print output
- Official Document/PDF link when a verified official version exists

If no official government/department document exists or can be verified, the Official Document field remains blank.

---

### `guide.html` — Digital Office Guide

**Purpose:** simple PDF-first digital-office workflow instructions.

Basic flow:

```text
PDF प्राप्त करें
      ↓
Data extraction
      ↓
Verification
      ↓
Automation
      ↓
Generated PDF
      ↓
Archive in Drive
```

---

### `margdarshika.html` — मार्गदर्शिका

**Purpose:** larger guide/instruction centre.

Sections:
- How-to instructions
- Instructional material
- Portal guidance
- Downloads and references

This is intended for step-by-step operational help rather than storing the source documents themselves.

---

### `niyamawali.html` — नियमावली

**Purpose:** school rules, regulations, office instructions and applicable guidelines.

Original official PDF/document will be added when available.

---

### `drive-structure.html` — Google Drive File Server Architecture

**Purpose:** explain the planned Google Drive document-storage structure.

Root folder supplied for the school:

`UMV Tetahali Google Drive`

Current root folder reference:

`https://drive.google.com/drive/folders/1NfTXy76MbZwCII4E1_A90gpw6qntDal?usp=sharing`

The assistant currently does not have physical Drive folder-creation access in this environment, so this page documents the agreed structure rather than claiming folders have been created.

---

## 5. Google Drive File Server Structure

The agreed storage architecture is:

```text
UMV Tetahali
│
├── 01_Official_Documents
│   ├── Education_Department
│   ├── DEO_Siwan
│   ├── DEO_Darbhanga
│   ├── School
│   ├── BSEB
│   │   ├── Secondary
│   │   ├── Intermediate
│   │   └── Archive
│   └── Rules_Regulations
│
├── 02_Forms
│   ├── Official_Forms
│   ├── Editable_Forms
│   └── Generated_PDF
│
├── 03_Notices_Circulars
│   ├── Education_Department
│   ├── DEO
│   ├── BSEB
│   └── School
│
├── 04_School_Records
│
├── 05_Private_Documents
│   ├── Administration
│   ├── Teachers
│   ├── Students
│   └── Confidential
│
├── 06_Smart_Class
│
├── 07_AI_Automation
│   ├── Input
│   ├── Processing
│   ├── Output
│   └── Logs
│
└── 99_Archive
```

### Storage rule

- Public official documents may be exposed through the website when intentionally published.
- Private/confidential documents remain restricted.
- GitHub stores website/application code, not confidential school records.
- Drive stores PDFs, images, generated files and other document assets.
- Supabase can later store metadata such as file ID, path, category, permissions and workflow status.

---

## 6. PDF-First Document Philosophy

The platform is **PDF-first**, not website-first.

```text
Original PDF / Image
        │
        ▼
Document identification
        │
        ▼
Data extraction
        │
        ▼
Human verification
        │
        ▼
Automation / workflow
        │
        ▼
Generated PDF / output
        │
        ▼
Google Drive
        │
        ▼
Website link / Google Sites reference
```

The original source document remains the source of truth.

### Document record standard

```text
Date
Type
Exact official title
Description
Official PDF / Official source
Storage location / Drive File ID (future)
```

### Official-link rule

1. Prefer the original official PDF.
2. If the PDF is not available but an official page is verified, link the official page.
3. If neither can be verified, leave the official-document field blank.
4. Never invent a government PDF URL.
5. Do not replace a document with a generic portal link.

---

## 7. BSEB Document Architecture

BSEB portals and BSEB documents are deliberately separated.

```text
BSEB
│
├── 🌐 Portals
│   ├── Secondary Registration
│   ├── Secondary Examination
│   ├── Intermediate Examination
│   └── Registration Card
│
└── 📁 Official Documents
    ├── Secondary Documents
    ├── Intermediate Documents
    ├── Student Documents
    ├── Forms / विज्ञप्तियाँ
    └── Archive
        └── Year-wise old documents
```

For the current work, the focus is **2026–27 / Exam 2027**. There is no need to create year-wise top-level folders for current documents; old documents can later move into `Archive/<year>`.

Examples of meaningful names:
- BSEB Student Document
- BSEB Secondary Registration Document
- BSEB Intermediate Student Document
- BSEB Dummy Registration Card
- BSEB Examination Notification

---

## 8. Student Registration Automation Flow

The intended registration workflow starts with the student's actual submission.

```text
Student Hardcopy / Scan / PDF
              │
              ▼
          OCR / AI
              │
              ▼
       Extracted fields
              │
              ▼
        Human review
              │
      ┌───────┴────────┐
      ▼                ▼
Reference data     Photo/Signature
(Supabase)         processing
      │                │
      ▼                ▼
Field-by-field      Portal-ready
matching            assets
      │                │
      └───────┬────────┘
              ▼
       Verified record
              │
              ▼
    BSEB registration assistance
              │
              ▼
      Final user review
              │
              ▼
       Submit / acknowledgement
```

### Source hierarchy

```text
1. Current student hardcopy / current submission
2. Reference student data — verification only
3. BSEB portal — final destination / authoritative portal state
```

Reference data must not silently overwrite current submission data.

---

## 9. Photo & Signature Processing

```text
Student Form / PDF / Image
          │
          ▼
Photo/signature detection
          │
    ┌─────┴─────┐
    ▼           ▼
  Photo      Signature
    │           │
    ▼           ▼
Crop/clean   Crop/clean
    │           │
    ▼           ▼
White bg     Clean background
    │           │
    ▼           ▼
Portal-ready dimensions
          │
          ▼
Download / Drive storage
          │
          ▼
BSEB upload workflow
```

The current external Photo & Signature Studio is the primary live tool linked from `it-services.html`.

---

## 10. OCR / AI Processing

Current conceptual OCR pipeline:

```text
PDF / JPG / PNG / Scan
          │
          ▼
Page preparation
          │
          ▼
Chandra OCR
          │
          ▼
Extracted text / layout
          │
          ▼
Gemini / AI-assisted interpretation where needed
          │
          ▼
Human verification
          │
          ▼
Verified structured record
```

AI is an assistance layer. Important student information must be verified before it is used for a consequential workflow.

---

## 11. Authentication & Authorization Architecture

The long-term design is authentication-based, not open automation.

```text
                 User
                  │
                  ▼
             Login / Auth
                  │
                  ▼
             Supabase Auth
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
     Student    Teacher     Admin
        │         │         │
        ▼         ▼         ▼
 Limited      Assigned    Restricted
 services     services    operations
                  │
                  ▼
        AI / Automation Agents
                  │
                  ▼
        Controlled tools/APIs
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
      Drive    Official    School
               Portals     Records
                  │
                  ▼
             Audit / Logs
```

### Principle

An AI agent should not receive unrestricted access or raw passwords. It should receive only the authenticated tools and permissions required for its task.

High-impact actions should be capable of requiring human approval.

---

## 12. Smart Class / BEPC Architecture

The BEPC integration is the first practical example of authenticated server-side automation.

```text
Browser
  │
  ▼
smart-class.html
  │
  ▼
Supabase Edge Function
bepc-smart-tracker
  │
  ├── BEPC credentials (server secrets)
  ├── ASP.NET session/cookies
  ├── Login page state
  ├── Authenticated tracker request
  └── HTML extraction
  │
  ▼
Structured JSON
  │
  ▼
Smart Class dashboard
```

The extractor is designed to handle ASP.NET hidden fields such as `__VIEWSTATE`, `__EVENTVALIDATION`, postback target, cookies and the dynamic page token used by the BEPC login page.

---

## 13. Future Automation / AI Agent Architecture

The planned end-state is a controlled digital school office.

```text
Google Sites / Public Website
              │
              ▼
       GitHub Pages Web App
              │
              ▼
       Supabase Authentication
              │
       ┌──────┼────────┐
       ▼      ▼        ▼
   Student Teacher   Admin
       │      │        │
       └──────┼────────┘
              ▼
      Authorization Layer
              │
              ▼
       AI / Automation Agents
              │
     ┌────────┼─────────┐
     ▼        ▼         ▼
 Documents   BSEB     School
 / OCR       tools     workflows
     │        │         │
     └────────┼─────────┘
              ▼
        Google Drive
              │
              ▼
       Generated PDFs
              │
              ▼
       Metadata / Logs
```

Planned phases:

1. Website + official document centre + forms + authenticated Smart Class.
2. Role-based access + admin workspace + Drive integration + audit logs.
3. AI document extraction + PDF generation + workflow automation.
4. Specialized AI agents with controlled tools and approval workflow.
5. Full digital school-office automation.

---

## 14. Google Sites + GitHub + Drive + Supabase Relationship

The intended hybrid model is:

```text
Google Sites
   │
   ├── Public presentation
   ├── School information
   ├── Notice/navigation
   └── Links to application modules
             │
             ▼
GitHub Pages
   │
   ├── Interactive website pages
   ├── IT Services
   ├── Forms
   ├── Smart Class
   └── Authenticated application UI
             │
             ├──────────────► Supabase Auth / Data
             │
             ├──────────────► Edge Functions / APIs
             │
             └──────────────► Google Apps Script / automation
                                      │
                                      ▼
                                  Google Drive
                                      │
                                      ▼
                              PDFs / Images / Files
```

Google Sites is the public-facing hub. GitHub Pages is the interactive application layer.

---

## 15. Repository / File Tree

The repository currently contains the following main pages/modules:

```text
umv-tetahali-staging/
│
├── README.md
│
├── index.html
│
├── it-services.html
├── smart-class.html
│
├── login.html
├── admin-login.html
├── admin-dashboard.html
├── private-documents.html
│
├── notices.html
├── official-documents.html
├── bseb.html
├── secondary.html
├── intermediate.html
├── education-department.html
├── deo-siwaan.html
├── deo-darbhanga.html
├── niyamawali.html
├── prapatra.html
├── guide.html
├── margdarshika.html
├── drive-structure.html
├── portals.html
│
└── assets/
    └── umv-logo-color.jpeg
```

Some pages may be expanded with additional files/assets as development continues. The README should be kept updated whenever a new public page, integration or major workflow is introduced.

---

## 16. Quick Page Map

| Page | Main purpose | Public / Restricted |
|---|---|---|
| `index.html` | School home + navigation | Public |
| `it-services.html` | IT tools and automation hub | Public entry point |
| `notices.html` | Notice/circular/document feed | Public |
| `official-documents.html` | Central actual-file catalogue | Public for published docs |
| `bseb.html` | BSEB centre | Public |
| `secondary.html` | Secondary BSEB module | Public |
| `intermediate.html` | Intermediate BSEB module | Public |
| `portals.html` | External official portals | Public |
| `smart-class.html` | BEPC Smart Class dashboard | Intended authenticated data flow |
| `login.html` | Role selection | Public entry |
| `admin-login.html` | Admin authentication | Restricted workflow |
| `admin-dashboard.html` | Admin operations | Restricted |
| `private-documents.html` | Private/confidential workspace | Admin only |
| `education-department.html` | Education Department documents | Public published docs |
| `deo-siwaan.html` | DEO Siwan documents | Public published docs |
| `deo-darbhanga.html` | DEO Darbhanga documents | Public published docs |
| `prapatra.html` | Editable school forms + official links | Public/controlled as appropriate |
| `niyamawali.html` | Rules/regulations | Public published docs |
| `guide.html` | Digital office PDF workflow guide | Public |
| `margdarshika.html` | How-to and instructional guidance | Public |
| `drive-structure.html` | Drive file-server architecture | Public documentation |

---

## 17. Security Rules

1. Never put passwords, service-role keys or other secrets in GitHub Pages code.
2. BEPC credentials stay in server-side secrets.
3. Private/confidential files must not be stored in the public repository.
4. Frontend authentication is not sufficient for protecting actual Drive files; backend/Drive permissions must also enforce access.
5. Use least-privilege permissions for automation agents.
6. Keep audit/log records for important automated operations.
7. Require human confirmation for high-impact submissions where appropriate.
8. Do not expose confidential student information on public pages.
9. Do not silently overwrite current student submissions with reference data.
10. Do not modify the database merely to make a page work unless explicitly requested.

---

## 18. Development & Release Workflow

```text
Idea / Change
     │
     ▼
Inspect current GitHub file
     │
     ▼
Design / plan
     │
     ▼
STAGING repository
     │
     ▼
GitHub Pages staging
     │
     ▼
User verification / testing
     │
     ▼
Approved
     │
     ▼
LIVE repository
```

Repositories:

- **Staging:** `zzpsah/umv-tetahali-staging`
- **Live:** `zzpsah/umv-tetahali`

Never use the live repository as the first destination for unfinished development work.

---

## 19. Current Important External Services

### School website

Staging:

`https://zzpsah.github.io/umv-tetahali-staging/`

### Photo & Signature Studio

`https://photo-signature-studio-gwwj5igdeszojvajhd44sz.streamlit.app/`

### Supabase project

Project ID:

` sxfnrwugsyfypqgfglzc `

Supabase Edge Function used by Smart Class:

`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/bepc-smart-tracker`

### BEPC source page

`https://tracker.bepcssa.in/ICT_Smart_Class/SmartClass_Daily_Attendance.aspx`

### Google Drive root

`https://drive.google.com/drive/folders/1NfTXy76MbZwCII4E1_A90gpw6qntDal?usp=sharing`

---

## 20. Maintenance Rules for Future Contributors

When adding a page or integration:

1. Add the page to the repository tree in this README.
2. Add its purpose to the Page Catalogue.
3. Add it to the Quick Page Map.
4. Document any external URL it depends on.
5. Document authentication requirements.
6. Document where its data comes from and where its output goes.
7. If it creates/uses files, document the Drive path/category.
8. If it uses an official government document, record the source-of-truth rule.
9. If it changes the navigation, update the navigation tree.
10. Keep staging and live environments clearly separated.

---

## 21. One-Page Mental Model

A new contributor should be able to understand the whole system from this diagram:

```text
                         UMV TETAHALI
                              │
                ┌─────────────┴─────────────┐
                │                           │
         PUBLIC WEBSITE                 IT SERVICES
                │                           │
        ┌───────┼────────┐          ┌───────┼──────────┐
        ▼       ▼        ▼          ▼       ▼          ▼
     School   Notices   BSEB      Photo     OCR      Smart Class
     Info               Portal    /Sign             / BEPC
        │       │        │          │       │          │
        └───────┴────────┘          └───────┼──────────┘
                │                           │
                ▼                           ▼
      Official Documents             Verified Data
                │                           │
                ▼                           ▼
          Google Drive              Automation / Agents
                │                           │
                └─────────────┬─────────────┘
                              ▼
                    Generated PDFs / Records
                              │
                              ▼
                     Human Review / Approval
```

**Core philosophy:** simple interface, verified sources, controlled authentication, PDF-first records, automated repetitive work, and human approval at critical points.
