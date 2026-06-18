import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection.jsx";
import VisionSection from "../components/home/VisionSection.jsx";
import ProjectsGrid from "../components/projects/ProjectsGrid.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import CallToAction from "../components/home/CallToAction.jsx";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>BKlein Digital Labs</title>
        <meta name="description" content="BKlein Digital Labs builds practical AI solutions through experimentation, collaboration, and real-world feedback." />
      </Helmet>
      <HeroSection />
      <VisionSection />
      <section className="px-4 py-16">
        <SectionTitle
          eyebrow="Projects"
          title="Practical AI solutions and tools"
          description="Each project starts with a real-world challenge and evolves through prototyping, validation, feedback, and collaboration."
        />
        <div className="mt-10">
          <ProjectsGrid />
        </div>
      </section>
      <CallToAction />
    </>
  );
}
