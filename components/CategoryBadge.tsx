import Link from "next/link";
import { getCategory } from "@/lib/categories";

export function CategoryBadge({ slug }: { slug: string }) {
  const category = getCategory(slug);

  return (
    <Link
      href={`/category/${slug}`}
      className="inline-flex w-fit items-center rounded-full bg-[#e8f4ef] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#0d4f42]"
    >
      {category?.name ?? slug}
    </Link>
  );
}
