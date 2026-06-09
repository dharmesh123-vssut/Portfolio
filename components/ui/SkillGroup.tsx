"use client";

import { motion } from "framer-motion";

interface SkillGroupProps {
  category: string;
  skills: string[];
  index: number;
}

export default function SkillGroup({ category, skills, index }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"
    >
      <h3 className="mb-4 text-lg font-semibold text-foreground">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
