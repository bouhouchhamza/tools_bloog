import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("json-formatter")!;
const faqs = [
  {
    question: "Does this JSON formatter send data to a server?",
    answer: "No. The formatting, minifying, and validation logic runs in your browser with standard JavaScript parsing."
  },
  {
    question: "Why does valid-looking JSON fail validation?",
    answer: "Common causes include trailing commas, single quotes, comments, missing quotes around keys, or an extra bracket."
  },
  {
    question: "When should I minify JSON?",
    answer: "Minify JSON when you need a compact value for a config field, test request body, or storage field. Keep formatted JSON for review."
  }
];

export const metadata: Metadata = {
  title: "Free JSON Formatter and Validator",
  description: "Format, minify, and validate JSON in your browser with clear error messages and a copy-ready result.",
  alternates: { canonical: absoluteUrl("/tools/json-formatter") },
  openGraph: {
    title: "Free JSON Formatter and Validator",
    description: "Clean up JSON snippets for APIs, automation tools, configs, and developer workflows.",
    url: absoluteUrl("/tools/json-formatter")
  }
};

export default function JsonFormatterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <JsonFormatterTool />
        <ToolGuideSections
          howToUse={[
            "Paste JSON into the input area or load the sample JSON.",
            "Choose Format JSON to create readable indentation, or Minify JSON to remove extra whitespace.",
            "Use Validate JSON when you only want to check whether the input parses correctly.",
            "Copy the result and use it in your API client, automation step, or configuration field."
          ]}
          examples={[
            "A developer can format a webhook payload before checking which fields are available.",
            "An automation builder can minify JSON before pasting it into a request body field.",
            "A support teammate can validate a copied API response before sharing it with an engineer."
          ]}
          mistakes={[
            "Using single quotes around strings or object keys.",
            "Leaving a trailing comma after the last item in an object or array.",
            "Pasting JavaScript objects with comments and expecting them to be valid JSON.",
            "Minifying a payload before reviewing whether sensitive data is included."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/slug-generator", label: "Slug Generator" },
            { href: "/blog/what-is-a-workflow", label: "Workflow basics" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
