import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { getLiveTools } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

function isoDate(date: string | Date) {
  return new Date(date).toISOString();
}

function latestArticleDateForCategory(categorySlug: string) {
  const dates = articles
    .filter((article) => article.category === categorySlug)
    .map((article) => new Date(article.updatedDate).getTime());

  return dates.length ? isoDate(new Date(Math.max(...dates))) : isoDate(new Date());
}

export default function sitemap(): MetadataRoute.Sitemap {
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
    "/cookie-policy"
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
    ...categories.map((category) => ({
      url: absoluteUrl(`/category/${category.slug}`),
      lastModified: latestArticleDateForCategory(category.slug)
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: isoDate(article.updatedDate)
    }))
  ];
}
