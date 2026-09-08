# UMV Tetahali — Current Project Status

**School:** UCHCH MADHYAMIK VIDYALAY, TETAHALI  
**Hindi:** उच्च माध्यमिक विद्यालय, तेतहली  
**UDISE:** `10160203806`  
**Environment:** Staging / development  
**Status date:** 2026-09-08

## Purpose

This file records actual project readiness separately from long-term plans.

Use these labels consistently:

- **Documented** — described in project documentation.
- **Implemented** — code/page exists in staging.
- **Tested** — behavior has been explicitly checked.
- **Deployed** — confirmed on the applicable deployment.
- **Planned** — intended but not yet implemented end-to-end.

A file existing in GitHub does not by itself prove that an integration is tested or deployed.

---

## Current architecture

```text
Public Website / GitHub Pages
        │
        ├── School pages
        ├── Portals / Guides
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

Future approved integrations
    ↓
Supabase structured CMS data
Google Drive document storage
AI official-source monitoring
Audit / publish workflow
```

---

## Admin Control Centre — current behavior

`admin-content.html` is the canonical Admin Control Centre.

On 08 September 2026 it was simplified from a many-module screen into three workflow views:

```text
Manage
Review Queue
AI Monitor
```

### Manage

The administrator selects one website area using the same hierarchy as the public website:

```text
विद्यालय
शैक्षणिक गतिविधियाँ
IT Services
सूचनाएँ
BSEB
महत्वपूर्ण पोर्टल
Smart Class
सेवाएँ
दस्तावेज़
मार्गदर्शिका
संपर्क
Archive
```

The administrator then enters one proposed change with:

- change title;
- official source URL;
- current value;
- proposed value;
- notes/evidence.

A permanent **Change Map** shows:

- selected website area;
- logical record type;
- affected public outputs/pages;
- intended storage/apply layer;
- Review Queue and permission gate.

### Review Queue

The browser-local queue is now implemented as a Phase-1 workflow.

Each item records:

- origin;
- selected area;
- source;
- current value;
- proposed value;
- affected outputs;
- storage/apply plan;
- status.

Current statuses:

```text
Review Required
Rejected
Approved — Final Permission Required
```

Approval does not automatically publish or commit anything.

### AI Monitor

The AI Monitor contains the current official-source inventory and can create controlled review tasks.

It is **not yet a live crawler** and does not claim live change detection.

Future approved backend behavior may include:

```text
Official source
    ↓
Reachability/domain/title check
    ↓
New PDF/date/session detection
    ↓
Content fingerprint comparison
    ↓
AI proposal
    ↓
Review Queue
    ↓
Human approval
```

---

## Implemented vs planned

| Area | Current status | Notes |
|---|---|---|
| Public school website | Implemented / staging | Deployment behavior should still be checked after material changes |
| Portal Guidance Centre | Implemented | Session-specific information requires ongoing verification |
| Verify & Update dashboard | Implemented foundation | Human/local verification; not a live crawler |
| Admin Login | Implemented foundation | Authentication exists; production authorization still requires review |
| Admin Dashboard | Implemented | Entry to canonical Control Centre |
| Admin Control Centre | **Implemented simplified Phase 1** | Canonical admin workflow |
| Change Map | **Implemented** | Shows where a selected change is expected to apply |
| Manual change entry | **Implemented Phase 1** | Generic controlled proposal form |
| Local Review Queue | **Implemented Phase 1** | Browser-local, not shared backend state |
| AI Monitor source inventory | **Implemented Phase-1 UI** | Creates review tasks; no automatic crawl yet |
| Supabase CMS tables | Planned | Requires explicit authorization |
| Google Drive CMS upload/publish | Planned | Project-memory Drive folder is separate and already in use |
| Automatic source change detection | Planned | Human approval remains mandatory |
| Audit history | Planned | Needed before mature publishing workflow |
| Production promotion | Not automatic | Staging review + approval required |

---

## Connected backend state

Connected Supabase project:

- Project: `umv-db`
- Region: `ap-south-1`

Previously observed public-schema tables include:

- `Class_XII_Students_2026_2027`
- `Class_X_reg_2026_2027`
- `Siwan _Teachers_Details`
- `Teachers_Udise`
- `class_x_reg_safe`
- `profiles`

These tables do not mean the planned CMS entities have been created.

**Database rule:** do not modify Supabase schema/data unless the user explicitly authorizes the specific change.

---

## Google Drive project reference

Canonical project-reference storage is maintained under:

`UMV Tetahali / 00_Project_Memory_and_Reference`

Reference files include:

- `01_Master_Project_Overview_2026-09-08.md`
- `02_Consolidated_Project_README_2026-09-08.md`
- `Archive_Old_Versions/`

Private student/staff records, credentials, OTPs and secrets must not be added to public GitHub documentation.

---

## Next development milestone

The next major milestone is **not another admin page**.

Priority order:

1. Test the simplified Admin Control Centre on staging/mobile.
2. Decide whether the remaining parallel prototype admin pages can be archived/removed.
3. Finalize the structured record model for portals/notices/documents/guides.
4. After explicit approval, create the Supabase CMS schema with RLS.
5. Connect Google Drive file upload/document references.
6. Add AI source snapshots and change detection.
7. Add shared audit history and publish workflow.
8. Promote only after staging verification and user approval.

---

## Development rules

1. Staging first.
2. Fetch current GitHub file/SHA before modification.
3. Do not modify production before staging approval.
4. Do not modify Supabase schema/data without explicit authorization.
5. Preserve original official PDFs/source references.
6. AI/OCR suggestions require human verification.
7. Never bypass OTP, CAPTCHA, credentials or access controls.
8. Do not expose private student/staff/admin data in public GitHub.
9. Archive historical government information rather than silently deleting it.
10. Keep README/status documentation aligned with actual implementation.

---

## Current direction

```text
Static Website
   ↓
Digital School Portal
   ↓
Portal Guidance + Verification
   ↓
Admin Login / Dashboard
   ↓
Simplified Admin Control Centre
   ↓
Change Map + Review Queue
   ↓
NEXT: shared structured CMS persistence
   ↓
Google Drive document integration
   ↓
AI source monitoring + audit history
   ↓
Production after testing and approval
```
