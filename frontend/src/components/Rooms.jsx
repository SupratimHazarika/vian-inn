import { useEffect, useEffectEvent, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/components/ContactModal'

const rooms = [
  {
    id: 'deluxe-twin',
    name: 'Deluxe Twin',
    detail: '2 single beds · 17 sq m · City view',
    copy: 'Two crisp beds, a work desk, and a teal runner. Built for colleagues, siblings, or an easy overnight before the morning train.',
    price: 'From ₹1,967',
    image: '/images/deluxe-twin.jpg',
    gallery: [
      ['/images/deluxe-twin.jpg', 'Deluxe Twin room'],
      ['/images/twin-wardrobe.jpg', 'Wardrobe and television'],
      ['/images/attached-bath.jpg', 'Attached bath'],
    ],
    modalCopy:
      'Two single beds, wardrobe, flat screen, and an attached bath — ready for an easy overnight in Paltan Bazaar.',
  },
  {
    id: 'deluxe-double',
    name: 'Deluxe Double',
    detail: '1 double bed · 17 sq m · City view',
    copy: 'A quieter room for two. Attached bath, wardrobe, kettle, and a flat screen — the essentials, done cleanly.',
    price: 'From ₹1,967',
    image: '/images/deluxe-double.jpg',
    gallery: [
      ['/images/deluxe-double.jpg', 'Deluxe Double room'],
      ['/images/double-wardrobe.jpg', 'Wardrobe and television'],
      ['/images/double-bath.jpg', 'Attached bath'],
    ],
    modalCopy:
      'A double bed, wardrobe, work corner, and attached bath — quiet essentials for two in Paltan Bazaar.',
  },
]

export function Rooms() {
  const [openRoomId, setOpenRoomId] = useState(null)
  const [slide, setSlide] = useState(0)
  const { openContact } = useContactModal()

  const openRoom = rooms.find((room) => room.id === openRoomId)
  const open = Boolean(openRoom?.gallery?.length)
  const gallery = openRoom?.gallery ?? []

  const onKeyDown = useEffectEvent((event) => {
    if (!open) return
    if (event.key === 'Escape') setOpenRoomId(null)
    if (event.key === 'ArrowLeft') {
      setSlide((i) => (i - 1 + gallery.length) % gallery.length)
    }
    if (event.key === 'ArrowRight') {
      setSlide((i) => (i + 1) % gallery.length)
    }
  })

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onKeyDown])

  const openRoomModal = (roomId) => {
    setSlide(0)
    setOpenRoomId(roomId)
  }

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
                  <Button
                    type="button"
                    size="sm"
                    onClick={
                      room.gallery ? () => openRoomModal(room.id) : undefined
                    }
                  >
                    View room
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/55 px-4 backdrop-blur-md"
          onClick={() => setOpenRoomId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${openRoom.name} details`}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenRoomId(null)}
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center bg-ink/50 text-white transition hover:bg-ink/70"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              <img
                src={gallery[slide][0]}
                alt={gallery[slide][1]}
                className="aspect-[4/3] w-full object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  setSlide((i) => (i - 1 + gallery.length) % gallery.length)
                }
                className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/85 text-ink transition hover:bg-white"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setSlide((i) => (i + 1) % gallery.length)}
                className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/85 text-ink transition hover:bg-white"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={gallery[i][0]}
                    type="button"
                    onClick={() => setSlide(i)}
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      i === slide ? 'bg-white' : 'bg-white/45'
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {openRoom.detail}
              </p>
              <h3 className="mt-2 font-serif text-3xl">{openRoom.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {openRoom.modalCopy}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-sm font-medium">{openRoom.price} / night</p>
                <Button
                  type="button"
                  onClick={() => {
                    setOpenRoomId(null)
                    openContact('room')
                  }}
                >
                  Book now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
