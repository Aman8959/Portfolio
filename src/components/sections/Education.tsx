import { AcademicCapIcon, ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import { education } from "@/data/education";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="page-shell">
        <div className="section-row">
          <SectionHeading eyebrow="06 / Education" title={<>Learning that supports<br /><em>useful engineering.</em></>} description="Academic foundations and focused learning that shape the way I approach software, data, and AI." />
          <a className="service-contact" href="/contact">Start a conversation <ArrowRightIcon aria-hidden="true" /></a>
        </div>
        {education.length ? <div className="education-list">{education.map((item) => <article className="education-card" key={`${item.degree}-${item.institution}`}><div className="education-period">{item.period}</div><div><h3>{item.degree}</h3><p className="education-institution">{item.institution}</p><p>{item.summary}</p><div className="tag-list">{item.focus.map((topic) => <Badge key={topic}>{topic}</Badge>)}</div></div></article>)}</div> : <div className="empty-state"><span><AcademicCapIcon aria-hidden="true" /></span><div><p>Education</p><h3>Verified academic entries can be added here.</h3><span>Add your degree, institution, period, summary, and focus areas in <code>src/data/education.ts</code>.</span></div><PlusIcon aria-hidden="true" /></div>}
      </div>
    </section>
  );
}