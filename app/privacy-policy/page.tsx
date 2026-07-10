import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for WorkflowTools.space and its free online tools and educational content.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <div className="prose mt-6">
        <p>
          WorkflowTools.space provides free online tools and educational content. Many tools run in your browser and are
          designed for quick utility tasks such as formatting text, generating prompts, previewing metadata, and
          calculating estimates.
        </p>
        <p>
          We may receive information you choose to send directly to the contact email address published on this site.
        </p>
        <p>
          The site is configured to load Google AdSense when its production publisher setting is enabled. Google and
          its advertising partners may use cookies or similar technologies and process technical information to serve,
          measure, and protect advertising according to their own policies and available consent choices.
        </p>
        <p>
          Do not enter sensitive secrets, private credentials, regulated personal data, or confidential business
          information into any online utility unless you have reviewed how the tool works and are comfortable using it.
        </p>
        <p>
          Contact <a href="mailto:contact@workflowtools.space">contact@workflowtools.space</a> with privacy questions.
          This page is general information and is not legal advice.
        </p>
      </div>
    </section>
  );
}
