"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

const sets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

function generatePassword(length: number, pool: string) {
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (value) => pool[value % pool.length]).join("");
}

function strengthLabel(password: string, selectedSets: number) {
  if (password.length >= 18 && selectedSets >= 3) return "Strong";
  if (password.length >= 12 && selectedSets >= 2) return "Good";
  if (password.length >= 8) return "Basic";
  return "Weak";
}

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const selected = useMemo(() => {
    const active = [
      includeUppercase ? sets.uppercase : "",
      includeLowercase ? sets.lowercase : "",
      includeNumbers ? sets.numbers : "",
      includeSymbols ? sets.symbols : ""
    ].filter(Boolean);
    return { active, pool: active.join("") };
  }, [includeLowercase, includeNumbers, includeSymbols, includeUppercase]);

  function handleGenerate() {
    if (!selected.pool) {
      setPassword("");
      return;
    }
    setPassword(generatePassword(length, selected.pool));
  }

  const strength = strengthLabel(password, selected.active.length);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <label htmlFor="password-length" className="font-bold">
        Password length: {length}
      </label>
      <input
        id="password-length"
        type="range"
        min="8"
        max="64"
        value={length}
        onChange={(event) => setLength(Number(event.target.value))}
        className="mt-3 w-full"
      />

      <fieldset className="mt-5">
        <legend className="font-bold">Character options</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            ["Uppercase", includeUppercase, setIncludeUppercase],
            ["Lowercase", includeLowercase, setIncludeLowercase],
            ["Numbers", includeNumbers, setIncludeNumbers],
            ["Symbols", includeSymbols, setIncludeSymbols]
          ].map(([label, checked, setter]) => (
            <label key={label as string} className="flex items-center gap-3 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-3 font-bold">
              <input type="checkbox" checked={checked as boolean} onChange={(event) => (setter as (value: boolean) => void)(event.target.checked)} />
              {label as string}
            </label>
          ))}
        </div>
      </fieldset>

      {!selected.pool ? (
        <p className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">
          Select at least one character type.
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={handleGenerate} disabled={!selected.pool} className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d4f42] disabled:cursor-not-allowed disabled:bg-[#8aa89f]">
          Generate password
        </button>
        <CopyButton value={password} label="Copy password" disabled={!password} />
      </div>

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <h2 className="font-bold">Generated password</h2>
        <p className="mt-3 break-all rounded-md bg-white p-3 font-mono text-sm text-[#24342f]">{password || "Click generate to create a password."}</p>
        <p className="mt-3 text-sm font-bold text-[#0d4f42]">Strength: {password ? strength : "Not generated"}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#5e6f68]">
        Passwords are generated in your browser and are not stored by this tool.
      </p>
    </section>
  );
}
