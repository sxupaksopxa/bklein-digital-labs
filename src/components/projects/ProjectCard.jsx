import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";

export default function ProjectCard({ project }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{project.status}</span>
      </div>
      <p className="mt-3 text-slate-700">{project.tagline}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{project.value}</p>
      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-950">Looking for</p>
        <ul className="mt-2 space-y-1 text-sm text-slate-600">
          {project.lookingFor.map((item, i) => <li key={i}>• {item}</li>)}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.website && <Button href={project.website}>Open project</Button>}
        {project.github && <Button href={project.github} variant="secondary">GitHub</Button>}
      </div>
    </Card>
  );
}
