import Quote from '../components/Quote'
import Couple from '../components/Couple'

export default function Home() {
  const bride = {
    name: 'Citra Siti Nur Aulia,A.Md',
    photo: '/images/bride.jpg',
    childOrder: 'Anak ke-2 dari',
    parent: 'Alm. Bapak Dadang & Ibu Eneng',
    instagram: 'snacitra'
  }

  const groom = {
    name: 'Muhammad Yoga Nugraha',
    photo: '/images/groom.jpg',
    childOrder: 'Anak ke-3 dari',
    parent: 'Bapak Daryo & Alm. Ibu Eem',
    instagram: 'nekofutotta_'
  }

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section
        className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 overflow-x-hidden"
        style={{ backgroundImage: "url('/images/cover.jpg')" }}
      >
        <h2 className="text-2xl md:text-3xl text-mono-50 mb-2">The Wedding of</h2>
        <h1 className="text-7xl md:text-7xl font-dancing text-mono-50 mb-2">Citra & Yoga</h1>
        <p className="text-lg md:text-xl text-mono-50 mb-6">Minggu, 09 November 2025</p>
      </section>

      {/* Quote */}
      <Quote text="Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu merasa tenteram di sisinya..." />

      {/* Couple */}
      <Couple 
        bride={bride} 
        groom={groom} 
        prayerText="Ya Allah dengan segala kesucian Hati, kami bersujud memohon Ridho-Mu, untuk menuju Sunnah Rasul Mu, membentuk keluarga yang sakinah, mawadah, warahmah"
      />
    </div>
  )
}
