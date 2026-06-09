"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sectionIds[index]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[index]);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}
