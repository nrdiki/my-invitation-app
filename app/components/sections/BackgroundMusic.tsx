'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundMusic({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (play && audioRef.current) {
      // Coba play musik (beberapa browser butuh interaksi user dulu)
      const playMusic = async () => {
        try {
          await audioRef.current!.play()
        } catch (err) {
          console.warn('Autoplay diblokir browser, user harus interaksi manual:', err)
        }
      }
      playMusic()
    }
  }, [play])

  return (
    <audio ref={audioRef} loop preload="auto" src="/music/wedding.mp3" />
  )
}
