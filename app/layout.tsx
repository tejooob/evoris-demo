import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL, GSC_VERIFICATION, GOOGLE_REVIEWS } from "@/lib/site";
import { services } from "@/lib/services";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const DESCRIPTION =
  "Evoris Dental Care & Implant Center, Sector 8, Kharghar, Navi Mumbai. Dental implants, microscopic root canals, gum care and smile design by MDS specialists. Call 91371 61693.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Evoris Dental Care & Implant Center | Dentist in Kharghar, Navi Mumbai",
    template: "%s | Evoris Dental Care",
  },
  description: DESCRIPTION,
  applicationName: "Evoris Dental Care & Implant Center",
  keywords: [
    "dentist Kharghar",
    "dental implants Navi Mumbai",
    "root canal Kharghar",
    "MDS dentist Sector 8 Kharghar",
    "gum specialist Kharghar",
    "smile design Navi Mumbai",
    "dental clinic Kharghar",
  ],
  authors: [{ name: "Evoris Dental Care & Implant Center" }],
  creator: "Evoris Dental Care & Implant Center",
  publisher: "Evoris Dental Care & Implant Center",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Evoris Dental Care & Implant Center",
    title: "Evoris Dental Care & Implant Center | Dentist in Kharghar, Navi Mumbai",
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Evoris Dental Care & Implant Center — Dentist in Sector 8, Kharghar, Navi Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evoris Dental Care & Implant Center | Kharghar, Navi Mumbai",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  category: "health",
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFBF7",
};

// Structured data (schema.org) for local SEO, rich results, answer engines
// (AEO) and generative engines (GEO). One @graph so entities can cross-link
// by @id, which search and LLM crawlers resolve into a single knowledge object.
const clinic = {
  "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
  "@id": `${SITE_URL}/#clinic`,
  name: "Evoris Dental Care & Implant Center",
  alternateName: "Evoris Dental Care",
  slogan: "Where your care truly matters",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+91-9137161693",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  image: [`${SITE_URL}/og.png`, `${SITE_URL}/logo.png`],
  logo: `${SITE_URL}/logo.png`,
  hasMap: GOOGLE_REVIEWS,
  sameAs: [GOOGLE_REVIEWS],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 3, Vasundhara-II CHS, Sector 8, Kharghar",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "410210",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.0392,
    longitude: 73.0696,
  },
  areaServed: [
    { "@type": "City", name: "Kharghar" },
    { "@type": "City", name: "Navi Mumbai" },
    { "@type": "City", name: "Panvel" },
    { "@type": "City", name: "Taloja" },
  ],
  medicalSpecialty: ["Periodontic", "Endodontic", "Implant Dentistry", "Cosmetic Dentistry"],
  knowsAbout: [
    "Dental implants",
    "Immediate dental implants",
    "Root canal treatment",
    "Gum disease treatment",
    "Cosmetic dentistry",
    "Smile design",
    "Full mouth rehabilitation",
    "Clear aligners",
  ],
  availableService: services.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.title,
    description: s.desc,
    url: `${SITE_URL}/treatments/#${s.slug}`,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
  employee: [
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/periodontics-implants/#dr-shashank`,
      name: "Dr. Shashank Deshpande",
      medicalSpecialty: "Periodontic",
      jobTitle: "Periodontist & Oral Implantologist (BDS, MDS)",
      worksFor: { "@id": `${SITE_URL}/#clinic` },
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/root-canal-dentistry/#dr-shivani`,
      name: "Dr. Shivani Vyavahare Deshpande",
      medicalSpecialty: "Endodontic",
      jobTitle: "Endodontist & Cosmetic Dental Surgeon (BDS, MDS)",
      worksFor: { "@id": `${SITE_URL}/#clinic` },
    },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Evoris Dental Care & Implant Center",
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#clinic` },
};

// speakable helps voice/answer engines pick the summary sentence to read aloud.
const webPage = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Evoris Dental Care & Implant Center | Dentist in Kharghar, Navi Mumbai",
  description: DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#clinic` },
  primaryImageOfPage: `${SITE_URL}/og.png`,
  inLanguage: "en-IN",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-tagline", ".hero-lede"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [clinic, website, webPage],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
