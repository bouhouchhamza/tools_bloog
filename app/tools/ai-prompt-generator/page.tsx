import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { AiPromptGeneratorTool } from "@/components/tools/AiPromptGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("ai-prompt-generator")!;
const faqs = [
  {
    question: "Does this prompt generator use an AI API?",
    answer: "No. It is a rule-based prompt builder that runs in your browser and does not call an external AI service."
  },
  {
    question: "What makes a prompt better?",
    answer: "A stronger prompt usually includes a clear task, role, context, output format, tone, constraints, and instructions for handling missing information."
  },
  {
    question: "Can this guarantee better AI results?",
    answer: "No. It can help structure your request, but you should review outputs carefully and verify important facts."
  }
];

export const metadata: Metadata = {
  title: "Free AI Prompt Generator",
  description: "Create structured AI prompts with task, role, context, format, tone, constraints, variations, and a prompt checklist.",
  alternates: { canonical: absoluteUrl("/tools/ai-prompt-generator") },
  openGraph: {
    title: "Free AI Prompt Generator",
    description: "Build reusable prompts for writing, planning, analysis, automation, and productivity workflows.",
    url: absoluteUrl("/tools/ai-prompt-generator")
  }
};

export default function AiPromptGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <AiPromptGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Describe the task or goal in plain language.",
            "Add the role, context, output format, tone, and constraints that should guide the response.",
            "Review the improved prompt and the three variations.",
            "Copy the version that fits your workflow, then edit it with any missing details before using it."
          ]}
          examples={[
            "A marketer can create a prompt for turning product notes into a short campaign brief.",
            "A manager can build a prompt for summarizing meeting notes into decisions, risks, and next steps.",
            "A developer can ask for a code review checklist while specifying language, framework, and constraints."
          ]}
          mistakes={[
            "Asking a broad question without context or desired output format.",
            "Forgetting to tell the model what information it should not invent.",
            "Using the same prompt for every task even when the audience and constraints change.",
            "Publishing or acting on AI output without checking accuracy."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" },
            { href: "/tools/email-subject-line-generator", label: "Email Subject Line Generator" },
            { href: "/blog/what-is-ai-automation", label: "AI automation basics" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
