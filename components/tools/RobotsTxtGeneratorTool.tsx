"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

type RobotsMode = "allow" | "block" | "custom";

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function RobotsTxtGeneratorTool() {
  const [websiteUrl, setWebsiteUrl] = useState("https://workflowtools.space");
  const [sitemapUrl, setSitemapUrl] = useState("https://workflowtools.space/sitemap.xml");
  const [mode, setMode] = useState<RobotsMode>("allow");
  const [customPaths, setCustomPaths] = useState("/admin\n/private");

  const hasValidWebsite = isValidUrl(websiteUrl);
  const hasValidSitemap = !sitemapUrl.trim() || isValidUrl(sitemapUrl);

  const robots = useMemo(() => {
    const lines = ["User-agent: *"];

    if (mode === "allow") {
      lines.push("Allow: /");
    }

    if (mode === "block") {
      lines.push("Disallow: /");
    }

    if (mode === "custom") {
      const paths = customPaths
        .split(/\r?\n/)
        .map((path) => path.trim())
        .filter(Boolean)
        .map((path) => (path.startsWith("/") ? path : `/${path}`));

      if (paths.length === 0) {
        lines.push("Disallow:");
      } else {
        lines.push(...paths.map((path) => `Disallow: ${path}`));
      }
    }

    if (sitemapUrl.trim()) {
      lines.push("", `Sitemap: ${sitemapUrl.trim()}`);
    }

    return lines.join("\n");
  }, [customPaths, mode, sitemapUrl]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="font-bold">
          Website URL
          <input value={websiteUrl} onChange={(event) => setWebsiteUrl(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Sitemap URL
          <input value={sitemapUrl} onChange={(event) => setSitemapUrl(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="font-bold">Robots mode</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { value: "allow", label: "Allow all" },
            { value: "block", label: "Block all" },
            { value: "custom", label: "Custom" }
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-3 text-sm font-bold">
              <input type="radio" name="robots-mode" value={option.value} checked={mode === option.value} onChange={() => setMode(option.value as RobotsMode)} />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {mode === "custom" ? (
        <label className="mt-5 block font-bold">
          Custom disallow paths
          <textarea value={customPaths} onChange={(event) => setCustomPaths(event.target.value)} rows={5} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm" />
        </label>
      ) : null}

      {!hasValidWebsite || !hasValidSitemap ? (
        <p className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">
          Use full http or https URLs for the website and sitemap fields.
        </p>
      ) : null}

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold">Generated robots.txt</h2>
          <CopyButton value={robots} label="Copy robots.txt" disabled={!hasValidWebsite || !hasValidSitemap} />
        </div>
        <pre className="mt-3 overflow-auto rounded-md bg-white p-3 text-sm leading-6 text-[#24342f]">{robots}</pre>
      </div>
    </section>
  );
}
