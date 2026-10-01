import type { Viewport } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '@/components/site';
import '../globals.css';

export const metadata = pageMetadata('en');
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f5f4ed' };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <html lang="en" dir="ltr"><body>{children}</body></html>;
}
