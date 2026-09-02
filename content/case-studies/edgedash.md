---
statusNote: Production-ready 9-agent autonomous career platform open-sourced on GitHub.
---
## Overview
EdgeDash is an AI-powered career intelligence and automated resume-tailoring platform. It connects directly with real-world job boards, extracts market skill requirements, scores candidate alignment, and generates 100% verified, zero-hallucination, ATS-optimized resumes tailored to each job description.

## Problem
Job seekers struggle with scattered job discovery, generic and time-consuming manual resume tailoring, and inaccurate AI tools that fabricate unverified experience lines during synthesis. Without structured market intelligence, candidates miss crucial skill gaps and face high rejection rates from Automated Tracking Systems (ATS).

## Approach / Solution
Architected a sequential 9-agent autonomous engine that ingests live job listings from public hiring APIs (Remotive, Arbeitnow) and custom user imports. The pipeline calculates a multi-factor candidate fit score (30% keyword match + 70% skill alignment), audits market skill gaps, and synthesizes ATS-optimized resumes strictly grounded in a Master Profile Single Source of Truth to eliminate AI hallucination.

## Key Features
- 9-Agent Autonomous Orchestration Pipeline (Discovery, Fit Scoring, Gap Analysis, QA, JD Extraction, Multi-Factor Matching, Anti-Hallucination Generation, Fact Validation, ATS Optimization)
- Live Job Discovery & Real-Time Ingestion (Remotive & Arbeitnow APIs, plus custom job description paste)
- Anti-Hallucination & Zero-Falsification Guarantee using strict Master Profile verification
- Interactive Market Skill Gaps Dashboard with one-click Add to Profile action
- Fit Score Distribution & Strategic Market Recommendations
- Multi-Format Resume Exporter (ATS-friendly PDF/Print, Formatted Plain Text, Styled HTML)
- Live 9-Agent Execution Runner with Real-Time Terminal Stream

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Autonomous Multi-Agent Pipeline
- Recharts
- Lucide React
- Remotive API & Arbeitnow API
- Vite & Node.js

## Challenges & Solutions
- Zero-Hallucination Synthesis: Enforced a strict Master Profile Single Source of Truth where Fact & Claim Validator agents audit every bullet point to guarantee no fabricated experience.
- High-Efficiency Multi-Agent Coordination: Designed a sequential pipeline state router with live streaming terminal output in the AgentCycleModal for transparent execution monitoring.
- Real-Time Live Job Ingestion: Integrated multi-source public job board APIs with duplicate filtering and instant compatibility scoring.
- Comprehensive ATS Formatting: Built a 5-step ATS optimizer generating print-ready PDFs and parse-friendly plain text documents.

## Results & Learnings
- Successfully deployed a 9-agent architecture automating end-to-end career intelligence and resume tailoring.
- Validated zero-hallucination output through dual-agent fact checking against verified candidate profiles.
- Delivered interactive gap analytics empowering candidates with targeted learning paths based on active hiring market data.

## Project Journey
- Phase 1: Architecture & 9-Agent Pipeline Design | Multi-Agent Orchestrator Blueprint | Conceptualized the 9 specialized agent roles spanning market discovery, scoring, and anti-hallucination validation. | Pipeline Architecture, Agent Specs, System Design | Completed
- Phase 2: Live Ingestion & Job Discovery Engine | Public API Ingestion & Custom Importer | Connected Remotive & Arbeitnow job APIs alongside custom job description parser with instant fit scoring. | Live Job Service, Ingestion Pipeline, API Client | Completed
- Phase 3: Master Profile & Anti-Hallucination Engine | Zero-Falsification Resume Synthesizer | Implemented single source of truth profile validator ensuring generated resumes strictly reflect verified experience. | Fact Validator, ATS Optimizer, Resume Generator | Completed
- Phase 4: Interactive Analytics & Terminal Stream UI | Dashboard & Live Execution Visualizer | Built skill gaps distribution charts, fit score metrics, and live agent terminal log modal with real-time feedback. | Skill Gaps Tab, Recharts Analytics, Terminal Stream | Completed
- Phase 5: Multi-Format Exporter & Open-Source Release | ATS Exporters & GitHub Documentation | Implemented PDF, TXT, and HTML exporters; packaged complete repository on GitHub with setup guidelines. | GitHub Repo, Multi-Format Exporters, Documentation | Completed
