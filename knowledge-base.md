# UMV Tetahali — Knowledge Base

**Project:** UCHCH MADHYAMIK VIDYALAY, TETAHALI  
**Hindi:** उच्च माध्यमिक विद्यालय, तेतहली  
**UDISE:** `10160203806`  
**Repository:** `zzpsah/umv-tetahali-staging`  
**Environment:** Staging / development

## 1. Purpose

This knowledge base is the operational memory of the digital school platform. It records verified school facts, page/module roles, portal links, portal-guide standards, official-document/PDF references, workflows, security rules, and decisions that should survive future development sessions.

**Source priority:** original official PDF/document → official government/department portal → verified structured data → AI/OCR extraction → human-approved working data.

Never invent a government URL, school fact, official letter number, notification date, or PDF.

---

## 2. Verified School Identity

- School: **UCHCH MADHYAMIK VIDYALAY, TETAHALI**
- Hindi: **उच्च माध्यमिक विद्यालय, तेतहली**
- UDISE: **10160203806**
- Category: **10 - Secondary with Higher Secondary**
- Type: **3 - Co-Educational**
- Classes: **9–12**
- Management: **Department of Education**
- District: **Siwan**
- Block: **Barharia**
- Cluster: **U.M.S. BARHARIA.**
- Latitude: `26.326081`
- Longitude: `84.470910`
- Secondary medium: Hindi_English; Hindi_English_Urdu
- Higher Secondary medium: Hindi_English; Urdu_English; Hindi_English_Urdu

Do not invent principal, phone, email, facilities, opening hours, or other unverified school details.

---

## 3. Portal Guidance Centre

**Page:** `portal-guides.html`  
**Purpose:** step-by-step help for important government and educational portals.

Standard for every portal guide:

1. Portal name and purpose
2. Who should use it
3. Official Home Page
4. Registration / Login procedure
5. Step-by-step task procedure
6. Services/modules available
7. Required information/documents
8. Common mistakes and precautions
9. Official letter / notification / order / guideline
10. Original official PDF links when available
11. Current-session dates or workflow changes
12. Last verification/update date
13. Related pages/tools in the school website

Standard relationship:

`Important Portal → Portal Guide → Official Instructions → Related Letter/PDF → Step-by-step → Official Portal`

### Important design rule

`portals.html` should normally link to the **portal Home Page**. Specific registration/login/download URLs belong in `portal-guides.html`, unless a direct service link is intentionally required.

### Update rule

Whenever a portal changes its login flow, menu, session, application dates, eligibility, form, notification, PDF, or official URL:

- verify the change from the official source;
- update the portal guide;
- update the portal card if its home URL changes;
- add the new official PDF/letter when available;
- keep important historical documents as archived references where useful;
- update this KB/README if the workflow or architecture changes materially.

---

## 4. Current Portal Guide Inventory

### 4.1 OFSS Bihar

**Purpose:** Intermediate admission / Online Facilitation System for Students.

**Official Home:** `https://ofssbihar.net/`

Guide workflow:
1. Open official home page.
2. Read current admission notice/session information.
3. Select applicable Common Application Form/admission phase.
4. Enter student/academic details from source documents.
5. Select institutions/streams/subjects as applicable.
6. Verify fee/payment and application status.
7. Preserve submitted application/receipt and follow selection/admission notices.

Official PDF currently linked in guide: **Common Prospectus 2026–28 PDF** from the official OFSS domain.

**Precaution:** verify name, DOB, roll details, mobile/email and choices against original records before submission.

---

### 4.2 e-Shikshakosh Bihar

**Purpose:** Bihar Education Department school/teacher/education-service workflows.

**Official Home:** `https://eshikshakosh.bihar.gov.in/`

Guide workflow:
1. Open official home.
2. Select applicable user type/module.
3. Login with authorized credentials and captcha.
4. Open the relevant profile, school, teacher-service or assigned module.
5. Compare records with source documents.
6. Save/submit only after verification.
7. Use official password-recovery process when required.

**Security:** credentials/OTP/password never belong in the public website or KB.

Official PDF/manual: add when a verified current official document is available.

---

### 4.3 UDISE+

**Purpose:** national school education data and reporting platform.

**Official Home:** `https://udiseplus.gov.in/`

Guide workflow:
1. Open applicable UDISE+ module.
2. Login using the authorized school/official role.
3. Open current academic-year school/data modules.
4. Enter/update data from source records.
5. Resolve validation errors.
6. Complete certification/submission workflow.
7. Preserve acknowledgement/status.

**Precaution:** never estimate UDISE code, enrolment, teacher or infrastructure data.

Official PDF currently linked: **UDISE+ 2024–25 Key Results PDF** from the official UDISE+ dashboard domain.

---

### 4.4 SHVR — Swachh Evam Harit Vidyalaya Rating

**Purpose:** Clean and Green School Rating / school self-assessment.

**Official Home:** `https://shvr.education.gov.in/`

Guide workflow:
1. Open SHVR.
2. Login/sign up using the applicable school account.
3. Complete/update school profile.
4. Complete self-assessment indicators for cleanliness, hygiene, water, waste management and green practices as applicable.
5. Verify evidence/details.
6. Submit assessment.
7. Monitor rating/progress.

**Official resources:** `https://shvr.education.gov.in/resources` contains official guidelines, brochures, bookmarks and web/mobile user manuals; use the current Hindi/English resources shown there.

---

### 4.5 BSEB Secondary

**Purpose:** Matric/Secondary registration and examination workflows.

Official destinations:
- BSEB Home: `https://www.biharboardonline.org/`
- Secondary Exam: `https://exam.biharboardonline.org/`
- Secondary Registration 2027–28: `https://reg28.biharboardonline.org/`

Guide workflow:
1. Open current BSEB/Secondary portal.
2. Read current session notification.
3. Login using authorized school credentials.
4. Open applicable registration/examination module.
5. Match every student field with the current source form/record.
6. Upload required declaration/documents.
7. Verify fee/payment/status.
8. Submit and preserve final receipt/records.

Official PDF currently linked: **Examination Advertisement PDF** at the official `examapi.biharboardonline.org` domain.

**Important:** Registration 2026–27 and Registration 2027–28 are different sessions/workflows. Never assume an old session notice applies to the current session.

---

### 4.6 BSEB Intermediate

**Purpose:** Intermediate registration, examination, declaration and related workflows.

**Official Home:** `https://intermediate.biharboardonline.com/`

Guide workflow:
1. Open current Intermediate portal.
2. Read current session notification.
3. Login with authorized school/college credentials.
4. Open registration/exam module.
5. Enter or verify student registration details.
6. Complete payment/status steps.
7. Upload declaration where required.
8. View final registration details and preserve/download records.

Official PDFs currently referenced:
- `https://intermediate.biharboardonline.com/assets/Notifications/CommercePrivate.pdf`
- `https://intermediate.biharboardonline.com/assets/Notifications/Declaration%20Not%20Uploaded%20college%20List._3.pdf`

Specific registration-card URL should be treated as a task-specific link, not the portal's Home Page.

---

### 4.7 BEPC School Tracker / Smart Class

**Purpose:** ICT Lab and Smart Classroom monitoring/reporting.

**Official Home:** `https://tracker.bepcssa.in/`

Known target source page: `https://tracker.bepcssa.in/ICT_Smart_Class/SmartClass_Daily_Attendance.aspx`

School architecture:

`Smart Class page → Supabase Edge Function → authenticated BEPC session → target page → extraction → structured JSON → dashboard`

Known backend function:
`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/bepc-smart-tracker`

Known authentication mechanics:
- ASP.NET Web Forms
- hidden state fields such as `__VIEWSTATE` and `__EVENTVALIDATION`
- dynamic login token
- session cookies
- server-side login
- authenticated target-page request
- HTML/table extraction

**Critical security rule:** BEPC username/password remain server-side secrets. Never put them in frontend JavaScript, README, KB or GitHub.

Before production, staging troubleshooting changes such as disabled JWT verification must be reversed and proper authentication/authorization must be enforced.

---

### 4.8 National Scholarship Portal (NSP)

**Purpose:** central scholarship platform for applicable central/state schemes.

**Official Home:** `https://nsp.gov.in/`

Guide workflow:
1. Read current scheme notice.
2. Complete OTR where required.
3. Complete required eKYC/mobile steps.
4. Select eligible scholarship scheme.
5. Fill application and upload documents.
6. Preview and final-submit.
7. Preserve reference/application details.
8. Track institute/state/nodal verification.

**Precaution:** OTR should not require payment; never share OTP/password.

---

### 4.9 Bihar e-Kalyan

**Purpose:** Bihar government welfare/scholarship services.

**Official Home:** `https://ekalyan.bihar.gov.in/`

Guide workflow:
1. Open current scheme/application page.
2. Check eligibility and application window.
3. Register/login if required.
4. Enter personal, academic, category and bank details from source records.
5. Upload required documents.
6. Preview, submit and preserve status/reference.

**Precaution:** verify bank account and IFSC; eligibility/dates are session-specific.

---

### 4.10 Bihar Post-Matric Scholarship — Institute

**Purpose:** institution registration and student verification workflow.

**Official Home:** `https://instpmsonline.bihar.gov.in/`

Guide workflow:
1. Check current institute list/registration notice.
2. Prepare DISE/AISHE/PR Code and approved institution documents.
3. Register according to the current window.
4. Receive/use authorized login details.
5. Update institute details.
6. Verify student applications according to current instructions.

Official institute guidelines page currently referenced in guide:
`https://instpmsonline.bihar.gov.in/pmsinst/pms/pms_online/Institute_Terms.aspx`

---

### 4.11 SATHEE

**Purpose:** free student learning, lectures, tests, doubt support and exam preparation.

**Official Home:** `https://sathee.iitk.ac.in/`

Guide workflow:
1. Select class/exam/subject.
2. Use lectures, tests, PYQ and doubt resources.
3. Use available language options.
4. Track progress and practice regularly.

Official PDF currently referenced: SATHEE School Booklet PDF from the official SATHEE domain.

---

### 4.12 Bihar VidyaSathi

**Purpose:** discovery/information portal for Bihar education, scholarships, schemes and student services.

**Home:** `https://www.biharvidyasathi.com/`

Guide workflow:
1. Open the relevant education/scholarship/scheme category.
2. Read the information.
3. For actual application/payment/credentials, verify and proceed on the relevant official government portal.
4. Prefer original government notification/PDF as final authority.

**Important:** information-discovery content must not be treated as a substitute for the concerned government's official application portal.

---

### 4.13 विद्यार्थी सहयोग कार्यक्रम / Student Grievance Redressal

**Purpose:** Bihar Government student grievance/request/suggestion service for institute/hostel-related issues.

**Official Home:** `https://vidyarthisahyog.bihar.gov.in/`

Known pages:
- Login/information: `https://vidyarthisahyog.bihar.gov.in/LoginAdm.aspx`
- Student registration/service: `https://vidyarthisahyog.bihar.gov.in/Student_Reg_1.aspx`

Guide workflow:
1. Open official home.
2. Choose student registration/grievance option.
3. Enter required student/mobile/institute details accurately.
4. Describe the grievance/request clearly and factually.
5. Add supporting information where applicable.
6. Review and submit.
7. Preserve reference/registration number.
8. Track status online.
9. Use official helpline **1100** when required; portal information states service hours of **8:00 AM–8:00 PM on working days**.

**Precaution:** never enter passwords, OTPs or unnecessary confidential information into a grievance description.

Official Bihar Government/CM Secretariat announcements about launch/camps should be linked when needed; do not substitute third-party summaries for the official notice.

---

## 5. Important Portals Page

**Page:** `portals.html`

Current categories:
- School Administration
  - OFSS Bihar
  - e-Shikshakosh Bihar
  - UDISE+
  - SHVR
- BSEB
  - Secondary Exam
  - Intermediate Registration/Exam
  - Secondary Registration 2027–28
  - BSEB Official Home
- ICT / Lab / Smart Class
  - BEPC School Tracker
- Scholarship
  - NSP
  - Bihar e-Kalyan
  - Bihar PMS Institute
- Students & Parents
  - SATHEE
  - OFSS Bihar
  - Bihar VidyaSathi
  - विद्यार्थी सहयोग शिविर

**Design rule:** Important Links are navigation to live services. Their guide contains task-specific pages and official PDFs.

---

## 6. मार्गदर्शिका Page

**Page:** `margdarshika.html`

Current role:
- How-to instructions
- Instructional material
- **पोर्टल मार्गदर्शन** link to `portal-guides.html`
- **नियम एवं विनियम** link to `niyamawali.html`
- Downloads/reference area

---

## 7. BSEB Document Knowledge

Verified official destinations used by the project include:

- Secondary registration: `https://reg28.biharboardonline.org/`
- Secondary official home: `https://www.biharboardonline.org/home`
- Secondary exam: `https://exam.biharboardonline.org/home`
- Intermediate home: `https://intermediate.biharboardonline.com/`
- Intermediate registration card: `https://intermediate.biharboardonline.com/Reg/DownloadRegCard.aspx`
- Intermediate student registration card service: `https://intermediate.biharboardonline.com/StudentRegCardDownload.aspx`
- Commerce Private PDF: `https://intermediate.biharboardonline.com/assets/Notifications/CommercePrivate.pdf`
- Declaration not uploaded list: `https://intermediate.biharboardonline.com/assets/Notifications/Declaration%20Not%20Uploaded%20college%20List._3.pdf`
- Exam advertisement: `https://examapi.biharboardonline.org/files/others/exam-advertisement.pdf`
- Matric exam AC notification: `https://examapi.biharboardonline.org/files/others/matric-exam-ac-notification.pdf`
- Compartment application form: `https://examapi.biharboardonline.org/files/others/compart-application-form.pdf`

Only use a direct URL when it has been verified. If a document moves, update the guide rather than keeping a broken guessed URL.

---

## 8. IT Services Knowledge

Current service cards include:

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

Public branding for the AI workspace is **AI Workbench**, not “Gemini AI Workbench”. Backend technology names may remain in technical documentation where necessary.

### Smart Autofill

Browser extension is Manifest V3 and scans real webpage fields using labels/placeholders/ARIA/nearby text. It supports common text controls, textarea, select, radio and checkbox; skips hidden/disabled/readOnly/password/file/submit fields; dispatches input/change; highlights filled fields; and can rescan multi-step forms.

The original ZIP is a separate install artifact; do not claim its binary icons/ZIP are stored in GitHub unless verified.

---

## 9. AI Workbench

**Public name:** AI Workbench  
**Page:** `ai-workbench.html`

Features:
- Ask AI
- Webpage Review
- File/PDF analysis
- Image generation

Workflow:
`Read → Extract → Diagnose → Suggest → Draft → Human Review`

Gateway:
`https://sxfnrwugsyfypqgfglzc.supabase.co/functions/v1/gemini-ai-gateway`

Supported backend actions were designed as:
- `ask`
- `analyze`
- `generate-readme`
- `analyze-webpage`
- `analyze-file`
- `generate-image`

API keys must never be exposed in GitHub/frontend/chat.

Known implementation caution: the file-analysis frontend contract must match the gateway contract exactly (`file_name`, `mime_type`, `file_data`, `prompt`) and image-rendering must match the gateway's returned image structure. Verify before claiming those paths are fully operational.

---

## 10. Drive Architecture

Root supplied for school Drive:
`https://drive.google.com/drive/folders/1NfTXy76MbZwCII4E1_A90gpw6qntDal?usp=sharing`

Agreed structure:

```text
UMV Tetahali/
├── 01_Official_Documents/
│   ├── Education_Department/
│   ├── DEO_Siwan/
│   ├── DEO_Darbhanga/
│   ├── School/
│   ├── BSEB/
│   │   ├── Secondary/
│   │   ├── Intermediate/
│   │   └── Archive/
│   └── Rules_Regulations/
├── 02_Forms/
│   ├── Official_Forms/
│   ├── Editable_Forms/
│   └── Generated_PDF/
├── 03_Notices_Circulars/
│   ├── Education_Department/
│   ├── DEO/
│   ├── BSEB/
│   └── School/
├── 04_School_Records/
├── 05_Private_Documents/
│   ├── Administration/
│   ├── Teachers/
│   ├── Students/
│   └── Confidential/
├── 06_Smart_Class/
├── 07_AI_Automation/
│   ├── Input/
│   ├── Processing/
│   ├── Output/
│   └── Logs/
└── 99_Archive/
```

Do not claim physical Drive folders were created unless Drive access actually confirms them.

---

## 11. PDF-First Rule

For official administrative information:

`Original PDF → Extract → Verify → Automate → Generate PDF → Drive → Website link`

The original PDF/image remains the source of truth. AI/OCR is an assistant, not the authority.

---

## 12. Student Registration Workflow

Current hardcopy is primary. Reference data is for matching/verification.

`Hardcopy/scan → OCR/AI extraction → Current Form Data → Reference Matching + Photo/Signature → Discrepancy Review → Verified Record → BSEB Registration Assistance → Human Final Review → Submission`

**Critical:** reference data must not silently overwrite current student information.

---

## 13. Security Rules

- No passwords/API keys/service-role keys in GitHub.
- BEPC credentials are server-side only.
- Private student/teacher/admin documents never go into the public repository.
- Public GitHub Pages are not a substitute for Drive ACLs/backend authorization.
- Production Smart Class authorization must be enforced.
- AI agents receive controlled tools and permissions, not unrestricted credentials.
- Sensitive actions should be auditable and may require human approval.
- Database changes are not authorized unless explicitly requested.

---

## 14. Staging / Production

- Staging: `zzpsah/umv-tetahali-staging`
- Production: `zzpsah/umv-tetahali`
- Staging URL: `https://zzpsah.github.io/umv-tetahali-staging/`

Workflow:
`Inspect current GitHub file → Edit staging → Update README/KB → Test → User approval → Promote to live`

Do not modify Supabase/database for a frontend documentation change unless explicitly requested.

---

## 15. Current Portal Guide Maintenance Checklist

For each future update:

- [ ] Open official portal
- [ ] Verify Home URL
- [ ] Verify current login/registration path
- [ ] Verify current menu/service names
- [ ] Verify current session/year
- [ ] Search official notifications/orders/guidelines
- [ ] Verify PDF URL before publishing
- [ ] Update step-by-step instructions
- [ ] Add/update last verified date
- [ ] Preserve useful historical PDF references
- [ ] Update `portal-guides.html`
- [ ] Update `portals.html` only if the Home URL/card changes
- [ ] Update README/KB for material architecture or workflow changes

---

## 16. Last Major Update

**Date:** 07 September 2026

Implemented/documented:
- Portal Guidance Centre created.
- Step-by-step guides added for the current Important Portals inventory.
- Official resource/PDF references added where verified/available.
- `margdarshika.html` connected to Portal Guidance and Rules & Regulations.
- `portals.html` standardized toward Home Page links.
- Student Grievance/विद्यार्थी सहयोग guide included.
- This Knowledge Base established as the long-term operational reference.
