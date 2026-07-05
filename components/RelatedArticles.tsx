import type { Article } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Related articles</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
