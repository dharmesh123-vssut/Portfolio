"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/resume-data";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-lg font-bold text-foreground transition-colors hover:text-accent"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-accent"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-50 text-accent"
                        : "text-muted hover:bg-section-alt hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-medium text-white"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
