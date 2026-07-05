import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { SeoTitleMetaGenerator } from "@/components/tools/SeoTitleMetaGenerator";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("seo-title-meta-generator")!;
const faqs = [
  {
    question: "Does this tool use an AI API?",
    answer: "No. It uses rule-based templates in the browser and does not call an external AI service."
  },
  {
    question: "Should I publish the generated title without editing it?",
    answer: "Use the output as a draft. Review search intent, accuracy, page content, and readability before publishing."
  },
  {
    question: "Can the generated meta description guarantee rankings?",
    answer: "No. Titles and descriptions help communicate relevance, but rankings depend on many factors including content quality, intent match, site health, and competition."
  }
];

export const metadata: Metadata = {
  title: "Free SEO Title and Meta Description Generator",
  description: "Generate rule-based SEO title ideas, a meta description, slug, outline, and FAQ ideas without an external API.",
  alternates: { canonical: absoluteUrl("/tools/seo-title-meta-generator") },
  openGraph: {
    title: "Free SEO Title and Meta Description Generator",
    description: "Draft SEO titles, meta descriptions, slugs, outlines, and FAQ ideas from simple inputs.",
    url: absoluteUrl("/tools/seo-title-meta-generator")
  }
};

export default function SeoTitleMetaGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <SeoTitleMetaGenerator />
        <ToolGuideSections
          howToUse={[
            "Enter the target keyword or topic the page should focus on.",
            "Describe the intended audience so the copy fits the reader.",
            "Choose the page type and tone that match the content you are creating.",
            "Review the title ideas, meta description, slug, outline, and FAQ ideas before editing them into your final page."
          ]}
          examples={[
            "A blog post for beginners can use a friendly tone and an outline that starts with definitions before examples.",
            "A tool page can use a practical tone, mention the use case, and include FAQs that answer objections.",
            "A service page can adapt the output into benefit-focused headings while staying accurate about what is offered."
          ]}
          mistakes={[
            "Stuffing the same keyword into every title idea.",
            "Writing a meta description that promises results the page cannot support.",
            "Using a slug that is too long or filled with filler words.",
            "Publishing generated copy without checking whether it matches the actual page content."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/utm-builder", label: "UTM Builder" },
            { href: "/blog/how-to-automate-content-planning-without-losing-quality", label: "Content planning guide" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
