/* ---------- Mobile nav toggle ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const isOpen = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ---------- Mark current page in nav ---------- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
});

/* ---------- Insights page rendering ---------- */
function initInsightsPage() {
  const tocList = document.getElementById("toc-list");
  const articlesColumn = document.getElementById("articles-column");
  if (!tocList || !articlesColumn || typeof ARTICLES === "undefined") return;

  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  sorted.forEach((post) => {
    const dateLabel = dateFormatter.format(new Date(post.date + "T00:00:00"));

    /* TOC entry */
    const li = document.createElement("li");
    li.id = `toc-${post.id}`;
    li.innerHTML = `<a href="#${post.id}"><time>${dateLabel}</time>${post.title}</a>`;
    tocList.appendChild(li);

    /* Article */
    const article = document.createElement("article");
    article.className = "post";
    article.id = post.id;

    const imageBlock = post.image
      ? `<div class="post-image"><img src="${post.image}" alt="${post.title}"></div>`
      : `<div class="post-image">Image</div>`;

    const renderInline = (text) =>
    text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const paragraphs = post.content
    .map((p) => {
      if (p.startsWith("## ")) {
        return `<h3 class="section-heading">${renderInline(p.slice(3))}</h3>`;
      }
      return `<p>${renderInline(p)}</p>`;
    })
    .join("");

    article.innerHTML = `
      <div class="post-date">${dateLabel}</div>
      <h2>${post.title}</h2>
      ${imageBlock}
      <p class="teaser">${post.teaser}</p>
      <hr class="section-line">
      <div class="content">${paragraphs}</div>
    `;
    articlesColumn.appendChild(article);
  });

  /* ---------- Scrollspy: highlight active TOC entry ---------- */
  const postEls = Array.from(document.querySelectorAll("article.post"));
  const tocLis = Array.from(tocList.querySelectorAll("li"));

  const setActive = (id) => {
    tocLis.forEach((li) => li.classList.toggle("active", li.id === `toc-${id}`));
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    postEls.forEach((el) => observer.observe(el));
  }

  if (sorted.length) setActive(sorted[0].id);
}

document.addEventListener("DOMContentLoaded", initInsightsPage);
