# ITAIMS Astro Starter

This repository bootstraps the new **ITAIMS.com** build using the purchased HTML theme inside an [Astro](https://astro.build) static site architecture.

## Stack

- **Astro** static site generator with static output.
- **Tailwind CSS** configured (no base styles applied) for future component work.
- HTML theme assets live in `/html/assets` and are exposed to Astro via a `public/assets` symlink so they stay single-sourced.
- Organization & website [Schema.org](https://schema.org) JSON-LD snippets baked into the base layout.

## Structure

```text
src/
  layouts/
    BaseLayout.astro   # Wraps every page with shared head tags, CSS, and JS assets.
  pages/
    index.astro        # Home page built from the original HTML template.
  styles/
    tailwind.css       # Tailwind entry point, ready for custom utilities.
public/
  assets/              # Symlink to `../html/assets` so the raw purchase stays untouched.
```

## Commands

Install dependencies and run the usual Astro commands:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Next steps

- Migrate inner pages from `/html` into `src/pages` as `.astro` files.
- Replace placeholder content (contact info, images, copy) with ITAIMS branding.
- Add Markdown/MDX collections for long-form content (blogs, case studies) inside `src/content`.
- Configure deployment via Cloudflare Pages or Netlify for fast global delivery.
- Integrate analytics, forms, or other dynamic behaviour as Astro islands only where required.
