"use client";

import { AcademicCapIcon, ArrowPathIcon, BeakerIcon, BookOpenIcon, CodeBracketIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  { label: "Build", icon: WrenchScrewdriverIcon },
  { label: "Test", icon: BeakerIcon },
  { label: "Improve", icon: ArrowPathIcon },
  { label: "Deploy", icon: RocketLaunchIcon },
];

const learning = [
  { title: "Applied AI and Machine Learning", progress: 70 },
  { title: "Modern Full-Stack Development", progress: 80 },
  { title: "Cloud and Deployment Workflows", progress: 45 },
  { title: "Data Analytics and Visualization", progress: 65 },
];

export function About() {
  const [activeTab, setActiveTab] = useState<"education" | "skills" | "learning">("education");

  return (
    <section className="section about-section" id="about">
      <div className="page-shell about-hub">
        <div className="about-intro"><SectionHeading eyebrow="01 / About" title={<>A practical developer<br /><em>with room to grow.</em></>} description="AI/ML and full-stack development focused on clear, useful, and dependable software." /></div>
        <div className="about-profile-grid">
          <div className="about-copy"><p>I&apos;m Aman Kumar Yadav, an AI/ML and full-stack developer focused on turning real problems into useful software systems.</p><p>My work sits at the intersection of intelligent applications, web development, backend systems, and automation.</p><div className="philosophy" aria-label="Developer philosophy: Build, Test, Improve, Deploy"><p>DEVELOPER PHILOSOPHY</p><div>{principles.map(({ label, icon: Icon }, index) => <span key={label}><Icon aria-hidden="true" />{label}{index < principles.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div></div></div>
          <aside className="career-card"><p className="section-eyebrow">Career objective</p><h3>Build intelligent products that solve practical problems.</h3><p>I&apos;m continuously strengthening my technical and analytical skills while building projects that connect AI, data, and modern web experiences.</p></aside>
        </div>
        <div className="about-tabs" role="tablist" aria-label="About details">
          <button className={activeTab === "education" ? "active" : ""} onClick={() => setActiveTab("education")} role="tab" aria-selected={activeTab === "education"}><AcademicCapIcon aria-hidden="true" />Education</button>
          <button className={activeTab === "skills" ? "active" : ""} onClick={() => setActiveTab("skills")} role="tab" aria-selected={activeTab === "skills"}><CodeBracketIcon aria-hidden="true" />Technical Skills</button>
          <button className={activeTab === "learning" ? "active" : ""} onClick={() => setActiveTab("learning")} role="tab" aria-selected={activeTab === "learning"}><BookOpenIcon aria-hidden="true" />Currently Learning</button>
        </div>
        {activeTab === "education" && <div className="about-tab-panel" role="tabpanel">{education.length ? education.map((item) => <article className="education-card" key={`${item.degree}-${item.institution}`}><div className="education-period">{item.period}</div><div><h3>{item.degree}</h3><p className="education-institution">{item.institution}</p><p>{item.summary}</p><div className="tag-list">{item.focus.map((topic) => <Badge key={topic}>{topic}</Badge>)}</div></div></article>) : <div className="empty-state"><span><AcademicCapIcon aria-hidden="true" /></span><div><p>Education</p><h3>Academic details can be added here.</h3><span>Add verified degree and institution details in <code>src/data/education.ts</code>.</span></div></div>}</div>}
        {activeTab === "skills" && <div className="about-tab-panel about-skills-panel" role="tabpanel">{skillCategories.map((category) => <article className="about-skill-card" key={category.title}><CodeBracketIcon aria-hidden="true" /><h3>{category.title}</h3><p>{category.description}</p><div className="tag-list">{category.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></article>)}</div>}
        {activeTab === "learning" && <div className="about-tab-panel learning-panel" role="tabpanel"><div className="learning-list">{learning.map((item) => <article key={item.title}><div><h3>{item.title}</h3><span>{item.progress}% focus</span></div><div className="learning-track"><i style={{ width: `${item.progress}%` }} /></div></article>)}</div><div className="learning-copy"><h3>Learning focus</h3><p>Currently improving modern web development with Next.js, applied machine learning, and advanced data analytics.</p><div className="learning-goals"><strong>Next goals</strong><span>Build end-to-end data projects</span><span>Learn practical cloud deployment</span><span>Contribute to open-source work</span></div></div></div>}
        <div className="philosophy about-hub-footer" aria-label="Developer philosophy: Build, Test, Improve, Deploy"><p>HOW I WORK</p><div>{principles.map(({ label, icon: Icon }, index) => <span key={label}><Icon aria-hidden="true" />{label}{index < principles.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
