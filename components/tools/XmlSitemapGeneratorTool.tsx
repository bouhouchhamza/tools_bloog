"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function XmlSitemapGeneratorTool() {
  const [urls, setUrls] = useState("https://workflowtools.space/\nhttps://workflowtools.space/tools\nhttps://workflowtools.space/blog");
  const [changeFrequency, setChangeFrequency] = useState("weekly");
  const [priority, setPriority] = useState("0.8");
  const [includeLastModified, setIncludeLastModified] = useState(true);
  const today = new Date().toISOString().slice(0, 10);

  const parsed = useMemo(() => {
    const lines = urls.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    return {
      valid: lines.filter(isValidHttpUrl),
      invalid: lines.filter((line) => !isValidHttpUrl(line))
    };
  }, [urls]);

  const xml = useMemo(() => {
    const entries = parsed.valid
      .map((url) => {
        const parts = [
          "  <url>",
          `    <loc>${escapeXml(url)}</loc>`,
          includeLastModified ? `    <lastmod>${today}</lastmod>` : "",
          `    <changefreq>${changeFrequency}</changefreq>`,
          `    <priority>${priority}</priority>`,
          "  </url>"
        ].filter(Boolean);
        return parts.join("\n");
      })
      .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
  }, [changeFrequency, includeLastModified, parsed.valid, priority, today]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <label htmlFor="sitemap-urls" className="font-bold">
        Page URLs, one per line
      </label>
      <textarea id="sitemap-urls" value={urls} onChange={(event) => setUrls(event.target.value)} rows={8} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm" />

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <label className="font-bold">
          Change frequency
          <select value={changeFrequency} onChange={(event) => setChangeFrequency(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal">
            {["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className="font-bold">
          Priority
          <select value={priority} onChange={(event) => setPriority(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal">
            {["1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1"].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-3 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4 font-bold">
          <input type="checkbox" checked={includeLastModified} onChange={(event) => setIncludeLastModified(event.target.checked)} />
          Include today as last modified
        </label>
      </div>

      {parsed.invalid.length ? (
        <p className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">
          {parsed.invalid.length} URL{parsed.invalid.length === 1 ? "" : "s"} will be skipped because they are not valid http or https URLs.
        </p>
      ) : null}

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold">Generated XML sitemap</h2>
          <CopyButton value={xml} label="Copy XML" disabled={parsed.valid.length === 0} />
        </div>
        <pre className="mt-3 max-h-[420px] overflow-auto rounded-md bg-white p-3 text-sm leading-6 text-[#24342f]">{xml}</pre>
      </div>
    </section>
  );
}
