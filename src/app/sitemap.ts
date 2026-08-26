import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticPages = ["", "/about", "/skills", "/projects", "/services", "/experience", "/contact"];
  return [...staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })), ...projects.filter((project) => project.caseStudy).map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))];
}
