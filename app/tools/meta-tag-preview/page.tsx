import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { MetaTagPreviewTool } from "@/components/tools/MetaTagPreviewTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("meta-tag-preview")!;
const faqs = [
  {
    question: "Is this preview exactly what Google will show?",
    answer: "No. It is a practical visual preview. Search engines can rewrite titles and descriptions based on the query and page content."
  },
  {
    question: "What title length should I aim for?",
    answer: "A practical range is often around 30 to 60 characters, but clarity and accuracy matter more than hitting an exact number."
  },
  {
    question: "Can I copy the generated meta tags into my site?",
    answer: "Yes. Review and adapt the basic tags for your framework, CMS, or page template before publishing."
  }
];

export const metadata: Metadata = {
  title: "Free Meta Tag Preview Tool",
  description: "Preview SEO title, meta description, and URL snippets with length guidance and copy-ready basic meta tags.",
  alternates: { canonical: absoluteUrl("/tools/meta-tag-preview") },
  openGraph: {
    title: "Free Meta Tag Preview Tool",
    description: "Check title and meta description length before publishing a page.",
    url: absoluteUrl("/tools/meta-tag-preview")
  }
};

export default function MetaTagPreviewPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <MetaTagPreviewTool />
        <ToolGuideSections
          howToUse={[
            "Enter the SEO title, meta description, and canonical URL for the page.",
            "Review the search-style preview for clarity, relevance, and readability.",
            "Check the title and description length warnings.",
            "Copy the basic meta tags and adapt them to your site template."
          ]}
          examples={[
            "A tool page can preview whether the title communicates the tool's function before publication.",
            "A blog editor can compare different descriptions before choosing the clearest summary.",
            "A landing page owner can check whether the URL, title, and description feel consistent together."
          ]}
          mistakes={[
            "Writing a title that is only a keyword and does not explain the page.",
            "Writing a description that promises features or outcomes the page does not provide.",
            "Ignoring the URL shown in the preview when the canonical URL is outdated.",
            "Treating character ranges as guarantees instead of guidance."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" },
            { href: "/tools/slug-generator", label: "Slug Generator" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
