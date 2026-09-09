import { Button } from '@/components/ui/button'
import { Status } from '@/admin/Status'
import { rooms } from '@/admin/data'

export function RoomsAdmin() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teal">Housekeeping</p>
          <h1 className="mt-1 font-serif text-4xl">Rooms</h1>
        </div>
        <Button variant="outline" type="button">
          Mark cleaned
        </Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {rooms.map((room) => (
          <article key={room.no} className="border border-line bg-white p-5">
            <div className="flex items-start justify-between">
              <p className="font-serif text-3xl">{room.no}</p>
              <Status value={room.status} />
            </div>
            <p className="mt-3 text-sm">{room.type}</p>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">{room.floor} floor</p>
            <p className="mt-4 text-sm text-muted">{room.guest}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
