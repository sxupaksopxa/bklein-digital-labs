import Card from "../common/Card.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

const items = [
  "Practical AI over abstract promises",
  "Real users before perfect products",
  "Collaboration between domain experts and builders",
  "Transparent learning, testing, and improvement",
];

export default function VisionSection() {
  return (
    <section className="px-4 py-16">
      <SectionTitle
        eyebrow="Our approach"
        title="Observation → Prototype → Validate → Implement"
        description="BKlein Digital Labs explores real-world challenges, builds practical prototypes, validates them through feedback, and evolves them into usable AI solutions."
      />
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-4">
        {items.map((item) => (
          <Card key={item}>
            <p className="font-semibold text-slate-950">{item}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
