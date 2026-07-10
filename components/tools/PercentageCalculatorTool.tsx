"use client";

import { useState } from "react";

type Mode = "of" | "ratio" | "change";
const labels = { of: ["Percentage (X)", "Number (Y)"], ratio: ["Number (X)", "Total (Y)"], change: ["Original value", "New value"] } as const;
export function PercentageCalculatorTool() {
  const [mode, setMode] = useState<Mode>("of"); const [x, setX] = useState(""); const [y, setY] = useState(""); const [result, setResult] = useState(""); const [error, setError] = useState("");
  function calculate() { const a = Number(x), b = Number(y); if (x.trim() === "" || y.trim() === "" || !Number.isFinite(a) || !Number.isFinite(b)) { setError("Enter a valid number in both fields."); setResult(""); return; } if ((mode === "ratio" || mode === "change") && b === 0 && mode === "ratio" || mode === "change" && a === 0) { setError("The divisor cannot be zero for this calculation."); setResult(""); return; } const value = mode === "of" ? a / 100 * b : mode === "ratio" ? a / b * 100 : (b - a) / Math.abs(a) * 100; setResult(mode === "of" ? `${a}% of ${b} is ${value.toLocaleString(undefined, { maximumFractionDigits: 6 })}` : mode === "ratio" ? `${a} is ${value.toLocaleString(undefined, { maximumFractionDigits: 6 })}% of ${b}` : `${Math.abs(value).toLocaleString(undefined, { maximumFractionDigits: 6 })}% ${value >= 0 ? "increase" : "decrease"}`); setError(""); }
  function select(next: Mode) { setMode(next); setX(""); setY(""); setResult(""); setError(""); }
  return <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft"><div className="flex flex-wrap gap-2">{(["of", "ratio", "change"] as Mode[]).map((item) => <button type="button" key={item} onClick={() => select(item)} className={`rounded-md px-3 py-2 text-sm font-bold ${mode === item ? "bg-[#16705a] text-white" : "border border-[#dce5e0]"}`}>{item === "of" ? "X% of Y" : item === "ratio" ? "X is what % of Y" : "% change"}</button>)}</div>
    <div className="mt-5 grid gap-4 sm:grid-cols-2">{[x, y].map((value, index) => <label key={index} className="font-bold">{labels[mode][index]}<input type="number" value={value} onChange={(e) => index === 0 ? setX(e.target.value) : setY(e.target.value)} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-normal" /></label>)}</div>
    <div className="mt-4 flex gap-3"><button type="button" onClick={calculate} className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white">Calculate</button><button type="button" onClick={() => { setX(""); setY(""); setResult(""); setError(""); }} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold">Clear</button></div>
    {error && <p role="alert" className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">{error}</p>}{result && <div aria-live="polite" className="mt-6 rounded-lg border border-[#b8dccf] bg-[#f1faf6] p-5"><p className="text-sm font-bold uppercase tracking-wide text-[#16705a]">Result</p><p className="mt-2 text-2xl font-black text-[#0d4f42]">{result}</p></div>}
  </section>;
}
