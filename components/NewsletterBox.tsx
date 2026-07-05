import Link from "next/link";

export function NewsletterBox() {
  return (
    <section className="rounded-lg bg-[#17211d] p-6 text-white md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-bold">Use tools with judgment</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#c8d6d0]">
            WorkflowTools.space provides free utilities and educational guides. Review outputs before using them for
            invoices, SEO settings, security, customer messages, or business decisions.
          </p>
        </div>
        <Link href="/tools" className="rounded-md bg-[#d2852f] px-5 py-3 text-center font-bold text-[#17211d]">
          Browse Free Tools
        </Link>
      </div>
    </section>
  );
}
