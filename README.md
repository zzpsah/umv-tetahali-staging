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
  ├── Current Official Updates
  ├── BSEB Centre / Fees
  ├── Notices & Circulars
  ├── Important Portals
  ├── Portal Guidance
  ├── Official Documents
  ├── Smart Class
  ├── IT Services
  └── Margdarshika / Rules

Admin Login
  ↓
Admin Dashboard
  ↓
Admin Control Centre
  ↓
Manage → Change Map → Review Queue → Final Permission
```

## 2. Current official-source update system

Added on **08 September 2026**:

- `official-updates.html` — public current-information centre.
- `CURRENT-OFFICIAL-UPDATES.md` — detailed dated research register.
- `SOURCES-2026-09-08.md` — source snapshot.
- `README-OFFICIAL-SOURCES.md` — source-maintenance rules.
- `CHANGELOG.md` — repository change history.

Every current-information item should record, where applicable:

- authority/source;
- official URL/PDF;
- notice/issue date;
- session/exam year;
- last verification date;
- status: `Verified`, `Current portal`, `Re-verify before action`, `Expired/Archived`, or `Review Required`.

## 3. Verified/current highlights — 08 Sep 2026

### BSEB Secondary

Official page: `https://www.biharboardonline.org/`

Current page identifies **Secondary Registration 2026 for Annual Exam 2027** and lists forms/payment/student-entry/declaration/dummy-registration-card workflows. The publicly listed final extension for registration-form submission and registration-fee payment was through **22 Aug 2026**; this is now an archived deadline, not an open one.

### OFSS Intermediate Admission — 2026–28

Official portal: `https://ofssbihar.net/`

Official Common Prospectus records:

- initial CAF window: **08–18 Apr 2026**;
- institution choices: **minimum 10, maximum 20**;
- total CAF payment: **₹350** = ₹150 application + ₹200 institution fee.

The current portal also exposes Spot Admission CAF, selection cut-offs, vacant seats and 2026 spot-admission extension notices. Always use the live OFSS page for the current spot-admission deadline.

### UDISE+

Official portal: `https://udiseplus.gov.in/`

Current notice list includes **03 Aug 2026 — UDISE+ Data Completion for AY 2026–27 and a Separate Vertical for AWES School Reporting**.

### SHVR

Official resources: `https://shvr.education.gov.in/resources`

Current official resource centre provides Hindi/English guidelines, brochures, bookmarks, web/mobile school user manuals and videos.

### Bihar e-Kalyan / MVPY

Official portal: `https://ekalyan.bihar.gov.in/mvpy/`

The portal currently states that eligible candidates may apply. Eligibility and documents are scheme/category specific and must be verified per student on the official portal.

### Siwan District

Official district portal: `https://siwan.nic.in/`

Recent education-related district notices reviewed include KGBV employment and Model School teacher-selection notices. Both reviewed notices are expired/archived and are not assumed applicable to UMV Tetahali unless scope confirms it.

## 4. BSEB fee reference

Detailed file: `BSEB-FEE-REFERENCE.md`

Public pages:

- `bseb.html`
- `secondary.html`
- `intermediate.html`

Key verified/reference values:

- OFSS 2026–28 CAF: **₹350** — verified official source.
- Matric Annual Exam 2026: **₹1,010 General / ₹895 SC-ST-EBC(BC-I)** — verified from official BSEB advertisement.
- Secondary Registration 2027 current-cycle breakup: retained as **re-verify before payment** where the live public portal does not expose the complete component table.
- Intermediate registration/examination fee values are not to be hard-coded as current without the applicable official notice.

## 5. Public page ownership

| Page | Responsibility |
|---|---|
| `index.html` | school identity + current high-value links |
| `official-updates.html` | current source-checked intelligence |
| `notices.html` | dated notices and archived deadlines |
| `bseb.html` | BSEB central fee/service summary |
| `secondary.html` | Matric/Secondary registration + exam |
| `intermediate.html` | OFSS admission + Intermediate BSEB |
| `portals.html` | official home pages |
| `portal-guides.html` | task guidance and current context |
| `deo-siwaan.html` | Siwan district education notice archive |
| `smart-class.html` | BEPC Smart Class integration |
| `admin-content.html` | canonical Admin Control Centre |

## 6. Admin Control Centre

Canonical page: `admin-content.html`

Only three main views:

```text
Manage
Review Queue
AI Monitor
```

Manage shows a permanent **Change Map** explaining where a proposed change will appear. Review Queue records before/after/source/affected outputs. Approval never means automatic publication; final permission is still required.

AI Monitor is a Phase-1 control UI only. Live crawling/change detection remains planned.

## 7. Data ownership

```text
GitHub
  → HTML/CSS/JS/templates/integration code

Supabase (future, after explicit approval)
  → structured portals/notices/guides/document metadata/audit

Google Drive
  → original PDFs, official documents, forms, restricted/private files
```

## 8. Security / governance

- No passwords, OTPs, service-role keys or private tokens in GitHub.
- No confidential student/staff documents in public Pages.
- No OTP/CAPTCHA bypass or unauthorized scraping.
- AI/OCR must not silently overwrite verified data.
- Government information requires official-source verification.
- Final government portal submit/payment actions remain human-controlled.
- Historical information is archived, not silently deleted.

## 9. Documentation

- `README.md` — current concise project map.
- `PROJECT-STATUS.md` — implementation/readiness status.
- `CURRENT-OFFICIAL-UPDATES.md` — current official-source research register.
- `BSEB-FEE-REFERENCE.md` — fee source/verification reference.
- `README-OFFICIAL-SOURCES.md` — source maintenance rules.
- `CHANGELOG.md` — modification history.
- `knowledge-base.md` — long-form operational knowledge.

## Final principle

> The website is the interface. Official documents/pages are the evidence. AI helps collect, compare and draft. Humans verify and approve important government information and irreversible actions.
