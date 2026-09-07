# AI / Agent Automation

## Purpose
Future controlled AI agents for repetitive school-office processes. Agents will use approved tools and authenticated workflows rather than unrestricted access.

## Architecture
```text
User / Admin
    │
    ▼
Authenticated school app
    │
    ▼
Role + permission check
    │
    ▼
AI Agent
    │
    ├── Read approved documents
    ├── Extract / transform data
    ├── Call approved automation tools
    └── Prepare outputs
    │
    ▼
Human approval for sensitive actions
    │
    ▼
Portal / Drive / generated PDF
    │
    ▼
Audit log
```

## Principle
An AI agent must receive controlled capabilities, not raw passwords or unrestricted school records. Sensitive actions require authentication, authorization, logging, and where appropriate human approval.

## Status
Future roadmap item.
