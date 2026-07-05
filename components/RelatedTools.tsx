import { ToolCard } from "@/components/ToolCard";
import { getRelatedTools } from "@/lib/tools";

export function RelatedTools({ currentSlug }: { currentSlug: string }) {
  const tools = getRelatedTools(currentSlug);

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#16705a]">Related tools</p>
          <h2 className="mt-2 text-2xl font-black">Keep building your workflow</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
