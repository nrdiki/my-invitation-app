import { FaGlassCheers } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

interface ResepsiProps {
  date: string
  day: string
  location: string
  address: string
  mapLink?: string
  backgroundSrc: string
}

export default function Resepsi({
  date,
  day,
  location,
  address,
  mapLink,
  backgroundSrc
}: ResepsiProps) {
  return (
    <section 
      className="w-full bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      {/* Overlay semi-transparent */}
      <div className="bg-black/50 w-full h-full absolute inset-0 pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Teks pengantar */}
        <p className="text-mono-50 text-xs text-base md:text-lg mb-8">
          Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan Resepsi Pernikahan kami pada:
        </p>

        {/* Box Resepsi */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center inline-block">
          <FaGlassCheers className="text-7xl md:text-4xl text-mono-900 mb-4 mx-auto" />
          <h3 className="text-5xl md:text-3xl font-dancing mb-2 py-6">Resepsi</h3>
          <p className="text-2xl text-mono-900 mb-1 py-4 font-elegant font-semibold">{day}, {date}</p>
          <p className="text-2xl text-mono-900 mb-1 font-elegant py-4">{location}</p>
          <p className="text-xs text-mono-900 mb-4">{address}</p>

          {mapLink && (
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-mono-800 text-mono-50 px-6 py-2 rounded-full hover:bg-mono-900 transition gap-2"
            >
              <SiGooglemaps className="text-lg" />
              <span>Google Maps</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
