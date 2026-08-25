export function FaqList({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="font-display text-3xl font-bold text-forest-950">
        Voice-search questions we answer
      </h2>
      <div className="mt-6 divide-y divide-forest-900/10 rounded-2xl border border-forest-900/10 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5">
            <summary className="cursor-pointer list-none font-semibold text-forest-950 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {faq.question}
                <span className="text-orange-500 group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-forest-800">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
