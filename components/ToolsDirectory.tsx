"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "@/components/ToolCard";
import type { PlannedTool, ToolCategory } from "@/lib/tools";
import { toolCategories } from "@/lib/tools";

export function ToolsDirectory({ tools }: { tools: PlannedTool[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ToolCategory | "All">("All");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory = category === "All" || tool.category === category;
      const matchesQuery =
        !normalizedQuery ||
        tool.title.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query, tools]);

  return (
    <section className="container py-12">
      <div className="rounded-lg border border-[#dce5e0] bg-white p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_260px]">
          <label className="font-bold">
            Search tools
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, category, or use case"
              className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal"
            />
          </label>
          <label className="font-bold">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as ToolCategory | "All")}
              className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal"
            >
              <option>All</option>
              {toolCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
      {!filteredTools.length ? (
        <p className="mt-6 rounded-lg border border-[#dce5e0] bg-white p-5 text-sm leading-6 text-[#5e6f68]">
          No tools match that filter yet. Clear the search or choose another category.
        </p>
      ) : null}
    </section>
  );
}
