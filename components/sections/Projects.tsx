import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/resume-data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-section-alt px-4 py-20 md:px-6 md:py-24"
      aria-label="Key projects"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Key Projects"
          subtitle="Featured work spanning LDV optimization, EHS compliance, multi-portal architecture, and mobile solutions."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
