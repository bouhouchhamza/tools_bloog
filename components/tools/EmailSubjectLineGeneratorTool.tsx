"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

export function EmailSubjectLineGeneratorTool() {
  const [topic, setTopic] = useState("launching a new free tool");
  const [audience, setAudience] = useState("small business owners");
  const [emailType, setEmailType] = useState("newsletter");
  const [tone, setTone] = useState("practical");

  const generated = useMemo(() => {
    const cleanTopic = topic.trim() || "your update";
    const cleanAudience = audience.trim() || "your readers";
    const cleanType = emailType.trim() || "email";
    const cleanTone = tone.trim() || "helpful";

    const subjects = [
      `A ${cleanTone} update on ${cleanTopic}`,
      `${cleanAudience}: here is a simpler way to approach ${cleanTopic}`,
      `New ${cleanType}: ${cleanTopic}`,
      `What to know before ${cleanTopic}`,
      `For ${cleanAudience}: ${cleanTopic} without extra complexity`,
      `Quick guide: ${cleanTopic}`
    ];
    const previews = [
      `A short, useful note for ${cleanAudience} with the main details and next step.`,
      `Here is what changed, why it matters, and how to use it in your workflow.`,
      `No hype, just the practical context behind ${cleanTopic}.`
    ];

    return { subjects, previews };
  }, [audience, emailType, tone, topic]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="font-bold">
          Topic
          <input value={topic} onChange={(event) => setTopic(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Audience
          <input value={audience} onChange={(event) => setAudience(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" />
        </label>
        <label className="font-bold">
          Email type
          <select value={emailType} onChange={(event) => setEmailType(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal">
            <option>newsletter</option>
            <option>promotion</option>
            <option>announcement</option>
            <option>follow-up</option>
            <option>onboarding email</option>
          </select>
        </label>
        <label className="font-bold">
          Tone
          <select value={tone} onChange={(event) => setTone(event.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal">
            <option>practical</option>
            <option>friendly</option>
            <option>direct</option>
            <option>professional</option>
            <option>curious</option>
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <h2 className="font-bold">Subject line ideas</h2>
          <div className="mt-3 grid gap-3">
            {generated.subjects.map((subject) => (
              <div key={subject} className="rounded-md bg-white p-3">
                <p className="text-sm leading-6 text-[#24342f]">{subject}</p>
                <div className="mt-2">
                  <CopyButton value={subject} label="Copy" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
          <h2 className="font-bold">Preview text ideas</h2>
          <div className="mt-3 grid gap-3">
            {generated.previews.map((preview) => (
              <div key={preview} className="rounded-md bg-white p-3">
                <p className="text-sm leading-6 text-[#24342f]">{preview}</p>
                <div className="mt-2">
                  <CopyButton value={preview} label="Copy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
