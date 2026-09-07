# Smart Autofill — Chrome Extension

## Purpose
Reads the real visible form fields on the current webpage, builds a matching form in the Chrome extension popup, fills the selected values back into the page, and highlights every field touched in yellow.

## Use
1. Unzip the extension package.
2. Open `chrome://extensions` and enable Developer mode.
3. Choose **Load unpacked** and select the folder containing `manifest.json`.
4. Open a webpage containing a form and click Smart Autofill.
5. Review the detected labels and controls.
6. Enter/select the values you want.
7. Click **Fill & highlight**.
8. Review the yellow-highlighted fields before submitting the website form.
9. Use **⟳ Re-scan** when a multi-step form changes.

## What it detects
```text
Web Page
  │
  ▼
Scan visible fields
  ├── Text / Email / Phone / Number / URL / Date
  ├── Textarea
  ├── Dropdown
  ├── Radio group
  └── Checkbox
  │
  ▼
Matching popup form
  │
  ▼
User review + input
  │
  ▼
Fill real page fields
  │
  ▼
Input/change events
  │
  ▼
Yellow highlight → operator verifies → submit
```

## File tree
```text
smart-autofill/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── content.js
└── README.md
```

## Security / privacy
The extension does not contain a backend, storage service, or application-specific credentials. It works on the current tab and keeps entered values in memory for the active operation. Password and file inputs are deliberately excluded from scanning.

## Important limitation
Use human review before submitting important government/school forms. Customized controls, shadow DOM widgets, or canvas-based forms may not be detected correctly.

## Source package
The original user-uploaded package includes Chrome icon assets. The repository documentation/source directory contains the text source and instructions; the packaged ZIP remains the preferred install artifact when available.
