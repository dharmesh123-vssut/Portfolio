"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  index: number;
}

export default function TimelineCard({
  company,
  role,
  location,
  period,
  highlights,
  index,
}: TimelineCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{role}</h3>
          <p className="mt-1 text-accent">{company}</p>
          <p className="text-sm text-muted">{location}</p>
        </div>
        <span
          className={cn(
            "inline-flex w-fit shrink-0 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-accent",
          )}
        >
          {period}
        </span>
      </div>
      <ul className="space-y-2">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-relaxed text-muted md:text-base"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
