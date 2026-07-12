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
const CATEGORY_LABELS = {
  energy: "Energy & power",
  macro: "Macro & markets",
  leadership: "Leadership",
  society: "Society & culture",
};
const CATEGORY_ORDER = ["energy", "macro", "leadership", "society"];

function initInsightsPage() {
  const tocList = document.getElementById("toc-list");
  const articlesColumn = document.getElementById("articles-column");
  const filterBar = document.getElementById("category-filter");
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
    const cats = post.categories || [];
    const catsAttr = cats.join(",");
    const tagsHtml = cats
      .map((c) => `<span class="cat-tag">${CATEGORY_LABELS[c] || c}</span>`)
      .join("");

    /* TOC entry */
    const li = document.createElement("li");
    li.id = `toc-${post.id}`;
    li.dataset.categories = catsAttr;
    li.innerHTML = `<a href="#${post.id}"><time>${dateLabel}</time>${post.title}</a>`;
    tocList.appendChild(li);

    /* Article */
    const article = document.createElement("article");
    article.className = "post";
    article.id = post.id;
    article.dataset.categories = catsAttr;

    const imageBlock = post.image
      ? `<div class="post-image"><img src="${post.image}" alt="${post.title}"></div>`
      : "";

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
      <div class="post-meta-row">
        <div class="post-date">${dateLabel}</div>
        ${tagsHtml ? `<div class="post-tags">${tagsHtml}</div>` : ""}
      </div>
      <h2>${post.title}</h2>
      ${imageBlock}
      <p class="teaser">${post.teaser}</p>
      <hr class="section-line">
      <div class="content">${paragraphs}</div>
    `;
    articlesColumn.appendChild(article);
  });

  /* ---------- Category filter pills ---------- */
  if (filterBar) {
    const present = CATEGORY_ORDER.filter((key) =>
      sorted.some((p) => (p.categories || []).includes(key))
    );

    if (present.length) {
      const activeCats = new Set();

      const allPill = document.createElement("button");
      allPill.className = "filter-pill active";
      allPill.textContent = "All";
      filterBar.appendChild(allPill);

      const pills = present.map((key) => {
        const pill = document.createElement("button");
        pill.className = "filter-pill";
        pill.textContent = CATEGORY_LABELS[key];
        pill.dataset.category = key;
        filterBar.appendChild(pill);
        return pill;
      });

      const applyFilter = () => {
        const showAll = activeCats.size === 0;
        allPill.classList.toggle("active", showAll);
        pills.forEach((p) =>
          p.classList.toggle("active", activeCats.has(p.dataset.category))
        );

        document.querySelectorAll("#toc-list li").forEach((li) => {
          const cats = (li.dataset.categories || "").split(",").filter(Boolean);
          const match = showAll || cats.some((c) => activeCats.has(c));
          li.style.display = match ? "" : "none";
        });

        document.querySelectorAll("article.post").forEach((el) => {
          const cats = (el.dataset.categories || "").split(",").filter(Boolean);
          const match = showAll || cats.some((c) => activeCats.has(c));
          el.style.display = match ? "" : "none";
        });
      };

      allPill.addEventListener("click", () => {
        activeCats.clear();
        applyFilter();
      });

      pills.forEach((pill) => {
        pill.addEventListener("click", () => {
          const key = pill.dataset.category;
          if (activeCats.has(key)) {
            activeCats.delete(key);
          } else {
            activeCats.add(key);
          }
          applyFilter();
        });
      });
    }
  }

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

/* ---------- Image lightbox (click to zoom) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `<button class="lightbox-close" aria-label="Close">Close ✕</button><img alt="">`;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".lightbox-close");

  const openLightbox = (src, alt) => {
    overlayImg.src = src;
    overlayImg.alt = alt || "";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const img = e.target.closest(
      ".hero-image img, .about-portrait img, .post-image img"
    );
    if (img) {
      openLightbox(img.currentSrc || img.src, img.alt);
    }
  });

  overlay.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});

/* ---------- Back to top button ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "&uarr;";
  document.body.appendChild(btn);

  const toggleVisibility = () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
