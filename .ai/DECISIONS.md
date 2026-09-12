# Decisions

## 2026-09-13 — Adopt DevOS portable project memory
- Preserve existing project status, changelog, design, and official-source documents.
- Add `.ai/` as the cross-AI durable context layer rather than replacing existing documentation.
- Automatically refresh repository-derived context on pushes to `main`/`master`.
- Treat deployment or production mutations as separate, explicitly authorized work.
