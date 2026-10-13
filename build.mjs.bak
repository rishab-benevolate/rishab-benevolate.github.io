// build.mjs — node build.mjs  (no dependencies)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site, socials, lede, interests, quote, timelineNext, notes, timeline } from "./content.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(ROOT, "style.css"), "utf8").trim();
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Escape, then turn [text](url) into links (external ones open normally; no new tabs).
const rich = (s) => esc(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
const fmtDate = (iso) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

function layout({ pre, path, title, description, body, noindex = false, article = false }) {
  const canonical = site.url + path;
  const social = socials.map((s) => `<a href="${esc(s.href)}">${esc(s.label)}</a>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}<meta property="og:type" content="${article ? "article" : "website"}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta property="og:image" content="${site.url}/${site.portrait}">
<meta name="twitter:image" content="${site.url}/${site.portrait}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23111'/%3E%3Ctext x='32' y='46' text-anchor='middle' font-family='Georgia,serif' font-size='40' fill='%23fff'%3ER%3C/text%3E%3C/svg%3E">
<style>
${css}
</style>
</head>
<body>
<header>
  <div class="brand">
    <img class="portrait" src="${pre}${site.portrait}" width="640" height="640" alt="">
    <p class="name"><a href="${pre}index.html">${esc(site.name)}</a></p>
  </div>
  <div class="header-side">
    <p class="tagline">${esc(site.tagline)}</p>
    <nav class="social" aria-label="Links">${social}</nav>
  </div>
</header>
<main>
${body}
</main>
<footer>
  <nav class="social" aria-label="Links">${social}</nav>
</footer>
</body>
</html>
`;
}

function write(rel, content) {
  const f = join(ROOT, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, content);
  console.log("wrote", rel);
}

// Home
write(
  "index.html",
  layout({
    pre: "",
    path: "/",
    title: site.name,
    description: site.description,
    body: `<p class="lede">${rich(lede)}</p>
${interests
  .map(
    (section) => `<section class="interest">
<h2>${esc(section.title)}.</h2>
<ul>
${section.items.map((item) => `<li>${rich(item)}</li>`).join("\n")}
</ul>
</section>`
  )
  .join("\n")}

<h2 class="notes-heading">Writing</h2>
<ul class="notes">
${notes
  .map((n) => `<li><a href="notes/${n.slug}/index.html">${esc(n.title)}</a><time datetime="${n.date}">${fmtDate(n.date)}</time></li>`)
  .join("\n")}
</ul>

<p class="more"><a href="timeline/index.html">Timeline →</a></p>`,
  })
);

// Timeline
write(
  "timeline/index.html",
  layout({
    pre: "../",
    path: "/timeline/",
    title: `Timeline — ${site.name}`,
    description: "A short timeline of what Rishab Kattimani has built and done.",
    body: `<h1>Timeline</h1>
<dl class="timeline">
${timeline.map((t) => `<div><dt>${esc(t.when)}</dt><dd>${rich(t.text)}</dd></div>`).join("\n")}
</dl>
<p class="closing">${rich(timelineNext)}</p>

<h2>From a library director</h2>
<blockquote class="quote"><p>“${esc(quote.text)}”</p><p class="cite">${esc(quote.name)}, ${esc(quote.role)}. ${esc(quote.context)}</p></blockquote>`,
  })
);

// Notes
for (const n of notes) {
  write(
    `notes/${n.slug}/index.html`,
    layout({
      pre: "../../",
      path: `/notes/${n.slug}/`,
      title: `${n.title} — ${site.name}`,
      description: n.body[0].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").slice(0, 160),
      article: true,
      body: `<article>
<h1>${esc(n.title)}</h1>
<p class="date"><time datetime="${n.date}">${fmtDate(n.date)}</time></p>
${n.body.map((p) => `<p>${rich(p)}</p>`).join("\n")}
</article>
<p class="more"><a href="../../index.html">← Home</a></p>`,
    })
  );
}

// 404 (root-absolute paths because it can be served from any URL)
write(
  "404.html",
  layout({
    pre: "/",
    path: "/404.html",
    title: `Not found — ${site.name}`,
    description: "This page could not be found.",
    noindex: true,
    body: `<h1>Not found</h1>
<p>That page doesn’t exist. <a href="/index.html">Go home</a>.</p>`,
  })
);

// Sitemap + robots
const urls = ["/", "/timeline/", ...notes.map((n) => `/notes/${n.slug}/`)];
const today = new Date().toISOString().slice(0, 10);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${site.url}${u}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
