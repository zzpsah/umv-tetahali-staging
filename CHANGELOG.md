# Changelog

## 2026-09-08 — Final web architecture alignment

- Applied the full public navigation hierarchy to desktop and mobile menus.
- Kept `शुल्क संरचना / Fee Structure` only under `शैक्षणिक गतिविधियाँ`.
- Added structured dropdowns for BSEB, सेवाएँ and दस्तावेज़.
- Updated Admin Change Map so `शैक्षणिक गतिविधियाँ` routes to `index.html`, `guide.html` and canonical `fee-structure.html`.
- Updated BSEB Admin mapping so fee data points to the canonical fee page rather than duplicate fee tables.
- Updated README to match the implemented public/Admin architecture.
- No production or Supabase schema/data changes.

## 2026-09-08 — Academic fee structure consolidation

- Added `fee-structure.html` as the single canonical public page for Admission, Registration and Examination fees.
- Moved fee structure under `शैक्षणिक गतिविधियाँ` in the main navigation.
- Removed duplicated fee tables/amount emphasis from homepage, BSEB Centre, Secondary and Intermediate pages; those pages now link to the canonical fee page.
- Created Google Drive folders under `UMV Tetahali / 01_Official_Documents / BSEB / Secondary|Intermediate / Fee_and_Admission_Source_PDFs`.
- Fee page links official विज्ञप्ति/advertisement/prospectus sources and the canonical Drive source folders.
- Exact current amounts are shown only where directly source-backed; otherwise the page requires re-verification from the applicable official notice before payment.
- Updated README architecture and source-storage documentation.
- No production or Supabase schema/data changes.

## 2026-09-08 — Official-source enrichment

- Added `official-updates.html` and `CURRENT-OFFICIAL-UPDATES.md` as dated official-source intelligence references.
- Corrected BSEB Secondary 2027 registration deadline display to the official 22 Aug 2026 extension and removed the unsupported 16 Sep 2026 claim.
- Added current OFSS 2026–28 admission/spot-admission context, UDISE+ AY 2026–27 data-completion notice, SHVR resource information, Bihar e-Kalyan/MVPY status and recent Siwan district education-notice references.
- Expanded public portal/source/status presentation while preserving the rule that payment/final submission requires a fresh official-source check.
- No production or Supabase schema/data changes.
