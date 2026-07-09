import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/treatments",
    "/periodontics-implants",
    "/root-canal-dentistry",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
