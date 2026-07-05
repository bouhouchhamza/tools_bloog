import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { EmailSubjectLineGeneratorTool } from "@/components/tools/EmailSubjectLineGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("email-subject-line-generator")!;
const faqs = [
  {
    question: "Does this tool use an AI API?",
    answer: "No. It uses rule-based templates in the browser and does not call an external AI service."
  },
  {
    question: "Should I use the generated subject lines exactly as written?",
    answer: "Use them as drafts. Adjust the wording so it accurately matches the email content and your audience."
  },
  {
    question: "Can a subject line guarantee opens?",
    answer: "No. Open rates depend on audience trust, list quality, timing, sender reputation, and relevance."
  }
];

export const metadata: Metadata = {
  title: "Free Email Subject Line Generator",
  description: "Generate rule-based email subject line and preview text ideas by topic, audience, email type, and tone.",
  alternates: { canonical: absoluteUrl("/tools/email-subject-line-generator") },
  openGraph: {
    title: "Free Email Subject Line Generator",
    description: "Brainstorm practical subject lines and preview text without an external API.",
    url: absoluteUrl("/tools/email-subject-line-generator")
  }
};

export default function EmailSubjectLineGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <EmailSubjectLineGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Enter the email topic and the audience you are writing for.",
            "Choose the email type and tone.",
            "Review the subject line and preview text ideas.",
            "Copy the strongest draft and edit it to match the email body."
          ]}
          examples={[
            "A newsletter creator can generate practical subject lines for a weekly update.",
            "A product team can draft announcement subjects for a new feature.",
            "A freelancer can write follow-up subject lines that sound clear instead of pushy."
          ]}
          mistakes={[
            "Promising something in the subject line that the email does not deliver.",
            "Using false urgency or misleading personalization.",
            "Ignoring preview text even though it appears beside the subject in many inboxes.",
            "Sending every idea without testing tone against your actual audience."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/word-counter", label: "Word Counter" },
            { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
