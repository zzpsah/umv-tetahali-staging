# BSEB Registration Assistant

## Purpose
Prepare verified student information and photo/signature assets for BSEB registration workflows and reduce repetitive manual entry.

## Flow
```text
Source document
     │
     ▼
OCR / data entry
     │
     ▼
Reference matching
     │
     ▼
Photo + signature preparation
     │
     ▼
Operator verification
     │
     ▼
Registration preparation / future portal automation
     │
     ▼
Final human review + submission
```

## Status
In development. Portal submission automation should only be enabled after authentication, authorization, logging, and human approval controls are in place.

## Rule
Do not store BSEB credentials in frontend code or public GitHub files.
