import SectionHeader from "@/components/ui/SectionHeader";
import TimelineCard from "@/components/ui/TimelineCard";
import { experiences } from "@/lib/resume-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-section-alt px-4 py-20 md:px-6 md:py-24"
      aria-label="Work experience"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Work Experience"
          subtitle="Building enterprise Salesforce solutions across fleet safety, EHS compliance, and energy domains."
        />

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <TimelineCard
              key={`${experience.company}-${experience.period}`}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
