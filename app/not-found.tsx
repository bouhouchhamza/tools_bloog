import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-20">
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="mt-4 max-w-xl text-[#5e6f68]">
        The page you are looking for may have moved or the URL may be incorrect.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/tools" className="inline-flex rounded-md bg-[#16705a] px-5 py-3 font-bold text-white">
          Browse tools
        </Link>
        <Link href="/blog" className="inline-flex rounded-md border border-[#16705a] px-5 py-3 font-bold text-[#0d4f42]">
          Browse articles
        </Link>
      </div>
    </section>
  );
}
