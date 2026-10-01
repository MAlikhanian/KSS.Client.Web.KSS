import { COPY, type Lang } from './copy';
import { jsonLd } from './site';

export function ComingSoon({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{c.skip}</a>
      <header className="site-header">
        <a className="brand" href={lang === 'fa' ? '/' : '/en'} aria-label={c.home}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="wordmark" dir="ltr">KSS</span>
        </a>
        <nav aria-label={c.languageNav}>
          <a className="language-link" href={c.switchHref} hrefLang={c.switchLang} lang={c.switchLang} dir={c.switchLang === 'fa' ? 'rtl' : 'ltr'}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>
            {c.switchLabel}
          </a>
        </nav>
      </header>

      <main id="main" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />{c.eyebrow}</p>
          <h1>{c.headingFirst}<br /><span>{c.headingSecond}</span></h1>
          <p className="company">{c.company}</p>
          <p className="intro">{c.intro}</p>
          <div className="signature"><span className="signature-line" /><span dir="ltr">kss.ir</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <svg className="orbit" viewBox="0 0 520 540" fill="none">
            <defs>
              <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#8eaaa0" opacity=".38" /></pattern>
              <clipPath id="disc"><circle cx="260" cy="270" r="190" /></clipPath>
            </defs>
            <path fill="url(#grid)" d="M0 0h520v540H0z" />
            <circle cx="260" cy="270" r="225" stroke="#c9d5ca" strokeDasharray="2 9" />
            <circle cx="260" cy="270" r="190" fill="#e0e7d9" stroke="#809b89" />
            <g clipPath="url(#disc)" stroke="#799782" strokeWidth="1">
              {[0,1,2,3,4,5,6,7].map((i) => <ellipse key={i} cx="260" cy="270" rx={28 + i * 23} ry="190" transform="rotate(-35 260 270)" />)}
              {[0,1,2,3,4].map((i) => <ellipse key={i} cx="260" cy="270" rx="190" ry={24 + i * 34} transform="rotate(-35 260 270)" />)}
            </g>
            <circle cx="390" cy="82" r="10" fill="#254f42" />
            <circle cx="69" cy="397" r="6" fill="#c7d1a9" stroke="#254f42" />
            <path d="M413 451v24m-12-12h24M95 84v16m-8-8h16" stroke="#254f42" strokeWidth="1.5" />
            <rect x="194" y="235" width="132" height="70" rx="35" fill="#143d32" />
            <text x="260" y="282" textAnchor="middle" fill="#f5f3e9" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="700" letterSpacing="3">KSS</text>
          </svg>
          <span className="art-caption" dir="ltr">A NEW CHAPTER</span>
        </div>
      </main>

      <footer className="site-footer">
        <p>{c.footer}</p>
        <span className="footer-note">{c.footerNote}</span>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
    </div>
  );
}
