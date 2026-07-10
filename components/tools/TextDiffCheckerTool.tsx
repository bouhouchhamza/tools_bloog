"use client";

import { useMemo, useState } from "react";

type Diff = { type: "added" | "removed" | "unchanged"; text: string };
function compare(a: string, b: string): Diff[] {
  const left = a ? a.split("\n") : [], right = b ? b.split("\n") : [];
  const table = Array.from({ length: left.length + 1 }, () => Array(right.length + 1).fill(0) as number[]);
  for (let i = left.length - 1; i >= 0; i -= 1) for (let j = right.length - 1; j >= 0; j -= 1) table[i][j] = left[i] === right[j] ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
  const result: Diff[] = []; let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) { result.push({ type: "unchanged", text: left[i] }); i += 1; j += 1; }
    else if (table[i + 1][j] >= table[i][j + 1]) { result.push({ type: "removed", text: left[i] }); i += 1; }
    else { result.push({ type: "added", text: right[j] }); j += 1; }
  }
  while (i < left.length) result.push({ type: "removed", text: left[i++] });
  while (j < right.length) result.push({ type: "added", text: right[j++] });
  return result;
}

export function TextDiffCheckerTool() {
  const [original, setOriginal] = useState(""); const [changed, setChanged] = useState(""); const [compared, setCompared] = useState(false);
  const diff = useMemo(() => compared ? compare(original.replace(/\r/g, ""), changed.replace(/\r/g, "")) : [], [original, changed, compared]);
  const counts = diff.reduce((total, line) => ({ ...total, [line.type]: total[line.type] + 1 }), { added: 0, removed: 0, unchanged: 0 });
  return <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
    <div className="grid gap-4 md:grid-cols-2"><div><label htmlFor="original-text" className="font-bold">Original text</label><textarea id="original-text" value={original} onChange={(e) => { setOriginal(e.target.value); setCompared(false); }} rows={11} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm" /></div><div><label htmlFor="changed-text" className="font-bold">Changed text</label><textarea id="changed-text" value={changed} onChange={(e) => { setChanged(e.target.value); setCompared(false); }} rows={11} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm" /></div></div>
    <div className="mt-4 flex gap-3"><button type="button" onClick={() => setCompared(true)} disabled={!original && !changed} className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white disabled:opacity-50">Compare text</button><button type="button" onClick={() => { setOriginal(""); setChanged(""); setCompared(false); }} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold">Clear</button></div>
    {compared && <div className="mt-6"><div className="grid grid-cols-3 gap-3 text-center text-sm font-bold"><p className="rounded-md bg-[#edf8f1] p-3 text-[#17643a]">{counts.added} added</p><p className="rounded-md bg-[#fff0ef] p-3 text-[#8a3028]">{counts.removed} removed</p><p className="rounded-md bg-[#f1f4f3] p-3">{counts.unchanged} unchanged</p></div><div className="mt-4 overflow-hidden rounded-md border border-[#dce5e0] font-mono text-sm">{diff.length ? diff.map((line, index) => <div key={`${index}-${line.text}`} className={`flex border-b border-[#edf1ef] px-3 py-2 last:border-0 ${line.type === "added" ? "bg-[#edf8f1] text-[#17643a]" : line.type === "removed" ? "bg-[#fff0ef] text-[#8a3028]" : "bg-white text-[#5e6f68]"}`}><span className="mr-3 w-4 select-none font-bold">{line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}</span><span className="whitespace-pre-wrap break-all">{line.text || " "}</span></div>) : <p className="p-4">Both inputs are empty.</p>}</div></div>}
  </section>;
}
