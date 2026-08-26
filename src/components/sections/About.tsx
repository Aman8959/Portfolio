import { ArrowPathIcon, BeakerIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  { label: "Build", icon: WrenchScrewdriverIcon },
  { label: "Test", icon: BeakerIcon },
  { label: "Improve", icon: ArrowPathIcon },
  { label: "Deploy", icon: RocketLaunchIcon },
];

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-shell about-grid">
        <SectionHeading eyebrow="01 / About" title={<>Practical engineering,<br /><em>thoughtfully applied.</em></>} />
        <div className="about-copy">
          <p>I&apos;m Aman Kumar Yadav, an AI/ML and full-stack developer focused on turning real problems into useful software systems.</p>
          <p>My work sits at the intersection of intelligent applications, web development, backend systems, and automation. The goal is always the same: build technology that is clear, dependable, and valuable to the people using it.</p>
          <div className="philosophy" aria-label="Developer philosophy: Build, Test, Improve, Deploy">
            <p>DEVELOPER PHILOSOPHY</p>
            <div>{principles.map(({ label, icon: Icon }, index) => <span key={label}><Icon aria-hidden="true" />{label}{index < principles.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
