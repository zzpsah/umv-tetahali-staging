# Admin CMS Design — UMV Tetahali

## Admin navigation

`Admin Login → Admin Dashboard → ⚙️ सामग्री प्रबंधन / Content Management`

CMS modules:

1. **Portal Management** — portal name, home/login/registration URLs, session, dates, services, steps, official source, verification status.
2. **Document Management** — PDF upload/reference, title, category, department, portal, date, notification/order number, official URL, Drive location, visibility, archive.
3. **Notice Management** — title, date, department, PDF/source, deadline, related portal, status.
4. **Portal Guide Editor** — purpose, audience, login/registration, steps, required documents, precautions, official resources, related links, verification date.
5. **Verify & Update** — compare public information with official sources and place changes in a review queue.
6. **Archive** — previous sessions, expired notices and historical documents.

## Content hierarchy

```text
Admin Login
  ↓
Admin Dashboard
  ↓
⚙️ सामग्री प्रबंधन
  ├── Portal Management
  ├── Document Management
  ├── Notice Management
  ├── Portal Guide Editor
  ├── Verify & Update
  └── Archive
```

## Important design rule

Each module will eventually map to structured records rather than requiring manual HTML edits. The Phase-1 page is UI/design only and does not change Supabase or Google Drive.

## Future data flow

```text
Admin form
  ↓
Draft
  ↓
Review / official-source verification
  ↓
Human approval
  ↓
Published record
  ↓
Public portal / document / notice / guide page
```

Private documents must remain in private storage and must not be committed to the public GitHub repository.
