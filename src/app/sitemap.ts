import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://version-computer.vercel.app';
  return [
    {
      url: baseUrl,
      lastModified: '2026-10-27T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
