import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";
import { categories, getCategory } from "@/lib/categories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const hasArticles = getArticlesByCategory(slug).length > 0;

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
    robots: hasArticles ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${category.name} | WorkflowTools.space`,
      description: category.description,
      url: `/category/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <section className="container py-12">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Category</p>
      <h1 className="mt-2 text-4xl font-black">{category.name}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5e6f68]">{category.description}</p>
      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-white p-5 text-sm leading-6 text-[#40524c]">
        <strong>{categoryArticles.length} guides</strong> in this category. Each guide focuses on practical examples,
        beginner-safe planning, internal review points, and clear next steps.
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
