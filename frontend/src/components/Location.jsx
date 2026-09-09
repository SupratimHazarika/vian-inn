import { Button } from '@/components/ui/button'

export function Location() {
  return (
    <section id="contact" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.24em] text-sand">
            Looking for us?
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            First floor, Assam Trunk Road
          </h2>
          <address className="mt-8 not-italic leading-relaxed text-cream/75">
            Vian Inn
            <br />
            1st Floor, Guwahati Wholesale Building
            <br />
            Assam Trunk Road, beside Bijulee Bhawan
            <br />
            Opposite Bengali High School
            <br />
            Paltan Bazaar, Guwahati 781008
          </address>
          <p className="mt-6 text-sm">
            <a href="tel:+919706285131" className="hover:text-sand">
              +91 97062 85131
            </a>
          </p>
          <p className="mt-2 text-sm text-cream/70">
            350 metres from Guwahati Junction · 18 km from LGBI Airport
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="cream" type="button">
              Get directions
            </Button>
            <Button variant="outline" className="border-cream text-cream hover:bg-cream hover:text-ink" type="button">
              WhatsApp
            </Button>
          </div>
        </div>
        <img
          src="/images/street.jpg"
          alt="Vian Inn on Assam Trunk Road"
          className="h-full min-h-[360px] w-full object-cover"
        />
      </div>
    </section>
  )
}
