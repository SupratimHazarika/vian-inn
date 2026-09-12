import { createContext, useContext, useEffect, useEffectEvent, useState } from 'react'
import { Phone, X } from 'lucide-react'

const ContactModalContext = createContext(null)

const phones = [
  { label: 'Reception', number: '+91 97062 85131', href: 'tel:+919706285131' },
  { label: 'WhatsApp / Booking', number: '+91 60032 18922', href: 'tel:+916003218922' },
]

const copyByIntent = {
  room: {
    eyebrow: 'Reserve a room',
    title: 'Call us to book your stay',
    body: 'Tell us your dates and we’ll hold a clean room ready — twin or double, a short walk from Guwahati Station.',
  },
  table: {
    eyebrow: 'Reserve a table',
    title: 'Call us for a seat at Vian Kitchen',
    body: 'Breakfast through high tea. Indian and Chinese, vegetarian or non-veg — we’ll keep a table ready for you.',
  },
  general: {
    eyebrow: 'Talk to Vian Inn',
    title: 'We’re a phone call away',
    body: 'Rooms upstairs, kitchen downstairs. Reach reception for stays, tables, or anything you need in Paltan Bazaar.',
  },
}

export function ContactModalProvider({ children }) {
  const [intent, setIntent] = useState(null)
  const open = intent !== null

  const openContact = (nextIntent = 'general') => setIntent(nextIntent)
  const closeContact = () => setIntent(null)

  const onKeyDown = useEffectEvent((event) => {
    if (open && event.key === 'Escape') closeContact()
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

  const content = copyByIntent[intent] ?? copyByIntent.general

  return (
    <ContactModalContext.Provider value={{ openContact, closeContact }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/60 px-4 backdrop-blur-md"
          onClick={closeContact}
          role="dialog"
          aria-modal="true"
          aria-label={content.title}
        >
          <div
            className="relative w-full max-w-md overflow-hidden bg-cream shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-teal" />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-sand"
              aria-hidden
            />

            <button
              type="button"
              onClick={closeContact}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center text-muted transition hover:bg-white hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative px-7 pt-10 pb-8 md:px-9">
              <div className="flex h-11 w-11 items-center justify-center bg-teal font-serif text-xl text-white">
                V
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-teal">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-4xl">
                {content.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {content.body}
              </p>

              <div className="mt-8 space-y-3">
                {phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="group flex items-center gap-4 border border-line bg-white px-4 py-4 transition hover:border-teal hover:bg-teal hover:text-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-sand text-teal transition group-hover:bg-white/15 group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted transition group-hover:text-white/70">
                        {phone.label}
                      </span>
                      <span className="mt-1 block font-medium tracking-wide">
                        {phone.number}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-center text-xs leading-relaxed text-muted">
                Front desk is usually reachable through the day.
                <br />
                For late arrivals, call ahead so we can keep the door open.
              </p>
            </div>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) {
    throw new Error('useContactModal must be used within ContactModalProvider')
  }
  return ctx
}
