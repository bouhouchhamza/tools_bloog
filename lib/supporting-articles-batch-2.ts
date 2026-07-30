import type { Article } from "@/lib/articles";

const shared = {
  author: "Hamza Bouhouch",
  publishedDate: "2026-07-10",
  updatedDate: "2026-07-10",
  image: "/images/articles/business-tool-guides.svg",
  indexable: true
};

export const supportingArticlesBatch2: Article[] = [
  {
    ...shared,
    title: "Free Tools Every Marketer Should Bookmark",
    slug: "free-tools-every-marketer-should-bookmark",
    description: "A practical collection of focused tools for campaign links, email ideas, QR codes, and search snippet reviews.",
    category: "productivity",
    readingTime: "9 min read",
    tags: ["Marketing Tools", "Campaign Planning", "Productivity"],
    imageAlt: "Original illustration of marketing tasks moving through an organized toolkit.",
    seoTitle: "Free Tools Every Marketer Should Bookmark | WorkflowTools.space",
    metaDescription: "Explore useful free tools for UTM campaign links, email subject lines, QR codes, and search result snippet previews.",
    rssDescription: "A task-focused guide to free browser tools that support common marketing workflows.",
    internalLinks: ["how-to-use-utm-links-to-track-campaigns", "how-to-write-better-ai-prompts", "best-free-online-tools-for-small-businesses"],
    related: ["how-to-use-utm-links-to-track-campaigns", "how-to-write-better-ai-prompts", "best-free-online-tools-for-small-businesses"],
    toolLinks: [
      { href: "/tools/utm-builder", label: "UTM Builder" },
      { href: "/tools/email-subject-line-generator", label: "Email Subject Line Generator" },
      { href: "/tools/qr-code-generator", label: "QR Code Generator" },
      { href: "/tools/meta-tag-preview", label: "Meta Tag Preview" }
    ],
    sections: [
      { heading: "Build a small toolkit around repeatable tasks", body: ["A useful marketing toolkit does not need dozens of overlapping apps. It needs a few focused utilities that make recurring work easier to prepare, review, and hand off.", "The tools in this guide cover four common jobs: labeling campaign traffic, developing email subject ideas, connecting offline materials to web pages, and checking how page metadata may appear in search results. They support judgment rather than replacing it."] },
      { heading: "Step 1: create consistent campaign links", body: ["A UTM Builder adds source, medium, campaign, and optional creative labels to a destination URL. Before generating links, choose a simple naming convention so one channel does not appear under several spellings in reports.", "For example, a monthly customer email could use newsletter as the source, email as the medium, and july_product_update as the campaign. Test the complete link and keep personal or confidential information out of URL parameters."] },
      { heading: "Step 2: develop and review email subject lines", body: ["An Email Subject Line Generator can help create several starting points from an audience, topic, tone, and goal. Treat the results as drafts and check that each one matches the actual message.", "A useful workflow is to generate a small set, remove vague or exaggerated options, then compare the survivors for clarity. Avoid unsupported urgency, misleading personalization, or promises the email cannot fulfill."] },
      { heading: "Step 3: connect print and offline activity", body: ["A QR Code Generator can turn a landing-page URL into a code for event materials, packaging, signs, or printed guides. Use a stable destination and place a short explanation beside the code so people know what it opens.", "Test the code from the final printed size, at realistic distance and lighting. A code that works on a large screen may become difficult to scan after it is reduced or placed on a low-contrast background."] },
      { heading: "Step 4: preview page metadata", body: ["A Meta Tag Preview helps marketers review a proposed title, description, and URL together. It is useful during page briefs and final checks because missing context or repetitive wording becomes easier to notice.", "A preview is an approximation, not a promise of exactly how a search engine will display a result. Write accurate metadata for the page, keep the important meaning early, and review it on narrow as well as wide screens."] },
      { heading: "A practical campaign workflow", body: ["For a product update, start with the landing page and review its title and description. Create tagged links for the newsletter and event handout, turn the handout link into a tested QR code, and draft subject-line options based on the same accurate message.", "Save the approved names, links, and copy in the campaign brief. This creates a simple record for reporting and prevents teammates from rebuilding slightly different versions."] },
      { heading: "Common mistakes to avoid", body: ["Common problems include inconsistent UTM names, QR codes that were never print-tested, subject lines that overpromise, and metadata written without reading the destination page.", "Another mistake is collecting tools without defining ownership. Decide who prepares each asset, who reviews it, and where the final version is stored. A modest toolkit works best inside a clear process."] }
    ],
    faq: [
      { question: "Do marketers need to use every tool for every campaign?", answer: "No. Choose only the tools that support the channels and assets in the specific campaign." },
      { question: "Can a meta preview guarantee a search result appearance?", answer: "No. Search engines may rewrite or display metadata differently, so a preview is guidance rather than a guarantee." },
      { question: "Should campaign URLs contain customer information?", answer: "No. URLs are widely stored and shared, so tracking parameters should never contain personal or confidential information." }
    ]
  },
  {
    ...shared,
    title: "Robots.txt vs Sitemap: What Is the Difference?",
    slug: "robots-txt-vs-sitemap-what-is-the-difference",
    description: "Understand how robots.txt crawling instructions differ from XML sitemap discovery signals and when a website may use both.",
    category: "workflow-automation",
    readingTime: "9 min read",
    tags: ["Robots.txt", "XML Sitemap", "Technical SEO"],
    imageAlt: "Original illustration of crawler instructions and page discovery paths.",
    seoTitle: "Robots.txt vs Sitemap: What Is the Difference? | WorkflowTools.space",
    metaDescription: "Compare robots.txt files and XML sitemaps, understand their different jobs, and avoid common crawling and discovery mistakes.",
    rssDescription: "A practical comparison of robots.txt crawling instructions and XML sitemap page discovery signals.",
    internalLinks: ["document-automation-workflows", "automation-mistakes-beginners-avoid"],
    related: ["document-automation-workflows", "automation-mistakes-beginners-avoid"],
    toolLinks: [{ href: "/tools/robots-txt-generator", label: "Robots.txt Generator" }, { href: "/tools/xml-sitemap-generator", label: "XML Sitemap Generator" }],
    sections: [
      { heading: "The short answer", body: ["A robots.txt file gives compliant crawlers instructions about which areas they may crawl. An XML sitemap supplies a structured list of URLs that a site owner wants search systems to discover and consider.", "They solve different problems. Robots.txt is mainly about crawl access, while a sitemap is mainly about URL discovery. Neither file guarantees indexing or ranking."] },
      { heading: "How robots.txt works", body: ["Robots.txt is a plain-text file placed at the root of a hostname, such as example.com/robots.txt. It can name user agents and provide allow or disallow paths for crawlers that choose to follow the standard.", "A disallow rule is not a secure access control. A blocked URL may still be known through links, and the file itself is public. Sensitive areas require authentication or other proper access restrictions."] },
      { heading: "How an XML sitemap works", body: ["An XML sitemap lists canonical page URLs in a machine-readable format. It can help discovery on large, new, frequently changing, or weakly linked sites, although strong internal navigation remains important.", "Include URLs that are intended to be canonical and indexable. Avoid filling the sitemap with redirects, error pages, duplicates, or pages deliberately blocked from crawling."] },
      { heading: "Step-by-step setup", body: ["First decide which public pages should be crawlable and indexable. Draft conservative robots.txt rules, checking path prefixes carefully, then generate a sitemap containing the preferred public URLs.", "Add the sitemap location to robots.txt when useful, publish both files at stable URLs, and test them with the relevant search engine tools. Recheck the files after migrations or major URL changes."] },
      { heading: "Example for a small website", body: ["A small business site might allow normal public pages while discouraging crawling of an internal search-results path. Its sitemap could list the home page, service pages, contact page, useful articles, and public tools.", "The sitemap should not include the internal search results if they are not intended for indexing. This keeps the discovery list aligned with the site's actual canonical content strategy."] },
      { heading: "Common mistakes", body: ["Frequent mistakes include using robots.txt to hide confidential pages, accidentally blocking the whole site, writing rules for the wrong hostname, and listing noncanonical URLs in the sitemap.", "Another mistake is treating submission as a guarantee. Search systems make independent crawling and indexing decisions. Monitor results and diagnose the specific page rather than repeatedly resubmitting unchanged files."] },
      { heading: "Troubleshooting conflicting signals", body: ["When a sitemap URL is not discovered as expected, check its HTTP status, canonical tag, robots directives, internal links, and whether robots.txt allows the crawler to fetch it. The sitemap entry is only one signal in that chain.", "If a URL is both listed in a sitemap and blocked by robots.txt, decide which outcome is intentional instead of repeatedly resubmitting it. Keep a dated copy before changing crawler rules, test on the correct hostname, and recheck important templates after deployment."] }
    ],
    faq: [
      { question: "Do I need both robots.txt and an XML sitemap?", answer: "Not every small site needs complex files, but each can be useful because they perform different jobs." },
      { question: "Does robots.txt keep a page private?", answer: "No. Use authentication or proper access controls for private content." },
      { question: "Does a sitemap guarantee indexing?", answer: "No. It supports discovery, while search engines still evaluate whether and how a URL is indexed." }
    ]
  },
  {
    ...shared,
    title: "How to Generate SEO-Friendly Slugs",
    slug: "how-to-generate-seo-friendly-slugs",
    description: "Turn page titles into short, readable URL slugs and manage later URL changes carefully.",
    category: "productivity",
    readingTime: "8 min read",
    tags: ["URL Slugs", "SEO", "Content Publishing"],
    imageAlt: "Original illustration of a page title becoming a clean web address.",
    seoTitle: "How to Generate SEO-Friendly Slugs | WorkflowTools.space",
    metaDescription: "Create readable URL slugs from page titles, remove unnecessary words, handle duplicates, and avoid disruptive URL changes.",
    rssDescription: "A practical guide to creating concise, readable, and stable URL slugs.",
    internalLinks: ["document-automation-workflows", "how-to-automate-content-planning-without-losing-quality"],
    related: ["document-automation-workflows", "how-to-automate-content-planning-without-losing-quality"],
    toolLinks: [{ href: "/tools/slug-generator", label: "Slug Generator" }],
    sections: [
      { heading: "What makes a useful URL slug", body: ["A slug is the page-specific portion of a URL. A useful slug is readable, reasonably short, descriptive of the page, and stable enough to remain in place after publication.", "The goal is not to force every possible search phrase into the address. The slug should help a person understand the destination and help the publishing team maintain a predictable URL structure."] },
      { heading: "Step 1: begin with the real page topic", body: ["Write the page title first, then identify the few words that distinguish the topic. Remove promotional fillers and details that are likely to become outdated unless they are essential.", "For example, a page titled “A Practical Beginner Guide to Creating Monthly Reports” could use creating-monthly-reports. The shorter version preserves the topic without repeating every title word."] },
      { heading: "Step 2: normalize the text", body: ["Convert letters to lowercase, replace spaces with hyphens, remove punctuation, and collapse repeated separators. A Slug Generator can perform this mechanical cleanup consistently.", "Review transliterated or removed non-Latin characters rather than assuming the automatic result is meaningful. Your platform and audience may support native-language URLs, so follow the site's established convention."] },
      { heading: "Step 3: check context and duplicates", body: ["Read the complete URL, not just the slug. A short slug may be clear inside a descriptive directory but ambiguous at the site root.", "Search the site or content system for duplicates before publishing. If two pages genuinely cover the same topic, decide whether they should be combined rather than adding arbitrary numbers to one URL."] },
      { heading: "Examples", body: ["“How to Create a WhatsApp Link for Your Business” can become how-to-create-a-whatsapp-link-for-business. “Robots.txt vs Sitemap: What Is the Difference?” can become robots-txt-vs-sitemap-what-is-the-difference.", "Dates belong in a slug only when the date is fundamental to the content. An evergreen guide usually benefits from a stable address that does not need to change each year."] },
      { heading: "Common slug mistakes", body: ["Avoid long strings, underscores when the site standard uses hyphens, unreadable abbreviations, repeated keywords, and IDs with no meaning to readers.", "Changing a live slug casually is another major mistake. If a URL must change, update internal links, use an appropriate permanent redirect, update the sitemap, and verify that the old address does not become a dead end."] },
      { heading: "A final publishing check", body: ["Confirm that the slug matches the page's actual subject, reads clearly aloud, follows the existing site structure, and contains no accidental personal or draft information.", "Once published, treat the URL as a durable reference. Improve the title and content over time without changing the slug unless there is a strong structural reason."] },
      { heading: "Troubleshooting a bad generated slug", body: ["If meaningful characters disappear, check whether the site's URL convention supports that writing system or expects transliteration. Do not publish an empty or misleading result simply because an automatic converter produced it.", "If the preferred slug already belongs to another page, compare the two search intents before adding a suffix. The pages may need to be consolidated. When they are genuinely different, add one short distinguishing term that describes the difference and remains useful over time."] }
    ],
    faq: [
      { question: "How long should a slug be?", answer: "There is no universal ideal length. Use the shortest wording that clearly distinguishes the page." },
      { question: "Should every title word appear in the slug?", answer: "No. Remove words that do not help identify the topic, while keeping the result natural and unambiguous." },
      { question: "Can I change a slug after publishing?", answer: "Yes, but only with a clear reason and a careful redirect and internal-link update plan." }
    ]
  },
  {
    ...shared,
    title: "How to Check Meta Title and Description Length",
    slug: "how-to-check-meta-title-and-description-length",
    description: "Review title and description length while keeping page metadata accurate, specific, and readable.",
    category: "productivity",
    readingTime: "8 min read",
    tags: ["Meta Titles", "Meta Descriptions", "SEO"],
    imageAlt: "Original illustration of title and description text being reviewed in a preview card.",
    seoTitle: "How to Check Meta Title and Description Length | WorkflowTools.space",
    metaDescription: "Check meta title and description length, preview likely truncation, and improve clarity without chasing rigid character limits.",
    rssDescription: "A practical guide to reviewing page titles and meta descriptions for length, clarity, and relevance.",
    internalLinks: ["how-to-generate-seo-friendly-slugs", "how-to-automate-content-planning-without-losing-quality"],
    related: ["how-to-generate-seo-friendly-slugs", "how-to-automate-content-planning-without-losing-quality"],
    toolLinks: [{ href: "/tools/meta-tag-preview", label: "Meta Tag Preview" }, { href: "/tools/seo-title-meta-generator", label: "SEO Title and Meta Generator" }],
    sections: [
      { heading: "Length is a review signal, not a guarantee", body: ["Page titles and meta descriptions may be shortened or rewritten when displayed in search results. Display space depends on character width, device, query, and the search system's choices, so no character count guarantees a fixed appearance.", "Length checks are still useful because they reveal very short drafts, likely truncation, and buried meaning. Accuracy and usefulness should come before forcing copy into a rigid number."] },
      { heading: "Step 1: write an accurate title", body: ["Name the page's specific subject and place the most distinguishing idea early. Keep the site name only when it adds useful context and does not push the topic out of view.", "Avoid repeating similar phrases or using a generic title such as Home or Services. Every indexable page should have a title that makes sense when seen away from the rest of the website."] },
      { heading: "Step 2: draft the description", body: ["Summarize what the visitor can expect from the page in one or two natural sentences. Include important context and a truthful reason to visit without making unsupported claims.", "Descriptions are not always used verbatim, but a clear draft gives search systems and other sharing contexts useful source text. Do not duplicate the same description across unrelated pages."] },
      { heading: "Step 3: preview and revise", body: ["Enter the title, description, and URL in a Meta Tag Preview. Review the counts and visual preview together, then shorten repeated wording or move essential meaning earlier if the draft appears crowded.", "Check the result on narrow and wide layouts. A preview approximates presentation and cannot predict every query-specific result, so retain a copy that reads well even if part of it is shortened."] },
      { heading: "Practical example", body: ["A title such as “Invoice Generator - Create a Clear Invoice Online” identifies the tool and task. Its description can explain that users add line items, totals, business details, and payment notes.", "The metadata should match the actual page. Do not advertise downloads, templates, or capabilities that the page does not provide merely to make the snippet sound more attractive."] },
      { heading: "Common mistakes", body: ["Common mistakes include keyword lists instead of sentences, identical metadata on many pages, important wording placed at the end, and rewriting good copy solely to hit an arbitrary count.", "Another mistake is assuming a green length indicator means the work is finished. Read the title and description for accuracy, differentiation, grammar, and alignment with the visible page content."] },
      { heading: "A reusable review checklist", body: ["Confirm that the title identifies the page, the description adds useful detail, both are unique within the site, and the URL looks understandable beside them.", "After publication, inspect actual search performance and displayed snippets when data becomes available. Revise based on a genuine mismatch or clarity problem, not constant cosmetic changes."] }
    ],
    faq: [
      { question: "Is there a perfect meta title character count?", answer: "No. Display width and search context vary, so use counts as practical guidance rather than a guarantee." },
      { question: "Will a search engine always show my meta description?", answer: "No. It may select or generate different text when another passage better matches the query." },
      { question: "Should every page have unique metadata?", answer: "Important indexable pages should have metadata written for their specific content and purpose." }
    ]
  },
  {
    ...shared,
    title: "How to Convert CSV to JSON",
    slug: "how-to-convert-csv-to-json",
    description: "Convert CSV rows into JSON objects or arrays while handling headers, quoted commas, and inconsistent columns.",
    category: "productivity",
    readingTime: "9 min read",
    tags: ["CSV", "JSON", "Data Conversion"],
    imageAlt: "Original illustration of table rows becoming structured data objects.",
    seoTitle: "How to Convert CSV to JSON | WorkflowTools.space",
    metaDescription: "Learn how CSV rows map to JSON, prepare headers, handle quoted fields, validate columns, and review converted output.",
    rssDescription: "A practical guide to converting CSV data into JSON objects or arrays without damaging values.",
    internalLinks: ["how-to-format-and-validate-json-online", "document-automation-workflows"],
    related: ["how-to-format-and-validate-json-online", "document-automation-workflows"],
    toolLinks: [{ href: "/tools/csv-to-json-converter", label: "CSV to JSON Converter" }, { href: "/tools/json-formatter", label: "JSON Formatter" }],
    sections: [
      { heading: "Understand the two data shapes", body: ["CSV represents a table as rows and fields, usually separated by commas. JSON can represent the same information as an array of objects with named properties or as an array of row arrays.", "When the first CSV row contains unique column names, using it as headers produces readable objects. Without headers, preserving every row as an array may be the more accurate choice."] },
      { heading: "Step 1: inspect and clean the CSV", body: ["Check the delimiter, header row, blank lines, and number of fields in each row. Make sure every header has a useful name and note duplicate headings before conversion.", "A comma inside a field must be enclosed in double quotes. A double quote inside a quoted field is commonly represented by two consecutive double quotes. Do not remove these markers without understanding the data."] },
      { heading: "Step 2: choose how headers should work", body: ["Enable the first-row-as-headers option when the first row contains names such as customer, plan, and status. Each later row can then become an object using those names as keys.", "Disable the option when the first row is actual data or when another system expects arrays. The correct choice depends on the meaning of the source, not simply on its first line."] },
      { heading: "Step 3: convert and validate", body: ["Paste the source into the CSV to JSON Converter and run the conversion. If it reports inconsistent column counts or an unclosed quote, correct the source instead of guessing at missing values in the output.", "Review several early, middle, and final records. Check fields containing commas, quotes, line breaks, leading zeros, and non-English characters because these often reveal parsing or encoding assumptions."] },
      { heading: "Conversion example", body: ["A CSV with the headers name, department, and hours can become a JSON array in which each employee row is an object. The header values become property names and the original cells become string values.", "Keeping values as strings protects identifiers such as 00125 from losing leading zeros. Convert types later only when you have explicit rules for numbers, dates, Booleans, and missing values."] },
      { heading: "Common mistakes", body: ["Common mistakes include splitting every line on commas without respecting quotes, treating a data row as headers, accepting uneven rows silently, and assuming every numeric-looking value should become a number.", "Do not paste production exports containing personal or confidential data into tools without checking how they process information. Use a small, anonymized sample to confirm the workflow first."] },
      { heading: "What to do after conversion", body: ["Format and validate the JSON, then compare record counts with the CSV source. Confirm the property names match what the receiving application expects.", "Test the result in a development or staging workflow before importing it into a live system. Keep the original CSV so the conversion can be reproduced if mapping rules change."] }
    ],
    faq: [
      { question: "Should the first CSV row always become JSON keys?", answer: "Only when it contains column names. Otherwise, convert all rows to arrays or provide headers separately." },
      { question: "Why do values remain strings?", answer: "Preserving strings avoids silently changing identifiers, leading zeros, dates, and other ambiguous values." },
      { question: "Can a CSV field contain a comma?", answer: "Yes. It should be correctly enclosed in double quotes so the comma is treated as content rather than a separator." }
    ]
  },
  {
    ...shared,
    title: "How to Use a Password Generator Safely",
    slug: "how-to-use-a-password-generator-safely",
    description: "Generate strong unique passwords, store them in a password manager, and avoid unsafe copying or reuse habits.",
    category: "productivity",
    readingTime: "9 min read",
    tags: ["Password Generator", "Account Security", "Privacy"],
    imageAlt: "Original illustration of a generated password moving into protected storage.",
    seoTitle: "How to Use a Password Generator Safely | WorkflowTools.space",
    metaDescription: "Use a password generator safely by choosing sufficient length, creating unique passwords, storing them securely, and checking site requirements.",
    rssDescription: "Practical steps for generating, storing, and using unique passwords without weakening them through reuse or unsafe handling.",
    internalLinks: ["document-automation-workflows", "automation-mistakes-beginners-avoid"],
    related: ["document-automation-workflows", "automation-mistakes-beginners-avoid"],
    toolLinks: [{ href: "/tools/password-generator", label: "Password Generator" }],
    sections: [
      { heading: "A generator is one part of password safety", body: ["A password generator creates unpredictable character combinations more reliably than a person inventing a familiar pattern. The larger benefit comes from using a different generated password for every account.", "Generation alone is not enough. The password must be created in a trustworthy environment, stored safely, entered on the correct site, and replaced if exposure is suspected."] },
      { heading: "Step 1: use a suitable generator", body: ["Prefer a generator that runs locally on your device and clearly explains its options. The WorkflowTools Password Generator creates values in the browser and lets you control length and character groups.", "Do not generate account passwords on a public or shared computer. Keep the operating system and browser updated, and avoid tools that require you to submit an existing password."] },
      { heading: "Step 2: choose length and character options", body: ["Use the longest password the account accepts without creating a compatibility problem. A long random password is generally harder to guess than a short complicated-looking pattern.", "Include the character types accepted by the site. If a service rejects certain symbols, adjust the option for that account rather than manually changing the same generated password for repeated use elsewhere."] },
      { heading: "Step 3: store it immediately", body: ["Save the new password directly in a reputable password manager instead of a notes file, email draft, spreadsheet, or paper left beside the device. Verify the manager saved the correct website and username.", "Clear temporary clipboard contents when your device or password manager supports that behavior. Be careful with clipboard history and shared-device synchronization, which can retain copied secrets longer than expected."] },
      { heading: "Step 4: protect the account beyond the password", body: ["Enable multi-factor authentication when the service offers a suitable option, and securely save any recovery codes. Review recovery email addresses and phone numbers so an old contact method does not undermine the account.", "A strong password cannot protect against every phishing attempt. Check the domain before entering credentials and do not approve unexpected sign-in prompts."] },
      { heading: "Practical example", body: ["When creating an account, open the password manager and generator, choose a long random value that meets the site's rules, save it under the exact domain, and complete any verification steps.", "Sign out and confirm that autofill or a controlled copy works before discarding recovery information. This verifies that the stored record is usable while the setup is still fresh."] },
      { heading: "Common mistakes", body: ["The most serious mistake is reusing a generated password across accounts. Other problems include shortening it for convenience, sending it through chat, saving screenshots, and leaving it in clipboard history.", "Do not rotate strong unique passwords on an arbitrary schedule if doing so encourages weak patterns; follow the service's requirements and change a password promptly when compromise or accidental disclosure is suspected."] }
    ],
    faq: [
      { question: "Should I memorize every generated password?", answer: "No. A password manager is designed to store unique account passwords securely so you do not need to memorize each one." },
      { question: "Can I reuse one very strong password?", answer: "No. Reuse allows a password exposed by one service to threaten accounts on other services." },
      { question: "Are symbols always required?", answer: "Requirements vary. Length and uniqueness are fundamental; use the character types accepted by the specific service." }
    ]
  }
];
