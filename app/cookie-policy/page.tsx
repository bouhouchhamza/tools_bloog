import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for WorkflowTools.space, including notes about future analytics or advertising features.",
  alternates: { canonical: "/cookie-policy" }
};

export default function CookiePolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Cookie Policy</h1>
      <div className="prose mt-6">
        <p>
          WorkflowTools.space may use cookies or similar technologies to keep the site working, understand aggregate
          usage, and support future analytics, advertising, or affiliate measurement.
        </p>
        <p>
          The site does not currently include Google AdSense scripts. If ads, analytics, or affiliate tools are added
          later, they may set their own cookies according to their policies.
        </p>
        <p>
          You can manage cookies through your browser settings. Contact{" "}
          <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a> with questions. This page is
          general information and is not legal advice.
        </p>
      </div>
    </section>
  );
}
