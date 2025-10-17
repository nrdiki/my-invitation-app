import { GiLinkedRings } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

interface EventProps {
  date: string
  day: string
  time: string
  location: string
  address: string
  mapLink?: string
}

interface AkadResepsiProps {
  backgroundSrc: string
  akad: EventProps
  resepsi: EventProps
}

export default function AkadResepsi({ backgroundSrc, akad, resepsi }: AkadResepsiProps) {
  return (
    <section 
      className="w-full bg-cover bg-center py-20 px-4 relative"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      {/* Overlay semi-transparent */}
      <div className="bg-black/50 w-full h-full absolute inset-0 pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto text-center z-10 space-y-16">

        {/* Akad Nikah */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center inline-block">
          <GiLinkedRings className="text-7xl md:text-4xl text-mono-900 mb-4 mx-auto" />
          <h3 className="text-5xl md:text-3xl font-dancing mb-2 py-6">Akad Nikah</h3>
          <p className="text-2xl text-mono-900 mb-1 py-2 font-elegant font-semibold">{akad.day}, {akad.date} {akad.time}</p>
          <p className="text-2xl text-mono-900 mb-1 font-elegant py-2">{akad.location}</p>
          <p className="text-xs text-mono-900 mb-4">{akad.address}</p>
          {akad.mapLink && (
            <a 
              href={akad.mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-mono-800 text-mono-50 px-6 py-2 rounded-full hover:bg-mono-900 transition gap-2"
            >
              <SiGooglemaps className="text-lg" />
              <span>Google Maps</span>
            </a>
          )}
        </div>

        {/* Resepsi */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center inline-block">
          <FaGlassCheers className="text-7xl md:text-4xl text-mono-900 mb-4 mx-auto" />
          <h3 className="text-5xl md:text-3xl font-dancing mb-2 py-6">Resepsi</h3>
          <p className="text-2xl text-mono-900 mb-1 py-2 font-elegant font-semibold">{resepsi.day}, {resepsi.date} {resepsi.time}</p>
          <p className="text-2xl text-mono-900 mb-1 font-elegant py-2">{resepsi.location}</p>
          <p className="text-xs text-mono-900 mb-4">{resepsi.address}</p>
          {resepsi.mapLink && (
            <a 
              href={resepsi.mapLink} 
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
