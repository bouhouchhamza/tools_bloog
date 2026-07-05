import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { WordCounterTool } from "@/components/tools/WordCounterTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("word-counter")!;
const faqs = [
  {
    question: "How is reading time estimated?",
    answer: "The tool estimates reading time at about 200 words per minute and rounds up to at least one minute."
  },
  {
    question: "What counts as a paragraph?",
    answer: "Paragraphs are counted from blocks of text separated by a blank line."
  },
  {
    question: "Can I use this for SEO drafts?",
    answer: "Yes. It is useful for checking rough length, but word count alone does not determine quality or search performance."
  }
];

export const metadata: Metadata = {
  title: "Free Word Counter",
  description: "Count words, characters, characters without spaces, sentences, paragraphs, and estimated reading time.",
  alternates: { canonical: absoluteUrl("/tools/word-counter") },
  openGraph: {
    title: "Free Word Counter",
    description: "Measure draft length and reading time for articles, emails, and page copy.",
    url: absoluteUrl("/tools/word-counter")
  }
};

export default function WordCounterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <WordCounterTool />
        <ToolGuideSections
          howToUse={[
            "Paste or type your draft into the text area.",
            "Review the word, character, sentence, paragraph, and reading time counts.",
            "Use the counts to adjust the draft for the channel or format.",
            "Clear the text when you are ready to check another draft."
          ]}
          examples={[
            "A newsletter writer can keep intro copy concise before sending a campaign.",
            "A blogger can estimate whether a guide is long enough to cover the topic clearly.",
            "A product marketer can check character counts before moving copy into a CMS field."
          ]}
          mistakes={[
            "Treating word count as a quality score.",
            "Ignoring paragraph structure when a draft feels hard to scan.",
            "Padding content just to reach a target length.",
            "Forgetting that different audiences read at different speeds."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/case-converter", label: "Case Converter" },
            { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
