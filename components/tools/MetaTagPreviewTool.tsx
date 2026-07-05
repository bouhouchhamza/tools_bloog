"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function lengthMessage(length: number, min: number, max: number, label: string) {
  if (length < min) {
    return `${label} is short. Add useful context if it improves accuracy.`;
  }

  if (length > max) {
    return `${label} is long. Consider trimming before publishing.`;
  }

  return `${label} length is in a practical range.`;
}

export function MetaTagPreviewTool() {
  const [title, setTitle] = useState("Free SEO and Developer Tools for Workflow Builders");
  const [description, setDescription] = useState("Use practical free tools for SEO, business workflows, developer cleanup tasks, and automation planning.");
  const [url, setUrl] = useState("https://workflowtools.space/tools");

  const tags = useMemo(() => {
    return [
      `<title>${escapeHtml(title)}</title>`,
      `<meta name="description" content="${escapeHtml(description)}" />`,
      `<link rel="canonical" href="${escapeHtml(url)}" />`,
      `<meta property="og:title" content="${escapeHtml(title)}" />`,
      `<meta property="og:description" content="${escapeHtml(description)}" />`
    ].join("\n");
  }, [description, title, url]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5">
        <label className="font-bold">
          SEO title
          <input value={title} onChange={(event) => setTitle(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Meta description
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          URL
          <input value={url} onChange={(event) => setUrl(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-5">
        <h2 className="font-bold">Search preview</h2>
        <div className="mt-4 rounded-lg bg-white p-4">
          <p className="truncate text-sm text-[#202124]">{url || "https://example.com/page"}</p>
          <p className="mt-1 text-xl leading-6 text-[#1a0dab]">{title || "Your title preview"}</p>
          <p className="mt-2 text-sm leading-6 text-[#4d5156]">{description || "Your meta description preview will appear here."}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[#dce5e0] p-4">
          <p className="font-bold">Title length: {title.length}</p>
          <p className="mt-2 text-sm leading-6 text-[#5e6f68]">{lengthMessage(title.length, 30, 60, "Title")}</p>
        </div>
        <div className="rounded-lg border border-[#dce5e0] p-4">
          <p className="font-bold">Description length: {description.length}</p>
          <p className="mt-2 text-sm leading-6 text-[#5e6f68]">{lengthMessage(description.length, 70, 160, "Meta description")}</p>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold">Basic meta tags</h2>
          <CopyButton value={tags} label="Copy meta tags" />
        </div>
        <pre className="mt-3 overflow-auto rounded-md bg-white p-3 text-sm leading-6 text-[#24342f]">{tags}</pre>
      </div>
    </section>
  );
}
