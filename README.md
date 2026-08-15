<div align="center">

# ✦ KaiumMarketing V7 PRO

### Performance-focused marketing & advertising for ambitious businesses.

**Performance · Strategy · Measurable Results**

[![Live Site](https://img.shields.io/badge/Live-kaiummkt.vercel.app-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://kaiummkt.vercel.app)
[![Custom Domain](https://img.shields.io/badge/Custom-marketing.wafikaium.com-38bdf8?style=for-the-badge&logo=google-chrome&logoColor=white)](https://marketing.wafikaium.com)
[![Pages](https://img.shields.io/badge/Pages-8-ec4899?style=for-the-badge&logo=html5&logoColor=white)](.)
[![Status](https://img.shields.io/badge/Status-Production-22c55e?style=for-the-badge&logo=checkmarble&logoColor=white)](https://kaiummkt.vercel.app)

</div>

---

## What is KaiumMarketing?

A **data-driven marketing agency** built around measurable results, honest strategy, and campaigns that actually work.

> We grow brands. We build momentum. We build revenue.

The V7 PRO build is the production-grade release of the KaiumMarketing web platform — premium dark UI, performance-focused architecture, fully responsive, and deploy-ready for both **Vercel** and **GitHub Pages**.

---

## 🎨 Design language

| Token | Value | Use |
|---|---|---|
| `--bg` | `#07070b` | Page background (deep dark) |
| `--panel` | `#101017` | Card surfaces |
| `--panel2` | `#15151f` | Elevated surfaces |
| `--text` | `#f7f7fb` | Primary text |
| `--violet` | `#8b5cf6` | Primary accent / hero CTA |
| `--blue` | `#38bdf8` | Secondary accent |
| `--pink` | `#ec4899` | Tertiary accent / highlights |
| `--green` | `#22c55e` | Status / success states |

**Fonts:** DM Sans (body) + Manrope (display headings) via Google Fonts.

**Theme:** Premium-dark with system-aware light variant — toggle button in header (◐).

---

## 📄 Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, services, selected work, process, testimonials, CTAs |
| Services | `services.html` | Service catalog with deliverables (data/services.json) |
| Portfolio | `portfolio.html` | Case studies + full portfolio grid |
| About | `about.html` | Brand, positioning, team story |
| Insights | `blog.html` | Blog archive (n8n-ready for future CMS) |
| Contact | `contact.html` | Strategy call brief form |
| Privacy | `privacy.html` | Privacy policy |
| Terms | `terms.html` | Terms of service |

---

## 🧩 Sections (Homepage)

1. **Hero** — "We grow brands. We build momentum." + dual CTAs + animated gradient
2. **Built For** — scrolling ticker: STARTUPS · LOCAL BUSINESSES · ECOMMERCE · CREATORS · GROWING BRANDS · SAAS COMPANIES
3. **Stats** — Campaigns Launched · Client Retention Rate · Average ROAS · Strategy Call to Launch
4. **What We Do** — 6 service cards (Meta Ads, Google Ads, Social Media, Lead Gen, Performance Marketing, Creative & Ad Design)
5. **Performance Marketing pitch** — "Don't just run ads. Run a system."
6. **Selected Work** — 4 case-study cards with verified metrics
7. **Process** — Discover → Plan → Launch → Optimize
8. **Client Feedback** — testimonials grid
9. **Contact CTAs** — strategy call booking

---

## 🛠 Services

| Service | Description | Key deliverables |
|---|---|---|
| **Meta Ads** | Facebook & Instagram advertising | Strategy · Audience · Creative testing · Optimization |
| **Google Ads** | Search & performance advertising | Keywords · Campaign architecture · Ad copy · Tracking |
| **Social Media Marketing** | Strategy, content & growth | Pillars · Calendar · Creative · Review |
| **Lead Generation** | Funnels that turn attention into qualified leads | Funnel plan · Landing pages · Lead forms · CRM |
| **Performance Marketing** | Full-funnel system design | KPIs · Testing roadmap · Creative · Dashboards |
| **Creative & Ad Design** | Conversion-focused ad creative | Static · Carousel · Video direction · Iteration |

Source: [`data/services.json`](./data/services.json)

---

## 📦 Content surface

```text
marketing-v7-pro/
├── index.html              # Home / hero
├── services.html           # Service catalog
├── portfolio.html          # Case studies
├── about.html              # About + team
├── blog.html               # Insights archive
├── contact.html            # Strategy call form
├── privacy.html
├── terms.html
├── css/
│   └── style.css           # V7 PRO stylesheet (dark + light theme)
├── js/
│   ├── app.js              # Theme toggle, mobile menu, reveal animations
│   ├── services.js         # Service cards from data/services.json
│   └── portfolio.js        # Portfolio grid from data/portfolio.json
├── data/
│   ├── brand.json          # Brand identity + position
│   ├── services.json       # Service catalog
│   └── portfolio.json      # Case study seed data
├── assets/
│   ├── logo.svg
│   ├── favicon.svg
│   └── icons (commerce, dashboard, leads, search, social)
├── docs/
│   ├── ARCHITECTURE.md
│   ├── SEO.md
│   ├── N8N-INTEGRATION.md
│   ├── CONTENT-CHECKLIST.md
│   └── README.md
├── .github/workflows/
│   ├── pages.yml           # GitHub Pages deployment
│   └── quality.yml         # File structure check
├── manifest.webmanifest    # PWA
├── robots.txt
├── sitemap.xml
├── CNAME                   # marketing.wafikaium.com
└── README.md
```

---

## ✨ V7 PRO features

- ✅ Premium **dark theme** + system-aware **light theme** toggle
- ✅ **Reveal-on-scroll** animations (IntersectionObserver)
- ✅ **Sticky header** with scroll-shadow
- ✅ **Mobile menu** with smooth open/close
- ✅ **PWA** installable (manifest + favicon)
- ✅ **SEO foundation** — canonical, OG, Twitter cards, schema.org JSON-LD
- ✅ **Schema.org metadata** — Organization/ProfessionalService type
- ✅ **Sitemap + robots.txt** — search-ready
- ✅ **GitHub Pages workflow** — auto-deploy on push
- ✅ **Quality workflow** — file structure CI check
- ✅ **n8n integration docs** — webhook-ready contact form
- ✅ **Dark/Light CSS variables** — single source of truth
- ✅ **Static-host friendly** — no backend, no build step, no database

---

## 🔌 Integrations (production-ready hooks)

- **n8n webhook** — connect `contact.html` form to your CRM / Google Sheets / Telegram (see [`docs/N8N-INTEGRATION.md`](./docs/N8N-INTEGRATION.md))
- **GA4** — drop the measurement ID in `.env.example` (`GA4_MEASUREMENT_ID`) and wire into the page
- **Meta Pixel** — same pattern via `META_PIXEL_ID`
- **Custom domain** — `CNAME` is pre-set to `marketing.wafikaium.com` (Vercel + GitHub Pages both honor it)

Secrets stay out of the repo — see `.gitignore` + `.env.example`.

---

## 🚀 Deployment

### Vercel (current production)

```bash
npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```

Live at: **[kaiummkt.vercel.app](https://kaiummkt.vercel.app)** → aliased to **marketing.wafikaium.com**

### GitHub Pages (alternate)

`.github/workflows/pages.yml` auto-deploys on push to `main`. Keep `CNAME` at the repository root.

---

## 📋 Before-launch checklist

See [`docs/CONTENT-CHECKLIST.md`](./docs/CONTENT-CHECKLIST.md):

- [ ] Replace sample portfolio cards with real verified client work
- [ ] Add real client testimonials only with permission
- [ ] Replace any placeholder metrics with verified numbers (or remove them)
- [ ] Add real social links (Facebook / Instagram / LinkedIn placeholders are placeholders)
- [ ] Connect contact form to n8n / CRM
- [ ] Add GA4 and Meta Pixel **only after consent / privacy setup**
- [ ] Review legal pages for your business / jurisdiction
- [ ] Test mobile, keyboard navigation and forms

---

## 🏷 Brand & contact

- **Brand:** KaiumMarketing
- **Live site:** https://marketing.wafikaium.com (production) · https://kaiummkt.vercel.app (Vercel alias)
- **Portfolio:** https://wafikaium.com
- **Email:** wafikaium@gmail.com
- **GitHub:** https://github.com/creativeai7intellizone-hub/marketing-v7-pro

---

## 📜 License

© KaiumMarketing. All rights reserved. Sample visuals and placeholder case-study language are intentionally labeled — replace with real client work before publishing.
