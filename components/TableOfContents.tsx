import type { ArticleSection } from "@/lib/articles";

export function TableOfContents({ sections }: { sections: ArticleSection[] }) {
  return (
    <aside className="rounded-lg border border-[#dce5e0] bg-white p-5">
      <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[#16705a]">Table of contents</h2>
      <ol className="mt-4 space-y-2 text-sm font-semibold text-[#40524c]">
        {sections.map((section) => (
          <li key={section.heading}>
            <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{section.heading}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
