"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  company: string;
  initials: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  featured: string[];
  details: string[];
  index: number;
  isLast: boolean;
}

export default function TimelineCard({
  company,
  initials,
  role,
  location,
  period,
  summary,
  featured,
  details,
  index,
  isLast,
}: TimelineCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex min-w-0 gap-3 sm:gap-4 md:gap-5"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-muted text-xs font-bold text-accent">
          {initials}
        </div>
        {!isLast ? (
          <div className="mt-2 w-px flex-1 bg-border" aria-hidden />
        ) : null}
      </div>

      <div className="min-w-0 flex-1 pb-6">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{role}</h3>
              <p className="text-sm text-accent sm:text-base">{company}</p>
              <p className="text-xs text-muted sm:text-sm">{location}</p>
            </div>
            <span className="inline-flex w-fit shrink-0 self-start rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
              {period}
            </span>
          </div>

          <p className="mt-3 text-sm text-muted">{summary}</p>

          <ul className="mt-3 space-y-1.5">
            {featured.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
            {expanded
              ? details.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                    <span>{item}</span>
                  </li>
                ))
              : null}
          </ul>

          {details.length > 0 ? (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {expanded ? "Show less" : "Show more"}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
              />
            </button>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
