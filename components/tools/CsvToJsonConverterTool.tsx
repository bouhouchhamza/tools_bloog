"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

const sample = `name,department,hours\nAmira,Operations,7.5\nNoah,Marketing,6\nLina,Development,8`;

function parseCsv(source: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (quoted) {
      if (char === '"' && source[i + 1] === '"') { field += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"' && field.length === 0) quoted = true;
    else if (char === ",") { row.push(field); field = ""; }
    else if (char === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (char !== "\r") field += char;
  }
  if (quoted) throw new Error("A quoted field is not closed. Add the missing double quote.");
  row.push(field);
  if (row.some(Boolean) || rows.length === 0) rows.push(row);
  return rows;
}

export function CsvToJsonConverterTool() {
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState(true);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function convert() {
    try {
      if (!input.trim()) throw new Error("Enter CSV data before converting.");
      const rows = parseCsv(input);
      const width = rows[0].length;
      if (rows.some((row) => row.length !== width)) throw new Error("Rows have different column counts. Check missing or extra commas.");
      if (headers && rows.length < 2) throw new Error("Add at least one data row below the header row.");
      const result = headers
        ? rows.slice(1).map((row) => Object.fromEntries(rows[0].map((key, index) => [key.trim() || `column_${index + 1}`, row[index]])))
        : rows;
      setOutput(JSON.stringify(result, null, 2)); setError("");
    } catch (caught) { setOutput(""); setError(caught instanceof Error ? caught.message : "Could not parse this CSV."); }
  }

  function clear() { setInput(""); setOutput(""); setError(""); }

  return <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
    <label htmlFor="csv-input" className="font-bold">CSV input</label>
    <textarea id="csv-input" value={input} onChange={(e) => setInput(e.target.value)} rows={10} spellCheck={false} placeholder="name,team\nAmira,Operations" className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm" />
    <label className="mt-3 flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={headers} onChange={(e) => setHeaders(e.target.checked)} /> Use first row as headers</label>
    <div className="mt-4 flex flex-wrap gap-3">
      <button type="button" onClick={convert} className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white">Convert to JSON</button>
      <button type="button" onClick={() => { setInput(sample); setOutput(""); setError(""); }} className="rounded-md border border-[#16705a] px-4 py-2 text-sm font-bold text-[#0d4f42]">Load sample CSV</button>
      <button type="button" onClick={clear} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold">Clear</button>
    </div>
    {error && <p role="alert" className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">{error}</p>}
    <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4"><div className="flex items-center justify-between gap-3"><h2 className="font-bold">JSON output</h2><CopyButton value={output} label="Copy output" disabled={!output} /></div><pre className="mt-3 max-h-[420px] overflow-auto whitespace-pre-wrap rounded-md bg-white p-3 text-sm">{output || "Converted JSON will appear here."}</pre></div>
  </section>;
}
