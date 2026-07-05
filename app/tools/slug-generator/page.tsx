import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { SlugGeneratorTool } from "@/components/tools/SlugGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("slug-generator")!;
const faqs = [
  {
    question: "What makes a good URL slug?",
    answer: "A good slug is short, readable, lowercase, and focused on the main topic without unnecessary filler words."
  },
  {
    question: "Should I change old slugs on published pages?",
    answer: "Be careful. Changing an existing URL can break links unless you add a proper redirect from the old URL to the new one."
  },
  {
    question: "Can a slug include numbers?",
    answer: "Yes. Numbers are fine when they are meaningful, such as a year, version, list count, or product model."
  }
];

export const metadata: Metadata = {
  title: "Free SEO Slug Generator",
  description: "Generate lowercase, hyphenated, SEO-friendly URL slugs from titles and text with alternative suggestions.",
  alternates: { canonical: absoluteUrl("/tools/slug-generator") },
  openGraph: {
    title: "Free SEO Slug Generator",
    description: "Create clean URL slugs for blog posts, tools, landing pages, and product pages.",
    url: absoluteUrl("/tools/slug-generator")
  }
};

export default function SlugGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <SlugGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Paste a title, headline, product name, or page topic into the text field.",
            "Review the generated lowercase slug and the shorter alternatives.",
            "Copy the option that best balances clarity and length.",
            "Use the slug before publishing the page so you do not need redirects later."
          ]}
          examples={[
            "A blog title such as How to Plan an Automation Workflow becomes how-to-plan-an-automation-workflow.",
            "A tool page title can be shortened to the main function, such as json-formatter.",
            "A product page can keep important model numbers while removing punctuation and filler words."
          ]}
          mistakes={[
            "Making the slug so long that it is difficult to read or share.",
            "Removing the main keyword until the URL no longer describes the page.",
            "Changing published slugs without redirects.",
            "Using underscores, uppercase letters, or decorative punctuation."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" },
            { href: "/tools/meta-tag-preview", label: "Meta Tag Preview" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
