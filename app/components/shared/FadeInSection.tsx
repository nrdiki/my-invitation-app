'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export default function FadeInSection({
  children,
  delay = 0.2,
  duration = 0.8,
}: FadeInSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
