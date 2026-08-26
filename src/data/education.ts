export type Education = {
  degree: string;
  institution: string;
  period: string;
  summary: string;
  focus: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor of Science (B.Sc.) - Information Technology",
    institution: "AKS University, Satna, Madhya Pradesh, India",
    period: "2023 - 2027 | Pursuing",
    summary: "Currently pursuing a B.Sc. in Information Technology with a foundation in programming, computer science, and software development.",
    focus: ["Information Technology", "Programming", "Computer Science Fundamentals", "Software Development"],
  },
  {
    degree: "Advanced Program in Data Science & Artificial Intelligence",
    institution: "IIT Roorkee - E&ICT Academy x Masai School",
    period: "Ongoing",
    summary: "An ongoing certification program focused on data science, artificial intelligence, machine learning, and practical real-world projects.",
    focus: ["Data Science", "Artificial Intelligence", "Machine Learning", "Python", "Data Analysis", "Statistics"],
  },
  {
    degree: "Class 12th - Higher Secondary (PCMB)",
    institution: "Government Higher Secondary School of Excellence, Venkat No. 1, Satna",
    period: "Completed | 79%",
    summary: "Completed higher secondary education under the Madhya Pradesh Board of Secondary Education with Physics, Chemistry, Mathematics, and Biology.",
    focus: ["MPBSE", "Physics", "Chemistry", "Mathematics", "Biology"],
  },
  {
    degree: "Class 10th - High School",
    institution: "Madhya Pradesh Board of Secondary Education (MPBSE)",
    period: "Completed | 88%",
    summary: "Completed high school education under the Madhya Pradesh Board of Secondary Education with a strong academic foundation.",
    focus: ["MPBSE", "High School", "88%"],
  },
];