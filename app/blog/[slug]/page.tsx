import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryBadge } from "@/components/CategoryBadge";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TableOfContents } from "@/components/TableOfContents";
import { articles, getArticle, getRelatedArticles, type Article } from "@/lib/articles";
import { getCategory } from "@/lib/categories";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: absoluteUrl(`/blog/${article.slug}`) },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: absoluteUrl(`/blog/${article.slug}`),
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      images: [{ url: absoluteUrl(article.image), alt: article.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [absoluteUrl(article.image)]
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const related = getRelatedArticles(article);
  const internalLinks = article.internalLinks.map(getArticle).filter((item): item is Article => Boolean(item));
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title, href: `/blog/${article.slug}` }
  ];

  return (
    <article className="container py-10">
      <JsonLd data={articleSchema(article)} />
      <JsonLd data={faqSchema(article)} />
      <JsonLd data={breadcrumbSchema(crumbs.map((item) => ({ name: item.label, url: item.href })))} />
      <Breadcrumbs items={crumbs} />
      <header className="mt-8 max-w-4xl">
        <CategoryBadge slug={article.category} />
        <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-[#5e6f68]">{article.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#5e6f68]">
          <span>By {article.author}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={article.publishedDate}>Published {formatDate(article.publishedDate)}</time>
          <span aria-hidden="true">/</span>
          <time dateTime={article.updatedDate}>Updated {formatDate(article.updatedDate)}</time>
          <span aria-hidden="true">/</span>
          <span>{article.readingTime}</span>
        </div>
      </header>
      <Image
        src={article.image}
        alt={article.imageAlt}
        width={1200}
        height={675}
        priority
        className="mt-8 aspect-[16/9] w-full rounded-lg border border-[#dce5e0] object-cover"
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <TableOfContents sections={article.sections} />
        </div>
        <div>
          <div className="prose max-w-none">
            <p>
              This guide is part of our {category?.name ?? "automation"} library. It is written for readers who want
              practical steps, plain-language explanations, and automation ideas that keep human review in the right
              places.
            </p>
            {internalLinks.length ? (
              <aside className="not-prose my-8 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-5">
                <h2 className="text-base font-bold text-[#17211d]">Helpful related guides</h2>
                <ul className="mt-3 grid gap-2 text-sm font-semibold text-[#0d4f42] sm:grid-cols-2">
                  {internalLinks.map((linkedArticle) => (
                    <li key={linkedArticle.slug}>
                      <a href={`/blog/${linkedArticle.slug}`}>{linkedArticle.title}</a>
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
            {article.toolLinks?.length ? (
              <aside className="not-prose my-8 rounded-lg border border-[#b8dccf] bg-[#f1faf6] p-5">
                <h2 className="text-base font-bold text-[#17211d]">Useful free tools</h2>
                <ul className="mt-3 grid gap-2 text-sm font-semibold text-[#0d4f42] sm:grid-cols-2">
                  {article.toolLinks.map((link) => (
                    <li key={link.href}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </aside>
            ) : null}
            {article.sections.map((section) => (
              <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.subSections?.map((subSection) => (
                  <div key={subSection.heading}>
                    <h3>{subSection.heading}</h3>
                    {subSection.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </div>
          <FAQSection items={article.faq} />
          <div className="mt-10">
            <AuthorBox />
          </div>
        </div>
      </div>
      <RelatedArticles articles={related} />
    </article>
  );
}
