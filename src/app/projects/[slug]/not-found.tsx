import Link from "next/link";

export default function ProjectNotFound() {
  return <main className="not-found"><p className="section-eyebrow">Project not found</p><h1>This case study isn&apos;t available.</h1><Link href="/projects">Return to projects</Link></main>;
}
