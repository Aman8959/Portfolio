export const siteConfig = {
  name: "Aman Kumar Yadav",
  role: "AI/ML + Full-Stack Developer",
  description:
    "Aman builds practical AI-powered applications, intelligent systems, and scalable web solutions for real-world problems.",
  url: "https://YOUR_DOMAIN_HERE",
  email: "YOUR_EMAIL_HERE",
  github: "GITHUB_URL_HERE",
  linkedin: "LINKEDIN_URL_HERE",
  resume: "/resume.pdf",
  availability: {
    enabled: false,
    label: "Available for freelance projects",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;
