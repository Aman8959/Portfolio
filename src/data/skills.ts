export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces that are clear, responsive, and built to last.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Application logic and APIs designed around practical requirements.",
    skills: ["Python", "Node.js", "REST APIs", "Backend Architecture"],
  },
  {
    title: "AI / Machine Learning",
    description: "Applied intelligence for useful, outcome-oriented software.",
    skills: ["Machine Learning", "Computer Vision", "Deep Learning", "OpenCV", "YOLO", "AI-powered Applications"],
  },
  {
    title: "Tools & Concepts",
    description: "The engineering foundations behind reliable delivery.",
    skills: ["Git", "GitHub", "VS Code", "API Tools", "OOP", "Data Structures", "Software Architecture", "Automation"],
  },
];
