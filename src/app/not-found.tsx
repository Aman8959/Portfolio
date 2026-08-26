import Link from "next/link";

export default function NotFound() { return <main className="not-found"><p className="section-eyebrow">404 / Not found</p><h1>This page doesn&apos;t exist.</h1><p>The page may have moved, or the link may be incomplete.</p><Link href="/">Back to home</Link></main>; }
