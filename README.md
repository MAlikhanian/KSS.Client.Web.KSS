# KSS website

A bilingual marketing site: Persian at `/`, English at `/en`, with light and dark
Kiwi Seed themes. The theme follows the system preference and can be switched for
the current page without cookies or browser storage.

The bilingual service catalogue is in `components/services.ts`, with explicit
Available, Pilot and Roadmap statuses. Public contact details are in
`components/contact.ts`; the contact block has no form. Company registration
values in `components/public-data.ts` appear with Persian digits on the Persian
page and Latin digits on the English page; empty or undefined values render no line.
The fluid layout expands across large displays while keeping body text readable.

The visitor counter is hidden until real counts are available. Its data slot in
`components/public-data.ts` is null by default, and its component returns nothing
for missing or invalid counts. No demo counts are included. There is no visitor
request, beacon or analytics backend in this version.

Use Node.js 22.14 or later and npm 11.6.0.

```sh
npx --yes npm@11.6.0 ci
npm run dev
```

Development uses port 3200. Checks:

```sh
npm run typecheck
npm run lint
npm run build
npx --yes npm@11.6.0 audit
```

The build produces `.next/standalone`. The Dockerfile includes the standalone server,
static chunks, and public assets, running as a non-root user on port 8000.
`deployment/deployment.yaml` is the cluster manifest containing a Namespace, Deployment,
Service, PodDisruptionBudget, and Ingress with TLS for `kss.ir`.

`/api/health` returns `{"status":"ok"}`. Public canonical URLs use `https://kss.ir`.
The site has no authentication, forms, analytics, cookies, or external data source.
Fonts and images are served locally. Font licensing is in `public/fonts/OFL.txt`.
