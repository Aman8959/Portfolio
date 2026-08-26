import { siteConfig } from "@/data/site";

export function Footer() {
  return <footer className="site-footer"><p>© {new Date().getFullYear()} {siteConfig.name}™. All rights reserved.</p><p>Satna, Madhya Pradesh | <a href="tel:+918959803686">+91 8959803686</a></p></footer>;
}
