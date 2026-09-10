import { Button } from '@/components/ui/button'

const rooms = [
  {
    name: 'Deluxe Twin',
    detail: '2 single beds · 17 sq m · City view',
    copy: 'Two crisp beds, a work desk, and a teal runner. Built for colleagues, siblings, or an easy overnight before the morning train.',
    price: 'From ₹1,967',
    image: '/images/deluxe-twin.jpg',
  },
  {
    name: 'Deluxe Double',
    detail: '1 double bed · 17 sq m · City view',
    copy: 'A quieter room for two. Attached bath, wardrobe, kettle, and a flat screen — the essentials, done cleanly.',
    price: 'From ₹1,967',
    image: '/images/deluxe-double.jpg',
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-teal">
              Pick your stay
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The rooms</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Two room types. Same care. Daily housekeeping, room service, and
            complimentary Wi-Fi in every stay.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {rooms.map((room) => (
            <article key={room.name} className="group">
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border border-t-0 border-line p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {room.detail}
                </p>
                <h3 className="mt-2 font-serif text-3xl">{room.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {room.copy}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium">{room.price} / night</p>
                  <Button type="button" size="sm">
                    View room
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
