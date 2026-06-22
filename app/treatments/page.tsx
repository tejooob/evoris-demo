import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingButtons from "@/components/FloatingButtons";
import SiteEnhancements from "@/components/SiteEnhancements";
import { services } from "@/lib/services";
import { PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Dental treatments at Evoris Dental Care & Implant Center, Kharghar: painless dentistry, single-sitting root canals, dental implants, Invisalign, smile design, veneers, gum care, kids' dentistry, dentures and full mouth rehabilitation.",
  alternates: { canonical: "/treatments" },
};

export default function Treatments() {
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
            <h1>Treatments at Evoris</h1>
            <p className="tx-lede">
              From painless root canals to implants, Invisalign and full-mouth
              rehabilitation, every treatment is planned and performed in-house by our
              two MDS specialists, with clear costs explained up front.
            </p>
          </div>
        </section>

        <section className="section tx-list">
          <div className="wrap">
            <div className="svc-grid">
              {services.map((s, i) => (
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
            <div className="tx-cta">
              <a className="btn btn-gold" href="/#book">
                Book an appointment
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE}`}>
                Call 91371 61693
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingButtons />
      <SiteEnhancements />
    </>
  );
}
