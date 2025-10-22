'use client'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { CoupleProps } from '@/app/types/wedding'

export default function Couple({ bride, groom, prayerText }: CoupleProps) {
  const renderPerson = (person: typeof bride, direction: 'left' | 'right') => (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="w-70 md:w-56 aspect-[4/5] overflow-hidden mb-4 shadow-lg">
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-3xl md:text-2xl font-elegant mb-1">{person.name}</h3>
      <p className="text-mono-300 text-sm mb-1">{person.childOrder}</p>
      <p className="text-mono-300 text-sm mb-1">{person.parent}</p>
      {person.instagram && (
        <a
          href={`https://www.instagram.com/${person.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-mono-400 hover:text-mono-100 space-x-1 mt-1"
        >
          <FaInstagram />
          <span>@{person.instagram}</span>
        </a>
      )}
    </motion.div>
  )

  return (
    <section className="bg-mono-900 text-mono-50 py-16 px-6 text-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-dancing mb-4">The Wedding Of</h2>

      {prayerText && (
        <p className="max-w-2xl mx-auto mb-12 text-xs md:text-base font-elegant leading-relaxed">
          {prayerText}
        </p>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-12 md:space-y-0">
        {renderPerson(bride, 'left')}

        <div className="text-7xl md:text-5xl font-elegant flex items-center justify-center">
          &amp;
        </div>

        {renderPerson(groom, 'right')}
      </div>
    </section>
  )
}
