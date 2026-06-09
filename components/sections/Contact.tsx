"use client";

import { motion } from "framer-motion";
import { Link2, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/lib/resume-data";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:px-6 md:py-24" aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-hover p-8 text-center shadow-lg md:p-14"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
            Open to Salesforce development roles, collaborations, and interesting projects.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20${encodeURIComponent(personalInfo.name)}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-card px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-muted"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <Link2 className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {personalInfo.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {personalInfo.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
