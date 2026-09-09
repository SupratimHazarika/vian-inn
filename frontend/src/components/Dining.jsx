import { Button } from '@/components/ui/button'

export function Dining() {
  return (
    <section id="dining" className="bg-teal-dark text-cream">
      <div className="mx-auto grid max-w-6xl items-stretch md:grid-cols-2">
        <img
          src="/images/restaurant.jpg"
          alt="Vian Kitchen dining room"
          className="h-full min-h-[420px] w-full object-cover"
        />
        <div className="flex flex-col justify-center px-5 py-16 md:px-14">
          <p className="text-xs uppercase tracking-[0.24em] text-sand">
            Haute, then homely
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Vian Kitchen</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-sand">
            Indian · Chinese · All day
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-cream/80">
            Breakfast through high tea. Mushroom soup, chilli chicken, a plate
            of rice — the kitchen is why many guests come back. Vegetarian and
            non-vegetarian, served in the room or at the green booth.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-cream/75">
            <li>Breakfast from ₹200 · not always included</li>
            <li>Room service through the day</li>
            <li>Packed lunches for early trains</li>
          </ul>
          <div className="mt-10">
            <Button variant="cream" type="button">
              Book a table
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
