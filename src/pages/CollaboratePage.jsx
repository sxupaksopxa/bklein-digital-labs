import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/common/SectionTitle.jsx";
import TesterSection from "../components/collaborate/TesterSection.jsx";
import PartnerSection from "../components/collaborate/PartnerSection.jsx";
import ContributorSection from "../components/collaborate/ContributorSection.jsx";

export default function CollaboratePage() {
  return (
    <section className="px-4 py-16">
      <Helmet>
        <title>Collaborate — BKlein Digital Labs</title>
        <meta name="description" content="Test prototypes, share feedback, and build practical AI solutions together with BKlein Digital Labs." />
      </Helmet>
      <SectionTitle
        as="h1"
        eyebrow="Collaborate"
        title="Explore and build AI solutions together"
        description="BKlein Digital Labs welcomes customers, partners, and contributors who want to test prototypes, improve tools, and help shape future AI solutions."
      />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        <TesterSection />
        <PartnerSection />
        <ContributorSection />
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-slate-600">
        Collaboration helps move projects from observation and prototyping
        to validation, improvement, and practical implementation.
      </p>
    </section>
  );
}
