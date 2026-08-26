import { CommandLineIcon } from "@heroicons/react/24/outline";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="page-shell">
        <SectionHeading eyebrow="02 / Technical toolkit" title={<>Built for the full path<br />from <em>idea to deployment.</em></>} description="A focused set of technologies for building intelligent, maintainable software." />
        <div className="skill-matrix">
          {skillCategories.map((category, index) => (
            <article className="skill-group" key={category.title}>
              <div className="skill-group-header"><span>0{index + 1}</span><CommandLineIcon aria-hidden="true" /></div>
              <h3>{category.title}</h3><p>{category.description}</p>
              <div className="tag-list">{category.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
