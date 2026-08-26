export type Profile = {
  name: string;
  headline: string;
  bio: string;
  about: {
    paragraphs: string[];
    careerObjective: string;
    careerSummary: string;
    learning: { title: string; progress: number }[];
    learningSummary: string;
    nextGoals: string[];
  };
  location: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
  };
  resume: string;
  currentStatus: {
    enabled: boolean;
    label: string;
  };
  url: string;
};

export const profile: Profile = {
  name: "Aman Kumar Yadav",
  headline: "AI/ML + Full-Stack Developer",
  bio: "Aman builds practical AI-powered applications, intelligent systems, and scalable web solutions for real-world problems.",
  about: {
    paragraphs: [
      "I'm Aman Kumar Yadav, an AI/ML and full-stack developer focused on turning real problems into useful software systems.",
      "My work sits at the intersection of intelligent applications, web development, backend systems, and automation.",
    ],
    careerObjective: "Build intelligent products that solve practical problems.",
    careerSummary: "I'm continuously strengthening my technical and analytical skills while building projects that connect AI, data, and modern web experiences.",
    learning: [
      { title: "Applied AI and Machine Learning", progress: 70 },
      { title: "Modern Full-Stack Development", progress: 80 },
      { title: "Cloud and Deployment Workflows", progress: 45 },
      { title: "Data Analytics and Visualization", progress: 65 },
    ],
    learningSummary: "Currently improving modern web development with Next.js, applied machine learning, and advanced data analytics.",
    nextGoals: ["Build end-to-end data projects", "Learn practical cloud deployment", "Contribute to open-source work"],
  },
  location: "Satna, Madhya Pradesh, India",
  email: "aman.ku.yadav2001@gmail.com",
  social: {
    github: "https://github.com/Aman8959",
    linkedin: "https://www.linkedin.com/in/aman-kumar-yadav-ds",
  },
  resume: "/resume.pdf",
  currentStatus: {
    enabled: false,
    label: "Available for freelance projects",
  },
  url: "https://aman-ku-yadav-portfolio.vercel.app",
};