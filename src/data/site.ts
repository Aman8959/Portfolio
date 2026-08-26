import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  role: profile.headline,
  description: profile.bio,
  url: profile.url,
  email: profile.email,
  github: profile.social.github,
  linkedin: profile.social.linkedin,
  resume: profile.resume,
  availability: profile.currentStatus,
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;
