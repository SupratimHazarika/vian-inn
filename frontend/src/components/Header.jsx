import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  ['Rooms', '#rooms'],
  ['Dining', '#dining'],
  ['Explore', '#explore'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center bg-teal font-serif text-lg text-white">
            V
          </span>
          <span className="font-serif text-2xl tracking-wide">VIAN INN</span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.16em] text-muted lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-teal">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" type="button">
            Book a table
          </Button>
          <Button size="sm" type="button">
            Book a room
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.16em]">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" className="flex-1" type="button">
              Book a table
            </Button>
            <Button className="flex-1" type="button">
              Book a room
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
