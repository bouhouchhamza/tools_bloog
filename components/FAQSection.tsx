export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="mt-12 rounded-lg border border-[#dce5e0] bg-white p-6">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <details key={item.question} className="rounded-lg border border-[#dce5e0] p-4" open>
            <summary className="cursor-pointer font-bold text-[#17211d]">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-[#5e6f68]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
