# CSNN Toronto — Healthy Eating & Lifestyle Certificate

Production-grade Next.js website for **CSNN Toronto (Canadian School of Natural Nutrition)** promoting the **Healthy Eating & Lifestyle Certificate (HELC)** taught by **Rasha Abu Rabi, BSc., MSc., R.H.N.**

---

## 1. Project Overview

- **Institution:** CSNN Toronto — Canadian School of Natural Nutrition (Teaching the Medicine of the Future™ since 1994)
- **Program:** Healthy Eating & Lifestyle Certificate (HELC)
- **Format:** 10 Live Online Workshops · 21 Hours · Interactive via Zoom
- **Schedule:** Starting October 14, 2026 · Evenings 6:00–8:00 pm EST
- **CECs:** Approved by canfitpro for 4 Continuing Education Credits (with Certificate of Achievement)
- **Instructor:** Rasha Abu Rabi, BSc., MSc., R.H.N.
- **Primary Goal:** Drive qualified program registrations and seat reservations.

---

## 2. Visual Identity & Design System

The application preserves the authentic brand identity while reimagining the user experience with modern editorial design tokens:

- **Primary Navy:** `#13277A`
- **Deep Navy:** `#0B1A5A`
- **Dark Navy:** `#071245`
- **Warm Cream:** `#FDF6DC`
- **Pale Yellow:** `#FBECB0`
- **Accent Yellow:** `#F6C915`
- **Gold Accent:** `#A8780F`
- **Body Text:** `#0F1F5C`
- **Muted Text:** `#5B5440`
- **Cream Border:** `#EFE1AD`
- **Alert Red:** `#D62B2B`
- **Typography:** `Plus Jakarta Sans` via Next.js Google Fonts

---

## 3. Technology Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript with strict type checking
- **Styling:** Tailwind CSS with CSS Variables & custom utility tokens
- **Icons:** Lucide React
- **Media:** Next.js Image component & custom responsive HTML5 video players
- **Form Handling:** Controlled state management with client and server-side validation

---

## 4. Architecture & Key Files

```
├── public/
│   └── assets/                     # Preserved authentic media files
│       ├── logo.jpg                # CSNN Toronto emblem
│       ├── rasha-portrait.jpg      # Instructor portrait
│       ├── ad-pillars.jpg          # Program topic visuals
│       ├── frames/                 # High-resolution video poster frames
│       └── videos/                 # Course explainer & testimonial videos
├── src/
│   ├── app/
│   │   ├── api/registration/route.ts # Server-side integration boundary
│   │   ├── globals.css             # Design tokens and custom theme utilities
│   │   ├── layout.tsx              # Root layout with font, SEO & OpenGraph
│   │   └── page.tsx                # Complete homepage page assembly
│   ├── components/
│   │   ├── forms/
│   │   │   ├── HeroRegistrationForm.tsx      # Quick seat reservation card
│   │   │   ├── RegistrationWizard.tsx        # 4-step comprehensive intake flow
│   │   │   └── StagingNotice.tsx             # Clear prototype submission banner
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx           # Schedule & contact header strip
│   │   │   ├── Header.tsx                    # Sticky navigation with mobile menu
│   │   │   ├── Footer.tsx                    # Institutional footer & privacy modal
│   │   │   └── StickyRegistrationBar.tsx     # Floating responsive bottom CTA
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx               # Primary high-converting hero
│   │   │   ├── TrustRibbon.tsx               # Facts & statistics strip
│   │   │   ├── AboutProgram.tsx              # Explainer video & program scope
│   │   │   ├── LearningOutcomes.tsx          # 3 pillars & health focus areas
│   │   │   ├── RegistrationTeaser.tsx        # Secondary 5-motivation selector
│   │   │   ├── LearningExperience.tsx        # 4 interactive classroom cards
│   │   │   ├── WorkshopCurriculum.tsx        # Modules 1–10 & certificate levels
│   │   │   ├── InstructorSection.tsx         # Rasha Abu Rabi bio & principles
│   │   │   ├── TestimonialSection.tsx        # Student Shiva review & video
│   │   │   ├── WhyCSNN.tsx                   # 1994 heritage & diploma pathway
│   │   │   └── FinalRegistration.tsx         # Wizard container section
│   │   └── ui/
│   │       └── VideoPlayer.tsx               # Accessible video component
│   ├── data/
│   │   └── programData.ts          # Structured source content & workshop data
│   └── lib/
│       └── validation.ts           # Form validation functions
├── .env.example                    # Environment variable template
├── .env.local                      # Local environment feature flags
├── package.json
└── tsconfig.json
```

---

## 5. How to Run Locally

### Prerequisites
- Node.js 18.18+ or 20+ (Node v22 verified)
- npm 9+ (npm v11 verified)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port assigned in the terminal).

### 3. Run Production Build & Linting
```bash
# Check code style and types
npm run lint

# Generate production build
npm run build

# Start production server
npm run start
```

---

## 6. Email Integration Safety & Activation Instructions

### Current Staging State (Disabled by Default)
Per strict instructions, **email integration is disabled by default**:
- `REGISTRATION_EMAIL_ENABLED=false` is enforced both client-side and server-side.
- The server route `/api/registration/route.ts` strictly rejects dispatches with HTTP 403 and an informative diagnostics payload.
- Forms display prominent **Staging Mode Notices** indicating that submissions are paused and no real user data is collected or transmitted.
- Buttons display `"Submission Paused (Staging Mode)"` to eliminate any confusion or fake confirmation claims.

### Steps to Activate Production Submissions

When CSNN Toronto administration authorizes email delivery and supplies the destination email address:

1. **Update Environment Variables:**
   Edit `.env.local` (or production environment variables):
   ```env
   REGISTRATION_EMAIL_ENABLED=true
   NEXT_PUBLIC_REGISTRATION_EMAIL_ENABLED=true
   REGISTRATION_DESTINATION_EMAIL=torontoinfo@csnn.ca
   ```

2. **Configure Mail Dispatcher:**
   In [src/app/api/registration/route.ts](file:///c:/Users/Lenovo/OneDrive/Desktop/cnn/src/app/api/registration/route.ts), hook in the preferred transactional email provider (e.g., Resend, SendGrid, Postmark, or AWS SES) in the designated future integration block.

3. **Verify Deliverability:**
   Submit a test intake in staging and verify confirmation delivery to the configured recipient.

---

## 7. Client Verification Notes

- **Intake Date:** October 14, 2026. Preserved directly from source reference; verify with admissions calendar prior to public campaign launch.
- **Class Timings:** Evenings 6:00–8:00 pm EST. Preserved directly from source reference.
- **Accreditation:** canfitpro 4 CECs approval applies specifically to students completing the **Certificate of Achievement** assessment (75%+ score requirement).
