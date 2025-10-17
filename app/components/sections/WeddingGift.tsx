'use client'
import { Copy } from "lucide-react"

interface Gift {
  logo: string
  name: string
  number: string
}

interface WeddingGiftProps {
  gifts: Gift[]
  address: string
  message?: string
}

const WeddingGift: React.FC<WeddingGiftProps> = ({ gifts, address, message }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Teks berhasil disalin!")
  }

  return (
    <section id="wedding-gift" className="py-16 bg-mono-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-dancing mb-8 text-mono-900">Wedding Gift</h2>
        {message && <p className="text-mono-700 mb-12 max-w-2xl mx-auto">{message}</p>}

        {/* Grid untuk rekening + alamat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gifts.map((gift, i) => (
            <div
              key={i}
              className="group bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/25 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                <img src={gift.logo} alt={gift.name} className="w-20 h-12 object-contain" />
                <p className="font-medium text-mono-900 text-sm">{gift.name}</p>
              </div>
              <div className="mt-4 flex flex-col items-center gap-2">
                <p className="text-mono-700 font-mono text-xl">{gift.number}</p>
                <button
                  onClick={() => copyToClipboard(gift.number)}
                  className="flex items-center gap-2 text-sm text-mono-50 bg-mono-900 px-4 py-2 rounded-lg hover:bg-mono-800 transition"
                >
                  <Copy size={16} /> Salin
                </button>
              </div>
            </div>
          ))}

          {/* Alamat kirim kado */}
          <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 transition-all duration-500 hover:translate-y-1 hover:shadow-2xl hover:bg-white/25 flex flex-col justify-between items-center">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">📦 Kirim Kado 🎁</h3>
              <p className="text-mono-700 text-sm mb-4 whitespace-pre-line">{address}</p>
            </div>
            <button
              onClick={() => copyToClipboard(address)}
              className="flex items-center gap-2 text-sm text-mono-50 bg-mono-900 px-4 py-2 rounded-lg hover:bg-mono-800 transition"
            >
              <Copy size={16} /> Salin Alamat
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingGift
