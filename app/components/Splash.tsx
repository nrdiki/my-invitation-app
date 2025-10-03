'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import Button from './Button'
import { FaEnvelope } from 'react-icons/fa'

export default function Splash() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const guestName = searchParams.get('guest') || 'Tamu Undangan'

  const openInvitation = () => {
    router.push('/home')
  }

  return (
    <div 
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
        <FaEnvelope className="inline mr-2" /> Buka Undangan
      </Button>
    </div>
  )
}
