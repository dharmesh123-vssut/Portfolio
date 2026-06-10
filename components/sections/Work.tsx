import SectionHeader from "@/components/ui/SectionHeader";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/resume-data";

export default function Work() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="bg-section-alt px-4 py-12 md:px-6 md:py-14"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="Enterprise Salesforce projects focused on scale, compliance, and real business impact."
        />

        {featured ? (
          <div className="mb-5">
            <FeaturedProjectCard {...featured} />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
