import { Amenities } from '@/components/Amenities'
import { Dining } from '@/components/Dining'
import { Explore } from '@/components/Explore'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Highlights } from '@/components/Highlights'
import { Location } from '@/components/Location'
import { MustKnows } from '@/components/MustKnows'
import { Reviews } from '@/components/Reviews'
import { Rooms } from '@/components/Rooms'

export function HomePage() {
  return (
    <div className="min-h-svh bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Rooms />
        <Dining />
        <Amenities />
        <Explore />
        <Gallery />
        <Reviews />
        <MustKnows />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
