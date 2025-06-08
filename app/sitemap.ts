import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shiva-fs-dev.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://shiva-fs-dev.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://shiva-fs-dev.vercel.app/skills',
      lastModified: new Date(),
    },
    {
      url: 'https://shiva-fs-dev.vercel.app/achievements',
      lastModified: new Date(),
    },
    {
      url: 'https://shiva-fs-dev.vercel.app/education',
      lastModified: new Date(),
    },
    {
      url: 'https://shiva-fs-dev.vercel.app/contact',
      lastModified: new Date(),
    },
  ];
}
