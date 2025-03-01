import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import { ExpandableCardDemo } from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="px-2 md:px-5">
      <Navbar />
      <HeroSection />
      <Skills />
      <ExpandableCardDemo />
    </div>
  );
}
