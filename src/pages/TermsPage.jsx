import { Helmet } from "react-helmet-async";

export default function TermsPage() {
  return (
    <section className="px-4 py-16">
      <Helmet>
        <title>Terms of Service — BKlein Digital Labs</title>
        <meta
          name="description"
          content="Terms of service for BKlein Digital Labs."
        />
      </Helmet>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-slate-600">Last updated: June 16, 2026</p>

        <div className="mt-10 space-y-8 text-slate-700">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">1. Agreement</h2>
            <p className="mt-2 leading-7">
              By accessing or using the BKlein Digital Labs website, you agree to these terms. If you do not agree, please do not use the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">2. Use of the Site</h2>
            <p className="mt-2 leading-7">
              The content on this site is provided for informational purposes. You may browse, read, and share links freely. You may not scrape, redistribute, or commercially exploit the content without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">3. External Links</h2>
            <p className="mt-2 leading-7">
              This site contains links to external projects and services. We are not responsible for the content, privacy practices, or availability of third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">4. Disclaimers</h2>
            <p className="mt-2 leading-7">
              Information on this site is provided "as is" without warranties of any kind. Project statuses and features may change without notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">5. Changes to Terms</h2>
            <p className="mt-2 leading-7">
              We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">6. Contact</h2>
            <p className="mt-2 leading-7">
              Questions about these terms can be sent to{" "}
              <a href="mailto:contact@bkleindigital.com" className="text-blue-700 hover:underline">
                contact@bkleindigital.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
