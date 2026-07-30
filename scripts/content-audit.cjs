/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
require.extensions[".ts"] = function loadTypeScript(module, filename) {
  let source = fs.readFileSync(filename, "utf8");
  source = source.replace(/from\s+["']@\/(.*?)["']/g, (_, target) => `from "${path.join(root, target).replace(/\\/g, "/")}"`);
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  module._compile(output, filename);
};

const { articles } = require(path.join(root, "lib", "articles.ts"));
const { plannedTools } = require(path.join(root, "lib", "tools.ts"));
const { toolPublisherContent } = require(path.join(root, "lib", "tool-publisher-content.ts"));

const failures = [];
const warnings = [];
const indexable = articles.filter((article) => article.indexable !== false);
const excluded = articles.filter((article) => article.indexable === false);

function duplicates(items, value, label) {
  const seen = new Map();
  for (const item of items) {
    const key = value(item)?.trim().replace(/\s+/g, " ");
    if (!key) continue;
    if (seen.has(key)) failures.push(`${label}: ${item.slug} duplicates ${seen.get(key)}`);
    else seen.set(key, item.slug);
  }
}

duplicates(indexable, (a) => a.seoTitle, "Duplicate SEO title");
duplicates(indexable, (a) => a.metaDescription, "Duplicate meta description");
duplicates(indexable, (a) => a.sections[0]?.body[0], "Duplicate introduction");
duplicates(indexable, (a) => a.sections.at(-1)?.body.at(-1), "Duplicate conclusion");

const paragraphs = new Map();
const faqQuestions = new Map();
for (const article of indexable) {
  const words = article.sections.flatMap((section) => [section.heading, ...section.body, ...(section.subSections ?? []).flatMap((sub) => [sub.heading, ...sub.body])]).join(" ").split(/\s+/).length;
  if (words < 450) failures.push(`Weak indexable article: ${article.slug} has approximately ${words} words`);
  if (!article.author) failures.push(`Missing author: ${article.slug}`);
  if (!article.publishedDate || !article.updatedDate) failures.push(`Missing publication dates: ${article.slug}`);
  if (!article.seoTitle || !article.metaDescription) failures.push(`Missing metadata: ${article.slug}`);
  if (!article.faq.length) failures.push(`Missing FAQ: ${article.slug}`);
  for (const section of article.sections) for (const paragraph of section.body) {
    const normalized = paragraph.trim().replace(/\s+/g, " ");
    if (normalized.length < 100) continue;
    if (paragraphs.has(normalized)) failures.push(`Duplicate paragraph: ${article.slug} duplicates ${paragraphs.get(normalized)}`);
    else paragraphs.set(normalized, article.slug);
  }
  for (const faq of article.faq) {
    const question = faq.question.trim().toLowerCase();
    if (faqQuestions.has(question)) failures.push(`Duplicate FAQ: ${article.slug} duplicates ${faqQuestions.get(question)}`);
    else faqQuestions.set(question, article.slug);
  }
}

const articleSlugs = new Set();
for (const article of articles) {
  if (articleSlugs.has(article.slug)) failures.push(`Duplicate article slug/structured-data identity: ${article.slug}`);
  articleSlugs.add(article.slug);
}

for (const tool of plannedTools.filter((tool) => tool.isLive)) {
  const page = path.join(root, "app", "tools", tool.slug, "page.tsx");
  if (!fs.existsSync(page)) failures.push(`Live tool missing page: ${tool.slug}`);
  else {
    const source = fs.readFileSync(page, "utf8");
    if (!source.includes("alternates") || !source.includes("canonical")) failures.push(`Tool missing canonical metadata: ${tool.slug}`);
    if (!source.includes("faqPageSchema") || !source.includes("breadcrumbSchema")) failures.push(`Tool missing structured data: ${tool.slug}`);
  }
  if (!toolPublisherContent[tool.slug]) failures.push(`Tool missing publisher guidance: ${tool.slug}`);
}

if (excluded.length) warnings.push(`${excluded.length} templated legacy articles are intentionally noindex and excluded from sitemap, feed, and listings pending independent rewrites.`);

console.log("WorkflowTools.space content audit");
console.log(`Indexable articles: ${indexable.length}`);
console.log(`Noindex legacy articles: ${excluded.length}`);
console.log(`Live tools: ${plannedTools.filter((tool) => tool.isLive).length}`);
for (const warning of warnings) console.log(`WARN: ${warning}`);
if (failures.length) {
  console.error(`FAIL: ${failures.length} content issue(s) found:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("PASS: no duplicate or weak-content violations found in indexable content.");
}
