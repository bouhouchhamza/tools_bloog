import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about WorkflowTools.space and its free online business, SEO, developer, productivity, marketing, and AI tools.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">About WorkflowTools.space</h1>
      <div className="prose mt-6">
        <p>
          WorkflowTools.space is a free online tools website for people who need practical utilities for business,
          SEO, developer tasks, productivity, marketing, and AI-assisted workflows.
        </p>
        <p>
          The site combines browser-based tools with educational workflow guides. The goal is simple: help readers
          complete common digital tasks faster while still understanding when outputs should be reviewed, edited, or
          verified.
        </p>
        <h2>What we publish</h2>
        <p>
          We publish calculators, generators, formatters, previews, and original educational articles. We avoid fake
          claims, copied content, invented statistics, and promises that a tool can guarantee business results.
        </p>
        <h2>How to use the tools</h2>
        <p>
          The tools are intended as practical helpers. When the output affects money, security, legal obligations,
          customer communication, search indexing, or business decisions, review it carefully before relying on it.
        </p>
        <h2>Corrections and feedback</h2>
        <p>
          If you find unclear wording, outdated information, or a broken link, contact us at{" "}
          <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a>.
        </p>
      </div>
    </section>
  );
}
