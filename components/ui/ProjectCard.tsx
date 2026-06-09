"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  highlights: string[];
  index: number;
}

export default function ProjectCard({
  title,
  subtitle,
  tech,
  description,
  highlights,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted md:text-base">
        {description}
      </p>
      <ul className="mb-5 space-y-2">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-relaxed text-muted"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-section-alt px-3 py-1 text-xs font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
