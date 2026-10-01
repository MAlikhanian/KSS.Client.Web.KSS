import type { MetadataRoute } from 'next';
import { LANGUAGES } from '@/components/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [LANGUAGES.fa, LANGUAGES.en].map((url) => ({ url, alternates: { languages: LANGUAGES } }));
}
