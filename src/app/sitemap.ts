import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/websites-for-businesses", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/academic-projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/how-it-works", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/start-a-project", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_CONFIG.url}${path}` : `${SITE_CONFIG.url}/`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
