'use client'
import { useEffect, useRef, useState } from 'react'
import { Volume, VolumeX } from 'lucide-react'

interface BackgroundMusicProps {
  src?: string
  autoPlay?: boolean
  volume?: number
  fadeOutDuration?: number // dalam ms
  isFading?: boolean
}

export default function BackgroundMusic({
  src = '/music/wedding.mp3',
  autoPlay = true,
  volume = 0.3,
  fadeOutDuration = 1000,
  isFading = false,
}: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    if (autoPlay) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log('Audio play error:', err))
      }
    }

    return () => {
      if (!audio) return
      if (isFading) {
        const startVolume = audio.volume
        const step = startVolume / (fadeOutDuration / 50)
        const fadeInterval = setInterval(() => {
          if (!audio) return
          if (audio.volume - step > 0) {
            audio.volume -= step
          } else {
            audio.volume = 0
            audio.pause()
            clearInterval(fadeInterval)
          }
        }, 50)
      } else {
        audio.pause()
      }
    }
  }, [autoPlay, volume, fadeOutDuration, isFading])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      {/* Tombol play/pause */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-gray-800/70 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
      >
        {isPlaying ? <Volume size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  )
}
