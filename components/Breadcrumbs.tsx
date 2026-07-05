import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[#5e6f68]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            <Link href={item.href} className="font-semibold hover:text-[#0d4f42]">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
