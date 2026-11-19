# MADDA Medical Center — Official Website

A modern, responsive, five-page public information website for **MADDA Medical Center**, a tertiary healthcare facility in Grand Cape Mount County, Liberia. 

This website is designed to communicate trust, quality healthcare, accessibility, and community impact, strictly adhering to the hospital's official institutional profile.

## 🏥 Hospital Details
- **Name:** MADDA Medical Center
- **Location:** Vonzula, Bendu Road, Garwula District, Grand Cape Mount County, Liberia
- **Established:** September 2026
- **Level:** Tertiary Healthcare Facility
- **License:** 12-VT-2-3
- **Tagline:** *Your Health, Our Priority*

## ✨ Features
- **Responsive Design:** Mobile-first layout with smooth scrolling and a floating "Call Us" button on mobile devices.
- **Institutional Pages:** Home (with real-time stats), About Us (mission, vision, values, org chart), Our Services (clinical and diagnostic), and Our Facilities (real photo gallery).
- **Patient Action Center:** Dedicated Appointments page with WhatsApp, Call, Walk-in, and Form-based request workflows.
- **News & FAQ:** Simple updates timeline and an accordion-style Frequently Asked Questions page.
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigable, and `prefers-reduced-motion` support.
- **Single Source of Truth:** All hospital data (hours, phones, services) is managed in one central file (`src/lib/madda-data.ts`).

## 🛠️ Technology Stack
- **Framework:** React 19
- **Routing:** TanStack Router (File-based routing)
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui & Radix UI
- **Icons:** Lucide React
- **Language:** TypeScript

## 🚀 Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amara2002/madda-medical-center-app.git
   cd madda-medical-center-app