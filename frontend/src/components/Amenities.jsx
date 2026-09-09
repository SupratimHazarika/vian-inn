import { Coffee, Wifi, Car, ConciergeBell, AirVent, Sparkles } from 'lucide-react'

const items = [
  ['Free Wi-Fi', Wifi],
  ['Room service', ConciergeBell],
  ['Vian Kitchen', Coffee],
  ['Parking nearby', Car],
  ['Air conditioning', AirVent],
  ['Daily housekeeping', Sparkles],
]

export function Amenities() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.24em] text-teal">Amenities</p>
      <h2 className="mt-3 font-serif text-4xl md:text-5xl">
        Thoughtfully kept, not overdone
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-3">
        {items.map(([label, Icon]) => (
          <div key={label} className="flex items-center gap-4 bg-cream px-5 py-8">
            <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
            <p className="text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
