import { MetadataRoute } from "next";

const BASE_URL = "https://projectkaro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/how-it-works",
    "/about",
    "/start-a-project",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : path === "/start-a-project" ? 0.9 : 0.8,
  }));
}
