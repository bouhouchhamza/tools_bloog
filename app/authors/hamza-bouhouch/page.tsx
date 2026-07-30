import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getIndexableArticles } from "@/lib/articles";
import { breadcrumbSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hamza Bouhouch - Author and Editor",
  description: "Author and editor profile for Hamza Bouhouch at WorkflowTools.space.",
  alternates: { canonical: absoluteUrl("/authors/hamza-bouhouch") },
  openGraph: {
    title: "Hamza Bouhouch - WorkflowTools.space",
    description: "Author and editor profile, published guides, and editorial approach.",
    url: absoluteUrl("/authors/hamza-bouhouch")
  }
};

export default function HamzaBouhouchAuthorPage() {
  const articles = getIndexableArticles();

  return (
    <div className="container py-12">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Authors", url: "/authors/hamza-bouhouch" }, { name: "Hamza Bouhouch", url: "/authors/hamza-bouhouch" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: "Hamza Bouhouch", url: absoluteUrl("/authors/hamza-bouhouch"), worksFor: { "@type": "Organization", name: "WorkflowTools.space", url: absoluteUrl("/") } }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Hamza Bouhouch", href: "/authors/hamza-bouhouch" }]} />
      <header className="mt-8 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Author and editor</p>
        <h1 className="mt-3 text-4xl font-black">Hamza Bouhouch</h1>
        <p className="mt-5 text-lg leading-8 text-[#5e6f68]">
          Hamza Bouhouch is the named author and editor for WorkflowTools.space. The work published here focuses on
          explaining browser-based utilities and repeatable digital workflows through concrete steps, examples,
          limitations, and troubleshooting notes.
        </p>
        <p className="mt-4 leading-7 text-[#40524c]">
          This profile does not claim professional certifications, rankings, or years of experience. Tool behavior is
          checked against the implementation on this website, and important outputs remain the reader&apos;s responsibility
          to review for their own situation.
        </p>
        <p className="mt-4 leading-7 text-[#40524c]">
          Read the <Link href="/editorial-policy">editorial policy</Link> or email
          <a href="mailto:contact@workflowtools.space"> contact@workflowtools.space</a> to request a correction.
        </p>
      </header>
      <section className="mt-12">
        <h2 className="text-3xl font-black">Published practical guides</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </div>
  );
}
