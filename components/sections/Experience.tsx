import SectionHeader from "@/components/ui/SectionHeader";
import TimelineCard from "@/components/ui/TimelineCard";
import { experiences } from "@/lib/resume-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-section-alt px-4 py-12 md:px-6 md:py-14"
      aria-label="Work experience"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          subtitle="A track record of delivering enterprise Salesforce solutions."
        />

        <div>
          {experiences.map((experience, index) => (
            <TimelineCard
              key={`${experience.company}-${experience.period}`}
              {...experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
