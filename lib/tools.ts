export const toolCategories = ["Business", "SEO", "Developer", "Productivity", "AI", "Marketing"] as const;

export type ToolCategory = (typeof toolCategories)[number];

export type PlannedTool = {
  slug: string;
  title: string;
  description: string;
  category: ToolCategory;
  isLive?: boolean;
};

export const plannedTools: PlannedTool[] = [
  {
    slug: "whatsapp-link-generator",
    title: "WhatsApp Link Generator",
    description: "Create clean click-to-chat links with optional prefilled messages for customer conversations.",
    category: "Business",
    isLive: true
  },
  {
    slug: "invoice-generator",
    title: "Invoice Generator",
    description: "Draft simple invoices with line items, totals, business details, and payment notes.",
    category: "Business",
    isLive: true
  },
  {
    slug: "utm-builder",
    title: "UTM Builder",
    description: "Build consistent campaign URLs for newsletters, ads, social posts, and partner links.",
    category: "Marketing",
    isLive: true
  },
  {
    slug: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate, and inspect JSON snippets while working with APIs and automation tools.",
    category: "Developer",
    isLive: true
  },
  {
    slug: "seo-title-meta-generator",
    title: "SEO Title and Meta Generator",
    description: "Draft search-friendly page titles and meta descriptions with practical length guidance.",
    category: "SEO",
    isLive: true
  },
  {
    slug: "automation-roi-calculator",
    title: "Automation ROI Calculator",
    description: "Estimate time savings and payback for repetitive workflows before investing in automation.",
    category: "AI",
    isLive: true
  },
  {
    slug: "robots-txt-generator",
    title: "Robots.txt Generator",
    description: "Prepare clear robots.txt rules for common site sections, crawlers, and sitemap references.",
    category: "SEO",
    isLive: true
  },
  {
    slug: "xml-sitemap-generator",
    title: "XML Sitemap Generator",
    description: "Create a simple XML sitemap from page URLs to help search engines discover site content.",
    category: "SEO",
    isLive: true
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    description: "Turn links, contact details, and short text into QR codes for print or offline sharing.",
    category: "Marketing",
    isLive: true
  },
  {
    slug: "email-subject-line-generator",
    title: "Email Subject Line Generator",
    description: "Brainstorm concise subject line options for newsletters, outreach, and customer updates.",
    category: "Marketing",
    isLive: true
  },
  {
    slug: "ai-prompt-generator",
    title: "AI Prompt Generator",
    description: "Structure reusable prompts with role, context, task, constraints, and output format.",
    category: "AI",
    isLive: true
  },
  {
    slug: "slug-generator",
    title: "Slug Generator",
    description: "Convert titles and names into readable URL slugs for articles, products, and landing pages.",
    category: "Developer",
    isLive: true
  },
  {
    slug: "word-counter",
    title: "Word Counter",
    description: "Count words, characters, sentences, and reading length for drafts and page copy.",
    category: "Productivity",
    isLive: true
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    description: "Convert text between title case, sentence case, lowercase, uppercase, and code-friendly formats.",
    category: "Productivity",
    isLive: true
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    description: "Generate strong passwords with configurable length, symbols, numbers, and readability options.",
    category: "Developer",
    isLive: true
  },
  {
    slug: "color-palette-generator",
    title: "Color Palette Generator",
    description: "Create balanced color palettes for websites, dashboards, brand drafts, and UI experiments.",
    category: "Productivity",
    isLive: true
  },
  {
    slug: "meta-tag-preview",
    title: "Meta Tag Preview",
    description: "Preview how a title, description, and URL may appear in search result snippets.",
    category: "SEO",
    isLive: true
  }
];

export function getToolPath(slug: string) {
  const tool = plannedTools.find((item) => item.slug === slug);
  return tool?.isLive ? `/tools/${slug}` : `/tools#${slug}`;
}

export function getToolBySlug(slug: string) {
  return plannedTools.find((tool) => tool.slug === slug);
}

export function getLiveTools() {
  return plannedTools.filter((tool) => tool.isLive);
}

export function getToolsByCategory(category: ToolCategory) {
  return plannedTools.filter((tool) => tool.category === category);
}

export function getRelatedTools(currentSlug: string, limit = 3) {
  const currentTool = plannedTools.find((tool) => tool.slug === currentSlug);

  if (!currentTool) {
    return plannedTools.slice(0, limit);
  }

  return plannedTools
    .filter((tool) => tool.slug !== currentSlug && tool.category === currentTool.category)
    .concat(plannedTools.filter((tool) => tool.slug !== currentSlug && tool.category !== currentTool.category))
    .slice(0, limit);
}
