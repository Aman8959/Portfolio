import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="page-shell resume-card">
        <span className="resume-icon"><DocumentTextIcon aria-hidden="true" /></span>
        <div><p className="section-eyebrow">Resume</p><h2>Want the complete overview?</h2><p>A concise professional summary can be added as a PDF when it is ready to share.</p></div>
        <div className="resume-actions"><Button href={siteConfig.resume} variant="secondary">View Resume <ArrowTopRightOnSquareIcon aria-hidden="true" /></Button><a href={siteConfig.resume} download>Download <ArrowDownTrayIcon aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}
