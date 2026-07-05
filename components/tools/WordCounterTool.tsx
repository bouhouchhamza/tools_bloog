"use client";

import { useMemo, useState } from "react";

export function WordCounterTool() {
  const [text, setText] = useState("Paste or write your draft here to count words, characters, sentences, paragraphs, and reading time.");
  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.match(/\b[\w'-]+\b/g)?.length ?? 0 : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).map((item) => item.trim()).filter(Boolean).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean).length : 0;
    const readingMinutes = Math.max(1, Math.ceil(words / 200));

    return { words, characters, charactersNoSpaces, sentences, paragraphs, readingMinutes };
  }, [text]);

  const cards = [
    ["Words", stats.words],
    ["Characters", stats.characters],
    ["Characters without spaces", stats.charactersNoSpaces],
    ["Sentences", stats.sentences],
    ["Paragraphs", stats.paragraphs],
    ["Estimated reading time", `${stats.readingMinutes} min`]
  ];

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label htmlFor="word-counter-text" className="font-bold">
          Text
        </label>
        <button type="button" onClick={() => setText("")} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold text-[#40524c] hover:bg-[#f8faf9]">
          Clear text
        </button>
      </div>
      <textarea
        id="word-counter-text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={10}
        className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
            <p className="text-sm font-bold text-[#5e6f68]">{label}</p>
            <p className="mt-2 text-3xl font-black">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
