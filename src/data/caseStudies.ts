import fs from "node:fs";
import path from "node:path";

export type JourneyPhase = {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables?: string[];
  status?: string;
};

export type CaseStudy = {
  slug: string;
  overview: string;
  problem: string;
  approach: string;
  keyFeatures: string[];
  techStack: string[];
  challengesSolutions: string[];
  resultsLearnings: string[];
  statusNote: string;
  journeyPhases: JourneyPhase[];
};

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

function parseList(value: string): string[] {
  return value.split("\n").filter((line) => line.trim().startsWith("- ")).map((line) => line.trim().slice(2));
}

function parseJourney(value: string): JourneyPhase[] {
  const items = parseList(value);
  if (items.length === 0) return [];

  return items.map((item, index) => {
    const parts = item.split("|").map((p) => p.trim());
    const step = String(index + 1).padStart(2, "0");
    if (parts.length >= 3) {
      const deliverables = parts[3] ? parts[3].split(",").map((d) => d.trim()).filter(Boolean) : [];
      return {
        step,
        phase: parts[0] || `Phase ${index + 1}`,
        title: parts[1] || "Development Phase",
        description: parts[2] || "",
        deliverables: deliverables.length ? deliverables : undefined,
        status: parts[4] || "Completed",
      };
    }
    return {
      step,
      phase: `Phase ${index + 1}`,
      title: parts[0] || "Development Phase",
      description: parts[1] || "",
      status: "Completed",
    };
  });
}

function generateDefaultJourney(
  overview: string,
  problem: string,
  approach: string,
  keyFeatures: string[],
  techStack: string[],
  challengesSolutions: string[],
  resultsLearnings: string[],
  statusNote: string
): JourneyPhase[] {
  const isConceptOrDev = statusNote.toLowerCase().includes("concept") || statusNote.toLowerCase().includes("development") || statusNote.toLowerCase().includes("prototype");

  return [
    {
      step: "01",
      phase: "Phase 1: Discovery & Problem Framing",
      title: "Scoping Requirements & User Needs",
      description: problem || overview || "Identified key constraints, user expectations, and functional requirements.",
      deliverables: ["Problem Definition", "Requirement Analysis", "Success Criteria"],
      status: "Completed",
    },
    {
      step: "02",
      phase: "Phase 2: Architecture & Tech Selection",
      title: "System Blueprint & Stack Decision",
      description: techStack.length > 0 
        ? `Architected the solution foundation leveraging ${techStack.join(", ")} to ensure performance, maintainability, and scalability.`
        : "Selected appropriate tooling, system components, and data structures for implementation.",
      deliverables: techStack.length > 0 ? techStack.slice(0, 3) : ["System Design", "Tech Stack Selection", "Data Architecture"],
      status: "Completed",
    },
    {
      step: "03",
      phase: "Phase 3: Core Implementation & Engineering",
      title: "Building Workflows & Primary Features",
      description: approach || "Engineered core modules, integrated application workflows, and realized primary interactive experiences.",
      deliverables: keyFeatures.length > 0 ? keyFeatures.slice(0, 3) : ["Feature Development", "Pipeline Integration", "UI/UX Build"],
      status: "Completed",
    },
    {
      step: "04",
      phase: "Phase 4: Constraints & Optimization",
      title: "Resolving Engineering Hurdles",
      description: challengesSolutions.length > 0
        ? challengesSolutions.join(" ")
        : "Refined edge-case handling, resolved technical bottlenecks, and verified performance consistency.",
      deliverables: ["Performance Tuning", "Edge Case Handling", "System Validation"],
      status: "Completed",
    },
    {
      step: "05",
      phase: "Phase 5: Evaluation & Next Horizons",
      title: "Outcomes & Roadmap Evolution",
      description: resultsLearnings.length > 0
        ? resultsLearnings.join(" ")
        : "Extracted architectural takeaways, benchmarked results, and defined next iteration goals.",
      deliverables: ["Impact Assessment", "Key Learnings", "Future Enhancements"],
      status: isConceptOrDev ? "In Progress" : "Completed",
    },
  ];
}

function parseMarkdown(slug: string): CaseStudy | undefined {
  const filePath = path.join(caseStudiesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const source = fs.readFileSync(filePath, "utf8");
  const frontMatterMatch = source.match(/^---\n([\s\S]*?)\n---\n?/);
  const frontMatter = new Map<string, string>();
  frontMatterMatch?.[1].split("\n").forEach((line) => {
    const separator = line.indexOf(":");
    if (separator > -1) frontMatter.set(line.slice(0, separator).trim(), line.slice(separator + 1).trim());
  });

  const body = source.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const sections = new Map<string, string>();
  body.split(/^## /m).slice(1).forEach((block) => {
    const newline = block.indexOf("\n");
    if (newline > -1) sections.set(block.slice(0, newline).trim(), block.slice(newline + 1).trim());
  });
  const section = (name: string) => sections.get(name) ?? "";

  const overview = section("Overview");
  const problem = section("Problem");
  const approach = section("Approach / Solution");
  const keyFeatures = parseList(section("Key Features"));
  const techStack = parseList(section("Tech Stack"));
  const challengesSolutions = parseList(section("Challenges & Solutions"));
  const resultsLearnings = parseList(section("Results & Learnings"));
  const statusNote = frontMatter.get("statusNote") ?? "";

  const explicitJourney = parseJourney(section("Project Journey") || section("Development Phases") || section("Journey"));
  const journeyPhases = explicitJourney.length > 0 
    ? explicitJourney 
    : generateDefaultJourney(overview, problem, approach, keyFeatures, techStack, challengesSolutions, resultsLearnings, statusNote);

  return {
    slug,
    overview,
    problem,
    approach,
    keyFeatures,
    techStack,
    challengesSolutions,
    resultsLearnings,
    statusNote,
    journeyPhases,
  };
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return parseMarkdown(slug);
}
