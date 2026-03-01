import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://felipevargas.vercel.app"

  const staticPages = [
    "",
    "/projects",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === "" ? 1.0 : 0.8,
  }))

  return sitemapEntries
}
