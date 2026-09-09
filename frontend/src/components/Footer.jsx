export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 border-t border-white/10 px-5 py-10 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-2.5 text-cream">
          <span className="flex h-7 w-7 items-center justify-center bg-teal font-serif text-sm">
            V
          </span>
          <span className="font-serif text-xl">VIAN INN</span>
        </div>
        <p className="text-xs uppercase tracking-[0.16em]">
          Food & Stay · Paltan Bazaar · Guwahati
        </p>
        <p className="text-xs">
          © 2026 Vian Inn.{' '}
          <a href="/admin/login" className="text-cream/50 hover:text-cream">
            Staff
          </a>
        </p>
      </div>
    </footer>
  )
}
