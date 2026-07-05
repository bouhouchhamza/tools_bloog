import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ColorPaletteGeneratorTool } from "@/components/tools/ColorPaletteGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("color-palette-generator")!;
const faqs = [
  {
    question: "How is the palette generated?",
    answer: "The tool creates lighter and darker versions of the base color plus a simple complementary color and soft complement."
  },
  {
    question: "Can I copy each hex value?",
    answer: "Yes. Each palette swatch includes a copy button for the hex color."
  },
  {
    question: "Should I check color contrast?",
    answer: "Yes. This tool helps explore colors, but you should still test text and UI contrast before publishing."
  }
];

export const metadata: Metadata = {
  title: "Free Color Palette Generator",
  description: "Pick a base color and generate a simple palette with hex values, complementary colors, and copy buttons.",
  alternates: { canonical: absoluteUrl("/tools/color-palette-generator") },
  openGraph: {
    title: "Free Color Palette Generator",
    description: "Create practical color palettes for websites, dashboards, and design drafts.",
    url: absoluteUrl("/tools/color-palette-generator")
  }
};

export default function ColorPaletteGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <ColorPaletteGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Pick a base color with the color input or type a hex value.",
            "Review the lighter, darker, base, complementary, and soft complementary swatches.",
            "Copy the hex values that fit your design system.",
            "Test contrast and readability before using the palette in production."
          ]}
          examples={[
            "A founder can explore a simple palette before building a landing page.",
            "A dashboard builder can find supporting colors around a primary brand color.",
            "A content creator can pick consistent colors for thumbnails, charts, or lead magnets."
          ]}
          mistakes={[
            "Using a palette without checking text contrast.",
            "Relying on too many saturated colors in one interface.",
            "Choosing colors only by taste while ignoring user readability.",
            "Forgetting hover, focus, warning, success, and disabled states."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/meta-tag-preview", label: "Meta Tag Preview" },
            { href: "/tools/qr-code-generator", label: "QR Code Generator" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
