# Google Drive Upload

## Purpose
Provide a controlled destination for processed school documents and generated files using the planned Google Drive file-server structure.

## Flow
```text
Generated / processed file
          │
          ▼
Validate name + category
          │
          ▼
Google Drive destination
          │
          ▼
File ID / link / metadata
          │
          ▼
School document workflow
```

## Current status
Drive integration depends on the configured school Drive/automation connection. Do not assume a file was uploaded unless the workflow returns confirmation.

## Security
Private and confidential records must use restricted Drive permissions and authenticated server-side access. Never put such files in public GitHub pages.
