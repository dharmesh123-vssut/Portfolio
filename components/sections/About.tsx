"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo, stats } from "@/lib/resume-data";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-20 md:px-6 md:py-24"
      aria-label="About"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about building scalable Salesforce solutions that drive real business impact."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10"
        >
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {personalInfo.summary}
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm md:p-5"
            >
              <p className="text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
