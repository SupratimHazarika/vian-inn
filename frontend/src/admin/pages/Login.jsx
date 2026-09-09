import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function AdminLogin() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-cream px-5">
      <div className="w-full max-w-md border border-line bg-white p-8 md:p-10">
        <div className="mb-8 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center bg-teal font-serif text-lg text-white">
            V
          </span>
          <div>
            <p className="font-serif text-2xl leading-none">VIAN INN</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
              Staff desk
            </p>
          </div>
        </div>
        <h1 className="font-serif text-3xl">Sign in</h1>
        <p className="mt-2 text-sm text-muted">Front desk and kitchen only.</p>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm">
            <span className="text-xs uppercase tracking-[0.14em] text-muted">Email</span>
            <input
              className="mt-1.5 h-11 w-full border border-line bg-cream px-3 outline-none focus:border-teal"
              defaultValue="desk@vianinn.in"
            />
          </label>
          <label className="block text-sm">
            <span className="text-xs uppercase tracking-[0.14em] text-muted">Password</span>
            <input
              type="password"
              className="mt-1.5 h-11 w-full border border-line bg-cream px-3 outline-none focus:border-teal"
              defaultValue="••••••••"
            />
          </label>
          <Button asChild className="w-full">
            <Link to="/admin">Enter desk</Link>
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-muted">
          Preview only · no live login yet
        </p>
      </div>
    </div>
  )
}
