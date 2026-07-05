import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Blog",
  description: "Browse AI automation guides, workflow tutorials, no-code automation explainers, and productivity articles.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "WorkflowTools.space Blog",
    description: "Browse practical AI automation and workflow automation articles.",
    url: "/blog"
  }
};

export default function BlogPage() {
  return (
    <section className="container py-12">
      <div className="grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">All guides</p>
          <h1 className="mt-2 text-4xl font-black">Automation Blog</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5e6f68]">
            Educational guides for beginners, freelancers, creators, and small business owners learning AI and workflow automation.
          </p>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-white p-5 text-sm leading-6 text-[#40524c]">
          <strong>{articles.length} articles</strong> across AI automation, no-code tools, n8n tutorials, productivity,
          and small business operations.
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} className="rounded-full border border-[#dce5e0] bg-white px-3 py-2 text-sm font-bold text-[#0d4f42]">
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
