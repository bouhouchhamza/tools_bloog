import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How WorkflowTools.space creates, reviews, and updates tools and educational workflow content.",
  alternates: { canonical: "/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Editorial Policy</h1>
      <div className="prose mt-6">
        <p>
          WorkflowTools.space aims to publish original, useful, and beginner-friendly tools and educational articles.
          We avoid copied text, fake statistics, misleading promises, unsupported income claims, and deceptive tool
          recommendations.
        </p>
        <p>
          Tool pages are written to explain what the utility does, how to use it, where mistakes happen, and when users
          should verify the output. Articles are written to explain workflows and practical digital operations in plain
          language.
        </p>
        <p>
          When content changes materially, we may update the page text, examples, metadata, or related links. Readers can
          send corrections, suggestions, or concerns to{" "}
          <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a>.
        </p>
        <p>This page is general information and is not legal advice.</p>
      </div>
    </section>
  );
}
