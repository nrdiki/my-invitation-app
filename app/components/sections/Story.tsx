import React from 'react'
import { motion } from 'framer-motion'

interface StoryStep {
  title: string
  description: string
}

const storySteps: StoryStep[] = [
  {
    title: 'Awal Kisah',
    description:
      'Tidak ada yang kebetulan di dunia ini, semua sudah tersusun dengan sangat rapih oleh Sang Maha Kuasa. Kami bertemu pertama kali tanpa sengaja pada tahun 2024.',
  },
  {
    title: 'Menemukan Nyaman',
    description:
      'Katanya cinta dapat tumbuh dengan kebersamaan. Seiring waktu, kami semakin dekat. Memang tidak ada kata pacaran, tapi Tuhan mentakdirkan kami untuk bersama.',
  },
  {
    title: 'Langkah Serius',
    description:
      'Kehendak-Nya menuntun kami pada pertemuan yang tak disangka hingga akhirnya membawa kami pada ikatan suci. Kami melangsungkan lamaran pada 7 Mei 2025.',
  },
  {
    title: 'Menuju Halal',
    description:
      'Percayalah, bukan karena bertemu lalu berjodoh, tapi karena berjodoh lah maka kami dipertemukan. Kami memutuskan mengikrarkan janji suci pernikahan kami di bulan November.',
  },
]

export default function Story() {
  return (
    <section
      className="relative py-24 bg-[url('/images/bg-blur.jpg')] bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-mono-100/70 backdrop-blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-dancing text-center mb-16 text-mono-800 drop-shadow-sm">
          Our Story
        </h2>

        <div className="relative">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Titik timeline */}
              <div className="absolute -left-[11px] w-5 h-5 bg-mono-800 rounded-full border-4 border-white/40 shadow-md" />

              {/* Box glassmorphism dengan efek hover */}
              <div className="group bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/25 hover:shadow-2xl">
                <h3 className="text-xl font-elegant text-mono-900 mb-2 transition-colors duration-300 group-hover:text-mono-950">
                  {step.title}
                </h3>
                <p className="text-sm text-mono-800 leading-relaxed transition-colors duration-300 group-hover:text-mono-900">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
