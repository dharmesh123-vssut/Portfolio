"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/lib/resume-data";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-section-alt px-4 py-20 md:px-6 md:py-24"
      aria-label="Education"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Education"
          subtitle="Strong academic foundation in Information Technology."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-2 text-sm text-muted">{item.institution}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-section-alt px-3 py-1 text-sm text-muted">
                  {item.period}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-accent">
                  {item.score}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
