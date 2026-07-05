import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { XmlSitemapGeneratorTool } from "@/components/tools/XmlSitemapGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("xml-sitemap-generator")!;
const faqs = [
  {
    question: "What URLs should I include in an XML sitemap?",
    answer: "Include canonical public URLs that you want search engines to discover, such as important pages, posts, and tool pages."
  },
  {
    question: "Does priority guarantee better rankings?",
    answer: "No. Priority is a hint inside the sitemap and does not guarantee crawling, indexing, or ranking."
  },
  {
    question: "Should every page use today's last modified date?",
    answer: "Only use today's date when the listed pages were actually updated today. Accurate dates are more useful than inflated ones."
  }
];

export const metadata: Metadata = {
  title: "Free XML Sitemap Generator",
  description: "Generate a valid XML sitemap from a list of URLs with change frequency, priority, and optional last modified dates.",
  alternates: { canonical: absoluteUrl("/tools/xml-sitemap-generator") },
  openGraph: {
    title: "Free XML Sitemap Generator",
    description: "Create a simple XML sitemap for public URLs and search engine discovery.",
    url: absoluteUrl("/tools/xml-sitemap-generator")
  }
};

export default function XmlSitemapGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <XmlSitemapGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Paste one full public URL per line.",
            "Choose a change frequency that reflects how often the pages usually change.",
            "Select a priority value and decide whether to include today's last modified date.",
            "Copy the generated XML and save it as a sitemap file on your site."
          ]}
          examples={[
            "A small website can list its homepage, tools hub, blog page, and most important guides.",
            "A new tools site can create an initial sitemap before a dynamic sitemap route is built.",
            "A content audit can use the generator to quickly test which URLs belong in a manual sitemap."
          ]}
          mistakes={[
            "Including URLs that redirect, return errors, or are blocked from indexing.",
            "Adding duplicate URLs with and without trailing slashes.",
            "Using high priority for every URL, which removes the usefulness of the hint.",
            "Listing private, staging, or noindex pages."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/robots-txt-generator", label: "Robots.txt Generator" },
            { href: "/tools/meta-tag-preview", label: "Meta Tag Preview" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
