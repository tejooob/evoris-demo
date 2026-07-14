import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Trailing slashes match the canonical URLs (next.config trailingSlash: true),
  // so crawlers hit the final URL without a redirect hop.
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/treatments/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/periodontics-implants/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/root-canal-dentistry/", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
