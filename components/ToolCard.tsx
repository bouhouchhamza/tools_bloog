import Link from "next/link";
import type { PlannedTool } from "@/lib/tools";
import { getToolPath } from "@/lib/tools";

export function ToolCard({ tool }: { tool: PlannedTool }) {
  return (
    <article
      id={tool.slug}
      className="scroll-mt-28 flex h-full flex-col rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft transition hover:border-[#16705a]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#eef7f4] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#0d4f42]">
          {tool.category}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-bold leading-snug text-[#17211d]">
        <Link href={getToolPath(tool.slug)}>{tool.title}</Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#5e6f68]">{tool.description}</p>
      <Link href={getToolPath(tool.slug)} className="mt-5 inline-flex font-bold text-[#0d4f42]">
        Open tool
      </Link>
    </article>
  );
}
