import type { MetadataRoute } from "next";
import { getIndexableArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { getLiveTools } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

function isoDate(date: string | Date) {
  return new Date(date).toISOString();
}

function latestArticleDateForCategory(categorySlug: string) {
  const dates = getIndexableArticles()
    .filter((article) => article.category === categorySlug)
    .map((article) => new Date(article.updatedDate).getTime());

  return dates.length ? isoDate(new Date(Math.max(...dates))) : isoDate(new Date());
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getIndexableArticles();
  const siteLastModified = isoDate(new Date());
  const staticRoutes = [
    "",
    "/tools",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/editorial-policy",
    "/cookie-policy",
    "/authors/hamza-bouhouch"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: siteLastModified
    })),
    ...getLiveTools().map((tool) => ({
      url: absoluteUrl(`/tools/${tool.slug}`),
      lastModified: siteLastModified
    })),
    ...categories.filter((category) => getIndexableArticles().some((article) => article.category === category.slug)).map((category) => ({
      url: absoluteUrl(`/category/${category.slug}`),
      lastModified: latestArticleDateForCategory(category.slug)
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: isoDate(article.updatedDate)
    }))
  ];
}
