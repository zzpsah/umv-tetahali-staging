# UMV Tetahali — Current Project Status

**School:** UCHCH MADHYAMIK VIDYALAY, TETAHALI  
**UDISE:** `10160203806`  
**Environment:** Staging  
**Status date:** 08 September 2026

## Current architecture

```text
Public School Portal
  ├── Homepage / Latest Verified
  ├── Current Official Updates
  ├── BSEB / Fees
  ├── Notices
  ├── Portals / Guides
  ├── Documents
  ├── Smart Class
  └── IT Services

Admin Login
  ↓
Admin Dashboard
  ↓
Admin Control Centre
  ↓
Manage → Change Map → Review Queue → Final Permission
```

## Implemented in this update cycle

| Area | Status |
|---|---|
| Mobile-friendly simplified homepage | Implemented |
| Latest Verified strip | Implemented |
| BSEB Fee Centre | Implemented |
| Current Official Updates page | Implemented |
| Official-source Markdown register | Implemented |
| Notice source/status cleanup | Implemented |
| Unsupported 16 Sep BSEB deadline | Removed/corrected |
| Important Portals refresh | Implemented |
| Portal Guidance current-source refresh | Implemented |
| Siwan district education notice archive | Implemented |
| Source maintenance guide | Implemented |
| Changelog | Implemented |
| Main README refresh | Implemented |

## Current verified/source-reviewed highlights

- BSEB Secondary Registration 2026 for Exam 2027: official public page lists final extension through **22 Aug 2026** for form submission and fee payment; now archived/past.
- OFSS Intermediate 2026–28: official Common Prospectus records **₹350** CAF total, initial application window 08–18 Apr 2026 and 10–20 institution choices; live portal currently exposes spot-admission/cut-off/vacant-seat information.
- UDISE+: official portal lists **03 Aug 2026** AY 2026–27 data-completion notice.
- SHVR: official current resources include Hindi/English guidelines, brochures, bookmarks, web/mobile school manuals and videos.
- Bihar e-Kalyan/MVPY: official portal currently states eligible candidates may apply; scheme/category eligibility must be checked individually.
- Siwan District: recent education-related notices reviewed are retained as expired district references and are not assumed applicable to UMV Tetahali without scope verification.

## Admin Control Centre

`admin-content.html` remains the canonical Admin Control Centre.

Current Phase-1 behavior:

- browser-local proposal/review state;
- selected website area;
- before/after proposal;
- source URL;
- affected-output Change Map;
- Review Required / Rejected / Approved — Final Permission Required statuses;
- AI source inventory UI, but no live crawler yet.

No proposal can automatically publish/commit production content.

## Backend state

Supabase structured CMS tables remain **planned**, not implemented by this update. No Supabase schema/data changes were made.

Google Drive remains the intended original-document/file repository. No new CMS upload/publish integration was made in this update.

## Next priorities

1. Browser/mobile test the refreshed public pages.
2. Remove/archive redundant parallel admin prototypes after explicit cleanup approval.
3. Finalize structured CMS entities and RLS before any Supabase implementation.
4. Connect Drive-backed official-document ingestion.
5. Add automatic official-source snapshots/change detection only with human approval gate.
6. Add shared audit history.
7. Promote to production only after staging review.

## Governance

- Official source/PDF first.
- Record date/session/status.
- Do not publish unsupported deadlines as current.
- Do not expose credentials/private records.
- Do not bypass OTP/CAPTCHA/access controls.
- Payment/final-submit remains human-controlled.
- Historical information is archived rather than silently deleted.
