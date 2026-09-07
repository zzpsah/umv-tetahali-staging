# BEPC Smart Class Automation

## Purpose
Retrieve authorized Smart Class/ICT tracker data from the BEPC tracker through a server-side authenticated workflow and present structured results in the school Smart Class dashboard.

## Flow
```text
Smart Class dashboard
        │
        ▼
Authenticated backend function
        │
        ▼
BEPC LoginPage.aspx
        │
        ├── hidden ASP.NET fields
        ├── server-side credentials
        └── session cookies
        │
        ▼
SmartClass_Daily_Attendance.aspx
        │
        ▼
Extract tables / records
        │
        ▼
Structured JSON
        │
        ▼
School dashboard
```

## Security
Credentials belong only in server-side secrets. Production access must enforce JWT/role authorization and audit sensitive operations. Never expose BEPC credentials in HTML, JavaScript, or GitHub.

## Status
Backend integration is under development/testing.
