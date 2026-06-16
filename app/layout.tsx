import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

// Set this to the production domain before going live.
const SITE_URL = "https://www.evorisdental.com";

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

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23FDFBF7'/%3E%3Ctext x='16' y='23' font-family='Georgia' font-size='19' fill='%23a07c3a' text-anchor='middle'%3EE%3C/text%3E%3C/svg%3E";

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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Evoris Dental Care & Implant Center",
    title: "Evoris Dental Care & Implant Center | Dentist in Kharghar, Navi Mumbai",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Evoris Dental Care & Implant Center | Kharghar, Navi Mumbai",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: FAVICON },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFBF7",
};

// LocalBusiness / Dentist structured data for local SEO + rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#clinic`,
  name: "Evoris Dental Care & Implant Center",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+91-9137161693",
  priceRange: "₹₹",
  image: `${SITE_URL}/og.jpg`,
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
  areaServed: ["Kharghar", "Navi Mumbai", "Panvel", "Taloja"],
  medicalSpecialty: ["Periodontic", "Endodontic", "Implant Dentistry", "Cosmetic Dentistry"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "22:00",
    },
  ],
  employee: [
    {
      "@type": "Physician",
      name: "Dr. Shashank Deshpande",
      medicalSpecialty: "Periodontic",
      jobTitle: "Periodontist & Oral Implantologist (BDS, MDS)",
    },
    {
      "@type": "Physician",
      name: "Dr. Shivani Vyavahare Deshpande",
      medicalSpecialty: "Endodontic",
      jobTitle: "Endodontist & Cosmetic Dental Surgeon (BDS, MDS)",
    },
  ],
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
