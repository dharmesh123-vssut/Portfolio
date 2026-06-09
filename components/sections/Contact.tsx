"use client";

import { motion } from "framer-motion";
import { Link2, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/resume-data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/its-dharmesh",
    href: personalInfo.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-20 md:px-6 md:py-24"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Get In Touch"
          subtitle="Open to Salesforce development opportunities, collaborations, and interesting projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href={`mailto:${personalInfo.email}?subject=Hello%20${encodeURIComponent(personalInfo.name)}`}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
