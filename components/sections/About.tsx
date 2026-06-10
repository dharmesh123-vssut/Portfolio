"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo, stats, whatIDo } from "@/lib/resume-data";

export default function About() {
  return (
    <section id="about" className="px-4 py-12 md:px-6 md:py-14" aria-label="About">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="Who I Am"
          subtitle="Salesforce developer passionate about building solutions that scale."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-base leading-relaxed text-muted md:text-lg"
        >
          {personalInfo.shortBio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-3 sm:gap-4 md:p-5 lg:grid-cols-5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 text-center sm:text-left">
              <p className="text-2xl font-bold text-accent md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {whatIDo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
