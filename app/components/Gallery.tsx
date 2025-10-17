'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const images = [
  '/images/gallery.JPG',
  '/images/gallery2.JPG',
  '/images/gallery3.JPG',
  '/images/gallery4.JPG',
  '/images/gallery5.JPG',
  '/images/gallery6.JPG',
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  const handleClose = () => setSelectedIndex(null)

  return (
    <section className="relative py-24 bg-[url('/images/bg-blur.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
      {/* Layer blur transparan */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-dancing text-center mb-16 text-white drop-shadow-sm">
          Our Gallery
        </h2>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/30 shadow-lg bg-white/20 backdrop-blur-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Tombol Close */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition"
            >
              <X size={32} />
            </button>

            {/* Tombol navigasi kiri */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/80 hover:text-white transition"
            >
              <ChevronLeft size={42} />
            </button>

            {/* Tombol navigasi kanan */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-white/80 hover:text-white transition"
            >
              <ChevronRight size={42} />
            </button>

            {/* Gambar utama */}
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl border border-white/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}