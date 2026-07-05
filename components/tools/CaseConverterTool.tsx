"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

type CaseMode = "lowercase" | "uppercase" | "title" | "sentence" | "kebab" | "snake" | "camel" | "pascal";

function words(value: string) {
  return value
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
}

function toTitle(value: string) {
  return words(value).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

function toSentence(value: string) {
  const lower = value.trim().toLowerCase();
  return lower.replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
}

function convert(value: string, mode: CaseMode) {
  const parts = words(value);

  if (mode === "lowercase") return value.toLowerCase();
  if (mode === "uppercase") return value.toUpperCase();
  if (mode === "title") return toTitle(value);
  if (mode === "sentence") return toSentence(value);
  if (mode === "kebab") return parts.map((word) => word.toLowerCase()).join("-");
  if (mode === "snake") return parts.map((word) => word.toLowerCase()).join("_");
  if (mode === "camel") return parts.map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
  return parts.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
}

export function CaseConverterTool() {
  const [input, setInput] = useState("Convert this headline into useful text cases");
  const [mode, setMode] = useState<CaseMode>("title");
  const result = useMemo(() => convert(input, mode), [input, mode]);
  const options: { value: CaseMode; label: string }[] = [
    { value: "lowercase", label: "lowercase" },
    { value: "uppercase", label: "UPPERCASE" },
    { value: "title", label: "Title Case" },
    { value: "sentence", label: "Sentence case" },
    { value: "kebab", label: "kebab-case" },
    { value: "snake", label: "snake_case" },
    { value: "camel", label: "camelCase" },
    { value: "pascal", label: "PascalCase" }
  ];

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label htmlFor="case-input" className="font-bold">
          Input text
        </label>
        <button type="button" onClick={() => setInput("")} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold text-[#40524c] hover:bg-[#f8faf9]">
          Clear
        </button>
      </div>
      <textarea id="case-input" value={input} onChange={(event) => setInput(event.target.value)} rows={6} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3" />

      <fieldset className="mt-5">
        <legend className="font-bold">Convert to</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-3 text-sm font-bold">
              <input type="radio" name="case-mode" value={option.value} checked={mode === option.value} onChange={() => setMode(option.value)} />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold">Result</h2>
          <CopyButton value={result} label="Copy result" disabled={!result} />
        </div>
        <p className="mt-3 break-words rounded-md bg-white p-3 text-sm leading-6 text-[#24342f]">{result || "Converted text will appear here."}</p>
      </div>
    </section>
  );
}
