# UCHCH MADHYAMIK VIDYALAY, TETAHALI

## Digital School Website + IT Services + Automation

This repository is the **staging/development version** of the digital platform for **UCHCH MADHYAMIK VIDYALAY, TETAHALI**, Barharia, Siwan, Bihar.

The README is the project's **living map**. Whenever a page, integration, important link, workflow, asset, or architecture rule is changed, the README should be updated in the same change or immediately after it.

> **Staging first:** develop and test here before promoting anything to the live repository.
>
> **Database safety:** do not change database tables/schema/data unless explicitly requested and the architecture is finalized.
>
> **Source of truth:** official PDFs/images and authoritative government sources take priority over copied summaries.

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
| Pre-primary | NA |
| Status | Operational |
| Management | Department of Education |
| District | SIWAN |
| Block | BARHARIA |
| Cluster | U.M.S. BARHARIA. |
| Latitude | `26.326081` |
| Longitude | `84.470910` |

### Academic mediums

- **Secondary:** Hindi_English, Hindi_English_Urdu
- **Higher Secondary:** Hindi_English, Urdu_English, Hindi_English_Urdu

Do not invent principal name, phone, email, opening hours, facilities, or other school facts unless verified from an authoritative source.

---

## 2. Platform in One View

```text
                         UMV TETAHALI DIGITAL PLATFORM
                                      │
             ┌────────────────────────┼────────────────────────┐
             │                        │                        │
             ▼                        ▼                        ▼
      PUBLIC WEBSITE             IT SERVICES             RESTRICTED OFFICE
             │                        │                        │
             │                        │                        ├── Admin Login
             │                        │                        ├── Private Records
             │                        │                        └── Future Workflows
             │                        │
             ├── School               ├── Photo/Signature
             ├── Academics            ├── OCR / AI Extraction
             ├── Notices              ├── Student Matching
             ├── BSEB                 ├── BSEB Assistance
             ├── Portals              ├── BEPC Smart Class
             ├── Smart Class          └── Future AI Agents
             ├── Services
             ├── Documents
             ├── Forms
             └── Guides
                                      │
                                      ▼
                              SUPABASE / AUTH
                                      │
                         ┌────────────┴────────────┐
                         ▼                         ▼
                  Auth / Roles              Edge Functions
                                                   │
                                                   ▼
                                        Google Drive / Apps Script
                                                   │
                                                   ▼
                                           Files / Automation
```

The website is the human-facing layer. IT Services is the operational automation layer. Authentication and authorization control restricted operations. Google Drive is the intended file server, while Google Apps Script is the planned document/automation layer.

---

## 3. Main Navigation Rules

### Permanent navigation convention

- **Main navigation labels:** Hindi only.
- **Dropdown contents:** Hindi + English.
- Dropdowns should open on **hover/focus** and disappear when the pointer/focus leaves the navigation area.
- Do not duplicate the same link unnecessarily.
- **Portal ≠ Document:** a live government portal link is not an official PDF/document.

```text
मुख्य पृष्ठ
│
├── विद्यालय
├── शैक्षणिक गतिविधियाँ ▼
│   ├── माध्यमिक स्तर / Secondary
│   ├── उच्च माध्यमिक स्तर / Higher Secondary
│   └── अध्ययन सामग्री / Study Material
├── IT Services
├── सूचनाएँ
├── BSEB ▼
│   ├── BSEB Centre
│   ├── Secondary
│   ├── Intermediate
│   ├── Forms & विज्ञप्तियाँ
│   └── Year-wise Archive
├── महत्वपूर्ण पोर्टल
├── Smart Class
├── सेवाएँ ▼
│   ├── विद्यार्थी सेवाएँ / Student Services
│   ├── शिक्षक सेवाएँ / Teacher Services
│   ├── प्रमाण-पत्र एवं अभिलेख / Certificates & Records
│   └── प्रपत्र / Forms
├── दस्तावेज़ ▼
│   ├── आधिकारिक दस्तावेज़ केन्द्र / Official Documents Centre
│   ├── सूचना एवं परिपत्र / Notices & Circulars
│   ├── शिक्षा विभाग / Education Department
│   ├── DEO सिवान / DEO Siwan
│   ├── DEO दरभंगा / DEO Darbhanga
│   ├── BSEB दस्तावेज़ / BSEB Documents
│   ├── विद्यालय एवं कार्यालय दस्तावेज़ / School & Office Documents
│   ├── नियमावली / Rules & Regulations
│   ├── प्रपत्र / Forms
│   └── Google Drive File Server
├── मार्गदर्शिका
└── संपर्क
```

---

## 4. Page Catalogue

The following is the current page map. When a page is added, removed, renamed, or its purpose changes, update this section.

| File / Page | Purpose | Access / Role | Main destination |
|---|---|---|---|
| `index.html` | Main school home + navigation hub | Public | All major modules |
| `it-services.html` | IT tools and automation directory | Public entry; individual tools may be restricted | IT tools |
| `notices.html` | Central notices/circulars repository | Public | Official documents |
| `official-documents.html` | Central official document catalogue | Public | Government/school files |
| `education-department.html` | Bihar Education Department documents | Public | Department documents |
| `deo-siwaan.html` | DEO Siwan documents | Public | District documents |
| `deo-darbhanga.html` | DEO Darbhanga documents | Public | District documents |
| `bseb.html` | BSEB central module | Public | Secondary/Intermediate |
| `secondary.html` | BSEB Secondary portal module | Public | Secondary portals |
| `intermediate.html` | BSEB Intermediate portal module | Public | Intermediate portals |
| `portals.html` | Important external government/education portals | Public | Live portals |
| `smart-class.html` | School Smart Class dashboard + BEPC integration | Authenticated backend; production access must be authorized | BEPC tracker data |
| `login.html` | Future role-based entry point | Public entry | Student/Teacher/Admin |
| `admin-login.html` | Administrator authentication | Restricted | Admin dashboard |
| `admin-dashboard.html` | Administrative workspace | Admin only | Private/automation tools |
| `private-documents.html` | Private & Confidential workspace | Admin only | Restricted Drive records |
| `prapatra.html` | Forms catalogue + editable HTML forms | Public/role-dependent per form | HTML/PDF/official document |
| `guide.html` | Digital office guide | Public | Operational instructions |
| `margdarshika.html` | Detailed मार्गदर्शिका / how-to centre | Public | Instructions/references |
| `niyamawali.html` | Rules/regulations repository | Public | Official rules/documents |
| `drive-structure.html` | Google Drive file-server architecture | Public documentation | Drive structure |

---

## 5. Page Details

### `index.html` — Main School Website

**Purpose:** central public home page.

Contains school identity, verified information, academic overview, notices entry point, BSEB entry point, portals, Smart Class, IT Services, documents, services, guides and contact navigation.

**Staging URL:** `https://zzpsah.github.io/umv-tetahali-staging/`

---

### `it-services.html` — IT Services

**Purpose:** central directory for school-specific digital tools and future automation.

Current/defined services:

1. **Photo & Signature Studio**
   - Process student photo/signature
   - Crop/clean/prepare portal-ready assets
   - Produce downloadable output

2. **Chandra OCR**
   - Extract text/data from scanned forms, PDFs and images
   - Human verification remains mandatory for important fields

3. **Gemini Document Vision**
   - AI-assisted identification of document regions such as photo/signature

4. **Student Reference Matching**
   - Compare current hardcopy/OCR data with reference records
   - Show discrepancies instead of silently overwriting current submission

5. **Google Drive Upload**
   - Intended document/file storage destination
   - Physical folder management depends on available Drive integration

6. **BSEB Registration Assistant**
   - Prepare verified registration data/assets
   - Future portal assistance/automation
   - Final review before submission

7. **Future AI / Agent Automation**
   - Controlled tools rather than unrestricted AI access
   - Authentication + authorization + audit + human approval for sensitive actions

---

### `notices.html` — Notice & Circular Centre

**Purpose:** central date-wise repository for notices, circulars, forms and विज्ञप्तियाँ.

Each record should contain:

```text
Date
Type
Title / Letter
Description
Official Document / PDF
```

Rules:
- Newest first.
- Old documents remain in archive.
- Original official PDF/image is the source of truth.
- If exact official PDF cannot be verified, leave the PDF field blank or link the authoritative official page.
- Do not invent government URLs.

BSEB, Education Department, DEO/District and School documents may all be represented here as the central notice repository. BSEB also has its own dedicated module.

---

### `official-documents.html` — Official Documents Centre

**Purpose:** the main **file catalogue**, not merely a portal list.

```text
Official Documents Centre
│
├── Bihar Education Department
│   ├── विज्ञप्तियाँ
│   ├── आदेश / पत्र
│   ├── Forms
│   └── Archive
│
├── DEO / District
│   ├── Siwan
│   ├── Darbhanga
│   ├── विज्ञप्तियाँ
│   ├── आदेश / पत्र
│   ├── Forms
│   └── Archive
│
├── BSEB
│   ├── Secondary
│   ├── Intermediate
│   ├── Forms & विज्ञप्तियाँ
│   └── Year-wise Archive
│
└── School
    ├── School Notices
    ├── Office Orders
    ├── Forms
    └── Archive
```

Document metadata standard:

```text
Date + Type + Title + Description + Official Document/PDF
```

Use descriptive titles such as `BSEB Secondary Registration Document`, not generic names such as only `BSEB`.

---

### `bseb.html` — BSEB Centre

**Purpose:** dedicated BSEB module.

BSEB remains separate from the Bihar Education Department section.

Contains:
- Secondary
- Intermediate
- Forms & विज्ञप्तियाँ
- Year-wise archive

Portal links and official documents remain separate concepts.

---

### `secondary.html` — BSEB Secondary

**Purpose:** Secondary Classes 9–10 BSEB portal/module.

Current destinations:

- Registration 2027–28: `https://reg28.biharboardonline.org/`
- Registration 2026–27 / BSEB official home: `https://www.biharboardonline.org/home`
- Examination 2026–27: `https://exam.biharboardonline.org/home`
- Forms & विज्ञप्तियाँ: document repository

---

### `intermediate.html` — BSEB Intermediate

**Purpose:** Intermediate Classes 11–12 BSEB portal/module.

Current destinations:

- Examination 2027: `https://intermediate.biharboardonline.com/`
- Registration Card: `https://intermediate.biharboardonline.com/Reg/DownloadRegCard.aspx`
- Forms & विज्ञप्तियाँ: document repository

---

### `portals.html` — Important Portals

**Purpose:** live external government/education services.

```text
Important Portals
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
├── ICT / Smart Class
│   └── BEPC School Tracker
│
└── Other verified government/education portals
```

A portal is a live service. It is not itself an official document record.

---

### `smart-class.html` — Smart Class Dashboard

**Purpose:** display authenticated BEPC Smart Class/ICT tracker information inside the school dashboard without requiring normal users to be redirected to the BEPC login page.

Backend function:

`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/bepc-smart-tracker`

Official BEPC source page:

`https://tracker.bepcssa.in/ICT_Smart_Class/SmartClass_Daily_Attendance.aspx`

#### BEPC authentication flow

```text
User opens Smart Class
          │
          ▼
School frontend
          │
          ▼
Supabase Edge Function: bepc-smart-tracker
          │
          ├── Server-side BEPC credentials
          ├── GET LoginPage.aspx
          ├── Read ASP.NET hidden fields
          ├── Read __VIEWSTATE / __EVENTVALIDATION
          ├── Read required dynamic token
          ├── POST login form
          ├── Preserve session cookies
          ├── Request SmartClass_Daily_Attendance.aspx
          └── Extract tables / records / media links
          │
          ▼
Structured JSON
          │
          ▼
Smart Class dashboard
```

**Credential rule:** BEPC username/password must never be placed in frontend JavaScript or GitHub. They belong in server-side secrets.

During staging troubleshooting, Edge Function JWT verification was disabled to test the backend call. **Before production, authentication/JWT/role authorization must be enforced again.**

---

### `login.html` — Role Selection

**Purpose:** future common login entry point.

Roles planned:
- Student
- Teacher
- Admin

Admin is the currently defined restricted route. Student/Teacher role workflows remain future work unless separately implemented.

---

### `admin-login.html` — Admin Login

**Purpose:** Supabase Auth login for restricted administration.

Unauthenticated users should not reach restricted administrative content.

---

### `admin-dashboard.html` — Admin Dashboard

**Purpose:** restricted school administration workspace.

Defined areas include:
- Private & Confidential
- Restricted Documents
- Notice Management
- Automation

Authentication is checked before access.

---

### `private-documents.html` — Private & Confidential

**Purpose:** admin-only workspace for restricted records.

```text
Private & Confidential
├── Administration
├── Teachers
├── Students
└── Confidential
```

A frontend login gate alone is not sufficient to secure a Drive file. Real Drive permissions and authenticated server-side access are required.

**Never put private/confidential records in the public GitHub repository.**

---

### `prapatra.html` — Forms / प्रपत्र

**Purpose:** forms catalogue and editable HTML form area.

Current example:
- **वेतन विपत्र / Vetan Vipatra**

Each form may provide:
- Editable HTML
- PDF/Print output
- Official Document/PDF link if a verified official source exists

If an official document cannot be verified, leave the official-document field blank rather than adding an unofficial URL.

---

### `guide.html` — Digital Office Guide

**Purpose:** simple PDF-first office workflow guide.

```text
Official PDF received
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

**Purpose:** detailed how-to/instruction centre.

Sections include:
- How-to instructions
- Instructional material
- Portal guidance
- Downloads and references

---

### `niyamawali.html` — नियमावली

**Purpose:** rules, regulations, office instructions and applicable guidelines.

Official source documents should be added when verified.

---

### `drive-structure.html` — Google Drive File Server

**Purpose:** documentation of the agreed Drive storage architecture.

Root folder supplied for the school:

`https://drive.google.com/drive/folders/1NfTXy76MbZwCII4E1_A90gpw6qntDal?usp=sharing`

The repository documents the structure; it must not claim that physical Drive folders were created unless Drive access actually confirms that.

---

## 6. Google Drive File Server Structure

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

### Public/private separation

```text
PUBLIC
├── Official documents
├── Notices/circulars
├── Public forms
├── Smart Class public dashboard data
└── Approved school information

PRIVATE
├── Administration
├── Teacher records
├── Student records
└── Confidential documents
```

Private material must never become public simply because a GitHub page exists.

---

## 7. PDF-First Document Philosophy

The website is primarily a **reference and workflow interface**. The actual administrative system is document/PDF driven.

```text
Original PDF / Image
        │
        ▼
Data Extraction
        │
        ▼
Verification
        │
        ▼
Structured Data / Workflow
        │
        ▼
Automation
        │
        ▼
Generated PDF / Output
        │
        ▼
Google Drive
        │
        ▼
Hyperlink / Website Catalogue
```

### Source hierarchy

1. Original official PDF/image
2. Official government/department portal
3. Verified structured data
4. AI/OCR extracted information
5. Human-approved working data

AI/OCR assists extraction. It does not replace the original source document.

---

## 8. Student Registration / OCR Workflow

The intended workflow uses the student's current hardcopy as the primary source.

```text
Student Hardcopy / Scan
          │
          ▼
OCR / AI Extraction
          │
          ▼
Current Form Data
          │
          ├───────────────┐
          │               │
          ▼               ▼
Reference Student     Photo/Signature
Data                  Processing
          │               │
          ▼               ▼
Field-by-field        Portal-ready
Matching              Assets
          │               │
          └───────┬───────┘
                  ▼
          Discrepancy Review
                  │
                  ▼
          Verified Record
                  │
                  ▼
       BSEB Registration Assistance
                  │
                  ▼
          Human Final Review
                  │
                  ▼
       Final Submission / Record
```

**Important:** reference data must not silently overwrite current submitted information. Differences should be shown to the operator.

---

## 9. Photo & Signature Processing

```text
Student Form / Image / PDF
          │
          ▼
Locate photo + signature
          │
      ┌───┴────┐
      ▼        ▼
   Photo    Signature
      │        │
      ▼        ▼
 Crop/Clean Crop/Clean
      │        │
      ▼        ▼
 Background / formatting
      │        │
      ▼        ▼
 Portal-ready output
      └────┬───┘
           ▼
 Download / Store
           ▼
 BSEB / other portal use
```

---

## 10. Authentication & Authorization Architecture

Future automation must be **authentication-based and authorization-based**.

```text
User
 │
 ▼
GitHub Pages Web App
 │
 ▼
Supabase Auth
 │
 ▼
Role + Permission Check
 │
 ├── Public → public content only
 │
 ├── Student → student-authorized services
 │
 ├── Teacher → teacher-authorized services
 │
 └── Admin → administration/private/automation
 │
 ▼
Authorized Edge Function / Tool
 │
 ▼
External Portal / Drive / Automation
 │
 ▼
Audit / Result / Approval
```

AI agents should receive **controlled tools**, not unrestricted credentials or database access.

Sensitive actions should support a human approval step where appropriate.

---

## 11. IT Services / Automation Architecture

```text
                    IT SERVICES
                         │
      ┌──────────────────┼──────────────────┐
      │                  │                  │
      ▼                  ▼                  ▼
Photo/Signature      OCR / AI         Portal Assistance
      │                  │                  │
      └──────────┬───────┴──────────┬───────┘
                 ▼                  ▼
          Student Data         Portal Assets
                 │                  │
                 └────────┬─────────┘
                          ▼
                   Verified Workflow
                          │
                          ▼
                 Supabase / Edge Functions
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
        Google Drive   Apps Script   External Portals
             │            │            │
             └────────────┼────────────┘
                          ▼
                    Output / PDF / Log
```

---

## 12. BEPC Smart Class Integration — Technical Summary

The BEPC tracker uses an ASP.NET-style login flow. The integration is designed to authenticate server-side and then read the authenticated Smart Class page.

Known login components include:

- `aspnetForm`
- `__VIEWSTATE`
- `__VIEWSTATEGENERATOR`
- `__EVENTVALIDATION`
- `__EVENTTARGET`
- `__EVENTARGUMENT`
- `ctl00$ContentPlaceHolder1$txtLoginName`
- `ctl00$ContentPlaceHolder1$txtPassword`
- `ctl00$ContentPlaceHolder1$chkRememberme`
- `ctl00$ContentPlaceHolder1$btnLogin`
- dynamic page token used by the login script

The Edge Function preserves session cookies, follows redirects, requests the target page, extracts HTML tables and converts them into structured records.

### Important production rule

The browser must not receive the BEPC username/password. Credentials stay in Supabase server-side secrets.

---

## 13. Repository Tree

The tree below describes the important current structure. Update it when files are added/removed.

```text
umv-tetahali-staging/
│
├── index.html
├── it-services.html
├── notices.html
├── official-documents.html
│
├── bseb.html
├── secondary.html
├── intermediate.html
│
├── portals.html
├── smart-class.html
│
├── education-department.html
├── deo-siwaan.html
├── deo-darbhanga.html
│
├── prapatra.html
├── guide.html
├── margdarshika.html
├── niyamawali.html
├── drive-structure.html
│
├── login.html
├── admin-login.html
├── admin-dashboard.html
├── private-documents.html
│
├── assets/
│   ├── .gitkeep
│   ├── umv-logo-color.jpeg
│   └── [future approved icons/images]
│
└── README.md
```

> **Assets folder:** upload approved website icons, logos and static image files inside `assets/`. Do not put passwords, private documents, database secrets or confidential student/teacher files here.

---

## 14. Staging → Live Development Workflow

```text
Requirement / Correction
          │
          ▼
Inspect current GitHub file
          │
          ▼
Plan change
          │
          ▼
Update staging repository
          │
          ├───────────────┐
          ▼               ▼
Update affected       Update README
page/code             documentation
          │               │
          └───────┬───────┘
                  ▼
          Staging GitHub Pages
                  │
                  ▼
             User Testing
                  │
          ┌───────┴───────┐
          │               │
       Correction       Approved
          │               │
          └──→ staging   ▼
                    Promote to live
                         │
                         ▼
                   Production site
```

### Repository roles

- **Staging:** `zzpsah/umv-tetahali-staging`
- **Live:** `zzpsah/umv-tetahali`

Never treat an unfinished staging change as production-ready.

---

## 15. Change Documentation Rule

Whenever we modify the project:

1. Inspect the current file first.
2. Make the change in **staging**.
3. If the change affects page purpose, navigation, URL, architecture, integration, security, repository structure, workflow or assets, update this README too.
4. Test the staging page.
5. Only after approval should the change be promoted to live.
6. Never modify the database merely because a frontend page changed.

This keeps the README useful as a project handover document for anyone with basic web/IT knowledge.

---

## 16. Security Rules

- Never commit passwords, API secrets, service-role keys or private tokens.
- BEPC credentials remain server-side.
- Private/confidential documents must not be stored in the public repository.
- Supabase authorization must be enforced for restricted operations.
- Production Smart Class access must not rely on the temporary staging JWT-disabled troubleshooting state.
- Public pages may show public metadata but must not expose private records.
- AI agents must use controlled, permissioned tools.
- Sensitive actions should be auditable and, where appropriate, require human approval.

---

## 17. Future Digital School Office Roadmap

```text
PHASE 1 — Foundation
│
├── GitHub Pages
├── Public website
├── Official documents
├── Forms / PDF workflow
├── Auth foundation
└── BEPC Smart Class backend integration

PHASE 2 — Controlled Office
│
├── Role-based access
├── Admin dashboard
├── Private Drive integration
├── Audit logs
└── Document management

PHASE 3 — Automation
│
├── OCR pipelines
├── PDF generation
├── Drive automation
├── Portal data preparation
└── Scheduled workflows

PHASE 4 — AI Agents
│
├── Document Agent
├── Student Data Agent
├── Portal Agent
├── Drive Agent
├── Notification Agent
└── Human approval workflow

PHASE 5 — Digital School Office
│
└── Authenticated end-to-end school administration platform
```

---

## 18. Design Principles

1. **Simple for the operator.**
2. **PDF-first for official documents.**
3. **Original source remains the source of truth.**
4. **Current student submission is primary for student registration workflows.**
5. **Reference data verifies; it does not silently overwrite.**
6. **Portal links and document records stay separate.**
7. **Public and private information stay physically/logically separated.**
8. **Authentication comes before restricted automation.**
9. **AI assists; humans approve important decisions.**
10. **Staging first, live after approval.**
11. **Every meaningful structural change is documented in this README.**
12. **Do not change the database without explicit approval.**

---

## 19. Quick Start for a New Contributor

Someone with basic HTML/GitHub knowledge should be able to understand the project using this sequence:

```text
1. Read README.md
       ↓
2. Open index.html
       ↓
3. Follow navigation to understand modules
       ↓
4. Read the Page Catalogue above
       ↓
5. Read IT Services + authentication sections
       ↓
6. Read Drive + PDF-first architecture
       ↓
7. Make changes only in staging
       ↓
8. Update README if the architecture/page map changes
       ↓
9. Test staging
       ↓
10. Promote only approved work to live
```

---

## 20. Current Status Summary

| Area | Status |
|---|---|
| Public school website | Active staging |
| Hindi-only main navigation | Defined |
| Bilingual dropdown items | Defined |
| Official Documents architecture | Defined |
| BSEB dedicated module | Active |
| Secondary page | Active |
| Intermediate page | Active |
| Notice/Circular centre | Active foundation |
| Education Department page | Active foundation |
| DEO Siwan page | Active foundation |
| DEO Darbhanga page | Active foundation |
| Forms / प्रपत्र | Active foundation |
| Vetan Vipatra | Listed |
| Google Drive file-server architecture | Defined |
| Private/Confidential workspace | Defined/restricted foundation |
| Smart Class BEPC integration | Backend extraction foundation active |
| Production BEPC authorization | **Must be re-enabled/enforced before production** |
| AI/Agent automation | Roadmap / controlled architecture |
| Database changes | **Not authorized by default** |
| Assets folder | Available for approved icons/images |

---

## 21. Useful Project Links

- **Staging website:** `https://zzpsah.github.io/umv-tetahali-staging/`
- **Staging repository:** `https://github.com/zzpsah/umv-tetahali-staging`
- **Live repository:** `https://github.com/zzpsah/umv-tetahali`
- **Google Drive root:** `https://drive.google.com/drive/folders/1NfTXy76MbZwCII4E1_A90gpw6qntDal?usp=sharing`

---

## Final Principle

> **The website is the interface. Documents are the source. Authentication controls access. Automation reduces repetitive work. AI assists controlled workflows. Humans remain responsible for important verification and approval.**
