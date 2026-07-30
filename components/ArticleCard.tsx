import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { CategoryBadge } from "@/components/CategoryBadge";

export function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#dce5e0] bg-white shadow-soft">
      <Link href={`/blog/${article.slug}`} aria-label={article.title}>
        <Image
          src={article.image}
          alt={article.imageAlt}
          width={1200}
          height={675}
          priority={priority}
          className="aspect-[16/9] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <CategoryBadge slug={article.category} />
        <div>
          <h2 className="text-xl font-bold leading-snug text-[#17211d]">
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#5e6f68]">{article.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-[#5e6f68]">
          <Link href="/authors/hamza-bouhouch" className="font-semibold text-[#0d4f42]">{article.author}</Link>
          <span aria-hidden="true">/</span>
          <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
          <span aria-hidden="true">/</span>
          <span>Updated {formatDate(article.updatedDate)}</span>
          <span aria-hidden="true">/</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
