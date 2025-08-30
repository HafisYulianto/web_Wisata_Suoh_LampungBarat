import type { MetadataRoute } from 'next'
import data from '@/lib/data/attractions'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com' // ganti saat deploy
  const items = data.map(d => ({ url: `${base}/attractions/${d.id}`, lastModified: new Date() }))
  return [
    { url: `${base}/`, lastModified: new Date() },
    ...items
  ]
}
