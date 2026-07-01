import Button from "../common/Button.jsx";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Building practical AI solutions for a digital world
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We explore, build, and validate AI experiences through real-world feedback,
            collaboration, and continuous improvement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/projects">Explore projects</Button>
            <Button to="/collaborate" variant="secondary">Build with us</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">What we are building</p>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <p>Practical AI solutions and digital tools for governance, productivity, knowledge management, and digital safety.</p>
            <p className="font-semibold text-slate-950">Test a project. Share feedback. Build with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
