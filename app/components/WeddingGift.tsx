'use client'
import { Copy } from "lucide-react";

interface Gift {
  logo: string;
  name: string;
  number: string;
}

interface WeddingGiftProps {
  gifts: Gift[];
  address: string;
  message?: string;
}

const WeddingGift: React.FC<WeddingGiftProps> = ({ gifts, address, message }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Teks berhasil disalin!");
  };

  return (
    <section id="wedding-gift" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-dancing mb-8">Wedding Gift</h2>
        
        {/* Grid untuk rekening + alamat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gifts.map((gift, i) => (
            <div
              key={i}
              className="group bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/25 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-2">
                <img src={gift.logo} alt={gift.name} className="w-15 h-7" />
                <p className="font-medium text-gray-800 text-sm">{gift.name}</p>
              </div>
              <div className="mt-4 flex flex-col items-center gap-2">
                <p className="text-gray-600 font-mono text-xl">{gift.number}</p>
                <button
                  onClick={() => copyToClipboard(gift.number)}
                  className="flex items-center gap-2 text-sm text-white bg-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-700 transition"
                >
                  <Copy size={16} /> Salin
                </button>
              </div>
            </div>
          ))}

          {/* Alamat kirim kado */}
          <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 transition-all duration-500 hover:translate-y-2 hover:bg-white/25 hover:shadow=2xl flex flex-col justify-between items-center">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">📦Kirim Kado🎁</h3>
              <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">
                {address}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(address)}
              className="flex items-center gap-2 text-sm text-white bg-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-700 transition"
            >
              <Copy size={16} /> Salin Alamat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
