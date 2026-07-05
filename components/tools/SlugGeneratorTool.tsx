"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function SlugGeneratorTool() {
  const [text, setText] = useState("Free SEO Title and Meta Generator for Small Business");
  const slug = useMemo(() => slugify(text), [text]);
  const alternatives = useMemo(() => {
    const words = slug.split("-").filter(Boolean);
    return [
      words.slice(0, 5).join("-"),
      words.filter((word) => !["free", "the", "and", "for", "with", "your"].includes(word)).join("-"),
      words.slice(0, 8).join("-")
    ].filter((item, index, list) => item && list.indexOf(item) === index);
  }, [slug]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <label htmlFor="slug-text" className="font-bold">
        Title or text
      </label>
      <textarea id="slug-text" value={text} onChange={(event) => setText(event.target.value)} rows={4} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3" />

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold">Generated slug</h2>
          <CopyButton value={slug} label="Copy slug" disabled={!slug} />
        </div>
        <p className="mt-3 break-all rounded-md bg-white p-3 font-mono text-sm text-[#24342f]">{slug || "your-slug-will-appear-here"}</p>
      </div>

      <div className="mt-5 rounded-lg border border-[#dce5e0] p-4">
        <h2 className="font-bold">Alternative slug suggestions</h2>
        <div className="mt-3 grid gap-3">
          {alternatives.length ? alternatives.map((item) => (
            <div key={item} className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-[#f8faf9] p-3">
              <span className="break-all font-mono text-sm">{item}</span>
              <CopyButton value={item} label="Copy" />
            </div>
          )) : <p className="text-sm text-[#5e6f68]">Add text to generate alternatives.</p>}
        </div>
      </div>
    </section>
  );
}
