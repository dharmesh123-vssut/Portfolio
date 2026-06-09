"use client";

import { motion } from "framer-motion";

interface FeaturedProjectCardProps {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  impact: string;
}

export default function FeaturedProjectCard({
  title,
  subtitle,
  tech,
  description,
  impact,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "var(--hero-glow-1)" }}
      />
      <div className="relative">
        <span className="inline-flex rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold text-accent">
          Featured Project
        </span>
        <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">{title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            {impact}
          </span>
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
