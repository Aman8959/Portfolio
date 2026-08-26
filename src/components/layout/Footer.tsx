import { siteConfig } from "@/data/site";

export function Footer() {
  return <footer className="site-footer"><p>© {new Date().getFullYear()} {siteConfig.name}. Built with intention.</p></footer>;
}
