import Link from "next/link";
import { categories } from "@/lib/categories";
import { getIndexableArticles } from "@/lib/articles";

const nav = [
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/tools/ai-prompt-generator", label: "AI Tools" },
  { href: "/tools/meta-tag-preview", label: "SEO Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const articles = getIndexableArticles();
  const activeCategories = categories.filter((category) => articles.some((article) => article.category === category.slug));
  return (
    <header className="sticky top-0 z-20 border-b border-[#dce5e0] bg-white/95 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-5 py-3">
        <Link href="/" className="flex items-center gap-3 font-bold text-[#17211d]">
          <span className="grid size-10 place-items-center rounded-lg bg-[#16705a] text-white">WT</span>
          <span>WorkflowTools</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-semibold text-[#40524c] md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#0d4f42]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/tools" className="rounded-md bg-[#16705a] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d4f42]">
          Free Tools
        </Link>
      </div>
      <nav aria-label="Category navigation" className="border-t border-[#eef2ef] md:hidden">
        <div className="container flex gap-3 overflow-x-auto py-3 text-sm font-semibold text-[#40524c]">
          <Link href="/tools" className="whitespace-nowrap">
            Tools
          </Link>
          {activeCategories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="whitespace-nowrap">
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
