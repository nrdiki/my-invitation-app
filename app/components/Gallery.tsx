'use client'

const photos = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {photos.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-lg">
          <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
        </div>
      ))}
    </div>
  )
}
