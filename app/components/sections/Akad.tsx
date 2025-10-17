'use client'

import { motion } from 'framer-motion'
import { GiLinkedRings } from 'react-icons/gi'
import { FaGlassCheers } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { AkadResepsiProps } from '@/app/types/wedding'

export default function AkadResepsi({ backgroundSrc, akad, resepsi }: AkadResepsiProps) {
  const renderEvent = (
  icon: React.ReactNode,
  title: string,
  event: typeof akad
) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center w-full md:w-[480px] transition-transform hover:scale-[1.02] duration-300 flex flex-col items-center justify-center"
  >
    {/* Icon — sekarang benar-benar center */}
    <div className="flex justify-center mb-4">
      <div className="text-6xl md:text-5xl text-mono-900">{icon}</div>
    </div>

    <h3 className="text-4xl md:text-3xl font-dancing mb-4">{title}</h3>
    <p className="text-lg text-mono-900 mb-2 font-elegant font-semibold">
      {event.day}, {event.date} • {event.time}
    </p>
    <p className="text-lg text-mono-900 font-elegant">{event.location}</p>
    <p className="text-sm text-mono-700 mb-6 leading-relaxed">{event.address}</p>

    {event.mapLink && (
      <a
        href={event.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-mono-900 text-mono-50 px-6 py-2 rounded-full hover:bg-mono-800 transition gap-2 text-sm font-medium"
      >
        <SiGooglemaps className="text-base" />
        <span>Lihat di Google Maps</span>
      </a>
    )}
  </motion.div>
)

  return (
    <section
      className="w-full bg-cover bg-center py-20 px-6 relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Konten */}
      <div className="relative max-w-6xl mx-auto text-center z-10 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {renderEvent(<GiLinkedRings />, 'Akad Nikah', akad)}
        {renderEvent(<FaGlassCheers />, 'Resepsi', resepsi)}
      </div>
    </section>
  )
}
