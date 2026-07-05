import Link from "next/link";
import { categories } from "@/lib/categories";

const legal = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms", "/terms"],
  ["Disclaimer", "/disclaimer"],
  ["Editorial Policy", "/editorial-policy"],
  ["Cookie Policy", "/cookie-policy"]
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#dce5e0] bg-[#17211d] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">WorkflowTools.space</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#c8d6d0]">
            Free online business, SEO, developer, productivity, marketing, and AI tools with practical workflow guides.
          </p>
          <p className="mt-4 text-sm leading-6 text-[#c8d6d0]">
            Contact:{" "}
            <Link href="mailto:contact@workflowtools.space" className="font-bold text-white">
              contact@workflowtools.space
            </Link>
          </p>
        </div>
        <div>
          <h3 className="font-bold">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#c8d6d0]">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Start Here</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#c8d6d0]">
            <li><Link href="/tools">Free Tools</Link></li>
            <li><Link href="/tools/ai-prompt-generator">AI Prompt Generator</Link></li>
            <li><Link href="/tools/meta-tag-preview">SEO Preview Tool</Link></li>
            <li><Link href="/blog/what-is-a-workflow">Workflow Basics</Link></li>
            <li><Link href="/blog/how-to-build-first-simple-automation-workflow">First Workflow</Link></li>
            <li><Link href="/blog/choose-right-automation-tool">Choose a Tool</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Policies</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#c8d6d0]">
            {legal.map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs leading-5 text-[#c8d6d0]">
        Copyright {new Date().getFullYear()} WorkflowTools.space. Free utilities and educational content only.
      </div>
    </footer>
  );
}
