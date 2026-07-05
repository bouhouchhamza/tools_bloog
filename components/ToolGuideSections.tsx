import Link from "next/link";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export function ToolGuideSections({
  howToUse,
  examples,
  mistakes,
  faqs,
  links
}: {
  howToUse: string[];
  examples: string[];
  mistakes: string[];
  faqs: FAQItem[];
  links: { href: string; label: string }[];
}) {
  return (
    <div className="mt-10 grid gap-10">
      <section>
        <h2 className="text-2xl font-black">How to use this tool</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-[#40524c]">
          {howToUse.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-black">Practical examples</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {examples.map((item) => (
            <p key={item} className="rounded-lg border border-[#dce5e0] bg-white p-4 text-sm leading-6 text-[#40524c]">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black">Common mistakes to avoid</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#40524c]">
          {mistakes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-[#dce5e0] bg-white p-5">
        <h2 className="text-2xl font-black">Useful internal links</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-[#dce5e0] px-3 py-2 text-sm font-bold text-[#0d4f42]">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <FAQSection items={faqs} />
    </div>
  );
}
