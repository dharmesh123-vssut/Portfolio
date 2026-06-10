"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  impact: string;
  index: number;
}

export default function ProjectCard({
  title,
  subtitle,
  tech,
  description,
  impact,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md md:p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent-muted px-2.5 py-1 text-xs font-semibold text-accent">
          {impact}
        </span>
      </div>
      <p className="mb-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-section-alt px-2.5 py-1 text-xs font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
