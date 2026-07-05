import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact WorkflowTools.space for corrections, suggestions, broken links, and general feedback.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Contact</h1>
      <p className="mt-5 text-lg leading-8 text-[#5e6f68]">
        Use this page to send corrections, tool suggestions, broken link reports, or general feedback about
        WorkflowTools.space.
      </p>
      <p className="mt-4">
        Email:{" "}
        <a className="font-bold text-[#0d4f42]" href="mailto:contact@workflowtools.space">
          contact@workflowtools.space
        </a>
      </p>
      <div className="mt-8 rounded-lg border border-[#dce5e0] bg-white p-6">
        <h2 className="text-2xl font-bold">What to include</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-[#40524c]">
          <li>The page URL or tool name your message is about.</li>
          <li>A short description of the issue, suggestion, or correction.</li>
          <li>Any browser or device details if you are reporting a display or tool behavior problem.</li>
        </ul>
      </div>
    </section>
  );
}
