import { useEffect, useEffectEvent, useState } from 'react'
import { MapPin, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useContactModal } from '@/components/ContactModal'

const mapsUrl = 'https://maps.app.goo.gl/o3WW3Dgc9ko9WUVy8'

export function Location() {
  const { openContact } = useContactModal()
  const [directionsOpen, setDirectionsOpen] = useState(false)

  const onKeyDown = useEffectEvent((event) => {
    if (directionsOpen && event.key === 'Escape') setDirectionsOpen(false)
  })

  useEffect(() => {
    if (!directionsOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [directionsOpen, onKeyDown])

  const openMaps = () => {
    setDirectionsOpen(false)
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.24em] text-sand">
            Looking for us?
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            First floor, Assam Trunk Road
          </h2>
          <address className="mt-8 not-italic leading-relaxed text-cream/75">
            Vian Inn
            <br />
            1st Floor, Guwahati Wholesale Building
            <br />
            Assam Trunk Road, beside Bijulee Bhawan
            <br />
            Opposite Bengali High School
            <br />
            Paltan Bazaar, Guwahati 781008
          </address>
          <div className="mt-6 space-y-1 text-sm">
            <a href="tel:+919706285131" className="block hover:text-sand">
              +91 97062 85131
            </a>
            <a href="tel:+916003218922" className="block hover:text-sand">
              +91 60032 18922
            </a>
          </div>
          <p className="mt-2 text-sm text-cream/70">
            350 metres from Guwahati Junction · 18 km from LGBI Airport
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              variant="cream"
              type="button"
              onClick={() => setDirectionsOpen(true)}
            >
              Get directions
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-ink"
              type="button"
              onClick={() => openContact('general')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
        <img
          src="/images/brand-sign.jpg"
          alt="Vian Inn Food & Stay backlit sign"
          className="h-full min-h-[360px] w-full object-cover"
        />
      </div>

      {directionsOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/60 px-4 backdrop-blur-md"
          onClick={() => setDirectionsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Open Google Maps"
        >
          <div
            className="relative w-full max-w-sm overflow-hidden bg-cream text-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-teal" />
            <button
              type="button"
              onClick={() => setDirectionsOpen(false)}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center text-muted transition hover:bg-white hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-7 pt-10 pb-8">
              <div className="flex h-11 w-11 items-center justify-center bg-teal text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-teal">
                Directions
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                Open in Google Maps?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We’ll take you to Vian Inn on Assam Trunk Road, Paltan Bazaar —
                handy if you’re walking from Guwahati Station.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  type="button"
                  className="flex-1"
                  onClick={() => setDirectionsOpen(false)}
                >
                  Not now
                </Button>
                <Button type="button" className="flex-1" onClick={openMaps}>
                  Open Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
