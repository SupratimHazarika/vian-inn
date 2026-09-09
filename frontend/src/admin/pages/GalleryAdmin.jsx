import { Button } from '@/components/ui/button'
import { Status } from '@/admin/Status'
import { gallery } from '@/admin/data'

export function GalleryAdmin() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teal">Website</p>
          <h1 className="mt-1 font-serif text-4xl">Gallery</h1>
        </div>
        <Button variant="outline" type="button">
          Upload photo
        </Button>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {gallery.map((shot) => (
          <article key={shot.src} className="border border-line bg-white">
            <img src={shot.src} alt={shot.label} className="aspect-[4/3] w-full object-cover" />
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm font-medium">{shot.label}</p>
              <Status value={shot.used === 'Unused' ? 'Unused' : shot.used} />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
