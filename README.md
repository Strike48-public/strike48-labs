# Strike48 Labs

Documentation and content site for the Strike48 desktop platform — **StrikeHub**, **KubeStudio**, and **Pick**.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

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

## Project Structure

```
src/
├── assets/              # Logos, images
├── components/          # Astro components (Hero, ProductCard, etc.)
├── content/docs/        # MDX documentation pages
│   ├── strikehub/       # StrikeHub docs
│   ├── kubestudio/      # KubeStudio docs
│   ├── pick/            # Pick docs
│   └── shared/          # FAQ, troubleshooting
├── pages/index.astro    # Landing page
└── styles/              # CSS overrides
```

## Contributing

1. Create a branch
2. Edit or add `.mdx` files in `src/content/docs/`
3. Run `npm run dev` to preview
4. Open a PR

Starlight docs: https://starlight.astro.build

## License

MPL-2.0
