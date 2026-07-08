# Steven J. Murray — Site

Plain HTML/CSS/JS static site. No build step, no dependencies.

## Structure

- `index.html` — Home
- `insights.html` — Insights (blog)
- `about.html` — About
- `contact.html` — Contact
- `styles.css` — all styles
- `script.js` — nav behavior, insights rendering, scrollspy
- `articles.js` — post data — **add new posts here**

## Adding a new Insights post

Open `articles.js` and add one object to the `ARTICLES` array:

```js
{
  id: "unique-slug-no-spaces",
  title: "Post Title",
  date: "2026-07-08",
  image: "",              // path to an image, or "" for a placeholder block
  teaser: "One or two sentence summary.",
  content: [
    "First paragraph.",
    "Second paragraph."
  ],
},
```

The page sorts by date automatically — no need to worry about where in the array you add it.

## Deploy with Git + Vercel

```bash
cd steven-murray-site
git init
git add .
git commit -m "Initial site"
```

Push to GitHub (create an empty repo first, then):

```bash
git remote add origin https://github.com/<you>/<repo-name>.git
git branch -M main
git push -u origin main
```

Then in Vercel: **New Project → Import** the GitHub repo. No build command, no output directory, no framework preset needed — leave all of that blank/default. Vercel will detect it as a static site and deploy as-is.

After the first deploy, any push to `main` redeploys automatically — same as your own site.

## Custom domain

Once he has a domain (e.g. `stevenjmurray.com`), add it under the Vercel project's **Settings → Domains** and follow the DNS instructions there.
