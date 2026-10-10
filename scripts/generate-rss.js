// Generates public/rss.xml from content/posts/*.md before `next build`.
// Items are ordered like the blog index (frontmatter `index`, newest first).
// Posts have no date field, so each item carries `yirmibir:index` and a stable
// guid (the post URL) instead of a pubDate.
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const SITE = "https://www.yirmibir.org";
const POSTS_DIR = path.join(__dirname, "..", "content", "posts");
const OUT = path.join(__dirname, "..", "public", "rss.xml");

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => matter(fs.readFileSync(path.join(POSTS_DIR, f), "utf-8")).data)
  .filter((fm) => fm.slug && fm.title)
  .sort((a, z) => (z.index ?? 0) - (a.index ?? 0));

const items = posts
  .map((fm) => {
    const url = `${SITE}/blog/${fm.slug}`;
    const credit = fm.translator ? `${fm.author}, Tercüme: ${fm.translator}` : fm.author;
    const tags = (fm.tags || []).map((t) => `      <category>${esc(t)}</category>`).join("\n");
    return [
      "    <item>",
      `      <title>${esc(String(fm.title).trim())}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <description>${esc(String(fm.meta || "").trim())}</description>`,
      `      <dc:creator>${esc(credit)}</dc:creator>`,
      tags,
      `      <yirmibir:index>${fm.index ?? 0}</yirmibir:index>`,
      "    </item>",
    ]
      .filter(Boolean)
      .join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:yirmibir="${SITE}/rss">
  <channel>
    <title>Yirmibir Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Türkçe Bitcoin yazıları ve çevirileri</description>
    <language>tr</language>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(OUT, xml);
console.log(`rss: wrote ${posts.length} items to public/rss.xml`);
