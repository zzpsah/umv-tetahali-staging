# UMV Tetahali — Current Project Status

**School:** UCHCH MADHYAMIK VIDYALAY, TETAHALI  
**Hindi:** उच्च माध्यमिक विद्यालय, तेतहली  
**UDISE:** `10160203806`  
**Environment:** Staging / development  
**Status date:** 2026-09-08

## Purpose

This file records the **actual working project status** separately from long-term plans.

Use these readiness labels consistently:

- **Documented** — described in README/knowledge base/design notes.
- **Implemented** — code/page exists in the staging repository.
- **Tested** — behavior has been explicitly checked.
- **Deployed** — confirmed on the staging/live deployment.
- **Planned** — intended but not yet implemented end-to-end.

A file existing in GitHub does not by itself prove an integration is tested or deployed.

---

## Current architecture

```text
Public Website / GitHub Pages
          │
          ├── Portal Guidance
          ├── Documents / Notices
          ├── IT Services / AI Workbench
          └── Smart Class

Admin Login
    ↓
Admin Dashboard
    ↓
Admin Content Control Centre
    ↓
Browser-local draft records (current Phase-1 behavior)

Future approved integration
    ↓
Supabase structured CMS data
Google Drive document storage
Audit / verification / publish workflow
```

---

## Implemented in staging repository

The following are present in the current staging source and should no longer be described only as future ideas:

### Public / guidance foundation

- School website structure and navigation
- Important portal pages
- Portal Guidance Centre
- मार्गदर्शिका and नियमावली pages
- Verify & Update human-verification dashboard
- IT Services and AI Workbench pages
- Smart Class module/foundation
- Document and Drive-structure documentation

### Admin foundation

- `admin-login.html` — Supabase Auth based admin sign-in page
- `admin-dashboard.html` — authenticated admin dashboard
- `admin-content.html` — **Admin Content Control Centre Phase-1 UI**
- Additional admin CMS/content design or experimental pages in the staging repository
- `admin-cms-design.md` — Admin CMS design reference

### Admin Content Control Centre — current behavior

`admin-content.html` currently provides a broad content-management UI organized around the website hierarchy and admin tools. It includes management areas for school/profile content, academics, IT services, notices, BSEB, portals, Smart Class, services, documents, guides, verification and archive-related content.

**Important limitation:** the current Phase-1 control layer uses **browser-local draft storage**. Saving a draft does **not** automatically update public HTML, Google Drive or Supabase CMS records.

Therefore the correct status is:

> **Admin Control Centre UI: Implemented in staging (Phase 1 / local-draft foundation).**  
> **Full data-backed CMS: Planned / not yet end-to-end implemented.**

---

## Connected backend state

The connected Supabase project is:

- Project: `umv-db`
- Region: `ap-south-1`

Existing public-schema tables observed during the 2026-09-08 review include:

- `Class_XII_Students_2026_2027`
- `Class_X_reg_2026_2027`
- `Siwan _Teachers_Details`
- `Teachers_Udise`
- `class_x_reg_safe`
- `profiles`

These existing tables do **not** mean the planned CMS tables (`portals`, `documents`, `notices`, `portal_guides`, `verification_records`, `audit_logs`, etc.) have been implemented.

**Database rule:** do not modify Supabase schema/data unless the user explicitly authorizes that specific change.

---

## Google Drive project memory

Canonical project-reference storage is now maintained in Google Drive under:

`UMV Tetahali / 00_Project_Memory_and_Reference`

Current reference files include:

- `01_Master_Project_Overview_2026-09-08.md`
- `02_Consolidated_Project_README_2026-09-08.md`
- `Archive_Old_Versions/`

Purpose: preserve project decisions, architecture context and future-reference documentation outside chat history.

Private student/staff documents, credentials, OTPs and secrets must never be added to public GitHub documentation.

---

## Implemented vs planned

| Area | Current status | Notes |
|---|---|---|
| Public school website | Implemented / staging | Deployment behavior should still be tested after changes |
| Portal Guidance Centre | Implemented | Government/session information requires ongoing official-source verification |
| Verify & Update dashboard | Implemented foundation | Human verification; not an automatic government-portal crawler |
| Admin Login | Implemented foundation | Authentication exists; authorization/RLS must be reviewed before production claims |
| Admin Dashboard | Implemented | Links into content management |
| Admin Content Control Centre UI | **Implemented Phase 1** | Browser-local drafts; not yet central persisted CMS |
| Portal/Notice/Document/Guide editing UI | Implemented within Phase-1 control layer | Persistence/public publishing integration remains future work |
| Supabase CMS tables | Planned | Requires explicit authorization and schema design |
| Google Drive document upload from CMS | Planned | Drive project-memory folder is separate and already in use |
| Audit history | Planned | Required before mature government-content publishing workflow |
| Semi-automatic portal change detection | Planned | Human approval remains mandatory |
| Review queue / publish workflow | Planned | Draft → Review → Verified → Published → Archived target model |
| Production promotion | Not automatic | Staging test + user approval required |

---

## Recommended next development milestone

Do **not** create another parallel Admin Control Centre page unless needed.

The next milestone should consolidate the existing admin pages around `admin-content.html` and make one small workflow work end-to-end:

```text
Admin Login
   ↓
Admin Dashboard
   ↓
Admin Content Control Centre
   ↓
Portal record
   ↓
Draft
   ↓
Preview
   ↓
Verify
   ↓
Persist to approved backend (later, after explicit DB authorization)
   ↓
Publish/update public view
```

Before backend integration, first stabilize:

1. Admin navigation and duplicate/experimental admin pages.
2. Portal record field model.
3. Draft / Review Required / Verified / Published / Archived statuses.
4. Preview behavior.
5. Verification/source metadata.
6. Which data belongs in Supabase versus Google Drive.

---

## Development rules

1. Staging first.
2. Fetch the current GitHub file and SHA before modification.
3. Do not modify production before staging approval.
4. Do not modify Supabase schema/data without explicit authorization.
5. Preserve original official PDFs and source references.
6. AI/OCR suggestions require human verification.
7. Never bypass OTP, CAPTCHA or access controls.
8. Do not expose credentials, service-role keys, private student files or confidential staff records in GitHub or public pages.
9. Keep historical government information archived instead of silently deleting it.
10. Update README, knowledge base or this status file when a meaningful architecture/readiness decision changes.

---

## Immediate working interpretation

The project has moved beyond a purely static school website and beyond the point where the Admin Control Centre can be described as entirely planned.

The accurate current direction is:

```text
Static Website
   ↓
Digital School Portal
   ↓
Portal Guidance + Verification
   ↓
Admin Login / Dashboard
   ↓
Admin Content Control Centre (Phase-1 UI implemented)
   ↓
NEXT: stabilize content model and workflows
   ↓
Approved Supabase CMS persistence
   ↓
Google Drive document integration
   ↓
Audit / review / publish automation
   ↓
Production after testing and approval
```

This file should be updated whenever the readiness state of a major feature changes.
