"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function cleanPhone(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function WhatsAppLinkTool() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("Hi, I would like to learn more.");
  const phoneDigits = cleanPhone(phone);
  const hasValidPhone = phoneDigits.length >= 8 && phoneDigits.length <= 15;
  const generatedLink = useMemo(() => {
    if (!hasValidPhone) {
      return "";
    }

    const base = `https://wa.me/${phoneDigits}`;
    return message.trim() ? `${base}?text=${encodeURIComponent(message.trim())}` : base;
  }, [hasValidPhone, message, phoneDigits]);

  return (
    <section className="rounded-lg border border-[#dce5e0] bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="whatsapp-phone" className="font-bold text-[#17211d]">
            Phone number with country code
          </label>
          <input
            id="whatsapp-phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="15551234567"
            className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3"
          />
          <p className="mt-2 text-sm leading-6 text-[#5e6f68]">
            Use digits only when possible. Do not include a plus sign, spaces, or local leading zeroes.
          </p>
        </div>
        <div>
          <label htmlFor="whatsapp-message" className="font-bold text-[#17211d]">
            Default message
          </label>
          <textarea
            id="whatsapp-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            className="mt-2 w-full rounded-md border border-[#cbd8d2] px-3 py-3"
          />
        </div>
      </div>

      {!hasValidPhone && phone ? (
        <p className="mt-4 rounded-md border border-[#f0c7a0] bg-[#fff8f0] p-3 text-sm font-semibold text-[#7a4212]">
          Enter a full international phone number, usually 8 to 15 digits.
        </p>
      ) : null}

      <div className="mt-6 rounded-lg border border-[#dce5e0] bg-[#f8faf9] p-4">
        <h2 className="font-bold">Generated link</h2>
        <p className="mt-3 break-all rounded-md bg-white p-3 text-sm leading-6 text-[#40524c]">
          {generatedLink || "Your wa.me link will appear here after you enter a valid phone number."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CopyButton value={generatedLink} label="Copy WhatsApp link" disabled={!generatedLink} />
          {generatedLink ? (
            <a
              href={generatedLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d4f42]"
            >
              Test link
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-[#dce5e0] p-4">
        <h2 className="font-bold">Message preview</h2>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[#40524c]">
          {message.trim() || "Add a default message to preview it here."}
        </p>
      </div>
    </section>
  );
}
