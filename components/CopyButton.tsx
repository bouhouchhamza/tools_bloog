"use client";

import { useState } from "react";

export function CopyButton({ value, label = "Copy", disabled = false }: { value: string; label?: string; disabled?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setFailed(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setFailed(true);
      window.setTimeout(() => setFailed(false), 2200);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={disabled || !value}
      className="rounded-md border border-[#16705a] px-4 py-2 text-sm font-bold text-[#0d4f42] hover:bg-[#eef7f4] disabled:cursor-not-allowed disabled:border-[#b8c6c0] disabled:text-[#81918b]"
      aria-live="polite"
    >
      {failed ? "Copy failed" : copied ? "Copied" : label}
    </button>
  );
}
