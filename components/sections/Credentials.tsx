"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications, education, trailhead } from "@/lib/resume-data";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-section-alt px-4 py-12 md:px-6 md:py-14"
      aria-label="Credentials and education"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Achievements"
          title="Credentials"
          subtitle="Certifications, Trailhead progress, and academic background."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold leading-snug text-foreground">{cert.name}</h3>
                  <p className="text-xs text-muted">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{trailhead.rank}</h3>
            <p className="mt-1 text-sm text-muted">
              Continuous learning across the Salesforce ecosystem.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-section-alt p-4 text-center">
                <p className="text-xl font-bold text-accent">{trailhead.badges}</p>
                <p className="text-xs text-muted">Badges</p>
              </div>
              <div className="rounded-xl bg-section-alt p-4 text-center">
                <p className="text-xl font-bold text-accent">{trailhead.points}</p>
                <p className="text-xs text-muted">Points</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-5 space-y-3">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-foreground">{item.degree}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">
                  {item.institution} · {item.period} · {item.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
