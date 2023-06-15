import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://picarchive.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://picarchive.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://picarchive.vercel.app/photos',
      lastModified: new Date(),
    },
    {
      url: 'https://picarchive.vercel.app/topics',
      lastModified: new Date(),
    },
    {
      url: 'https://picarchive.vercel.app/collections',
      lastModified: new Date(),
    },
  ]
}