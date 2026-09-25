import type { MetadataRoute } from "next"
import { site } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/support", "/resources"].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
