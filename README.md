# Strike48 Labs

Documentation and content site for the Strike48 platform — **Prospector Studio**, **StrikeHub**, **KubeStudio**, **Pick**, and **StrikeKit**.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Deployed on [Cloudflare Workers](https://developers.cloudflare.com/workers/).

**Live site:** https://docs.strike48.com

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

> Search requires a production build. Use `npm run build && npm run preview` to test it.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to Cloudflare Workers |

## Project Structure

```
src/
├── assets/              # Logos, images
├── components/          # Astro components
│   ├── Hero.astro       # Landing page hero
│   ├── NeuralGraph.astro # Interactive neural graph background
│   ├── CookieConsent.astro # Cookie consent banner + GA loader
│   ├── PageFrame.astro  # Starlight page frame override
│   ├── Head.astro       # Starlight head override
│   ├── Header.astro     # Custom header with nav links
│   ├── SiteTitle.astro  # App switcher dropdown
│   ├── PageTitle.astro  # Doc page title with breadcrumbs
│   ├── ProductCard.astro # Product showcase cards
│   └── FeatureGrid.astro # Feature grid layout
├── content/docs/        # MDX documentation pages
│   ├── prospector-studio/ # Prospector Studio docs
│   ├── strikehub/       # StrikeHub docs
│   ├── kubestudio/      # KubeStudio docs
│   ├── pick/            # Pick docs
│   ├── developers/      # SDK, API, StrikeKit docs
│   ├── legal/           # Terms, privacy, developer guidelines
│   ├── contributing/    # Contribution guidelines
│   ├── shared/          # FAQ, troubleshooting (draft)
│   └── media/           # Demos & media (draft)
├── pages/index.astro    # Landing page
├── styles/
│   ├── custom.css       # Starlight theme overrides
│   └── landing.css      # Landing page styles
└── utils/
    └── rehype-mermaid.ts # Mermaid diagram plugin
```

## Environment Variables

| Variable | Where | Description |
|----------|-------|-------------|
| `PUBLIC_GA_ID` | Cloudflare (Production) | Google Analytics measurement ID for production builds |
| `PUBLIC_GA_PREVIEW_ID` | Cloudflare (Preview) | Optional GA ID for preview builds |

GA is configured automatically using Cloudflare's `WORKERS_CI_BRANCH` build variable:

- **Main branch** → uses `PUBLIC_GA_ID` (no tracking if unset)
- **Preview branches** → uses `G-VEZGSQCDEP` (hardcoded)
- **Local dev** → GA never loads

GA only fires after the user accepts the cookie consent banner.

### Setting up in Cloudflare

1. **Workers & Pages** → select `strike48-labs` → **Settings** → **Variables and Secrets**
2. Under **Production**, add `PUBLIC_GA_ID` with your production measurement ID
3. Preview branches use `G-VEZGSQCDEP` by default — no config needed

## Draft Pages

Pages with `draft: true` in frontmatter are excluded from production builds but visible in dev. Currently drafted:

- Resources (FAQ, Troubleshooting)
- Demos & Media

## Contributing

1. Create a branch
2. Edit or add `.mdx` files in `src/content/docs/`
3. Run `npm run dev` to preview
4. Open a PR

Starlight docs: https://starlight.astro.build

## License

MPL-2.0
