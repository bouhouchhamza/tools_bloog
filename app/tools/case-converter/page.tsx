import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { CaseConverterTool } from "@/components/tools/CaseConverterTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("case-converter")!;
const faqs = [
  {
    question: "Which cases are supported?",
    answer: "The tool converts text to lowercase, uppercase, title case, sentence case, kebab-case, snake_case, camelCase, and PascalCase."
  },
  {
    question: "Can I use this for code names?",
    answer: "Yes. Kebab, snake, camel, and Pascal case are useful for filenames, CSS classes, variables, and component names."
  },
  {
    question: "Should I review title case output?",
    answer: "Yes. Automated title case is a helpful draft, but editorial style rules can differ by publication."
  }
];

export const metadata: Metadata = {
  title: "Free Case Converter",
  description: "Convert text to lowercase, uppercase, title case, sentence case, kebab-case, snake_case, camelCase, and PascalCase.",
  alternates: { canonical: absoluteUrl("/tools/case-converter") },
  openGraph: {
    title: "Free Case Converter",
    description: "Clean up copy, filenames, slugs, and code-friendly names with fast case conversion.",
    url: absoluteUrl("/tools/case-converter")
  }
};

export default function CaseConverterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <CaseConverterTool />
        <ToolGuideSections
          howToUse={[
            "Paste the text you want to convert.",
            "Choose the target case from the available options.",
            "Review the converted result.",
            "Copy the result or clear the input for a new conversion."
          ]}
          examples={[
            "A developer can convert a feature name into camelCase for a variable.",
            "A writer can turn rough notes into sentence case before editing.",
            "A marketer can convert campaign names into kebab-case for URLs or labels."
          ]}
          mistakes={[
            "Using code-style cases in visible headings where normal language reads better.",
            "Relying on automated title case without checking brand names or acronyms.",
            "Changing technical identifiers without checking references elsewhere.",
            "Forgetting to preserve important numbers or abbreviations."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/slug-generator", label: "Slug Generator" },
            { href: "/tools/word-counter", label: "Word Counter" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
