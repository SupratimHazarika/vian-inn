const reviews = [
  {
    quote:
      'Every time I visit Guwahati I take this place. Clean, polite staff, and the food is too good.',
    name: 'Debabrata',
    place: 'India',
  },
  {
    quote:
      'Reception was caring, the TV had Netflix, breakfast was good. A short walk from the rail station.',
    name: 'Rachel',
    place: 'United Kingdom',
  },
  {
    quote:
      'Great location in the centre of town, great food at good prices, and super helpful staff.',
    name: 'Hewett',
    place: 'Australia',
  },
]

export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-teal">
            Guest book
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            4.4 on Google · 136 reviews
          </h2>
        </div>
        <p className="text-sm text-muted">Booking.com 7.9 · MakeMyTrip 4.0</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <blockquote key={review.name} className="border border-line bg-white p-7">
            <p className="font-serif text-xl leading-snug">“{review.quote}”</p>
            <footer className="mt-6 text-sm text-muted">
              {review.name} · {review.place}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
