import { Button } from '@/components/ui/button'
import { Status } from '@/admin/Status'
import { bookings } from '@/admin/data'

export function Bookings() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teal">Front desk</p>
          <h1 className="mt-1 font-serif text-4xl">Bookings</h1>
        </div>
        <Button type="button">New booking</Button>
      </div>

      <div className="mt-8 overflow-x-auto border border-line bg-white">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="border-b border-line text-[11px] uppercase tracking-[0.12em] text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">ID</th>
              <th className="px-5 py-3 font-medium">Guest</th>
              <th className="px-5 py-3 font-medium">Room</th>
              <th className="px-5 py-3 font-medium">Dates</th>
              <th className="px-5 py-3 font-medium">Nights</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((row) => (
              <tr key={row.id} className="border-t border-line">
                <td className="px-5 py-3 text-muted">{row.id}</td>
                <td className="px-5 py-3 font-medium">{row.guest}</td>
                <td className="px-5 py-3">{row.room}</td>
                <td className="px-5 py-3">{row.dates}</td>
                <td className="px-5 py-3">{row.nights}</td>
                <td className="px-5 py-3">{row.amount}</td>
                <td className="px-5 py-3">
                  <Status value={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
