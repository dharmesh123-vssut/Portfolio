import { personalInfo } from "@/lib/resume-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-muted md:flex-row md:px-6 md:text-left">
        <p>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p>
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
