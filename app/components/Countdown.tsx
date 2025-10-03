'use client'
import { useEffect, useState } from 'react'

interface CountdownProps {
  targetDate: string
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const distance = target - now

      if (distance <= 0) {
        setTimeLeft('Hari H telah tiba!')
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft(`${days} hari ${hours} jam ${minutes} mnt ${seconds} dtk`)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="text-lg font-semibold mb-4">
      {timeLeft}
    </div>
  )
}
