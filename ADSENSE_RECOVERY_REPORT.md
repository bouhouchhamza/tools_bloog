# AdSense Low-Value Content Recovery Report

Report date: 2026-07-30.

## Outcome

The strongest low-value signal was a set of 25 articles generated through the same section and FAQ template. They are no longer promoted or submitted for indexing. The site now presents 12 independently written supporting articles, 21 working tools with tool-specific publisher guidance, a named author profile, and a detailed editorial policy.

This work does not guarantee AdSense approval. It removes obvious structural and editorial risks while preserving working URLs and tools.

## Rewritten articles

No templated legacy article was superficially rephrased. Twelve independently structured supporting guides remain indexable; they are listed in `CONTENT_AUDIT.md`. The legacy articles require genuine topic-by-topic research and rewriting before reindexing.

## Merged articles and redirects

No article redirect was introduced because no existing indexable guide is yet a complete replacement for a templated legacy URL. `/terms-of-service` already permanently redirects to canonical `/terms` to remove duplicate trust-page content.

## Noindex pages

- 25 templated legacy article URLs are `noindex, follow`.
- Empty AI Automation, No-Code Automation, and n8n Tutorials category archives are `noindex, follow`.
- Noindex articles are excluded from the blog, category lists, homepage features, related-article modules, author listing, RSS feed, and sitemap.
- Empty categories are excluded from navigation and sitemap.

## Sitemap changes

The sitemap now uses `getIndexableArticles()` and includes only populated category archives. The author profile is included. Redirected `/terms-of-service`, noindex legacy articles, and empty categories are excluded.

## Author and editorial changes

- Added `/authors/hamza-bouhouch` with truthful, limited biographical wording and no invented qualifications.
- Article JSON-LD now uses a Schema.org `Person` author linked to the profile.
- Article headers link the author name.
- Article cards show author, publication date, updated date, category, and reading time.
- Article pages include an editorial note and correction link.
- Expanded `/editorial-policy` to cover selection, research, examples, updates, AI assistance, and corrections.
- Linked the author and editorial pages from articles and the footer.

## Tool-page improvements

Every live tool now includes original, functionality-specific guidance covering its intended audience, a practical workflow, an important limitation, and privacy handling. This supplements each page's existing unique introduction, usage steps, examples, mistakes, FAQ, and related links.

## Duplicate content removed from indexable surfaces

The shared `articleSections()` and `faqs()` output remains only on noindex legacy URLs. Indexable articles are independently written. The content audit command fails when it finds duplicate long paragraphs, introductions, conclusions, FAQs, titles, or descriptions among indexable articles.

## Metadata and structured data

- Indexable pages retain unique titles, descriptions, canonicals, Open Graph data, Twitter cards, breadcrumbs, and FAQ/article structured data where applicable.
- Legacy articles receive `noindex, follow` metadata.
- Article author structured data changed from Organization to Person.
- Duplicate slugs are treated as duplicate structured-data identities by the audit script.

## Validation commands

Final verification completed successfully:

- `npm run content:audit` — passed; 12 indexable articles, 25 intentional noindex legacy articles, 21 live tools, and no duplicate or weak-content violations in indexable content.
- `npm run lint` — passed with zero warnings.
- `npm run typecheck` — passed.
- `npm run build` — passed; 83 static/SSG pages generated.
- Generated sitemap verification — 48 canonical URLs: 12 articles, 21 tools, four populated categories, the author page, and canonical core/trust pages.

## Remaining recommendations

1. Rewrite legacy topics one at a time only when the result includes original implementation detail, current primary-source research where needed, troubleshooting, and a distinct editorial structure.
2. Do not reactivate empty categories until they contain substantial independently edited guides.
3. Manually test tool interactions and responsive layout after deployment.
4. Confirm production AdSense, consent, privacy, robots, sitemap, and ads.txt behavior.
5. Request a new AdSense review only after the updated deployment is crawlable and key pages have been recrawled.
