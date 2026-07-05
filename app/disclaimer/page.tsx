import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for WorkflowTools.space tools and educational workflow content.",
  alternates: { canonical: "/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Disclaimer</h1>
      <div className="prose mt-6">
        <p>
          WorkflowTools.space provides free utilities and educational content for general information and productivity
          support. The site does not provide legal, financial, tax, security, medical, or professional advice.
        </p>
        <p>
          Tool outputs can contain mistakes or may not fit your situation. Verify important results before using them,
          especially invoices, passwords, robots.txt rules, sitemap files, SEO metadata, business estimates, and AI
          prompts.
        </p>
        <p>
          We do not guarantee business, financial, productivity, ranking, security, or technical outcomes. Features,
          rules, platforms, and best practices can change over time.
        </p>
        <p>
          Contact <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a> with questions or
          corrections. This page is general information and is not legal advice.
        </p>
      </div>
    </section>
  );
}
