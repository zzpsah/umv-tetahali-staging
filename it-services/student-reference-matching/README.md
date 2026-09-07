# Student Reference Matching

## Purpose
Compare OCR/hardcopy information with trusted school reference data and identify matching, close-matching, or conflicting fields.

## Flow
```text
Current document
      │
      ▼
OCR / entered data
      │
      ▼
Reference record
      │
      ▼
Field-by-field comparison
      ├── Match
      ├── Possible match
      └── Mismatch
      │
      ▼
Human decision
```

## Important
The reference comparison must not silently overwrite the original document. Preserve the source document and resolve mismatches deliberately.
