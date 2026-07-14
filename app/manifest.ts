import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Evoris Dental Care & Implant Center",
    short_name: "Evoris Dental",
    description:
      "Dental implants, root canal, gum care and smile design by MDS specialists in Sector 8, Kharghar, Navi Mumbai.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#FDFBF7",
    lang: "en-IN",
    categories: ["health", "medical", "dentist"],
    icons: [
      { src: "/favicon.png", sizes: "any", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
