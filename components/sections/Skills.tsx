import SectionHeader from "@/components/ui/SectionHeader";
import SkillGroup from "@/components/ui/SkillGroup";
import { skillGroups } from "@/lib/resume-data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 py-20 md:px-6 md:py-24"
      aria-label="Technical skills"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Technical Skills"
          subtitle="A comprehensive toolkit for enterprise Salesforce development and integration."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              skills={group.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
