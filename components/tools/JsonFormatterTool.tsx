"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

const sampleJson = JSON.stringify(
  {
    project: "workflowtools.space",
    type: "free tools website",
    categories: ["SEO", "Developer", "Business"],
    active: true
  },
  null,
  2
);

export function JsonFormatterTool() {
  const [input, setInput] = useState(sampleJson);
  const [output, setOutput] = useState(sampleJson);
  const [message, setMessage] = useState("Sample JSON is valid.");
  const [isValid, setIsValid] = useState(true);

  function parseJson() {
    return JSON.parse(input) as unknown;
  }

  function handleFormat() {
    try {
      const parsed = parseJson();
      setOutput(JSON.stringify(parsed, null, 2));
      setMessage("JSON is valid and formatted with two-space indentation.");
      setIsValid(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Invalid JSON.");
      setIsValid(false);
    }
  }

  function handleMinify() {
    try {
      const parsed = parseJson();
      setOutput(JSON.stringify(parsed));
      setMessage("JSON is valid and minified.");
      setIsValid(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Invalid JSON.");
      setIsValid(false);
    }
  }

  function handleValidate() {
    try {
      parseJson();
      setMessage("JSON is valid.");
      setIsValid(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Invalid JSON.");
      setIsValid(false);
    }
  }

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <label htmlFor="json-input" className="font-bold text-[#17211d]">
        JSON input
      </label>
      <textarea
        id="json-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={12}
        spellCheck={false}
        className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={handleFormat} className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d4f42]">
          Format JSON
        </button>
        <button type="button" onClick={handleMinify} className="rounded-md border border-[#16705a] px-4 py-2 text-sm font-bold text-[#0d4f42] hover:bg-[#eef7f4]">
          Minify JSON
        </button>
        <button type="button" onClick={handleValidate} className="rounded-md border border-[#16705a] px-4 py-2 text-sm font-bold text-[#0d4f42] hover:bg-[#eef7f4]">
          Validate JSON
        </button>
        <button
          type="button"
          onClick={() => {
            setInput(sampleJson);
            setOutput(sampleJson);
            setMessage("Sample JSON loaded.");
            setIsValid(true);
          }}
          className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold text-[#40524c] hover:bg-[#f8faf9]"
        >
          Load sample JSON
        </button>
      </div>

      <p className={`mt-4 rounded-md border p-3 text-sm font-semibold ${isValid ? "border-[#b8dccf] bg-[#f1faf6] text-[#0d4f42]" : "border-[#f0c7a0] bg-[#fff8f0] text-[#7a4212]"}`}>
        {message}
      </p>

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold">Result</h2>
          <CopyButton value={output} label="Copy result" disabled={!output} />
        </div>
        <pre className="mt-3 max-h-[420px] overflow-auto rounded-md bg-white p-3 text-sm leading-6 text-[#24342f]">{output || "Formatted or minified JSON will appear here."}</pre>
      </div>
    </section>
  );
}
