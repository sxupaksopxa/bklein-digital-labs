import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const articleLoaders = {
  "introducing-digital-trust-profile": () => import("../blog/introducing-digital-trust-profile.md?raw"),
  "building-ai-governance-classifier": () => import("../blog/building-ai-governance-classifier.md?raw"),
  "model-evaluation-beyond-benchmarks": () => import("../blog/model-evaluation-beyond-benchmarks.md?raw"),
};

export default function BlogArticle() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const loader = articleLoaders[slug];

    if (!loader) {
      setContent("# Article not found");
      return;
    }

    loader().then((module) => {
      setContent(module.default);
    });
  }, [slug]);


  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Helmet>
        <title>Blog Article — BKlein Digital Labs</title>
        <meta
          name="description" content="Blog Articles"
          content="Blog Articles for BKlein Digital Labs."
        />
      </Helmet>
      <Link
        to="/blog"
        className="text-sm font-medium text-emerald-700 hover:underline"
      >
        ← Back to Blog
      </Link>

      <article className="prose prose-slate mt-8 max-w-none prose-headings:text-slate-900 prose-a:text-emerald-700 prose-strong:text-slate-900">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </section>
  );
}