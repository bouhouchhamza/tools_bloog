"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function clamp(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((value) => clamp(value).toString(16).padStart(2, "0")).join("")}`;
}

function mix(hex: string, target: "#ffffff" | "#000000", amount: number) {
  const base = hexToRgb(hex);
  const other = hexToRgb(target);
  return rgbToHex(
    base.r + (other.r - base.r) * amount,
    base.g + (other.g - base.g) * amount,
    base.b + (other.b - base.b) * amount
  );
}

function complement(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

export function ColorPaletteGeneratorTool() {
  const [baseColor, setBaseColor] = useState("#16705a");
  const palette = useMemo(() => {
    const comp = complement(baseColor);
    return [
      { label: "Light", hex: mix(baseColor, "#ffffff", 0.72) },
      { label: "Soft", hex: mix(baseColor, "#ffffff", 0.38) },
      { label: "Base", hex: baseColor },
      { label: "Dark", hex: mix(baseColor, "#000000", 0.28) },
      { label: "Complement", hex: comp },
      { label: "Complement soft", hex: mix(comp, "#ffffff", 0.45) }
    ];
  }, [baseColor]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <label htmlFor="base-color" className="font-bold">
        Base color
      </label>
      <div className="mt-2 flex flex-wrap gap-3">
        <input id="base-color" type="color" value={baseColor} onChange={(event) => setBaseColor(event.target.value)} className="h-12 w-20 rounded-md border border-[#cbd8d2] bg-white p-1" />
        <input value={baseColor} onChange={(event) => setBaseColor(event.target.value)} className="w-40 rounded-md border border-[#cbd8d2] px-3 py-3 font-mono" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {palette.map((color) => (
          <div key={color.label} className="overflow-hidden rounded-lg border border-[#dce5e0] bg-white">
            <div className="h-28" style={{ backgroundColor: color.hex }} />
            <div className="p-4">
              <p className="font-bold">{color.label}</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-sm">{color.hex}</span>
                <CopyButton value={color.hex} label="Copy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
