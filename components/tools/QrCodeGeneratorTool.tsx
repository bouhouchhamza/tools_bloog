"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { CopyButton } from "@/components/CopyButton";

export function QrCodeGeneratorTool() {
  const [value, setValue] = useState("https://workflowtools.space/tools");
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function generate() {
      const trimmed = value.trim();

      if (!trimmed) {
        setDataUrl("");
        setError("Enter text or a URL to generate a QR code.");
        return;
      }

      try {
        const result = await QRCode.toDataURL(trimmed, {
          width: 320,
          margin: 2,
          color: {
            dark: "#17211d",
            light: "#ffffff"
          }
        });

        if (active) {
          setDataUrl(result);
          setError("");
        }
      } catch {
        if (active) {
          setDataUrl("");
          setError("The QR code could not be generated. Try shorter text.");
        }
      }
    }

    generate();

    return () => {
      active = false;
    };
  }, [value]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <label htmlFor="qr-value" className="font-bold">
        Text or URL
      </label>
      <textarea
        id="qr-value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={4}
        className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3"
      />

      {error ? (
        <p className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">
          {error}
        </p>
      ) : null}

      <div className="mt-6 grid gap-5 md:grid-cols-[360px_1fr] md:items-start">
        <div className="rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-5 text-center">
          {dataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={dataUrl} alt="Generated QR code" className="mx-auto size-72 max-w-full rounded-md bg-white p-3" />
          ) : (
            <div className="grid size-72 max-w-full place-items-center rounded-md bg-white p-3 text-sm text-[#5e6f68]">
              QR preview
            </div>
          )}
        </div>
        <div className="rounded-lg border border-[#dce5e0] p-4">
          <h2 className="font-bold">Actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <CopyButton value={value.trim()} label="Copy original text" disabled={!value.trim()} />
            {dataUrl ? (
              <a
                href={dataUrl}
                download="workflowtools-qr-code.png"
                className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d4f42]"
              >
                Download PNG
              </a>
            ) : null}
          </div>
          <p className="mt-4 text-sm leading-6 text-[#5e6f68]">
            Test the QR code with a phone camera before printing it on business cards, flyers, or signs.
          </p>
        </div>
      </div>
    </section>
  );
}
