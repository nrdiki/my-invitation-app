'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import BackgroundMusic from './BackgroundMusic'
import { BsEnvelopeHeartFill } from 'react-icons/bs'

export default function Splash() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const guestName = searchParams.get('guest') || 'Tamu Undangan'

  const [isLeaving, setIsLeaving] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  // Preload background image
  useEffect(() => {
    const img = new Image()
    img.src = '/images/cover.jpg'
    img.onload = () => setIsImageLoaded(true)
  }, [])

  const openInvitation = () => {
    setPlayMusic(true) // mulai musik
    setIsLeaving(true)
    setTimeout(() => {
      router.push('/home')
    }, 1200)
  }

  return (
    <>
      {/* Pemutar musik global */}
      <BackgroundMusic play={playMusic} />

      <AnimatePresence>
        {isImageLoaded && !isLeaving && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -window.innerHeight }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 relative"
            style={{ backgroundImage: "url('/images/cover.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10"
            >
              <h2 className="text-2xl md:text-3xl text-mono-50 mb-2">The Wedding of</h2>
              <h1 className="text-6xl md:text-7xl font-dancing text-mono-50 mb-2">Citra & Yoga</h1>
              <p className="text-lg md:text-xl text-mono-50 mb-6">Minggu, 09 November 2025</p>

              <div className="mb-6">
                <p className="text-mono-50">Kepada Yth.</p>
                <p className="text-2xl md:text-3xl font-semibold text-mono-50">{guestName}</p>
              </div>

              <Button onClick={openInvitation}>
                <BsEnvelopeHeartFill className="inline mr-2" /> Buka Undangan
              </Button>
            </motion.div>
          </motion.div>
        )}

        {!isImageLoaded && (
          <div className="w-screen h-screen flex items-center justify-center bg-black text-mono-50">
            <p>Memuat undangan...</p>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
