export const personalInfo = {
  name: "Dharmesh Kumar Sahoo",
  title: "Salesforce Developer",
  tagline:
    "Building enterprise-scale Lightning applications with LDV optimization and AI-driven development.",
  email: "sahoodharmeshkumar2205@gmail.com",
  phone: "+91-9178315649",
  location: "Patia, Bhubaneswar, India",
  linkedin: "https://linkedin.com/in/its-dharmesh",
  resumePath: "/resume.pdf",
  summary:
    "Salesforce Developer with 2+ years specializing in Large Data Volume (LDV) optimization and enterprise-scale Lightning applications. Architected 200+ LWC components and Apex classes, achieving 50% performance improvements for 100K+ record datasets. 3x Salesforce Certified (Platform Developer I, AI Specialist, AI Associate) | Trailhead Ranger with 144 badges. Expertise in fleet safety, EHS compliance, and energy domains.",
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "LWC Components", value: "200+" },
  { label: "Performance Gain", value: "50%" },
  { label: "Certifications", value: "3x" },
  { label: "Trailhead Badges", value: "144" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    company: "Rhythm Innovations",
    role: "Software Engineer - Salesforce Developer",
    location: "Patia, Bhubaneswar",
    period: "Jun 2024 – Present",
    highlights: [
      "Architected 70+ Lightning Web Components (LWC) and 60+ Apex classes for enterprise fleet safety and EHS compliance platforms.",
      "Delivered 200+ LWC Components and Apex classes overall, serving insurance and compliance use cases for Hero Future Energies (HFE).",
      "Led end-to-end implementation of the Hero Future Energies (HFE) module single-handedly within 4-month timeline, delivering Incident Management, Hazard Reporting, Training Management, Mock Drills, Attendance Tracking, and Root Cause Analysis (5-Whys), reducing manual tracking by 60%.",
      "Constructed SPS Command Center, a Large Data Volume (LDV) optimized fleet compliance dashboard with cursor-based pagination handling 100K+ driver/location/vehicle records, achieving 50% faster query performance.",
      "Designed metadata-driven LWC Dashboard Components using Custom Metadata Types, configurable based on user personas.",
      "Integrated external APIs using Named Credentials and REST API callouts: AWS S3, Samba Safety for MVR ordering, and WhatsApp for notifications.",
      "Engineered multi-portal architecture using Experience Cloud (3 portals) with role-based access using Custom Permission Sets.",
      "Automated 70+ Salesforce Flows for HFE and Safer-Fleet, streamlining fleet compliance workflows.",
      "Implemented Voice Navigation and End-to-End Chat-Bot, reducing navigation clicks by 30%.",
      "Leveraged Cursor AI for accelerated development, code reviews, and automated refactoring, improving development velocity by 40%.",
    ],
  },
  {
    company: "OpenText",
    role: "Salesforce Developer Intern",
    location: "Bangalore, India",
    period: "Sep 2023 – Mar 2024",
    highlights: [
      "Contributed to enterprise platform development over 6 months, collaborating with a team of 5 developers on Apex, LWC, and Salesforce configuration.",
      "Crafted 15+ custom Lightning Web Components for internal tools, improving team efficiency by 30% and automating manual processes.",
      "Created and maintained Apex triggers, classes, and batch jobs for business logic automation, supporting 10+ internal stakeholders.",
      "Generated Reports and Dashboards providing actionable insights, reducing manual reporting time by 25%.",
      "Streamlined Salesforce development lifecycle processes including sandbox management, change sets, and deployment workflows.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Salesforce Development",
    skills: [
      "Apex",
      "LWC",
      "Aura",
      "Flows",
      "SOQL",
      "SOSL",
      "Triggers",
      "Batch Apex",
      "Custom Metadata Types",
      "Named Credentials",
      "LDV Patterns",
      "Platform Events",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "Lightning Web Components",
      "Aura Components",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "LWC OSS",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "REST API",
      "SOAP API",
      "Bulk API",
      "Spring Boot",
      "JSON",
      "XML",
      "AWS S3 Integration",
    ],
  },
  {
    category: "CRM & Analytics",
    skills: [
      "Salesforce CRM",
      "Sales Cloud",
      "CRM Analytics (Tableau CRM)",
      "Dashboards",
      "Reports",
      "Datasets",
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Salesforce DX (SFDX)",
      "VS Code",
      "Git",
      "GitHub",
      "JIRA",
      "Azure DevOps",
      "Confluence",
      "Postman",
      "Workbench",
      "Data Loader",
      "Salesforce CLI",
    ],
  },
  {
    category: "AI & Productivity",
    skills: [
      "Cursor AI",
      "GitHub Copilot",
      "Salesforce Einstein",
      "Prompt Engineering",
      "Code Review Automation",
    ],
  },
  {
    category: "Security & Testing",
    skills: [
      "Apex Test Classes (>85% coverage)",
      "FLS",
      "CRUD",
      "Sharing Rules",
      "OWD",
      "Profile & Permission Sets",
      "Record-Level Security",
    ],
  },
];

export const projects = [
  {
    title: "SPS Command Center",
    subtitle: "Fleet Compliance Dashboard",
    tech: ["LWC", "Apex", "Custom Metadata", "LDV Patterns", "SOQL"],
    description:
      "Engineered enterprise fleet compliance command center with sub-second response times for 100K+ records using LDV-optimized cursor-based pagination.",
    highlights: [
      "Implemented real-time readiness scoring and exception tracking across MVR, License, Medical, and Telematics domains.",
    ],
  },
  {
    title: "Hero Future Energies (HFE)",
    subtitle: "EHS Module",
    tech: ["LWC", "Apex", "Salesforce Flows", "Custom Objects", "Triggers"],
    description:
      "Delivered complete EHS solution single-handedly within 4 months, reducing manual tracking by 60%.",
    highlights: [
      "Implemented Incident Management, Hazard Reporting, Training Management, and Mock Drills with 24+ configurable questions.",
      "Designed 5-Whys Root Cause Analysis module using Custom Metadata for flexible configuration.",
    ],
  },
  {
    title: "Multi-Portal Architecture",
    subtitle: "Experience Cloud",
    tech: ["LWC", "Experience Cloud", "Custom Permissions", "Apex", "Sharing Rules"],
    description:
      "Architected 3 portal types (Platform, Community, Mobile) using Experience Cloud with configurable menu system.",
    highlights: [
      "Built admin console for picklist management, feature toggles, and user access with custom permission framework.",
    ],
  },
  {
    title: "External Integrations Hub",
    subtitle: "Enterprise Integration Layer",
    tech: ["Named Credentials", "Apex Queueable", "REST APIs", "Bulk API"],
    description:
      "Designed centralized integration layer connecting 4 external services using Named Credentials and Apex Queueable.",
    highlights: [
      "Implemented retry logic, error handling, and audit logging for enterprise-grade reliability.",
    ],
  },
  {
    title: "Salesforce Hybrid UI",
    subtitle: "Mobile Application",
    tech: ["LWC OSS", "IndexedDB", "Bulk API"],
    description:
      "Developed mobile-friendly app for incident/hazard reporting outside Salesforce environment.",
    highlights: [
      "Implemented offline mode using LWC-OSS and IndexedDB with Bulk API sync for seamless data synchronization.",
    ],
  },
];

export const certifications = [
  {
    name: "Salesforce Platform Developer I",
    date: "Nov 2025",
  },
  {
    name: "Salesforce AI Specialist",
    date: "Nov 2024",
  },
  {
    name: "Salesforce AI Associate",
    date: "Oct 2024",
  },
];

export const trailhead = {
  rank: "Trailhead Ranger",
  badges: 144,
  points: "139,775",
};

export const education = [
  {
    degree: "B.Tech, Information Technology",
    institution: "Veer Surendra Sai University of Technology, Burla, Sambalpur",
    period: "2019 – 2023",
    score: "8.57 CGPA",
  },
  {
    degree: "Intermediate, Science",
    institution: "Jawahar Navodaya Vidyalaya, Hadagarh, Keonjhar",
    period: "2017 – 2019",
    score: "95%",
  },
];
