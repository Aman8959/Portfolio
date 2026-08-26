import { About } from "@/components/sections/About";
import { Github } from "@/components/sections/Github";
import { Resume } from "@/components/sections/Resume";

export const metadata = { title: "About | Aman Kumar Yadav" };

export default function AboutPage() { return <main className="subpage"><About /><Github /><Resume /></main>; }
