"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function SeoTitleMetaGenerator() {
  const [keyword, setKeyword] = useState("automation ROI calculator");
  const [audience, setAudience] = useState("small business owners");
  const [pageType, setPageType] = useState("tool page");
  const [tone, setTone] = useState("practical");

  const generated = useMemo(() => {
    const cleanKeyword = keyword.trim() || "your topic";
    const cleanAudience = audience.trim() || "your audience";
    const cleanType = pageType.trim() || "page";
    const cleanTone = tone.trim() || "helpful";
    const titleIdeas = [
      `${cleanKeyword}: Free ${cleanTone} ${cleanType} for ${cleanAudience}`,
      `Free ${cleanKeyword} for ${cleanAudience}`,
      `${cleanKeyword} Guide and Tool for Better Decisions`,
      `How to Use a ${cleanKeyword} Without Overcomplicating Your Workflow`
    ];
    const metaDescription = `Use this ${cleanTone} ${cleanType} to work with ${cleanKeyword}. Built for ${cleanAudience} who need clear steps, useful examples, and practical next actions.`;
    const slug = slugify(cleanKeyword);
    const outline = [
      `What ${cleanKeyword} helps you decide`,
      `When ${cleanAudience} should use it`,
      "Step-by-step workflow",
      "Example inputs and results",
      "Common mistakes to avoid",
      "Frequently asked questions"
    ];
    const faqs = [
      `What is the best way to use ${cleanKeyword}?`,
      `Who should use this ${cleanType}?`,
      `What mistakes should ${cleanAudience} avoid?`,
      `How often should this page be reviewed or updated?`
    ];

    return { titleIdeas, metaDescription, slug, outline, faqs };
  }, [audience, keyword, pageType, tone]);

  const copyText = [
    "SEO title ideas:",
    ...generated.titleIdeas.map((title) => `- ${title}`),
    "",
    `Meta description: ${generated.metaDescription}`,
    `Slug: ${generated.slug}`,
    "",
    "Outline:",
    ...generated.outline.map((item) => `- ${item}`),
    "",
    "FAQ ideas:",
    ...generated.faqs.map((item) => `- ${item}`)
  ].join("\n");

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="font-bold">
          Target keyword
          <input value={keyword} onChange={(event) => setKeyword(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Audience
          <input value={audience} onChange={(event) => setAudience(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Page type
          <select value={pageType} onChange={(event) => setPageType(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal">
            <option>tool page</option>
            <option>blog post</option>
            <option>service page</option>
            <option>landing page</option>
            <option>product page</option>
          </select>
        </label>
        <label className="font-bold">
          Tone
          <select value={tone} onChange={(event) => setTone(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal">
            <option>practical</option>
            <option>friendly</option>
            <option>professional</option>
            <option>direct</option>
            <option>beginner-friendly</option>
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-5">
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <h2 className="font-bold">SEO title ideas</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[#40524c]">
            {generated.titleIdeas.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <h2 className="font-bold">Meta description idea</h2>
          <p className="mt-3 text-sm leading-6 text-[#40524c]">{generated.metaDescription}</p>
          <p className="mt-2 text-xs font-bold text-[#5e6f68]">{generated.metaDescription.length} characters</p>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <h2 className="font-bold">Slug idea</h2>
          <p className="mt-3 break-all text-sm leading-6 text-[#40524c]">{generated.slug || "add-a-keyword"}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
            <h2 className="font-bold">Article outline</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#40524c]">
              {generated.outline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
            <h2 className="font-bold">FAQ ideas</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#40524c]">
              {generated.faqs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CopyButton value={copyText} label="Copy generated ideas" />
      </div>
    </section>
  );
}
