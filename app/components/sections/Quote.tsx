'use client'

import { motion, Variants, Transition } from "framer-motion"

interface QuoteProps {
  text: string
}

export default function Quote({ text }: QuoteProps) {
  const lines = text.split('. ').filter(line => line.length > 0)

  // Container animasi dengan stagger
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const lineTransition: Transition = { duration: 0.8, ease: ["easeOut"] }

  // Animasi tiap baris teks
  const line: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: lineTransition }
  }

  return (
    <div className="w-screen flex justify-center py-16 px-4 bg-mono-50 overflow-hidden">
      <motion.div
        className="bg-mono-900 text-mono-50 rounded-2xl p-8 max-w-xl text-center relative"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Ikon merpati terbang dari atas */}
        <motion.img 
          src="/icons/dove.svg" 
          alt="quote" 
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6"
          initial={{ y: -100, opacity: 0, rotate: -15 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Teks quote */}
        <blockquote className="text-xs md:text-base leading-relaxed py-6">
          {lines.map((lineText, i) => (
            <motion.p key={i} variants={line} className="mb-2">
              {lineText}.
            </motion.p>
          ))}
        </blockquote>
      </motion.div>
    </div>
  )
}
