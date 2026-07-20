import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingButtons from "@/components/FloatingButtons";
import SiteEnhancements from "@/components/SiteEnhancements";
import { services } from "@/lib/services";
import { PHONE, SITE_URL } from "@/lib/site";

const TX_DESCRIPTION =
  "Dental treatments at Evoris Dental Care & Implant Center, Kharghar: painless dentistry, single-sitting root canal treatments, immediate dental implants, aligners, smile design, veneers, gum care, kids' dentistry, dentures and full mouth rehabilitation.";

export const metadata: Metadata = {
  title: "Treatments",
  description: TX_DESCRIPTION,
  alternates: { canonical: "/treatments" },
  openGraph: {
    type: "website",
    url: "/treatments",
    title: "Dental Treatments at Evoris | Kharghar, Navi Mumbai",
    description: TX_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Treatments at Evoris | Kharghar, Navi Mumbai",
    description: TX_DESCRIPTION,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments/` },
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dental treatments at Evoris Dental Care & Implant Center",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.desc,
      url: `${SITE_URL}/treatments/#${s.slug}`,
      provider: { "@id": `${SITE_URL}/#clinic` },
    },
  })),
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
              From painless Root Canal Treatments to immediate dental implants,
              aligners and full-mouth rehabilitation, every treatment is planned and
              performed in-house by our two MDS specialists, with clear costs
              explained up front.
            </p>
            <p className="tx-specialty-links">
              Gum disease and dental implants are led by{" "}
              <a href="/periodontics-implants/">periodontics &amp; dental implants</a>{" "}
              with Dr. Shashank Deshpande. Root canals, veneers and smile design are led
              by <a href="/root-canal-dentistry/">root canal &amp; restorative dentistry</a>{" "}
              with Dr. Shivani Vyavahare Deshpande.
            </p>
          </div>
        </section>

        <section className="section tx-list">
          <div className="wrap">
            <div className="svc-grid">
              {services.map((s, i) => (
                <article
                  className="svc-card reveal"
                  id={s.slug}
                  style={{ ["--i"]: i } as React.CSSProperties}
                  key={s.slug}
                >
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </>
  );
}
