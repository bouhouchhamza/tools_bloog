import Link from "next/link";

export function AuthorBox() {
  return (
    <aside className="rounded-lg border border-[#dce5e0] bg-white p-6">
      <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#16705a]">About the author</p>
      <h2 className="mt-2 text-xl font-bold">Hamza Bouhouch</h2>
      <p className="mt-3 text-sm leading-6 text-[#5e6f68]">
        Hamza Bouhouch is the named author and editor for WorkflowTools.space. Articles focus on practical browser tools,
        workflow steps, limitations, and examples that readers can verify for themselves.
      </p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-[#0d4f42]">
        <Link href="/authors/hamza-bouhouch">Author profile</Link>
        <Link href="/editorial-policy">Editorial policy</Link>
      </div>
    </aside>
  );
}
