"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo } from "@/lib/resume-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white to-section-alt px-4 py-20 md:px-6 md:py-28"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-slate-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Salesforce Developer Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-accent">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-foreground md:text-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            View My Work
          </a>
          <a
            href={personalInfo.resumePath}
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          Learn more
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
