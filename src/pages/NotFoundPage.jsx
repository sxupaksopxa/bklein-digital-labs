import { Helmet } from "react-helmet-async";
import Button from "../components/common/Button.jsx";

export default function NotFoundPage() {
  return (
    <section className="px-4 py-24 text-center">
      <Helmet>
        <title>Page Not Found — BKlein Digital Labs</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <h1 className="text-4xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}
