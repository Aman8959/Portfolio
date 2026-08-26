export const siteConfig = {
  name: "Aman Kumar Yadav",
  role: "AI/ML + Full-Stack Developer",
  description:
    "Aman builds practical AI-powered applications, intelligent systems, and scalable web solutions for real-world problems.",
  url: "https://YOUR_DOMAIN_HERE",
  email: "aman.ku.yadav2001@gmail.com",
  github: "https://github.com/Aman8959",
  linkedin: "https://www.linkedin.com/in/aman-kumar-yadav-ds",
  resume: "/resume.pdf",
  availability: {
    enabled: false,
    label: "Available for freelance projects",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
