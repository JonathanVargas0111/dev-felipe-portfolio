import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://felipevargas.vercel.app"
  
  const staticPages = [
    "",
    "/about",
    "/projects", 
    "/contact",
    "/blog",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === "" ? 1.0 : 0.8,
  }))

  // Add dynamic project pages
  const projectSlugs = [
    "cristian-parra",
    "the-trickest", 
    "ask-and-create",
    "retos-frontend-mentor"
  ]

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...sitemapEntries, ...projectPages]
}