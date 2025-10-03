import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Button from './components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-mono-50 text-mono-900 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Diki & Pasangan</h1>
        <p className="text-lg md:text-xl mb-6">Kami mengundang Anda untuk merayakan hari bahagia kami</p>

        {/* Countdown */}
        <Countdown targetDate="2025-12-31T10:00:00" />

        {/* CTA */}
        <div className="mt-6">
          <Button href="/rsvp">Konfirmasi Kehadiran</Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-mono-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Galeri</h2>
        <Gallery />
      </section>

      {/* Footer */}
      {/* Footer otomatis dari layout.tsx */}
    </div>
  )
}
