import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Status } from '@/admin/Status'
import { bookings, stats, tables } from '@/admin/data'

export function Overview() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teal">Today</p>
          <h1 className="mt-1 font-serif text-4xl">House status</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" type="button">
            New table
          </Button>
          <Button type="button">New booking</Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="border border-line bg-white p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
            <p className="mt-2 font-serif text-4xl">{item.value}</p>
            <p className="mt-1 text-sm text-muted">{item.hint}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h2 className="font-serif text-2xl">Room movements</h2>
            <Link to="/admin/bookings" className="text-xs uppercase tracking-[0.14em] text-teal">
              All bookings
            </Link>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="text-[11px] uppercase tracking-[0.12em] text-muted">
              <tr>
                <th className="px-5 py-3 font-medium">Guest</th>
                <th className="px-5 py-3 font-medium">Room</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(0, 5).map((row) => (
                <tr key={row.id} className="border-t border-line">
                  <td className="px-5 py-3">{row.guest}</td>
                  <td className="px-5 py-3 text-muted">{row.room}</td>
                  <td className="px-5 py-3">
                    <Status value={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h2 className="font-serif text-2xl">Vian Kitchen</h2>
            <Link to="/admin/kitchen" className="text-xs uppercase tracking-[0.14em] text-teal">
              All covers
            </Link>
          </div>
          <ul>
            {tables.map((row) => (
              <li
                key={`${row.time}-${row.name}`}
                className="flex items-center justify-between border-t border-line px-5 py-3 text-sm first:border-t-0"
              >
                <div>
                  <p className="font-medium">{row.name}</p>
                  <p className="text-muted">
                    {row.time} · {row.pax} pax · {row.note}
                  </p>
                </div>
                <Status value={row.status} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
