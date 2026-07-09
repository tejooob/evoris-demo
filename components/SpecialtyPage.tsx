import DoctorCard from "@/components/DoctorCard";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingButtons from "@/components/FloatingButtons";
import SiteEnhancements from "@/components/SiteEnhancements";
import type { Doctor } from "@/lib/doctors";
import { services } from "@/lib/services";
import { PHONE } from "@/lib/site";

type Faq = { q: string; a: string };
type Step = { title: string; desc: string };

export default function SpecialtyPage({
  kicker,
  title,
  lede,
  conditions,
  serviceSlugs,
  doctor,
  steps,
  faqs,
  otherSpecialty,
}: {
  kicker: string;
  title: string;
  lede: React.ReactNode;
  conditions: string[];
  serviceSlugs: string[];
  doctor: Doctor;
  steps: Step[];
  faqs: Faq[];
  otherSpecialty: { href: string; label: string };
}) {
  const relatedServices = services.filter((s) => serviceSlugs.includes(s.slug));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="section tx-hero">
          <div className="wrap">
            <p className="tx-back">
              <a href="/">&larr; Back to home</a>
            </p>
            <div className="gold-rule" />
            <p className="sp-kicker">{kicker}</p>
            <h1>{title}</h1>
            <p className="tx-lede">{lede}</p>
            <div className="sp-hero-cta">
              <a className="btn btn-gold" href="/#book">
                Book an appointment
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE}`}>
                Call 91371 61693
              </a>
            </div>
          </div>
        </section>

        <section className="section sp-conditions">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Conditions &amp; concerns we treat</h2>
            </div>
            <ul className="sp-condition-list">
              {conditions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Treatments under this specialty</h2>
            </div>
            <div className="svc-grid">
              {relatedServices.map((s, i) => (
                <article className="svc-card reveal" style={{ ["--i"]: i } as React.CSSProperties} key={s.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/services/${s.slug}.jpg`} alt={s.alt} loading="lazy" />
                  <div className="svc-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="sp-more-link">
              <a href="/treatments">See all treatments at Evoris &rarr;</a>
            </p>
          </div>
        </section>

        <section className="section doctors">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Meet your specialist</h2>
            </div>
            <DoctorCard doctor={doctor} />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>What to expect</h2>
            </div>
            <ol className="sp-steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="sp-step-num">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section sp-faq">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Frequently asked questions</h2>
            </div>
            <div className="sp-faq-list">
              {faqs.map((f) => (
                <details className="sp-faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section tx-list">
          <div className="wrap">
            <div className="tx-cta">
              <a className="btn btn-gold" href="/#book">
                Book an appointment
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE}`}>
                Call 91371 61693
              </a>
            </div>
            <p className="sp-cross-link">
              Looking for something else? <a href={otherSpecialty.href}>{otherSpecialty.label} &rarr;</a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingButtons />
      <SiteEnhancements />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
