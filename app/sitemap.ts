import { MetadataRoute } from 'next'
import { projects } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hietakoski.fi'

  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/kohteet/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: project.status === 'Myynnissä' || project.status === 'Vuokrattavana'
      ? 'weekly'
      : 'monthly',
    priority: project.status === 'Myynnissä' || project.status === 'Vuokrattavana'
      ? 0.8
      : 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/kohteet`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rakentaminen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/yhteystiedot`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tietosuoja`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...projectUrls,
  ]
}
