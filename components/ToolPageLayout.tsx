import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";
import type { PlannedTool } from "@/lib/tools";
import { toolPublisherContent } from "@/lib/tool-publisher-content";

export function ToolPageLayout({
  tool,
  children
}: {
  tool: PlannedTool;
  children: ReactNode;
}) {
  const publisherContent = toolPublisherContent[tool.slug];
  return (
    <div className="container py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: tool.title, href: `/tools/${tool.slug}` }
        ]}
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">{tool.category}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-[#17211d]">{tool.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5e6f68]">{tool.description}</p>
          <div className="mt-8">{children}</div>
          {publisherContent ? (
            <section className="mt-10 rounded-lg border border-[#dce5e0] bg-white p-6">
              <h2 className="text-2xl font-black">{publisherContent.heading}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div><h3 className="font-bold">Who this helps</h3><p className="mt-2 text-sm leading-6 text-[#40524c]">{publisherContent.audience}</p></div>
                <div><h3 className="font-bold">A practical workflow</h3><p className="mt-2 text-sm leading-6 text-[#40524c]">{publisherContent.workflow}</p></div>
                <div><h3 className="font-bold">Important limitation</h3><p className="mt-2 text-sm leading-6 text-[#40524c]">{publisherContent.limitation}</p></div>
                <div><h3 className="font-bold">Privacy note</h3><p className="mt-2 text-sm leading-6 text-[#40524c]">{publisherContent.privacy}</p></div>
              </div>
            </section>
          ) : null}
        </article>
        <aside className="rounded-lg border border-[#dce5e0] bg-white p-5">
          <h2 className="font-bold">Tools library</h2>
          <p className="mt-3 text-sm leading-6 text-[#5e6f68]">
            Browse business, SEO, developer, productivity, and AI automation utilities.
          </p>
          <Link href="/tools" className="mt-4 inline-flex font-bold text-[#0d4f42]">
            View all tools
          </Link>
        </aside>
      </div>
      <RelatedTools currentSlug={tool.slug} />
    </div>
  );
}
