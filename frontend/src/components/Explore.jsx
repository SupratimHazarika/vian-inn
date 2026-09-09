const places = [
  ['Guwahati Station', '5 min walk', 'Last train, first auto — you are already there.'],
  ['Fancy Bazar', '10 min walk', 'Silk, tea, and evening chaat around the corner.'],
  ['Assam State Museum', '12 min', 'A quiet hour before Kamakhya or the river.'],
  ['Kamakhya Temple', '25 min', 'The hill temple most guests plan a morning for.'],
]

export function Explore() {
  return (
    <section id="explore" className="bg-sand/60 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-teal">
          Local attractions
        </p>
        <h2 className="mt-3 max-w-lg font-serif text-4xl md:text-5xl">
          The city starts at the stairwell
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {places.map(([name, time, copy]) => (
            <article key={name} className="border border-line bg-cream p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-teal">{time}</p>
              <h3 className="mt-2 font-serif text-2xl">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
