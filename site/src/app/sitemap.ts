import { MetadataRoute } from "next";
import { acomodacoes } from "@/data/acomodacoes";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date();

  // Rotas institucionais e principais
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Rotas individuais de cada chalé e suíte (SSG dinâmico indexável)
  const roomRoutes: MetadataRoute.Sitemap = acomodacoes.map((quarto) => ({
    url: `${baseUrl}/acomodacoes/${quarto.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...roomRoutes];
}
