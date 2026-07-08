/* =========================================================================
   ARTICLES DATA
   -------------------------------------------------------------------------
   Add a new post by adding a new object to this array — nothing else needs
   to change. Newest or oldest first doesn't matter; the page sorts by date
   automatically (most recent first).

   FIELDS
   id      — unique, no spaces (used as the anchor link, e.g. #inflation-outlook)
   title   — post title
   date    — "YYYY-MM-DD" (works fine for posts written before the site existed)
   image   — path to an image, or leave "" to show a plain placeholder block
   teaser  — 1–2 sentence summary shown under the title
   content — array of paragraph strings (each string = one paragraph)
   ========================================================================= */

const ARTICLES = [
  {
    id: "soft-landing-revisited",
    title: "The Soft Landing, Revisited",
    date: "2026-06-02",
    image: "",
    teaser:
      "Eighteen months ago the consensus said a soft landing was a fantasy. The data now tells a more interesting story — and one with direct implications for underwriting assumptions built on a harder-landing base case.",
    content: [
      "Replace this paragraph with your first paragraph. This placeholder article is here so you can see how the layout, spacing, and typography behave with real sentence lengths — swap in your own writing whenever you're ready.",
      "A second paragraph goes here. Keep paragraphs relatively short; the column width is tuned for scannable reading, similar to how the piece would read on LinkedIn but with room to breathe.",
      "Close with a final paragraph. You can add as many paragraphs as the piece needs — the layout will simply grow taller.",
    ],
  },
  {
    id: "credit-cycle-cracks",
    title: "Where the Credit Cycle Is Starting to Crack",
    date: "2026-04-18",
    image: "",
    teaser:
      "Consumer delinquencies are still low in aggregate — but the composition underneath is changing faster than the headline number suggests, with real implications for consumer-facing portfolio companies.",
    content: [
      "This is placeholder body copy for the second article. It exists to demonstrate the article template — title, date, image slot, teaser, a thin rule, then the full piece.",
      "Add real analysis here when you're ready to publish. Each article can be as long or short as you like.",
    ],
  },
  {
    id: "labor-market-signal",
    title: "The Labor Market Signal Everyone Is Reading Wrong",
    date: "2025-11-09",
    image: "",
    teaser:
      "Quits rates get all the attention. The more useful number is quietly sitting one column over in the same report.",
    content: [
      "Placeholder text for the third article — an example of an older post, dated before the site existed, to show that back-dated writing displays correctly in chronological order.",
      "Swap this out for the original LinkedIn post content, lightly edited for a longer-form read if useful.",
    ],
  },
];
