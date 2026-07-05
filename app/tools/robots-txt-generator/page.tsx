import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { RobotsTxtGeneratorTool } from "@/components/tools/RobotsTxtGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("robots-txt-generator")!;
const faqs = [
  {
    question: "Can robots.txt force every crawler to obey the rules?",
    answer: "No. Reputable crawlers usually respect robots.txt, but it is not an access control system and should not protect private data."
  },
  {
    question: "Where should robots.txt be placed?",
    answer: "Place it at the root of the domain, such as https://example.com/robots.txt."
  },
  {
    question: "Should I block all crawlers on a live website?",
    answer: "Only do that when you intentionally do not want pages crawled. Blocking all crawlers on a public site can prevent search discovery."
  }
];

export const metadata: Metadata = {
  title: "Free Robots.txt Generator",
  description: "Generate a simple robots.txt file with allow all, block all, custom disallow paths, and sitemap reference options.",
  alternates: { canonical: absoluteUrl("/tools/robots-txt-generator") },
  openGraph: {
    title: "Free Robots.txt Generator",
    description: "Create robots.txt rules for crawlers and sitemap discovery.",
    url: absoluteUrl("/tools/robots-txt-generator")
  }
};

export default function RobotsTxtGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <RobotsTxtGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Enter the full website URL and sitemap URL.",
            "Choose allow all for a normal public site, block all for private staging, or custom for specific paths.",
            "Add one disallow path per line when using custom mode.",
            "Copy the generated text and place it in the robots.txt file at your domain root."
          ]}
          examples={[
            "A public blog might allow all crawling and include the sitemap URL.",
            "A staging site can block all crawlers while the team prepares a launch.",
            "A site can disallow internal search pages or admin-style paths that should not appear in search."
          ]}
          mistakes={[
            "Using robots.txt to hide private information instead of securing the page.",
            "Blocking important CSS, JavaScript, or page paths that search engines need to render content.",
            "Forgetting to update the sitemap URL after changing domains.",
            "Leaving block-all rules in place after a staging site becomes public."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/xml-sitemap-generator", label: "XML Sitemap Generator" },
            { href: "/tools/meta-tag-preview", label: "Meta Tag Preview" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
