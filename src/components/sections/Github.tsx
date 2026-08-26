import { ArrowUpRightIcon, CodeBracketIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/data/site";
import { isConfiguredUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Github() {
  const configured = isConfiguredUrl(siteConfig.github);
  return (
    <section className="section github-section" id="github">
      <div className="page-shell github-layout">
        <SectionHeading eyebrow="06 / Open source" title={<>Code should be<br /><em>easy to inspect.</em></>} description="Selected repositories and verified contribution data can appear here once the profile link is connected." />
        <div className="github-panel">
          <div className="github-panel-icon"><CodeBracketIcon aria-hidden="true" /></div>
          <p className="github-label">GITHUB PROFILE</p>
          {configured ? <><h3>Aman Kumar Yadav</h3><p>Explore public repositories and development work on GitHub.</p><a href={siteConfig.github} rel="noreferrer" target="_blank">Open GitHub <ArrowUpRightIcon aria-hidden="true" /></a></> : <><h3>Profile link pending</h3><p>Repository counts, language breakdowns, and activity are intentionally not shown until a verified GitHub profile is connected.</p><span className="github-note"><ExclamationTriangleIcon aria-hidden="true" />Set <code>github</code> in <code>src/data/site.ts</code></span></>}
        </div>
      </div>
    </section>
  );
}
