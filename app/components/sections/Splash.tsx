'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { BsEnvelopeHeartFill } from "react-icons/bs"

export default function Splash() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const guestName = searchParams.get('guest') || 'Tamu Undangan'
  const [isLeaving, setIsLeaving] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  const openInvitation = () => {
    setPlayMusic(true)     // Mulai musik
    setIsLeaving(true)     // Animasi keluar Splash
    setTimeout(() => router.push('/home'), 1200) // tunggu animasi selesai dulu
  }

  return (
      
      <AnimatePresence>
        {!isLeaving && (
          <motion.div
            key="splash"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -window.innerHeight }} // geser ke atas
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{ backgroundImage: "url('/images/cover.jpg')" }}
          >
            <h2 className="text-2xl md:text-3xl text-mono-50 mb-2">The Wedding of</h2>
            <h1 className="text-7xl md:text-7xl font-dancing text-mono-50 mb-2">Citra & Yoga</h1>
            <p className="text-lg md:text-xl text-mono-50 mb-6">Minggu, 09 November 2025</p>

            <div className="mb-6">
              <p className="text-mono-50">Kepada Yth</p>
              <p className="text-2xl md:text-3xl font-semibold text-mono-50">{guestName}</p>
            </div>

            <Button onClick={openInvitation}>
              <BsEnvelopeHeartFill className="inline mr-2" /> Buka Undangan
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
  )
}
