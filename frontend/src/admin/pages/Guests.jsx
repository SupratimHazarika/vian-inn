import { guests } from '@/admin/data'

export function Guests() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-teal">People</p>
      <h1 className="mt-1 font-serif text-4xl">Guests</h1>
      <div className="mt-8 overflow-x-auto border border-line bg-white">
        <table className="min-w-[680px] w-full text-left text-sm">
          <thead className="border-b border-line text-[11px] uppercase tracking-[0.12em] text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">From</th>
              <th className="px-5 py-3 font-medium">Stays</th>
              <th className="px-5 py-3 font-medium">Last seen</th>
              <th className="px-5 py-3 font-medium">Note</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.name} className="border-t border-line">
                <td className="px-5 py-3 font-medium">{guest.name}</td>
                <td className="px-5 py-3">{guest.from}</td>
                <td className="px-5 py-3">{guest.stays}</td>
                <td className="px-5 py-3">{guest.last}</td>
                <td className="px-5 py-3 text-muted">{guest.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
