import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolGuideSections } from "@/components/ToolGuideSections";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { AutomationRoiCalculator } from "@/components/tools/AutomationRoiCalculator";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools";
import { absoluteUrl } from "@/lib/utils";

const tool = getToolBySlug("automation-roi-calculator")!;
const faqs = [
  {
    question: "How does the calculator estimate monthly hours saved?",
    answer: "It multiplies weekly hours saved by the number of users and by 4.33, the average number of weeks in a month."
  },
  {
    question: "Should I include software cost for every user?",
    answer: "Enter the total monthly software cost you expect to pay for the workflow, including user seats when relevant."
  },
  {
    question: "Is this a guaranteed ROI calculation?",
    answer: "No. It is a planning estimate. Validate the result with real workflow volume, setup time, maintenance time, and quality checks."
  }
];

export const metadata: Metadata = {
  title: "Free Automation ROI Calculator",
  description: "Estimate monthly hours saved, value saved, net savings, and yearly savings for an automation workflow.",
  alternates: { canonical: absoluteUrl("/tools/automation-roi-calculator") },
  openGraph: {
    title: "Free Automation ROI Calculator",
    description: "Plan automation investments with simple time savings and software cost estimates.",
    url: absoluteUrl("/tools/automation-roi-calculator")
  }
};

export default function AutomationRoiCalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tools", url: "/tools" }, { name: tool.title, url: `/tools/${tool.slug}` }])} />
      <JsonLd data={faqPageSchema(faqs)} />
      <ToolPageLayout tool={tool}>
        <AutomationRoiCalculator />
        <ToolGuideSections
          howToUse={[
            "Estimate how many repetitive hours one person saves each week.",
            "Enter the hourly value of that time, using either wage cost or billable value.",
            "Add the expected monthly software cost for the automation stack.",
            "Set the number of employees or users affected, then review the monthly and yearly estimates."
          ]}
          examples={[
            "A team saving 3 hours per week across 4 users can compare that value against a monthly automation platform cost.",
            "A solo freelancer can estimate whether automating client onboarding saves enough time to justify a paid tool.",
            "A manager can use the result as a first-pass filter before mapping setup effort and maintenance requirements."
          ]}
          mistakes={[
            "Counting every saved minute as recovered productive time without considering review work.",
            "Ignoring setup, testing, documentation, and maintenance effort.",
            "Using a high hourly value that does not match the task being automated.",
            "Automating a low-volume workflow before fixing the process itself."
          ]}
          faqs={faqs}
          links={[
            { href: "/tools", label: "All free tools" },
            { href: "/tools/invoice-generator", label: "Invoice Generator" },
            { href: "/blog/plan-automation-workflow-before-building", label: "Workflow planning guide" }
          ]}
        />
      </ToolPageLayout>
    </>
  );
}
