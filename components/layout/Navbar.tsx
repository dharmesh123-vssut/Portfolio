"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, sectionIds } from "@/lib/resume-data";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import ThemeToggle from "@/components/ui/ThemeToggle";
import SalesforceLogo from "@/components/ui/SalesforceLogo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useBodyScrollLock(mobileOpen);

  const handleNavClick = () => setMobileOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="flex shrink-0 items-center rounded-lg p-1 transition-opacity hover:opacity-80"
          aria-label="Go to top"
        >
          <SalesforceLogo />
        </a>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto md:flex lg:gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-medium transition-colors lg:px-3 lg:text-sm",
                    isActive
                      ? "bg-accent-muted text-accent"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-accent-hover sm:inline-flex sm:px-4 sm:text-sm"
          >
            Get in Touch
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-border bg-card px-4 py-3 md:hidden">
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
                      "block rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent-muted text-accent"
                        : "text-muted hover:bg-section-alt hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 sm:hidden">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block rounded-lg bg-accent px-3 py-3 text-center text-sm font-medium text-white"
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
