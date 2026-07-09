# Site To-Do List

Living checklist for outstanding work on stevenjmurray.com. Check items off as
they're done, add new ones as they come up — doesn't need to stay tidy.

## Content
- [ ] Update wording on About page (bio, background, engagement types)
- [ ] Update wording on Contact page (intro copy, form labels)
- [ ] Update wording on Home page (hero, Advisory section)
- [ ] Copyedit all articles for typos / clean up LinkedIn-isms
- [ ] Source and add images for articles currently missing one:
      the-ai-power-boom-is-racing, reframing-the-refugee-narrative-an-economic,
      what-started-as-a-waistline-fix, morocco-beyond-the-postcard-the-hidden,
      how-to-save-texas-30-bn, who-is-really-looking-out-for,
      is-topline-growth-possible-for-retail, why-the-equivalent-of-the-population,
      some-thoughts-on-the-wrong-and, why-retail-energy-is-so-fundamentally
- [ ] Load additional posts as Steven publishes new LinkedIn articles

## Design / UX
- [ ] Mobile UI pass — check nav wrap, hero stacking, article spacing on
      small screens
- [ ] Explore adding a comments capability to Insights posts (needs a
      third-party service since this is a static site — e.g. Giscus,
      Disqus, or a lightweight custom Formspree-backed comment form)

## Technical / Infrastructure
- [ ] SEO optimization — meta descriptions per page (mostly done), OG tags
      for social sharing previews, sitemap.xml, robots.txt, alt text audit
- [ ] Connect Formspree to the Contact form (currently a placeholder
      endpoint — swap in a real Formspree form ID)
- [ ] Connect custom domain once purchased (Vercel: Settings → Domains)

## Tooling
- [ ] Build a Claude Skill that converts a new LinkedIn post into a
      properly formatted articles.js entry automatically (## headings,
      **bold** lead-ins, escaped quotes, teaser de-duplication, slug/id,
      date parsing) — would remove the manual back-and-forth we've been
      doing per article

---
*Last updated: 2026-07-08*
