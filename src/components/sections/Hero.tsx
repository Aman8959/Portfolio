import { ArrowDownRightIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero">
      <div aria-hidden="true" className="hero-grid" />
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span />AI/ML <b>•</b> Data Science <b>•</b> Full-Stack <b>•</b> Software Development</p>
          <h1>Building intelligent software for <em>real-world</em> problems.</h1>
          <p className="hero-description">{siteConfig.description}</p>
          <div className="hero-actions">
            <Button href="/projects">View Projects <ArrowRightIcon aria-hidden="true" /></Button>
            <Button href="/contact" variant="secondary">Let&apos;s Work Together <ArrowDownRightIcon aria-hidden="true" /></Button>
          </div>
          {siteConfig.availability.enabled && <p className="availability"><CheckCircleIcon aria-hidden="true" />{siteConfig.availability.label}</p>}
        </div>
        <div aria-hidden="true" className="system-panel">
          <div className="panel-top"><span className="status-dot" />SYSTEM / AMAN <span>01</span></div>
          <div className="system-diagram">
            <div className="node node-main">Software<div>systems</div></div>
            <div className="node node-ai">AI<div>models</div></div>
            <div className="node node-web">Data<div>intelligence</div></div>
            <i className="line line-one" /><i className="line line-two" /><i className="line line-three" />
          </div>
          <div className="panel-bottom"><span>OUTCOME-ORIENTED</span><span>● READY TO SHIP</span></div>
        </div>
      </div>
      <a aria-label="View selected projects" className="scroll-cue" href="#selected-work"><span>VIEW SELECTED WORK</span><i /></a>
    </section>
  );
}
