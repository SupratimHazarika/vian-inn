const shots = [
  ['/images/deluxe-twin.jpg', 'Deluxe Twin room'],
  ['/images/twin-wardrobe.jpg', 'Wardrobe and television'],
  ['/images/dining-hall.jpg', 'Vian Kitchen'],
  ['/images/deluxe-double.jpg', 'Deluxe Double room'],
  ['/images/attached-bath.jpg', 'Attached bath'],
  ['/images/hero-lobby.jpg', 'Lobby entrance'],
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
