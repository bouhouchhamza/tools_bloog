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

export function UtmBuilderTool() {
  const [websiteUrl, setWebsiteUrl] = useState("https://workflowtools.space/tools");
  const [source, setSource] = useState("newsletter");
  const [medium, setMedium] = useState("email");
  const [campaign, setCampaign] = useState("spring_launch");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const hasRequiredFields = isValidHttpUrl(websiteUrl) && source.trim() && medium.trim() && campaign.trim();

  const utmUrl = useMemo(() => {
    if (!hasRequiredFields) {
      return "";
    }

    const url = new URL(websiteUrl);
    url.searchParams.set("utm_source", source.trim());
    url.searchParams.set("utm_medium", medium.trim());
    url.searchParams.set("utm_campaign", campaign.trim());

    if (term.trim()) {
      url.searchParams.set("utm_term", term.trim());
    }

    if (content.trim()) {
      url.searchParams.set("utm_content", content.trim());
    }

    return url.toString();
  }, [campaign, content, hasRequiredFields, medium, source, term, websiteUrl]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block font-bold">
          Website URL
          <input value={websiteUrl} onChange={(event) => setWebsiteUrl(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="block font-bold">
          Source
          <input value={source} onChange={(event) => setSource(event.target.value)} placeholder="google, newsletter, linkedin" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="block font-bold">
          Medium
          <input value={medium} onChange={(event) => setMedium(event.target.value)} placeholder="cpc, email, social" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="block font-bold">
          Campaign
          <input value={campaign} onChange={(event) => setCampaign(event.target.value)} placeholder="spring_launch" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="block font-bold">
          Term optional
          <input value={term} onChange={(event) => setTerm(event.target.value)} placeholder="keyword or audience" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="block font-bold">
          Content optional
          <input value={content} onChange={(event) => setContent(event.target.value)} placeholder="button_a or header_link" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
      </div>

      {!hasRequiredFields ? (
        <p className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">
          Enter a valid http or https URL plus source, medium, and campaign values.
        </p>
      ) : null}

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <h2 className="font-bold">Final UTM URL</h2>
        <p className="mt-3 break-all rounded-md bg-white p-3 text-sm leading-6 text-[#40524c]">
          {utmUrl || "Your campaign URL will appear here."}
        </p>
        <div className="mt-4">
          <CopyButton value={utmUrl} label="Copy UTM URL" disabled={!utmUrl} />
        </div>
      </div>
    </section>
  );
}
