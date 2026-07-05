export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "AI Automation",
    slug: "ai-automation",
    description: "Beginner-friendly explainers about using AI to support repeatable work."
  },
  {
    name: "Workflow Automation",
    slug: "workflow-automation",
    description: "Practical workflow planning, process mapping, and automation basics."
  },
  {
    name: "n8n Tutorials",
    slug: "n8n-tutorials",
    description: "Clear introductions and comparisons for learning n8n at your own pace."
  },
  {
    name: "No-Code Automation",
    slug: "no-code-automation",
    description: "Automation guides for people who do not want to write code."
  },
  {
    name: "AI Tools",
    slug: "ai-tools",
    description: "Balanced reviews and explainers for common AI productivity tools."
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Simple systems for planning, focus, and everyday time savings."
  },
  {
    name: "Small Business Automation",
    slug: "small-business-automation",
    description: "Automation ideas for owners, operators, freelancers, and lean teams."
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
