# KSS website

A bilingual coming-soon site: Persian at `/`, English at `/en`.

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
