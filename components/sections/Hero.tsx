"use client";

import { motion } from "framer-motion";
import { Download, Link2, Mail } from "lucide-react";
import { personalInfo } from "@/lib/resume-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-10 md:px-6 md:py-14"
      aria-label="Introduction"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "var(--hero-glow-1)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "var(--hero-glow-2)" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent"
        >
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
          {personalInfo.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-accent">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-lg font-semibold text-foreground md:text-xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap"
        >
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto sm:py-2.5"
          >
            View My Work
          </a>
          <a
            href={personalInfo.resumePath}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto sm:py-2.5"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto sm:py-2.5"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-5 flex items-center gap-2.5"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn profile"
          >
            <Link2 className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Send email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
