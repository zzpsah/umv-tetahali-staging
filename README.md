# UCHCH MADHYAMIK VIDYALAY, TETAHALI

## Website & IT Services — Project Structure

This repository contains the staging website and the documentation/entry points for the school's digital services and automation tools.

## 1. High-Level Hierarchy

```text
UMV TETAHALI WEBSITE
│
├── 🏫 School Website
│   ├── Home / School Information
│   ├── Academic Information
│   ├── Notices
│   ├── BSEB Information
│   ├── Important Portals
│   ├── Smart Class
│   ├── Services
│   ├── Documents / Guides
│   └── Contact Information
│
├── ⚙️ IT Services
│   │
│   ├── 📷 Photo & Signature Studio
│   │   ├── Student Photo Processing
│   │   ├── Signature Processing
│   │   └── Portal-ready Output
│   │
│   ├── 📄 Student Form / OCR
│   │   ├── Hardcopy Form Scan
│   │   ├── OCR / Data Extraction
│   │   ├── Data Verification
│   │   └── Student Record Preparation
│   │
│   ├── 🔎 Student Reference Matching
│   │   └── Match form data with reference/student records
│   │
│   ├── ☁️ Google Drive Upload
│   │   └── Store processed documents and assets
│   │
│   └── 🖥️ BSEB Registration Assistant
│       ├── Prepare registration data
│       ├── Portal assistance
│       ├── Upload required assets
│       └── Final user review before submission
│
└── 📁 Assets
    ├── School logo
    ├── Website images
    └── Other approved static assets
```

## 2. Student Registration Data Flow

The main student-processing workflow is designed around the actual hardcopy supplied by the student. Reference data is used for verification, not for silently replacing the student's submitted information.

```text
                    ┌───────────────────────┐
                    │   Student Hardcopy    │
                    │      Form / Scan      │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │       OCR / AI        │
                    │  Extract text & data  │
                    └───────────┬───────────┘
                                │
                                ▼
              ┌──────────────────────────────────┐
              │       Student Data Review        │
              │  Form/OCR values become current │
              │  working information             │
              └───────────────┬──────────────────┘
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
       ┌───────────────────┐     ┌────────────────────┐
       │ Reference Student │     │ Photo / Signature  │
       │ Data / Supabase   │     │ Processing         │
       └─────────┬─────────┘     └──────────┬─────────┘
                 │                          │
                 ▼                          ▼
       ┌───────────────────┐     ┌────────────────────┐
       │ Field-by-field    │     │ Portal-ready       │
       │ Matching &        │     │ Photo + Signature  │
       │ Discrepancy Review│     │ files              │
       └─────────┬─────────┘     └──────────┬─────────┘
                 │                          │
                 └────────────┬─────────────┘
                              ▼
                    ┌───────────────────────┐
                    │  Verified Registration│
                    │       Record          │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ BSEB Registration     │
                    │ Portal Assistance     │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ User Review / Confirm │
                    │     Before Submit     │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ Final Submission /   │
                    │ Acknowledgement Data │
                    └───────────────────────┘
```

## 3. Data Source Hierarchy

```text
Priority 1  →  Student Hardcopy / Current Submission
                 │
                 ├── Name
                 ├── Parent details
                 ├── Date of birth
                 ├── Address
                 ├── Category / demographic details
                 └── Other form-entered information

Priority 2  →  Reference Data
                 │
                 └── Supabase Class_X_reg_2026_2027
                     Used for matching and verification

Priority 3  →  BSEB Portal
                 │
                 └── Actual registration destination
```

### Important rule

Reference data must **not silently overwrite** information extracted from the current hardcopy. Any mismatch should be shown to the operator for review and correction.

## 4. Photo & Signature Flow

```text
Student Form / Uploaded File
          │
          ▼
   Locate photo/signature
          │
          ├───────────────┐
          ▼               ▼
       📷 Photo        ✍ Signature
          │               │
          ▼               ▼
   Crop / clean      Crop / clean
          │               │
          ▼               ▼
   White background  White background
          │               │
          ▼               ▼
 Portal dimensions   Portal dimensions
          │               │
          └───────┬───────┘
                  ▼
          Download / Store
                  │
                  ▼
            BSEB Upload
```

## 5. OCR Flow

```text
PDF / JPG / PNG / Scan
          │
          ▼
   Page preparation
          │
          ▼
     Chandra OCR
          │
          ▼
  Extracted text/data
          │
          ▼
  Human verification
          │
          ▼
 Verified student record
```

OCR is an extraction/assistance layer. The operator remains responsible for reviewing important student information before registration.

## 6. Repository Structure

```text
umv-tetahali-staging/
│
├── index.html              # Main school website page
├── it-services.html        # IT Services and automation tools
├── README.md               # Project hierarchy and data-flow documentation
│
└── assets/
    └── umv-logo-color.jpeg # School logo used by the website
```

## 7. IT Services Relationship

The IT Services page acts as the directory for school automation tools. The tools are supporting systems around the school's administrative workflow; the school website itself remains separate from the operational automation applications.

```text
                 IT SERVICES
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
   Photo/Sign       OCR/Data       Portal
    Studio          Processing     Assistance
       │              │              │
       └──────────────┼──────────────┘
                      ▼
             Verified Student Data
                      │
                      ▼
              Administrative Work
```

## 8. Operating Principle

**Simple user flow, controlled automation, and human verification at critical points.**

The system should automate repetitive preparation and matching work while keeping final student-data verification and final portal submission under operator control.
