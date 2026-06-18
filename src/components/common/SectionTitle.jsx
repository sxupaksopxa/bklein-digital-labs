export default function SectionTitle({ as: Tag = "h2", eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{eyebrow}</p>}
      <Tag className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
}
