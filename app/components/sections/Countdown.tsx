'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  targetDate: string
  photoSrc: string
}

export default function Countdown({ targetDate, photoSrc }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: Record<string, number> = {}

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / (1000 * 60)) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-mono-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-md w-full text-center border border-mono-100"
      >
        {/* Foto aspect ratio 2:3 */}
        <div className="w-full aspect-[2/3] overflow-hidden">
          <img
            src={photoSrc}
            alt="Countdown"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-elegant text-mono-900 mt-6 tracking-wide">
          COUNTING DAYS
        </h2>

        {/* Countdown */}
        <div className="flex justify-center gap-3 mt-6 mb-10 px-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-mono-900 text-mono-50 rounded-xl px-4 py-3 flex flex-col items-center min-w-[70px]"
            >
              <span className="text-2xl font-bold">{value ?? 0}</span>
              <span className="text-[10px] uppercase tracking-wider">{unit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
