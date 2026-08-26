"use client";

import { Bars3Icon, CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { isConfiguredUrl } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
      <nav aria-label="Main navigation" className="nav-shell">
        <Link aria-label={`${siteConfig.name} home`} className="brand" href="/" onClick={() => setIsOpen(false)}>
          <span className="brand-mark"><CodeBracketIcon aria-hidden="true" /></span>
          <span>{siteConfig.name}</span>
        </Link>

        <div className="desktop-nav">
          <div className="nav-links">
            {navigation.map((item) => <Link aria-current={isActive(item.href) ? "page" : undefined} className={isActive(item.href) ? "active" : undefined} href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="nav-resume" href={siteConfig.resume}>Resume</a>
            {isConfiguredUrl(siteConfig.github) && <a aria-label="GitHub profile" href={siteConfig.github} rel="noreferrer" target="_blank">GitHub</a>}
            {isConfiguredUrl(siteConfig.linkedin) && <a aria-label="LinkedIn profile" href={siteConfig.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>}
          </div>
        </div>

        <div className="mobile-actions">
          <ThemeToggle />
          <button aria-controls="mobile-menu" aria-expanded={isOpen} aria-label="Toggle navigation" className="icon-button" onClick={() => setIsOpen((open) => !open)} type="button">
            {isOpen ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-menu" id="mobile-menu">
          {navigation.map((item) => <Link aria-current={isActive(item.href) ? "page" : undefined} className={isActive(item.href) ? "active" : undefined} href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
          <a href={siteConfig.resume} onClick={() => setIsOpen(false)}>View Resume</a>
        </div>
      )}
    </header>
  );
}
