import { BriefcaseIcon, PlusIcon } from "@heroicons/react/24/outline";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="page-shell">
        <SectionHeading eyebrow="05 / Experience" title={<>Professional experience,<br /><em>accurately represented.</em></>} description="This timeline is reserved for verified roles, collaborations, and professional work." />
        {experience.length ? <ol className="experience-timeline">{experience.map((item) => <li key={`${item.role}-${item.organization}`}><p>{item.period}</p><div><h3>{item.role}</h3><span>{item.organization}</span><p>{item.summary}</p></div></li>)}</ol> : <div className="empty-state"><span><BriefcaseIcon aria-hidden="true" /></span><div><p>Professional Experience</p><h3>Verified entries can be added here.</h3><span>Add roles only after confirming organization, period, responsibilities, and outcomes in <code>src/data/experience.ts</code>.</span></div><PlusIcon aria-hidden="true" /></div>}
      </div>
    </section>
  );
}
