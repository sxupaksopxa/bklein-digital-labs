import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle.jsx";

const articles = [
{
  title: "Introducing Digital Trust Profile",
  date: "01.07.2026",
  category: "Standards",
  description:
    "Why the AI era needs a machine-readable trust profile and how Digital Trust Profile aims to improve transparency for digital services and autonomous agents.",
  status: "Published",
  slug: "introducing-digital-trust-profile",
},
  {
    title: "Building an AI Governance Classifier",
    date: "01.07.2026",
    category: "AI Governance",
    description:
      "Lessons learned while developing the AI Governance Model Lab, including dataset creation, embeddings, and governance-focused classification.",
    status: "Published",
    slug: "building-ai-governance-classifier",
  },
  {
    title: "Model Evaluation Beyond Benchmarks",
    date: "01.07.2026",
    category: "AI Evaluation",
    description:
      "Why practical evaluation matters and how different AI models behave on real-world enterprise tasks.",
    status: "Published",
    slug: "model-evaluation-beyond-benchmarks",
  },
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        eyebrow="Blog"
        title="Articles, ideas, and project updates"
        description="I write about AI, software engineering, governance, digital trust, and lessons learned while building practical applications."
      />

      <div className="mt-12 space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span className="font-medium text-emerald-700">
                {article.status}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-slate-900">
              {article.title}
            </h3>les. 

            <p className="mt-3 leading-7 text-slate-600">
              {article.description}
            </p>

            <Link
              to={`/blog/${article.slug}`}
              className="mt-5 inline-block rounded-lg border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}