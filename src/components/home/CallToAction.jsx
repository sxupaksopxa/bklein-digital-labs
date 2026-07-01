import Button from "../common/Button.jsx";

export default function CallToAction() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-12">
        <h2 className="text-2xl font-semibold md:text-4xl">Have feedback, an idea, or a use case?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          BKlein Digital Labs grows through testing, expert feedback, partnership ideas, and open-source contributions.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact" variant="secondary">Start a conversation</Button>
        </div>
      </div>
    </section>
  );
}
