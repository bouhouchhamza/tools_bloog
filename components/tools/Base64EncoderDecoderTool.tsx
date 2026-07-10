"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function encodeUnicode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function decodeUnicode(value: string) {
  const compact = value.replace(/\s/g, "");
  if (!compact || compact.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(compact)) throw new Error("Enter valid Base64 using letters, numbers, +, /, and correct = padding.");
  const binary = atob(compact);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export function Base64EncoderDecoderTool() {
  const [input, setInput] = useState(""); const [output, setOutput] = useState(""); const [error, setError] = useState("");
  function run(mode: "encode" | "decode") { try { if (!input) throw new Error("Enter text before continuing."); setOutput(mode === "encode" ? encodeUnicode(input) : decodeUnicode(input)); setError(""); } catch (caught) { setOutput(""); setError(caught instanceof Error ? caught.message : "The value could not be processed."); } }
  return <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
    <label htmlFor="base64-input" className="font-bold">Text or Base64 input</label><textarea id="base64-input" value={input} onChange={(e) => setInput(e.target.value)} rows={9} spellCheck={false} className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3 font-mono text-sm" />
    <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={() => run("encode")} className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white">Encode to Base64</button><button type="button" onClick={() => run("decode")} className="rounded-md border border-[#16705a] px-4 py-2 text-sm font-bold text-[#0d4f42]">Decode from Base64</button><button type="button" onClick={() => { setInput(""); setOutput(""); setError(""); }} className="rounded-md border border-[#dce5e0] px-4 py-2 text-sm font-bold">Clear</button></div>
    {error && <p role="alert" className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">{error}</p>}
    <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4"><div className="flex items-center justify-between gap-3"><h2 className="font-bold">Output</h2><CopyButton value={output} label="Copy output" disabled={!output} /></div><pre className="mt-3 min-h-20 overflow-auto whitespace-pre-wrap break-all rounded-md bg-white p-3 text-sm">{output || "Your encoded or decoded result will appear here."}</pre></div>
  </section>;
}
