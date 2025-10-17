'use client'
import { motion } from 'framer-motion'

interface FullWidthPhotoProps {
  src: string
  alt?: string
}

export default function FullWidthPhoto({ src, alt = 'Full Width Photo' }: FullWidthPhotoProps) {
  return (
    <section className="w-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full h-auto object-cover"
      />
    </section>
  )
}
