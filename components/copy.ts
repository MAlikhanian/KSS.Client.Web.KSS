export type Lang = 'fa' | 'en';

export const LEGAL_NAME_FA = 'شرکت راهکار هوشمند کیوی';

export const COPY = {
  fa: {
    title: `به‌زودی | ${LEGAL_NAME_FA} — KSS`,
    description: `وب‌سایت جدید ${LEGAL_NAME_FA} (KSS) به‌زودی راه‌اندازی می‌شود.`,
    eyebrow: 'وب‌سایت جدید در راه است',
    headingFirst: 'شروعی تازه،',
    headingSecond: 'به‌زودی.',
    company: LEGAL_NAME_FA,
    intro: 'در حال آماده‌سازی خانهٔ جدیدمان در وب هستیم. به‌زودی اینجا دیدار می‌کنیم.',
    switchHref: '/en',
    switchLang: 'en',
    switchLabel: 'English',
    languageNav: 'انتخاب زبان',
    home: 'صفحهٔ اصلی KSS',
    skip: 'رفتن به محتوای اصلی',
    footer: `© ۲۰۲۶ ${LEGAL_NAME_FA}`,
    footerNote: 'آغازی تازه در همین نشانی',
  },
  en: {
    title: 'KSS — Our new website is coming soon',
    description: 'The new KSS website is on its way. A new chapter, at the same address: kss.ir.',
    eyebrow: 'A new website is on its way',
    headingFirst: 'A new chapter.',
    headingSecond: 'Coming soon.',
    company: 'KSS',
    intro: 'We’re preparing our new home on the web. We look forward to welcoming you here soon.',
    switchHref: '/',
    switchLang: 'fa',
    switchLabel: 'فارسی',
    languageNav: 'Choose language',
    home: 'KSS home',
    skip: 'Skip to content',
    footer: '© 2026 KSS. All rights reserved.',
    footerNote: 'A fresh start. The same address.',
  },
} as const;
