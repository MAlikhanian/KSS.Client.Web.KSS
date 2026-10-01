import type { Viewport } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '@/components/site';
import '../globals.css';

export const metadata = pageMetadata('fa');
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f5f4ed' };

export default function PersianLayout({ children }: { children: ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
