import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { UtmBuilderTool } from "@/components/tools/UtmBuilderTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("utm-builder")!;
const faqs = [
  {
    question: "Which UTM fields are required?",
    answer: "This builder requires website URL, source, medium, and campaign. Term and content are optional fields for more detailed tracking."
  },
  {
    question: "Does the builder encode UTM values?",
    answer: "Yes. The browser URL API encodes query parameters correctly when building the final campaign URL."
  },
  {
    question: "Can I use this for email and social links?",
    answer: "Yes. UTM links are commonly used for newsletters, social posts, ads, partner links, and internal campaign comparisons."
  }
];

export const metadata: Metadata = {
  title: "Free UTM Builder",
  description: "Build encoded UTM campaign URLs with source, medium, campaign, term, and content parameters.",
  alternates: { canonical: absoluteUrl("/tools/utm-builder") },
  openGraph: {
    title: "Free UTM Builder",
    description: "Create consistent campaign URLs for email, social, ads, and partner links.",
    url: absoluteUrl("/tools/utm-builder")
  }
};

export default function UtmBuilderPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <UtmBuilderTool />
        <ToolGuideSections
          howToUse={[
            "Paste the full website URL you want people to visit.",
            "Enter a clear source, medium, and campaign name using a consistent naming style.",
            "Add term or content values when you need to compare keywords, buttons, placements, or versions.",
            "Copy the generated URL and use it in your campaign."
          ]}
          examples={[
            "A newsletter link might use source newsletter, medium email, and campaign july_update.",
            "A paid search link might use source google, medium cpc, campaign product_launch, and term for the keyword group.",
            "Two social buttons can share the same campaign while using different content values such as hero_button and footer_link."
          ]}
          mistakes={[
            "Changing capitalization or spelling between campaigns, which splits reporting data.",
            "Using vague campaign names such as test or promo without a date or purpose.",
            "Adding UTM parameters to internal navigation links where they can distort analytics.",
            "Forgetting to test the final URL after copying it into an email or ad platform."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" },
            { href: "/blog/how-to-automate-content-planning-without-losing-quality", label: "Content planning guide" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
