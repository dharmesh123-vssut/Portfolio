"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications, trailhead } from "@/lib/resume-data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-4 py-20 md:px-6 md:py-24"
      aria-label="Certifications"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Certifications & Trailhead"
          subtitle="Salesforce credentials backed by hands-on enterprise development experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-accent">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{trailhead.rank}</h3>
            <p className="mt-2 text-muted">
              Demonstrating continuous learning and deep Salesforce platform expertise.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-accent">{trailhead.badges}</p>
                <p className="mt-1 text-sm text-muted">Badges</p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-accent">{trailhead.points}</p>
                <p className="mt-1 text-sm text-muted">Points</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
