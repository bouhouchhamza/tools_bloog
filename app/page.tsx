import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterBox } from "@/components/NewsletterBox";
import { JsonLd } from "@/components/JsonLd";
import { categories } from "@/lib/categories";
import { getFeaturedArticles } from "@/lib/articles";
import { websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free Online Business, SEO, Developer, Productivity, and AI Tools",
  description:
    "Use free online tools for business, SEO, developer tasks, productivity, marketing, AI prompts, QR codes, invoices, metadata, and workflow planning.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "WorkflowTools.space",
    description:
      "Free online business, SEO, developer, productivity, marketing, and AI tools with practical workflow guides.",
    url: "/"
  }
};

export default function HomePage() {
  const featured = getFeaturedArticles();
  const startHere = [
    { href: "/blog/what-is-a-workflow", title: "Understand workflows", copy: "Learn the basic shape of triggers, actions, owners, and outcomes." },
    { href: "/blog/how-to-build-first-simple-automation-workflow", title: "Build one simple flow", copy: "Create a small automation that is easy to test, explain, and improve." },
    { href: "/blog/automation-mistakes-beginners-avoid", title: "Avoid early mistakes", copy: "Know the issues that make automations confusing, noisy, or hard to maintain." }
  ];

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <section className="border-b border-[#dce5e0] bg-white">
        <div className="container grid gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Free workflow tools and practical guides</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#17211d] md:text-6xl">
              Free tools for cleaner business, SEO, AI, and productivity workflows
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5e6f68]">
              WorkflowTools.space offers practical generators, calculators, formatters, and educational guides for
              creators, marketers, developers, freelancers, and small business owners who want useful digital workflows
              without hype.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tools" className="rounded-md bg-[#16705a] px-5 py-3 font-bold text-white">
                Browse Free Tools
              </Link>
              <Link href="/blog" className="rounded-md bg-[#16705a] px-5 py-3 font-bold text-white">
                Browse Guides
              </Link>
              <Link href="/blog/how-to-build-first-simple-automation-workflow" className="rounded-md border border-[#16705a] px-5 py-3 font-bold text-[#0d4f42]">
                Build Your First Workflow
              </Link>
            </div>
            <dl className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-2xl font-black text-[#17211d]">17</dt>
                <dd className="text-sm leading-5 text-[#5e6f68]">free tools</dd>
              </div>
              <div>
                <dt className="text-2xl font-black text-[#17211d]">25</dt>
                <dd className="text-sm leading-5 text-[#5e6f68]">starter guides</dd>
              </div>
              <div>
                <dt className="text-2xl font-black text-[#17211d]">0</dt>
                <dd className="text-sm leading-5 text-[#5e6f68]">hype claims or fake shortcuts</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-6 shadow-soft">
            <h2 className="text-xl font-bold">A practical learning path</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#40524c]">
              <li><strong>Map:</strong> write the manual process before choosing a tool.</li>
              <li><strong>Build:</strong> connect one trigger and one action first.</li>
              <li><strong>Review:</strong> keep important decisions visible to a person.</li>
              <li><strong>Improve:</strong> document what works before adding complexity.</li>
            </ul>
            <Link href="/category/workflow-automation" className="mt-6 inline-flex font-bold text-[#0d4f42]">
              Explore workflow automation
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Featured guides</p>
            <h2 className="mt-2 text-3xl font-black">Start with practical, low-risk automation</h2>
          </div>
          <Link href="/blog" className="hidden font-bold text-[#0d4f42] md:block">View all articles</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((article, index) => (
            <ArticleCard key={article.slug} article={article} priority={index < 2} />
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Topic library</p>
          <h2 className="mt-2 text-3xl font-black">Explore by automation problem</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="rounded-lg border border-[#dce5e0] p-5 hover:border-[#16705a]">
                <h3 className="font-bold">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5e6f68]">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Start here</p>
          <h2 className="mt-2 text-3xl font-black">A beginner path for automation</h2>
          <p className="mt-4 leading-7 text-[#5e6f68]">
            Begin with the basics of workflows, learn how no-code tools fit together, then add AI only where it helps
            with drafting, sorting, summarizing, or planning.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {startHere.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border border-[#dce5e0] bg-white p-5 hover:border-[#16705a]">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5e6f68]">{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Why trust WorkflowTools.space</p>
            <h2 className="mt-2 text-3xl font-black">Educational content with clear boundaries</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "We publish original tool pages with clear examples, limits, and review guidance.",
              "We avoid fake statistics, fake income claims, and guaranteed-result language.",
              "We keep human review central for customer, financial, and sensitive workflows.",
              "We publish legal, privacy, editorial, and contact pages so readers know how the site operates."
            ].map((item) => (
              <p key={item} className="rounded-lg border border-[#dce5e0] p-4 text-sm leading-6 text-[#40524c]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <NewsletterBox />
      </div>
    </>
  );
}
