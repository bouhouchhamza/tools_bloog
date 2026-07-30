import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How WorkflowTools.space creates, reviews, and updates tools and educational workflow content.",
  alternates: { canonical: absoluteUrl("/editorial-policy") }
};

export default function EditorialPolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Editorial Policy</h1>
      <div className="prose mt-6">
        <p>WorkflowTools.space publishes browser-based utilities and practical tutorials for people completing a specific digital task. Content is edited by <Link href="/authors/hamza-bouhouch">Hamza Bouhouch</Link>. We do not publish invented credentials, testimonials, usage figures, rankings, or guaranteed outcomes.</p>
        <h2>How topics are selected</h2>
        <p>Topics begin with a real task supported by a live tool or a repeatable workflow that can be explained with concrete steps. A page should help a reader complete, check, or troubleshoot that task. Pages that only restate definitions or overlap heavily with a stronger guide are not promoted for indexing.</p>
        <h2>Research and examples</h2>
        <p>Tool instructions are checked against the current implementation in this repository. Examples use fictional, nonsensitive inputs and are reviewed to ensure the described output is possible. Broader guidance distinguishes observed tool behavior from recommendations and limitations.</p>
        <p>We do not copy external articles. When a topic depends on changing platform rules or official standards, the page should be reviewed against an authoritative primary source before a material update is published.</p>
        <h2>Review and updates</h2>
        <p>Articles include publication and updated dates. A material update may change instructions, examples, limitations, metadata, or related links. Cosmetic changes do not justify presenting a page as newly researched. Older pages may be removed from listings and marked noindex until they receive an independent editorial rewrite.</p>
        <h2>AI-assisted work</h2>
        <p>Automated tools may assist with drafting or code, but publication requires human editorial responsibility. Pages are checked for repeated language, unsupported claims, generic filler, broken links, and mismatches between the instructions and the working tool.</p>
        <h2>Corrections</h2>
        <p>Readers can request a correction by emailing <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a>. Include the page URL, the specific passage or behavior at issue, and supporting context. Corrections are evaluated against the live implementation and reliable sources where applicable.</p>
        <p>This policy describes the publishing process; it is not legal advice or a promise that every page is error-free.</p>
      </div>
    </section>
  );
}
