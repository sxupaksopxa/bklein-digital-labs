import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/common/SectionTitle.jsx";
import ProjectsGrid from "../components/projects/ProjectsGrid.jsx";

export default function ProjectsPage() {
  return (
    <section className="px-4 py-16">
      <Helmet>
        <title>Projects — BKlein Digital Labs</title>
        <meta name="description" content="Explore practical AI solutions and tools built through real-world challenges, prototyping, and collaboration." />
      </Helmet>
      <SectionTitle
        as="h1"
        eyebrow="Projects"
        title="Practical AI solutions and tools"
        description="Each project begins with a real-world challenge, evolves through prototyping and validation, and grows through feedback, collaboration, and practical use."
      />
      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}
