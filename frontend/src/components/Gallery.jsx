const shots = [
  ['/images/guest-room.jpg', 'Twin room'],
  ['/images/twin-tv.jpg', 'Room with television'],
  ['/images/dining.jpg', 'Vian Kitchen'],
  ['/images/bedroom-window.jpg', 'Double room'],
  ['/images/bathroom.jpg', 'Attached bath'],
  ['/images/street.jpg', 'Assam Trunk Road'],
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-teal">Gallery</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">A look around</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {shots.map(([src, alt], i) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={`w-full object-cover ${i === 0 ? 'aspect-[4/5] md:row-span-2 md:h-full' : 'aspect-[4/3]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
