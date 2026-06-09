"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-10 text-center md:mb-12", className)}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </motion.div>
  );
}
