import { projects } from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
      {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
    </div>
  );
}
