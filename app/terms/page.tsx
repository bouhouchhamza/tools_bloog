import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using WorkflowTools.space free online tools and educational workflow content.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Terms</h1>
      <div className="prose mt-6">
        <p>
          By using WorkflowTools.space, you agree to use the site for lawful, personal, educational, and informational
          purposes. The site provides free online utilities and workflow-related educational content.
        </p>
        <p>
          Tools and articles may contain mistakes or become outdated. You are responsible for evaluating whether a tool
          output, workflow, example, or article is appropriate for your situation, data, customers, website, and internal
          policies.
        </p>
        <p>
          Do not use the site to process content you are not allowed to use, confidential information you should not
          paste into online tools, or anything that violates applicable laws or third-party rights.
        </p>
        <p>
          We may update tools, articles, legal pages, future ads, analytics, affiliate disclosures, and site features as
          WorkflowTools.space develops. Contact{" "}
          <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a> with questions.
        </p>
        <p>This page is general information and is not legal advice.</p>
      </div>
    </section>
  );
}
