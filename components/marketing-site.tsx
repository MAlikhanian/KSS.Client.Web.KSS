import Image from "next/image";
import Link from "next/link";
import { LEGAL_NAME_FA, type Lang } from "./copy";
import { COPY } from "./marketing-copy";
import { services, serviceGroups, type ServiceIcon } from "./services";
import { contact } from "./contact";
import { VisitorCounter } from "./visitor-counter";
import { companyRegistration, visitorCounts } from "./public-data";
import { jsonLd } from "./site";
import { ThemeToggle } from "./theme-toggle";

function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "brand brand-small" : "brand"}>
      <Image
        className="brand-light"
        src="/wordmark.svg"
        width={308}
        height={116}
        alt="KSS"
        priority={!small}
      />
      <Image
        className="brand-dark"
        src="/wordmark-dark.svg"
        width={308}
        height={116}
        alt="KSS"
        priority={!small}
      />
    </span>
  );
}

function Arrow({ up = false }: { up?: boolean }) {
  return (
    <svg
      className={up ? "arrow arrow-up" : "arrow"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function ServiceGlyph({ name }: { name: ServiceIcon }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "layers" && (
        <>
          <path d="m16 4 12 6-12 6L4 10Z" />
          <path d="m4 16 12 6 12-6M4 22l12 6 12-6" />
        </>
      )}
      {name === "connections" && (
        <>
          <rect x="3" y="3" width="9" height="9" rx="2" />
          <rect x="20" y="20" width="9" height="9" rx="2" />
          <path d="M20 7h3a2 2 0 0 1 2 2v7M7 20v3a2 2 0 0 0 2 2h7M12 12l8 8" />
        </>
      )}
      {name === "spark" && (
        <>
          <path d="m16 3 3.5 9.5L29 16l-9.5 3.5L16 29l-3.5-9.5L3 16l9.5-3.5Z" />
          <path d="M26 3v6m-3-3h6" />
        </>
      )}
      {name === "network" && (
        <>
          <rect x="11" y="3" width="10" height="8" rx="2" />
          <path d="M16 11v7M7 22v-4h18v4" />
          <rect x="3" y="22" width="8" height="7" rx="2" />
          <rect x="21" y="22" width="8" height="7" rx="2" />
        </>
      )}
      {name === "support" && (
        <>
          <path d="M5 18v-3a11 11 0 0 1 22 0v8a5 5 0 0 1-5 5h-6" />
          <rect x="3" y="15" width="6" height="10" rx="3" />
          <rect x="23" y="15" width="6" height="10" rx="3" />
        </>
      )}
    </svg>
  );
}

export function MarketingSite({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const formatIdentifier = (value: string) =>
    lang === "fa"
      ? value.replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])
      : value;
  return (
    <>
      <a className="skip-link" href="#main">
        {c.skip}
      </a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Link
            className="home-link"
            href={lang === "fa" ? "/" : "/en"}
            aria-label={c.home}
          >
            <Brand />
          </Link>
          <nav className="main-nav" aria-label={c.nav}>
            <a href="#services">{c.services}</a>
            <a href="#approach">{c.why}</a>
            <a href="#contact">{c.contact}</a>
          </nav>
          <div className="header-tools">
            <Link
              className="language-link"
              href={c.switchHref}
              hrefLang={c.switchLang}
              lang={c.switchLang}
              aria-label={`${c.languageNav}: ${c.switchLabel}`}
            >
              {c.switchLabel}
            </Link>
            <ThemeToggle label={c.theme} />
          </div>
        </div>
      </header>
      <main id="main">
        <section className="container hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-seed" aria-hidden="true" />
              {c.eyebrow}
            </p>
            <h1 id="hero-title">
              {c.heading}
              <span>{c.headingAccent}</span>
            </h1>
            <p className="hero-intro">{c.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {c.heroAction}
                <Arrow />
              </a>
              <a className="text-link" href="#services">
                {c.heroSecondary}
              </a>
            </div>
            <p className="hero-note">
              <span aria-hidden="true">↗</span>
              {c.heroNote}
            </p>
          </div>
          <figure className="seed-story" aria-label={c.diagramLabel}>
            <div className="story-heading">
              <span className="story-dot" aria-hidden="true" />
              <span>{c.diagramTop}</span>
              <span className="story-index" aria-hidden="true">
                K / 01
              </span>
            </div>
            <div className="seed-garden" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="garden-axis axis-one" />
              <div className="garden-axis axis-two" />
              <div className="central-seed">
                <Image
                  className="brand-light"
                  src="/icon.svg"
                  width={128}
                  height={128}
                  alt=""
                />
                <Image
                  className="brand-dark"
                  src="/icon-dark.svg"
                  width={128}
                  height={128}
                  alt=""
                />
              </div>
              <span className="garden-node node-one">
                <span className="node-symbol">+</span>
                {c.diagramIdea}
              </span>
              <span className="garden-node node-two">
                <span className="node-symbol">↗</span>
                {c.diagramGrowth}
              </span>
              <span className="garden-node node-three">
                <span className="node-symbol">◎</span>
                {c.diagramClarity}
              </span>
              <span className="garden-speck speck-one" />
              <span className="garden-speck speck-two" />
            </div>
            <figcaption>
              <span className="story-caption">{c.diagramTitle}</span>
              <span className="story-caption-sub">{c.diagramBottom}</span>
            </figcaption>
          </figure>
        </section>
        <div className="container trust-line">
          <span className="small-seed" aria-hidden="true" />
          <p>{c.trust}</p>
        </div>
        <section
          className="section services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{c.servicesEyebrow}</p>
                <h2 id="services-title">{c.servicesTitle}</h2>
              </div>
              <p className="section-intro">{c.servicesIntro}</p>
            </div>
            <div className="catalogue">
              {serviceGroups.map((group) => (
                <details
                  className="catalogue-group"
                  name="service-catalogue"
                  key={group.id}
                  open={group.id === "software"}
                >
                  <summary>
                    <span className="group-icon">
                      <ServiceGlyph name={group.icon} />
                    </span>
                    <h3>{group.name[lang]}</h3>
                    <span className="group-count">
                      {new Intl.NumberFormat(lang).format(
                        services.filter((s) => s.group === group.id).length,
                      )}{" "}
                      {c.serviceCount}
                    </span>
                    <span className="group-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="service-grid">
                    {services
                      .filter((service) => service.group === group.id)
                      .map((service) => (
                        <article
                          className="service-card"
                          key={service.id}
                          data-service-id={service.id}
                        >
                          <div className="card-top">
                            <span
                              className={`availability availability-${service.availability}`}
                            >
                              {c.availability[service.availability]}
                            </span>
                            <span className="card-number" aria-hidden="true">
                              {service.id}
                            </span>
                          </div>
                          <h4>{service.name[lang]}</h4>
                          <p>{service.oneLiner[lang]}</p>
                          <a
                            className="card-bottom"
                            href="#contact"
                            aria-label={`${c.serviceFoot}: ${service.name[lang]}`}
                          >
                            <span>{c.serviceFoot}</span>
                            <Arrow />
                          </a>
                        </article>
                      ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="container section approach-section"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="approach-intro">
            <p className="eyebrow">{c.whyEyebrow}</p>
            <h2 id="approach-title">{c.whyTitle}</h2>
            <p className="section-intro">{c.whyIntro}</p>
            <div className="growth-art" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="principles">
            {c.principles.map((principle, i) => (
              <article className="principle" key={principle.title}>
                <span className="principle-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="container contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">{c.contactEyebrow}</p>
              <h2 id="contact-title">{c.contactTitle}</h2>
              <p>{c.contactIntro}</p>
            </div>
            <div className="contact-details">
              <dl>
                <div>
                  <dt>{c.email}</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`} dir="ltr">
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>{c.phone}</dt>
                  <dd>
                    <a href={`tel:${contact.phoneInternational}`} dir="ltr">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="contact-note">{c.contactNote}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand small />
            <p>{c.footerTag}</p>
          </div>
          <div className="company-details">
            <p className="company-name">{c.footerCompany}</p>
            {lang === "en" && (
              <p className="legal-name" lang="fa" dir="rtl">
                {LEGAL_NAME_FA}
              </p>
            )}
            {companyRegistration.registrationNumber?.trim() && (
              <p className="registration-number">
                {c.registration}:{" "}
                <bdi>
                  {formatIdentifier(companyRegistration.registrationNumber)}
                </bdi>
              </p>
            )}
            {companyRegistration.nationalId?.trim() && (
              <p className="national-id">
                {c.nationalId}:{" "}
                <bdi>{formatIdentifier(companyRegistration.nationalId)}</bdi>
              </p>
            )}
          </div>
        </div>
        <VisitorCounter counts={visitorCounts} lang={lang} />
        <div className="footer-bottom">
          <span>{c.copyright}</span>
          <a href="#top">
            {c.backTop}
            <Arrow up />
          </a>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd() }}
      />
    </>
  );
}
