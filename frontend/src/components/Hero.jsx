import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88svh] overflow-hidden">
      <img
        src="/images/hero-lobby.jpg"
        alt="Vian Inn lobby with teal glass door"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/10" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 md:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/80">
          Paltan Bazaar · Guwahati
        </p>
        <h1 className="max-w-xl font-serif text-5xl leading-[1.05] text-white md:text-7xl">
          Food & Stay in Paltan Bazaar
        </h1>
        <p className="mt-5 max-w-md text-base text-white/85 md:text-lg">
          A 5-minute walk from Guwahati Station. Clean rooms upstairs, Indian
          and Chinese downstairs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" type="button">
            Book a room
          </Button>
          <Button size="lg" variant="cream" type="button">
            View the kitchen
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto grid max-w-6xl grid-cols-2 border border-line bg-white md:grid-cols-4">
          {[
            ['Check-in', '12:00 PM'],
            ['Check-out', '11:00 AM'],
            ['Guests', '2 Adults'],
            ['Search', 'Check dates'],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`px-5 py-4 ${i < 3 ? 'border-r border-line' : 'bg-teal text-white'}`}
            >
              <p className={`text-[11px] uppercase tracking-[0.18em] ${i < 3 ? 'text-muted' : 'text-white/70'}`}>
                {label}
              </p>
              <p className="mt-1 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
