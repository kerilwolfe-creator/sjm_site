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
    id: "grid-hierarchy",
    title: "The Energy Hierarchy: How High-Margin Capital is Colonizing the Grid",
    date: "2026-06-18",
    image: "images/grid_hierarchy_image.png",
    teaser:
      "We like to think of the electrical grid as the ultimate public utility—a shared, democratic piece of infrastructure delivering the same electron to a high-tech facility as it does to a residential home. That version of the grid is dead.",
    content: [
      "We like to think of the electrical grid as the ultimate public utility—a shared, democratic piece of infrastructure delivering the same electron to a high-tech facility as it does to a residential home.",
      "That version of the grid is dead.",
      "Driven by unprecedented, simultaneous spikes in demand, the modern grid is rapidly organizing into a rigid, capital-driven hierarchy. Instead of a shared resource, energy is becoming stratified. The groups with the highest margins are effectively colonizing the most reliable, cleanest power, leaving the rest of society to absorb the volatility of a strained public system.",
      "The new grid hierarchy has five distinct tiers, and the gaps between them is widening by the day:",
      "Tier 1: High-Margin Biologics & Pharma (The Apex Predators)",
      "When a drug class like GLP-1s generates tens of billions in high-margin revenue, the absolute cost of power is irrelevant—but reliability is everything. A single voltage flicker can ruin a massive batch of highly sensitive bioreactor cultures. Mega-pharma has the capital to build fully redundant, islanded microgrids and secure behind-the-meter generation, ensuring 100% uptime regardless of public grid conditions.",
      "Tier 2: AI Hyperscalers & Cloud Titans (The Cloud Monopolies)",
      "Right below pharma are the tech giants. Needing massive, continuous baseload power to feed hyperscale data centers while meeting net-zero targets, they are bypassing traditional utility queues entirely. They are ring-fencing the best energy assets for themselves-buying up entire nuclear outputs or locking up utility-scale storage through exclusive Power Purchase Agreements (PPAs).",
      "Tier 3: Traditional Commerce & Heavy Industry (The Trapped Middle)",
      "Automotive, steel, chemical manufacturing, and standard commercial real estate operate on much tighter margins. They cannot easily absorb a doubling of power costs, yet they are trapped on the public grid. As Tier 1 and 2 outbid them for premium assets, traditional industry is left to bear the brunt of rising transmission charges and volatile wholesale spot markets.",
      "Tier 4: Mid-to-High Income Residential (The Insulated Consumers)",
      "Affluent homeowners face rising retail rates, but they possess the capital to insulate themselves. By investing in residential solar, home battery systems, and smart efficiency, they can pivot to self-generation during peak pricing or grid instability. They are effectively opting out of the worst parts of the public system.",
      "Tier 5: Low-Income Residential (The Energy Underclass)",
      "At the absolute base are those with zero capital to invest in efficiency or micro-generation. They are 100% exposed to rising utility rates and spot-market spikes, often paying the highest percentage of their income for the least reliable service.",
      "The Regulatory Catch-22",
      "This stratification is happening because public utility commissions (PUCs) are utterly unequipped for this concentration of corporate capital.",
      "When a tech or pharma giant offers to fund a massive new substation or pay a heavy premium directly to an Independent Power Producer (IPP), regulators face an impossible choice. Say \"no\" to protect grid equity, and watch those high-paying jobs and tax dollars migrate to another state. Say "yes," and they inadvertently codify a multi-tiered energy society into law.",
      "The Bottom Line",
      "Energy availability is becoming the ultimate competitive advantage. If capital alone dictates grid resilience, the public grid risks becoming a degraded, volatile asset used only by those who cannot afford to buy their way out of it.",
      "We are moving from an era of energy transition to an era of energy stratification.",
      "The question for leadership is no longer just how much power we can generate — but who gets it when there is not enough for all consumers simultaneously.Replace this paragraph with your first paragraph. This placeholder article is here so you can see how the layout, spacing, and typography behave with real sentence lengths — swap in your own writing whenever you're ready.",
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
