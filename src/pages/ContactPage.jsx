import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/common/SectionTitle.jsx";
import Card from "../components/common/Card.jsx";

const contacts = [
  {
    title: "LinkedIn",
    text: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ing-mba-begayym-tolomusheva-sscp-google-digital-gen-ai-leader-a55a403/",
  },
  {
    title: "GitHub",
    text: "View projects on GitHub",
    href: "https://github.com/sxupaksopxa",
  },
  {
    title: "Email",
    text: "contact@bkleindigital.com",
    href: "mailto:contact@bkleindigital.com?subject=BKlein%20Digital%20Labs%20Contact",
  },
];

export default function ContactPage() {
  return (
    <section className="px-4 py-16">
      <Helmet>
        <title>Contact — BKlein Digital Labs</title>
        <meta name="description" content="Reach out for feedback, testing, partnership ideas, contribution opportunities, or early customer discussions." />
      </Helmet>
      <SectionTitle
        as="h1"
        eyebrow="Contact"
        title="Start a conversation"
        description="Reach out for feedback, testing, partnership ideas, contribution opportunities, or early customer discussions."
      />
      <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block"
          >
            <Card className="h-full transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-bold text-slate-950">{contact.title}</h3>
              <p className="mt-3 text-sm text-slate-600">
                {contact.text}
              </p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
