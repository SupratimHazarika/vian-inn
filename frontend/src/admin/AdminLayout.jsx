import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  BedDouble,
  CalendarDays,
  Images,
  LayoutDashboard,
  Menu,
  Settings,
  UtensilsCrossed,
  Users,
  X,
} from 'lucide-react'

const links = [
  [LayoutDashboard, 'Overview', '/admin'],
  [CalendarDays, 'Bookings', '/admin/bookings'],
  [BedDouble, 'Rooms', '/admin/rooms'],
  [UtensilsCrossed, 'Kitchen', '/admin/kitchen'],
  [Users, 'Guests', '/admin/guests'],
  [Images, 'Gallery', '/admin/gallery'],
  [Settings, 'Settings', '/admin/settings'],
]

export function AdminLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-svh bg-cream text-ink">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-white/10 bg-ink text-cream transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-teal font-serif text-lg">
              V
            </span>
            <span>
              <span className="block font-serif text-lg leading-none">VIAN INN</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-cream/50">
                Staff desk
              </span>
            </span>
          </a>
          <button type="button" className="lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-4 px-3">
          {links.map(([Icon, label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/admin'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mb-1 flex items-center gap-3 px-3 py-2.5 text-sm ${isActive ? 'bg-teal text-white' : 'text-cream/70 hover:bg-white/5 hover:text-cream'}`
              }
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-line bg-white px-5">
          <button type="button" className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <p className="text-sm text-muted">Tuesday, 9 September 2026</p>
          <div className="flex items-center gap-3">
            <span className="hidden text-right text-sm sm:block">
              <span className="block font-medium">Santosh</span>
              <span className="text-xs text-muted">Front desk</span>
            </span>
            <span className="flex h-9 w-9 items-center justify-center bg-teal text-sm text-white">
              S
            </span>
          </div>
        </header>
        <div className="flex-1 p-5 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
