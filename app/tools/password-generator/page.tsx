import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { PasswordGeneratorTool } from "@/components/tools/PasswordGeneratorTool";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("password-generator")!;
const faqs = [
  {
    question: "Are generated passwords stored?",
    answer: "No. Passwords are generated in your browser and this tool does not store them."
  },
  {
    question: "What length should I choose?",
    answer: "A longer password is usually stronger. For many accounts, 16 or more characters is a practical starting point."
  },
  {
    question: "Should I reuse generated passwords?",
    answer: "No. Use a unique password for each account and store it in a trusted password manager."
  }
];

export const metadata: Metadata = {
  title: "Free Password Generator",
  description: "Generate client-side passwords with length, uppercase, lowercase, number, symbol, copy, and strength options.",
  alternates: { canonical: absoluteUrl("/tools/password-generator") },
  openGraph: {
    title: "Free Password Generator",
    description: "Create random passwords in your browser without storing them.",
    url: absoluteUrl("/tools/password-generator")
  }
};

export default function PasswordGeneratorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <PasswordGeneratorTool />
        <ToolGuideSections
          howToUse={[
            "Choose the password length.",
            "Select whether to include uppercase letters, lowercase letters, numbers, and symbols.",
            "Generate a password and review the strength label.",
            "Copy the password and save it in a trusted password manager."
          ]}
          examples={[
            "Create a unique password for a new SaaS account.",
            "Generate a longer password for shared admin credentials before storing it securely.",
            "Create a temporary password that will be changed after first login."
          ]}
          mistakes={[
            "Reusing one generated password across multiple accounts.",
            "Copying a password into an insecure note or chat thread.",
            "Choosing very short passwords for important accounts.",
            "Disabling too many character types when a site supports stronger passwords."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/json-formatter", label: "JSON Formatter" },
            { href: "/tools/slug-generator", label: "Slug Generator" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
