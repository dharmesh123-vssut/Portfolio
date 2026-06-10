"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillGroup from "@/components/ui/SkillGroup";
import { skillGroups, topSkills } from "@/lib/resume-data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="px-4 py-12 md:px-6 md:py-14" aria-label="Skills">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Tools"
          subtitle="Technologies I use to build scalable Salesforce solutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:px-4 sm:py-2 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <div className="mt-5">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            {expanded ? "Hide full skill set" : "View full skill set"}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
            />
          </button>

          {expanded ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <SkillGroup
                  key={group.category}
                  category={group.category}
                  skills={group.skills}
                  index={index}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
