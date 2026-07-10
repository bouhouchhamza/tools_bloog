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
          WorkflowTools.space may use cookies or similar technologies to keep the site working and support advertising,
          measurement, or other features described in the Privacy Policy.
        </p>
        <p>
          The site is configured to load Google AdSense when its production publisher setting is enabled. Google and
          its advertising partners may use cookies or similar technologies according to their own policies and the
          consent choices available to a visitor.
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
