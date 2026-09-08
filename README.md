# UCHCH MADHYAMIK VIDYALAY, TETAHALI

## Digital School Website + IT Services + Automation

Staging/development repository for **UCHCH MADHYAMIK VIDYALAY, TETAHALI**, Barharia, Siwan, Bihar.

- UDISE: `10160203806`
- Classes: 9–12
- Management: Department of Education
- Staging repo: `zzpsah/umv-tetahali-staging`
- Production repo: `zzpsah/umv-tetahali`

> **Staging first.** Do not promote changes to production until staging has been reviewed and approved.
>
> **Database safety.** Do not change Supabase schema/data unless explicitly authorized.
>
> **Source rule.** Original official PDFs/documents and authoritative government sources remain the source of truth. AI/OCR output is a proposal until verified.

---

## 1. Platform Architecture

```text
Public Website / GitHub Pages
        │
        ├── School pages
        ├── Important Portals
        ├── Portal Guidance
        ├── Documents / Notices
        ├── IT Services / AI Workbench
        └── Smart Class

Admin Login
    ↓
Admin Dashboard
    ↓
Admin Control Centre
    ↓
Manage → Review Queue → Final Permission
    ↓
Future approved integrations
    ├── Supabase structured CMS data
    ├── Google Drive original files/PDFs
    └── AI source monitoring / audit history
```

Public GitHub Pages must never be treated as private storage.

---

## 2. Main Website Navigation

Admin management follows the same top-level order as the public website so the administrator does not have to learn a second hierarchy.

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

Rules:

- Main navigation labels are primarily Hindi.
- Dropdown contents are Hindi + English where useful.
- BSEB remains separate from Education Department.
- Portal links and official documents are different records.
- `portals.html` normally uses official Home Pages; task-specific links belong in Portal Guidance.

---

## 3. Current Page Map

| Page | Purpose |
|---|---|
| `index.html` | Main public website |
| `it-services.html` | IT tools and automation directory |
| `ai-workbench.html` | AI-assisted controlled workspace |
| `notices.html` | Notices/circulars |
| `official-documents.html` | Official document catalogue |
| `education-department.html` | Education Department documents |
| `deo-siwaan.html` | DEO Siwan documents |
| `deo-darbhanga.html` | DEO Darbhanga documents |
| `bseb.html` | BSEB central module |
| `secondary.html` | BSEB Secondary |
| `intermediate.html` | BSEB Intermediate |
| `portals.html` | Important government/education portals |
| `portal-guides.html` | Step-by-step Portal Guidance Centre |
| `portal-verify.html` | Human portal verification dashboard |
| `smart-class.html` | Smart Class / BEPC integration |
| `margdarshika.html` | Guidance hub |
| `niyamawali.html` | Rules & Regulations |
| `prapatra.html` | Forms / प्रपत्र |
| `drive-structure.html` | Google Drive architecture |
| `admin-login.html` | Admin authentication |
| `admin-dashboard.html` | Restricted admin entry |
| `admin-content.html` | **Canonical Admin Control Centre** |
| `private-documents.html` | Restricted/private workspace foundation |

Older/parallel Admin CMS prototype files may remain temporarily for reference. Do not use them as the canonical workflow. Their removal/archive requires a separate cleanup decision.

---

## 4. Admin Control Centre — Simplified Phase 1

**Canonical page:** `admin-content.html`

The Admin Control Centre was simplified on **08 September 2026** because the previous version exposed too many modules at once.

The canonical UI now has only three workflow views:

```text
1. Manage
2. Review Queue
3. AI Monitor
```

### Manage

The administrator selects one website area using the same hierarchy as the public navigation, then enters one proposed change.

```text
Select website area
      ↓
Enter change title
      ↓
Official source URL
      ↓
Current value
      ↓
Proposed value
      ↓
Notes / evidence
      ↓
Send to Review Queue
```

A permanent **Change Map** shows before saving:

- selected website area;
- logical record type;
- exact public pages/outputs likely to be affected;
- intended storage/apply layer;
- whether the change belongs to future Supabase content, Google Drive files, or GitHub code/templates.

The goal is that the administrator thinks **“I need to update BSEB information”**, not **“Which HTML files do I need to edit?”**

### Review Queue

Every proposal shows:

- origin (manual or AI-monitor task);
- official source;
- current value;
- proposed value;
- affected outputs;
- apply/storage plan;
- approval state.

Current local statuses include:

```text
Review Required
Rejected
Approved — Final Permission Required
```

**Approval is not publication.** An approved draft still requires final permission before any staging commit, public publish, Supabase write, or Drive-backed publish.

### AI Monitor

The current AI Monitor is a **Phase-1 control UI**, not a live crawler.

It contains the official-source inventory and can create controlled review tasks. Future backend work may add:

```text
Official source
    ↓
Reachability / domain / title check
    ↓
New PDF / date / session detection
    ↓
Content fingerprint comparison
    ↓
AI change proposal
    ↓
Review Queue
    ↓
Human approval
```

No OTP bypass, CAPTCHA bypass, credential bypass, or unauthorized authenticated scraping is allowed.

---

## 5. Content Routing Principle

The future system should separate code, structured content, and original files:

```text
GitHub
  └── HTML/CSS/JS/templates/integration code

Supabase (after explicit approval)
  └── Portals, notices, guides, document metadata, verification, audit records

Google Drive
  └── Original PDFs, official documents, forms, private/restricted files
```

A normal content change should not require editing multiple HTML pages once the data-backed CMS is implemented.

---

## 6. Portal Guidance and Official Sources

Current portal-guide inventory includes:

- OFSS Bihar
- e-Shikshakosh Bihar
- UDISE+
- SHVR
- BSEB Secondary
- BSEB Intermediate
- BEPC School Tracker
- National Scholarship Portal
- Bihar e-Kalyan
- Bihar PMS Institute
- SATHEE
- Bihar VidyaSathi
- विद्यार्थी सहयोग

For every government-related update:

```text
Official source
   ↓
Record source/date/session
   ↓
Compare with current school content
   ↓
Draft change
   ↓
Review
   ↓
Human approval
   ↓
Apply to staging / approved backend
```

Preserve historical notices/PDFs as archive references instead of silently deleting them.

---

## 7. PDF-First Document Rule

```text
Original official PDF/image
        ↓
Extract / OCR / AI
        ↓
Human verification
        ↓
Metadata
        ↓
Google Drive
        ↓
Website catalogue / related guide / notice
```

Original files remain authoritative. Private student/staff/admin files must not be committed to public GitHub.

---

## 8. Smart Class and AI Workbench

### AI Workbench

Public name: **AI Workbench**.

Target workflow:

`Read → Extract → Diagnose → Suggest → Draft → Human Review`

Never expose API keys in frontend code, GitHub, or public documentation.

### Smart Class

Official BEPC tracker: `https://tracker.bepcssa.in/`

The existing integration foundation uses a server-side Supabase Edge Function. Credentials must remain server-side. Production authentication/authorization must be enforced before production use is claimed.

---

## 9. Google Drive

Google Drive is the preferred file repository for school documents.

Canonical project-reference area currently in use:

```text
UMV Tetahali/
└── 00_Project_Memory_and_Reference/
    ├── 01_Master_Project_Overview_2026-09-08.md
    ├── 02_Consolidated_Project_README_2026-09-08.md
    └── Archive_Old_Versions/
```

Operational document structure remains organized under numbered folders such as `01_Official_Documents`, `02_Forms`, `03_Notices_Circulars`, `05_Private_Documents`, `07_AI_Automation`, and `99_Archive`.

---

## 10. Security and Approval Rules

- Never commit passwords, OTPs, API secrets, service-role keys, or private tokens.
- Never place confidential student/staff/admin files in public GitHub.
- BEPC credentials remain server-side.
- AI/OCR output is never silently authoritative.
- Government information requires source verification.
- Important changes require human approval.
- Production promotion is separate from staging implementation.
- Supabase schema/data changes require explicit authorization.
- Final government-portal submit buttons must remain human-controlled.

---

## 11. Current Status — 08 September 2026

| Area | Status |
|---|---|
| Public school website | Active staging |
| Portal Guidance Centre | Implemented |
| Portal Verify dashboard | Implemented human/local foundation |
| Admin Login | Implemented foundation |
| Admin Dashboard | Implemented |
| Admin Control Centre | **Implemented simplified Phase-1 UI** |
| Change Map / affected-output preview | **Implemented in Admin Control Centre** |
| Local Review Queue | **Implemented Phase 1** |
| AI Monitor source inventory | **Implemented Phase-1 UI; no live crawler** |
| Supabase CMS tables | Planned; explicit approval required |
| Google Drive CMS upload/publish | Planned |
| Automatic official-source change detection | Planned |
| Audit history | Planned |
| Production promotion | Requires staging test + approval |

---

## 12. Documentation

- `README.md` — short living project map.
- `knowledge-base.md` — detailed operational knowledge and portal guidance reference.
- `PROJECT-STATUS.md` — implementation/readiness status.
- `admin-cms-design.md` — design reference/history.

Update documentation whenever architecture, workflow, security, page ownership, or readiness changes materially.

---

## Final Principle

> **The website is the interface. Original documents are the evidence. Structured data should have one source of truth. AI prepares and detects; humans verify and approve. The Admin Control Centre should tell the administrator where a change will appear instead of requiring manual HTML knowledge.**
