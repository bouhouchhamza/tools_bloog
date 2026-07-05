import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { InvoiceGeneratorTool } from "@/components/tools/InvoiceGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("invoice-generator")!;
const faqs = [
  {
    question: "Does this tool create a PDF file?",
    answer: "Not yet. The current version creates a printable invoice preview and uses the browser print dialog so you can print or save through your system options."
  },
  {
    question: "Can I add multiple invoice items?",
    answer: "Yes. You can add and remove line items, then the subtotal, tax, discount, and total update automatically."
  },
  {
    question: "Should I treat this as accounting advice?",
    answer: "No. This is a simple invoice drafting tool. Confirm tax rules, payment terms, and recordkeeping requirements for your business."
  }
];

export const metadata: Metadata = {
  title: "Free Invoice Generator",
  description: "Create a simple printable invoice with line items, tax, discount, subtotal, and total calculations.",
  alternates: { canonical: absoluteUrl("/tools/invoice-generator") },
  openGraph: {
    title: "Free Invoice Generator",
    description: "Draft and print simple invoices with dynamic line items and automatic totals.",
    url: absoluteUrl("/tools/invoice-generator")
  }
};

export default function InvoiceGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <InvoiceGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Add your business name, optional email, client name, invoice number, date, and due date.",
            "Enter each service or product as a line item with quantity and price.",
            "Add tax percentage or a discount amount only when it applies to the invoice.",
            "Review the printable invoice preview, then use the print button to print or save from your browser."
          ]}
          examples={[
            "A consultant can invoice for a strategy session, implementation hours, and documentation as separate rows.",
            "A small agency can include a discount for a first project while still showing the original subtotal clearly.",
            "A freelancer can keep the invoice simple for a one-time task without installing accounting software."
          ]}
          mistakes={[
            "Sending an invoice without a unique invoice number.",
            "Mixing tax-inclusive and tax-exclusive prices without explaining the method.",
            "Forgetting the due date or payment terms.",
            "Removing item detail that the client needs to understand the charge."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/automation-roi-calculator", label: "Automation ROI Calculator" },
            { href: "/blog/automate-client-onboarding", label: "Client onboarding guide" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
