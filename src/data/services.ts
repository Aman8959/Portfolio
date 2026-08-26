export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    description: "Modern web applications, APIs, dashboards, and backend systems built around your product needs.",
    deliverables: ["Responsive web applications", "APIs & dashboards", "Maintainable backend systems"],
    tags: ["React", "Next.js", "Node.js", "APIs"],
  },
  {
    title: "AI / ML Development",
    description: "AI-powered applications, computer-vision concepts, automation, and intelligent workflows.",
    deliverables: ["AI feature prototypes", "Computer vision workflows", "Intelligent automation"],
    tags: ["Python", "OpenCV", "YOLO", "Machine Learning"],
  },
  {
    title: "Database Development",
    description: "Data-layer planning and integration designed for dependable application workflows.",
    deliverables: ["Data architecture planning", "API integration", "Database optimization support"],
    tags: ["Data Modeling", "APIs", "Backend"],
  },
  {
    title: "Business Website Development",
    description: "Professional, responsive websites that help businesses and independent professionals communicate clearly.",
    deliverables: ["Marketing websites", "Mobile-first pages", "Performance-focused UI"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Automation & AI Integration",
    description: "Practical ways to connect AI and automation to existing workflows and software.",
    deliverables: ["Workflow analysis", "Automation prototypes", "AI integration planning"],
    tags: ["Automation", "API Integration", "AI"],
  },
];
