import type { Metadata } from 'next';
import { COPY, LEGAL_NAME_FA, type Lang } from './copy';

export const SITE_URL = 'https://kss.ir';
export const PATHS: Record<Lang, string> = { fa: '/', en: '/en' };
export const LANGUAGES = { fa: `${SITE_URL}/`, en: `${SITE_URL}/en`, 'x-default': `${SITE_URL}/` };

export function pageMetadata(lang: Lang): Metadata {
  const copy = COPY[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: copy.title,
    description: copy.description,
    applicationName: 'KSS',
    alternates: { canonical: `${SITE_URL}${PATHS[lang]}`, languages: LANGUAGES },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${PATHS[lang]}`,
      siteName: 'KSS',
      title: copy.title,
      description: copy.description,
      locale: lang === 'fa' ? 'fa_IR' : 'en_US',
      alternateLocale: [lang === 'fa' ? 'en_US' : 'fa_IR'],
      images: [{ url: `${SITE_URL}/share.png`, width: 1200, height: 630, alt: 'KSS — Coming soon' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [{ url: `${SITE_URL}/share.png`, alt: 'KSS — Coming soon' }],
    },
    icons: {
      icon: [
        { url: `${SITE_URL}/favicon.ico`, sizes: '32x32' },
        { url: `${SITE_URL}/icon.svg`, type: 'image/svg+xml' },
      ],
      apple: [{ url: `${SITE_URL}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
    },
  };
}

export function jsonLd(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'KSS',
        legalName: LEGAL_NAME_FA,
        alternateName: LEGAL_NAME_FA,
        url: `${SITE_URL}/`,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'KSS',
        url: `${SITE_URL}/`,
        inLanguage: ['fa', 'en'],
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }).replace(/</g, '\\u003c');
}
