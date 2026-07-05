import { articles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rssDate(date: string) {
  return new Date(date).toUTCString();
}

export function GET() {
  const items = articles
    .map((article) => {
      const articleUrl = absoluteUrl(`/blog/${article.slug}`);

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(articleUrl)}</link>
      <guid isPermaLink="true">${escapeXml(articleUrl)}</guid>
      <pubDate>${rssDate(article.publishedDate)}</pubDate>
      <description>${escapeXml(article.rssDescription || article.metaDescription || article.description)}</description>
    </item>`;
    })
    .join("");
  const latestUpdate = articles
    .map((article) => new Date(article.updatedDate).getTime())
    .sort((a, b) => b - a)[0];

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>WorkflowTools.space</title>
    <link>${escapeXml(absoluteUrl("/"))}</link>
    <description>Practical workflow guides and free online tool explainers for business, SEO, developer, productivity, marketing, and AI tasks.</description>
    <language>en</language>
    <lastBuildDate>${new Date(latestUpdate).toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
