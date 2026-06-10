"use client";

import { motion } from "framer-motion";
import { Link2, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/lib/resume-data";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-12 md:px-6 md:py-14" aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-hover p-5 text-center shadow-lg sm:p-6 md:p-10"
        >
          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/90 md:text-base">
            Open to Salesforce development roles, collaborations, and interesting projects.
          </p>

          <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20${encodeURIComponent(personalInfo.name)}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-muted sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
            >
              <Link2 className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="mt-6 flex flex-col items-stretch gap-3 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-5 sm:gap-y-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 break-all transition-colors hover:text-white sm:justify-start"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 transition-colors hover:text-white sm:justify-start"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {personalInfo.phone}
            </a>
            <span className="inline-flex items-center justify-center gap-2 sm:justify-start">
              <MapPin className="h-4 w-4 shrink-0" />
              {personalInfo.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
