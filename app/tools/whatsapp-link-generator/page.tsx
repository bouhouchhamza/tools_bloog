import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { WhatsAppLinkTool } from "@/components/tools/WhatsAppLinkTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("whatsapp-link-generator")!;
const faqs = [
  {
    question: "Do I need to include the plus sign in the phone number?",
    answer: "No. Enter the country code and phone number as digits only. The generated wa.me link does not need a plus sign."
  },
  {
    question: "Can I leave the default message empty?",
    answer: "Yes. If the message is empty, the tool creates a simple WhatsApp chat link without a prefilled text parameter."
  },
  {
    question: "Is the message encoded in the final link?",
    answer: "Yes. Spaces, punctuation, and line breaks are encoded so the message can travel safely inside the URL."
  }
];

export const metadata: Metadata = {
  title: "Free WhatsApp Link Generator",
  description: "Create a clean wa.me WhatsApp link with a phone number, country code, and optional prefilled message.",
  alternates: { canonical: absoluteUrl("/tools/whatsapp-link-generator") },
  openGraph: {
    title: "Free WhatsApp Link Generator",
    description: "Generate clean WhatsApp click-to-chat links with encoded default messages.",
    url: absoluteUrl("/tools/whatsapp-link-generator")
  }
};

export default function WhatsAppLinkGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <WhatsAppLinkTool />
        <ToolGuideSections
          howToUse={[
            "Enter the full phone number with country code, using digits only.",
            "Write the message you want customers or contacts to see when the chat opens.",
            "Review the generated wa.me link and message preview.",
            "Copy the link and use it on your website, email signature, social profile, or printed material."
          ]}
          examples={[
            "A local service business can add a link that opens WhatsApp with: Hi, I would like to request a quote.",
            "A freelancer can use one link for discovery calls and another link for support questions.",
            "A store can place the link near a product page so shoppers can ask about availability."
          ]}
          mistakes={[
            "Using a local phone number without the country code.",
            "Adding a plus sign, spaces, or brackets when a digits-only number is cleaner.",
            "Writing a message so long that it feels impersonal before the conversation starts.",
            "Forgetting to test the link on mobile before publishing it."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/utm-builder", label: "UTM Builder" },
            { href: "/blog/how-to-use-automation-without-hurting-customer-experience", label: "Customer experience guide" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
