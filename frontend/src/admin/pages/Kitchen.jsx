import { Button } from '@/components/ui/button'
import { Status } from '@/admin/Status'
import { tables } from '@/admin/data'

export function Kitchen() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teal">Dining</p>
          <h1 className="mt-1 font-serif text-4xl">Vian Kitchen</h1>
        </div>
        <Button type="button">New cover</Button>
      </div>

      <div className="mt-8 border border-line bg-white">
        {tables.map((row) => (
          <div
            key={`${row.time}-${row.name}`}
            className="grid items-center gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[100px_1fr_auto]"
          >
            <p className="text-sm font-medium">{row.time}</p>
            <div>
              <p className="font-medium">{row.name}</p>
              <p className="text-sm text-muted">
                {row.pax} guests · {row.note}
              </p>
            </div>
            <Status value={row.status} />
          </div>
        ))}
      </div>
    </div>
  )
}
