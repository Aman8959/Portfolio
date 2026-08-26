import fs from "node:fs";
import path from "node:path";

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
};

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

function parseList(value: string): string[] {
  return value.split("\n").filter((line) => line.trim().startsWith("- ")).map((line) => line.trim().slice(2));
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

  return {
    slug,
    overview: section("Overview"),
    problem: section("Problem"),
    approach: section("Approach / Solution"),
    keyFeatures: parseList(section("Key Features")),
    techStack: parseList(section("Tech Stack")),
    challengesSolutions: parseList(section("Challenges & Solutions")),
    resultsLearnings: parseList(section("Results & Learnings")),
    statusNote: frontMatter.get("statusNote") ?? "",
  };
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return parseMarkdown(slug);
}
