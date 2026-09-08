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
        ├── BSEB / Fees
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
Manage → Change Map → Review Queue → Final Permission
    ↓
Future approved integrations
    ├── Supabase structured CMS data
    ├── Google Drive original files/PDFs
    └── AI source monitoring / audit history
```

Public GitHub Pages must never be treated as private storage.

---

## 2. Main Website Navigation

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

The homepage now also includes:

- a mobile-friendly menu;
- a **Latest Verified** strip for high-value current information;
- a lightweight **Quick Search** across core school portal destinations;
- simpler primary cards for BSEB, Notices, Portals and IT Services.

Rules:

- BSEB remains separate from Education Department.
- Portal links and official documents are different records.
- `portals.html` normally uses official Home Pages; task-specific links belong in Portal Guidance.
- Public pages should show source/verification status for sensitive government information.

---

## 3. Current Page Map

| Page | Purpose |
|---|---|
| `index.html` | Main public website; mobile navigation, Latest Verified, Quick Search |
| `bseb.html` | BSEB central module + admission/registration/exam fee summary |
| `secondary.html` | BSEB Secondary / Matric fee and portal details |
| `intermediate.html` | OFSS admission + BSEB Intermediate fee verification view |
| `BSEB-FEE-REFERENCE.md` | Detailed fee/source/verification reference |
| `it-services.html` | IT tools and automation directory |
| `ai-workbench.html` | AI-assisted controlled workspace |
| `notices.html` | Notices/circulars |
| `official-documents.html` | Official document catalogue |
| `education-department.html` | Education Department documents |
| `deo-siwaan.html` | DEO Siwan documents |
| `deo-darbhanga.html` | DEO Darbhanga documents |
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

Older/parallel Admin CMS prototype files may remain temporarily for reference. They are not the canonical workflow.

---

## 4. BSEB Fee Structure — Reviewed 08 September 2026

Detailed source notes are maintained in `BSEB-FEE-REFERENCE.md`.

### Intermediate Admission — OFSS 2026–28

**Official CAF application fee: ₹350**

Official source: `https://ofssbihar.net/Higher-Education/index.html`

Status: **Verified from official OFSS public page.**

Important distinction: ₹350 is the OFSS application fee, not necessarily the final school/college admission charge.

### Matric Registration — Annual Exam 2027 / Session 2026–27

Current final-window fee reference:

| Component | Regular | Independent / Private |
|---|---:|---:|
| Online registration application | ₹50 | ₹50 |
| Online data entry | ₹50 | ₹50 |
| Registration | ₹250 | ₹250 |
| Permission | — | ₹130 |
| Late fee | ₹100 | ₹100 |
| **Total** | **₹450** | **₹580** |

Official portal: `https://www.biharboardonline.org/`

The public BSEB portal directly confirms the 2027 cycle and that the final registration-fee payment deadline was extended through **22 August 2026**. The component table is retained as a current-cycle reference and must be reconfirmed from the applicable BSEB notice before a new payment.

Status: **Re-verify before payment.**

### Matric Annual Examination 2026 — Official BSEB Advertisement

| Fee component | General | SC/ST/EBC (BC-I) |
|---|---:|---:|
| Online application | ₹70 | ₹70 |
| Examination | ₹115 | — |
| Miscellaneous | ₹430 | ₹430 |
| Marksheet | ₹170 | ₹170 |
| Provisional certificate | ₹110 | ₹110 |
| Science internal | ₹55 | ₹55 |
| Subtotal | ₹950 | ₹835 |
| Practical (where applicable) | ₹30 | ₹30 |
| Online institution fee | ₹30 | ₹30 |
| **Grand total** | **₹1,010** | **₹895** |

Official PDF: `https://examapi.biharboardonline.org/files/others/exam-advertisement.pdf`

Status: **Verified from official BSEB PDF.**

### Intermediate Registration / Examination

Official portal: `https://intermediate.biharboardonline.com/`

The public portal exposes registration-payment and form workflows but does not currently expose a complete fee table in a form that has been directly verified for every category.

A current 2027 main-exam reference of **₹1,430** (₹1,400 committee + ₹30 institution charge) is shown on the Intermediate page with an explicit **Re-verify before payment** label. Special categories have different fees.

Do not hard-code old Intermediate registration fees as current without the applicable official notification.

---

## 5. Admin Control Centre — Simplified Phase 1

**Canonical page:** `admin-content.html`

The canonical UI has three workflow views:

```text
1. Manage
2. Review Queue
3. AI Monitor
```

### Manage

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
Change Map shows affected outputs
      ↓
Send to Review Queue
```

The administrator should think **“update BSEB information”**, not **“which HTML files should I edit?”**

### Review Queue

Every proposal shows origin, source, current value, proposed value, affected outputs, storage/apply plan and approval state.

Current statuses:

```text
Review Required
Rejected
Approved — Final Permission Required
```

**Approval is not publication.** Final permission is still required before staging commit, public publish, Supabase write, Drive-backed publish or production promotion.

### AI Monitor

Current AI Monitor is a Phase-1 control UI, not a live crawler. Future work may add official-source reachability, new-PDF/date/session detection, content fingerprints and AI change proposals.

No OTP/CAPTCHA/credential bypass is allowed.

---

## 6. Content Routing Principle

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

## 7. Portal Guidance and Official Sources

Current portal-guide inventory includes OFSS Bihar, e-Shikshakosh, UDISE+, SHVR, BSEB Secondary, BSEB Intermediate, BEPC School Tracker, NSP, Bihar e-Kalyan, Bihar PMS Institute, SATHEE, Bihar VidyaSathi and विद्यार्थी सहयोग.

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

## 8. PDF-First Document Rule

`Original official PDF/image → Extract/OCR/AI → Human verification → Metadata → Google Drive → Website catalogue/guide/notice`

Original files remain authoritative. Private student/staff/admin files must not be committed to public GitHub.

---

## 9. Smart Class and AI Workbench

**AI Workbench** public workflow: `Read → Extract → Diagnose → Suggest → Draft → Human Review`.

Official BEPC tracker: `https://tracker.bepcssa.in/`.

Credentials remain server-side. Production authentication/authorization must be enforced before production use is claimed.

---

## 10. Security and Approval Rules

- Never commit passwords, OTPs, API secrets, service-role keys, or private tokens.
- Never place confidential student/staff/admin files in public GitHub.
- AI/OCR output is never silently authoritative.
- Government information requires source verification.
- Important changes require human approval.
- Production promotion is separate from staging implementation.
- Supabase schema/data changes require explicit authorization.
- Final government-portal submit buttons remain human-controlled.

---

## 11. Current Status — 08 September 2026

| Area | Status |
|---|---|
| Public homepage | Simplified; mobile menu + Latest Verified + Quick Search |
| BSEB fee centre | **Updated in staging** |
| OFSS 2026–28 application fee | **Officially verified: ₹350** |
| Matric 2026 exam fee | **Officially verified from BSEB PDF** |
| Matric 2027 registration fee | Current-cycle reference; re-verify before payment |
| Intermediate fee table | Partial/review reference; current official notice required |
| Portal Guidance Centre | Implemented |
| Portal Verify dashboard | Implemented human/local foundation |
| Admin Login | Implemented foundation |
| Admin Dashboard | Implemented |
| Admin Control Centre | Implemented simplified Phase-1 UI |
| Change Map / affected-output preview | Implemented |
| Local Review Queue | Implemented Phase 1 |
| AI Monitor | Phase-1 UI; no live crawler |
| Supabase CMS tables | Planned; explicit approval required |
| Google Drive CMS upload/publish | Planned |
| Automatic official-source change detection | Planned |
| Production promotion | Requires staging test + approval |

---

## 12. Documentation

- `README.md` — concise living project map.
- `knowledge-base.md` — detailed operational knowledge and portal guidance reference.
- `BSEB-FEE-REFERENCE.md` — fee/source/verification reference.
- `PROJECT-STATUS.md` — implementation/readiness status.
- `admin-cms-design.md` — design reference/history.

Update documentation whenever architecture, workflow, security, page ownership, fee structure, source verification or readiness changes materially.

---

## Final Principle

> **The website is the interface. Original documents are the evidence. Structured data should have one source of truth. AI prepares and detects; humans verify and approve. Fees must always show purpose, session, source and verification status.**
