import { FaInstagram } from 'react-icons/fa'

interface PersonProps {
  name: string
  photo: string
  childOrder: string
  parent: string
  instagram?: string
}

interface CoupleProps {
  bride: PersonProps
  groom: PersonProps
  prayerText?: string
}

export default function Couple({ bride, groom, prayerText }: CoupleProps) {
  return (
    <section className="bg-mono-900 text-mono-50 py-16 px-6 text-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-dancing mb-4">The Wedding Of</h2>

      {prayerText && (
        <p className="max-w-2xl mx-auto mb-12 text-xs md:text-base font-elegant">
          {prayerText}
        </p>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-16 space-y-12 md:space-y-0 overflow-x-hidden">
        {/* Bride */}
        <div className="flex flex-col items-center">
          <div className="w-70 md:w-56 aspect-[4/5] overflow-hidden mb-4">
            <img src={bride.photo} alt={bride.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-3xl md:text-2xl font-elegant mb-1">{bride.name}</h3>
          <p className="text-mono-300 text-s mb-1">{bride.childOrder}</p>
          <p className="text-mono-300 text-s mb-1">{bride.parent}</p> 
          {bride.instagram && (
            <a href={`https://www.instagram.com/snacitra?igsh=MXQyenpjbnoxYW4zMA%3D%3D&utm_source=qr${bride.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-mono-400 hover:text-mono-100 space-x-1">
              <FaInstagram />
              <span>{bride.instagram}</span>
            </a>
          )}
        </div>

        {/* & Symbol */}
        <div className="text-7xl md:text-5xl font-elegant flex items-center justify-center"> & </div>

        {/* Groom */}
        <div className="flex flex-col items-center">
          <div className="w-70 md:w-56 aspect-[4/5] overflow-hidden mb-4">
            <img src={groom.photo} alt={groom.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-3xl md:text-2xl font-elegant mb-1">{groom.name}</h3>
          <p className="text-mono-300 text-s mb-1">{groom.childOrder}</p>
          <p className="text-mono-300 text-s mb-1">{groom.parent}</p>
          {groom.instagram && (
            <a href={`https://www.instagram.com/nekofutotta_?igsh=MXZlaGF6aDdhaW8xeA==${groom.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-mono-400 hover:text-mono-100 space-x-1">
              <FaInstagram />
              {groom.instagram}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
