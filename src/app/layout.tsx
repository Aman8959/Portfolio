import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | AI/ML & Full-Stack Developer`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: { title: `${siteConfig.name} | AI/ML & Full-Stack Developer`, description: siteConfig.description, url: "/", siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary", title: `${siteConfig.name} | AI/ML & Full-Stack Developer`, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { colorScheme: "dark light", themeColor: "#0a0d12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><Navbar />{children}<Footer /></body></html>;
}
