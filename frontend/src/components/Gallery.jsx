import { useEffect, useEffectEvent, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const shots = [
  ['/images/deluxe-twin.jpg', 'Deluxe Twin room'],
  ['/images/twin-wardrobe.jpg', 'Wardrobe and television'],
  ['/images/dining-hall.jpg', 'Vian Kitchen'],
  ['/images/deluxe-double.jpg', 'Deluxe Double room'],
  ['/images/attached-bath.jpg', 'Attached bath'],
  ['/images/hero-lobby.jpg', 'Lobby entrance'],
]

export function Gallery() {
  const [active, setActive] = useState(null)
  const open = active !== null

  const onKeyDown = useEffectEvent((event) => {
    if (!open) return
    if (event.key === 'Escape') setActive(null)
    if (event.key === 'ArrowLeft') {
      setActive((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))
    }
    if (event.key === 'ArrowRight') {
      setActive((i) => (i === null ? i : (i + 1) % shots.length))
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

  const showPrev = () =>
    setActive((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))
  const showNext = () =>
    setActive((i) => (i === null ? i : (i + 1) % shots.length))

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-teal">Gallery</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">A look around</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {shots.map(([src, alt], i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`group overflow-hidden text-left ${i === 0 ? 'md:row-span-2' : ''}`}
              aria-label={`View ${alt}`}
            >
              <img
                src={src}
                alt={alt}
                className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                  i === 0 ? 'aspect-[4/5] md:h-full' : 'aspect-[4/3]'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/55 px-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 md:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="relative max-h-[85svh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shots[active][0]}
              alt={shots[active][1]}
              className="mx-auto max-h-[80svh] w-auto max-w-full object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {shots[active][1]}
              <span className="mx-2 text-white/40">·</span>
              {active + 1} / {shots.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 md:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
