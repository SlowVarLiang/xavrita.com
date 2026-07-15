import { MetadataRoute } from 'next'
import { html5Games } from '@/lib/html5-games'
import { collections } from '@/lib/collections'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xavrito.com'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/favorites`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wiki`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // Game pages
  const gamePages: MetadataRoute.Sitemap = html5Games.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: game.featured ? 0.9 : 0.7,
  }))

  // Wiki pages
  const wikiPages: MetadataRoute.Sitemap = html5Games.slice(0, 20).map((game) => ({
    url: `${baseUrl}/wiki/${game.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  }))

  // Collection pages
  const collectionPages: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...gamePages, ...wikiPages, ...collectionPages]
}
