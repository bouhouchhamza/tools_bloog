import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { QrCodeGeneratorTool } from "@/components/tools/QrCodeGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("qr-code-generator")!;
const faqs = [
  {
    question: "Can I download the QR code?",
    answer: "Yes. After entering text or a URL, use the download button to save the generated QR code as a PNG image."
  },
  {
    question: "Should I use a long URL in a QR code?",
    answer: "Shorter content usually produces a simpler QR code that is easier to scan, especially when printed small."
  },
  {
    question: "Does this tool track scans?",
    answer: "No. It generates a static QR code from your text or URL. Use your own analytics or UTM links if you need tracking."
  }
];

export const metadata: Metadata = {
  title: "Free QR Code Generator",
  description: "Generate a downloadable QR code from a URL or text, copy the original value, and test it before printing.",
  alternates: { canonical: absoluteUrl("/tools/qr-code-generator") },
  openGraph: {
    title: "Free QR Code Generator",
    description: "Create simple QR codes for links, contact text, and offline sharing.",
    url: absoluteUrl("/tools/qr-code-generator")
  }
};

export default function QrCodeGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <QrCodeGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Enter a URL, short message, contact detail, or other text.",
            "Review the generated QR code preview.",
            "Copy the original text if you need to reuse it elsewhere.",
            "Download the PNG and test the QR code with a phone camera before publishing or printing."
          ]}
          examples={[
            "A cafe can link a table sign to a menu page.",
            "A consultant can add a QR code to a printed handout that opens a booking page.",
            "A small event can use a QR code for directions, registration, or a feedback form."
          ]}
          mistakes={[
            "Printing a QR code without testing it at the final size.",
            "Using a very long URL when a shorter tracked URL would scan more reliably.",
            "Placing the code on a low-contrast or busy background.",
            "Changing the destination URL after printing if the QR code points to a fixed address."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/utm-builder", label: "UTM Builder" },
            { href: "/tools/whatsapp-link-generator", label: "WhatsApp Link Generator" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
