const rules = [
  ['Check-in', '12:00 PM to 11:30 PM'],
  ['Check-out', '11:00 AM'],
  ['Primary guest', '18 years and above'],
  ['Couples', 'Welcome · local IDs accepted'],
  ['Pets', 'Not allowed'],
  ['Payment', 'Cash at the desk'],
]

export function MustKnows() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-teal">
          Vian must knows
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">
          Stay informed before you arrive
        </h2>
        <dl className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {rules.map(([term, detail]) => (
            <div key={term} className="bg-white px-6 py-7">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">{term}</dt>
              <dd className="mt-2 font-medium">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
