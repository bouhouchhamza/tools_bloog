import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ToolsDirectory } from "@/components/ToolsDirectory";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { toolCategories, getLiveTools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free Business, SEO, AI Automation, and Productivity Tools",
  description:
    "Use free online business, SEO, developer, productivity, marketing, and AI tools for everyday digital workflows.",
  alternates: {
    canonical: "/tools"
  },
  openGraph: {
    title: "Free Workflow Tools",
    description: "A library of practical free tools for business, SEO, AI, marketing, development, and productivity.",
    url: "/tools"
  }
};

const faqs = [
  {
    question: "Are these tools free to use?",
    answer:
      "Yes. WorkflowTools.space publishes free browser-based utilities for common business, SEO, developer, productivity, marketing, and AI workflow tasks."
  },
  {
    question: "Do the tools send my input to an external AI service?",
    answer:
      "The current tools are rule-based or browser-based utilities. The AI-related generators do not call paid AI APIs or external AI services."
  },
  {
    question: "Should I verify outputs before using them?",
    answer:
      "Yes. The tools are practical helpers, but important outputs such as invoices, SEO tags, robots rules, passwords, and business estimates should be reviewed before use."
  }
];

export default function ToolsPage() {
  const liveTools = getLiveTools();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Tools", url: "/tools" }
        ])}
      />
      <JsonLd data={faqPageSchema(faqs)} />
      <section className="border-b border-[#dce5e0] bg-white">
        <div className="container py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" }
            ]}
          />
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Free tools library</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#17211d] md:text-5xl">
                Free online tools for business, SEO, AI, marketing, and focused work
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5e6f68]">
                WorkflowTools.space provides practical calculators, generators, formatters, and planning helpers for
                creators, operators, developers, marketers, and small business owners who need fast workflow utilities.
              </p>
            </div>
            <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-5 text-sm leading-6 text-[#40524c]">
              <strong>{liveTools.length} free tools</strong> across business, SEO, developer, productivity, AI, and
              marketing categories.
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {toolCategories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-full border border-[#dce5e0] bg-white px-3 py-2 text-sm font-bold text-[#0d4f42]"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ToolsDirectory tools={liveTools} />

      <section className="bg-white py-12">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Browse by category</p>
          <h2 className="mt-2 text-3xl font-black">Find the right tool for the task</h2>
          <div className="mt-8 grid gap-8">
            {toolCategories.map((category) => (
              <div key={category} id={category.toLowerCase().replaceAll(" ", "-")}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dce5e0] pb-3">
                  <h3 className="text-2xl font-bold">{category}</h3>
                  <span className="text-sm font-semibold text-[#5e6f68]">
                    {liveTools.filter((tool) => tool.category === category).length} tools
                  </span>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {liveTools.filter((tool) => tool.category === category).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="rounded-lg border border-[#dce5e0] p-5 hover:border-[#16705a]"
                    >
                      <h4 className="font-bold text-[#17211d]">{tool.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#5e6f68]">{tool.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="rounded-lg border border-[#dce5e0] bg-white p-6">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Workflow guides</p>
          <h2 className="mt-2 text-3xl font-black">Learn the process behind the tools</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { href: "/blog/what-is-a-workflow", label: "Workflow basics", copy: "Understand triggers, actions, owners, and outcomes." },
              { href: "/blog/plan-automation-workflow-before-building", label: "Plan before automating", copy: "Map the manual process before choosing tools." },
              { href: "/blog/how-to-automate-content-planning-without-losing-quality", label: "Content planning", copy: "Use systems without losing editorial judgment." }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-[#dce5e0] p-4 hover:border-[#16705a]">
                <h3 className="font-bold">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5e6f68]">{item.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <FAQSection items={faqs} />
      </div>
    </>
  );
}
