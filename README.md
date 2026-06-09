# Portfolio — Dharmesh Kumar Sahoo

Personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Showcases Salesforce development experience, projects, certifications, and contact information.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll animations
- [Lucide React](https://lucide.dev/) — icons
- [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                  # Next.js App Router (layout, page, styles)
components/
  layout/             # Navbar, Footer
  sections/           # Hero, About, Experience, Skills, etc.
  ui/                 # Reusable UI components
lib/
  resume-data.ts      # All portfolio content (single source of truth)
  utils.ts            # Utility helpers
public/
  resume.pdf          # Downloadable resume
```

## Updating Content

Edit [`lib/resume-data.ts`](lib/resume-data.ts) to update text, experience, skills, projects, and contact details. Replace [`public/resume.pdf`](public/resume.pdf) when you have an updated resume.

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `Portfolio` repository
4. Vercel auto-detects Next.js — click **Deploy**

No extra configuration is required. Analytics is enabled via `@vercel/analytics`.

## License

Private portfolio project. All rights reserved.
