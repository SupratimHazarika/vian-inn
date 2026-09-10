import { Button } from '@/components/ui/button'

const bookingFields = [
  ['Check-in', '12:00 PM'],
  ['Check-out', '11:00 AM'],
  ['Guests', '2 Adults'],
  ['Search', 'Check dates'],
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative min-h-[500px] md:min-h-[88svh]">
        <img
          src="/images/hero-lobby.jpg"
          alt="Vian Inn lobby with teal glass door"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/10" />

        <div className="relative mx-auto flex min-h-[500px] max-w-6xl flex-col justify-center px-5 py-12 md:min-h-[88svh] md:justify-end md:px-8 md:pb-16 md:pt-28">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/80">
            Paltan Bazaar · Guwahati
          </p>
          <h1 className="max-w-xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl">
            Food & Stay in Paltan Bazaar
          </h1>
          <p className="mt-5 max-w-md text-base text-white/85 md:text-lg">
            A 5-minute walk from Guwahati Station. Clean rooms upstairs, Indian
            and Chinese downstairs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 pb-4">
            <Button size="lg" type="button">
              Book a room
            </Button>
            <Button size="lg" variant="cream" type="button">
              View the kitchen
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {bookingFields.map(([label, value], i) => {
            const isSearch = label === 'Search'
            return (
              <div
                key={label}
                className={[
                  'px-5 py-4',
                  isSearch ? 'bg-teal text-white' : 'bg-white',
                  i % 2 === 0 ? 'border-r border-line' : '',
                  i < 2 ? 'border-b border-line md:border-b-0' : '',
                  !isSearch && i < 3 ? 'md:border-r' : '',
                ].join(' ')}
              >
                <p
                  className={`text-[11px] uppercase tracking-[0.18em] ${isSearch ? 'text-white/70' : 'text-muted'}`}
                >
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium">{value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
