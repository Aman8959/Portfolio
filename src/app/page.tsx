import { Hero } from "@/components/sections/Hero";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { ProjectTeaser } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeOverview />
      <ProjectTeaser />
    </main>
  );
}
