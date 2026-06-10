"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-6 md:mb-8",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm text-muted md:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-accent",
          align === "center" && "mx-auto",
        )}
      />
    </motion.div>
  );
}
