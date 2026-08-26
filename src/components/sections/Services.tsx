import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="page-shell">
        <div className="section-row"><SectionHeading eyebrow="04 / Services" title={<>Technical work that moves<br /><em>your idea forward.</em></>} description="Flexible engineering support for products, businesses, and ambitious software ideas." /><a className="service-contact" href="/contact">Discuss your project <ArrowRightIcon aria-hidden="true" /></a></div>
        <div className="services-grid">
          {services.map((service, index) => <article className="service-card" key={service.title}>
            <span className="service-number">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p>
            <ul>{service.deliverables.map((item) => <li key={item}><CheckIcon aria-hidden="true" />{item}</li>)}</ul>
            <div className="tag-list">{service.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
