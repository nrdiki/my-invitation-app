interface FullWidthPhotoProps {
  src: string
  alt?: string
}

export default function FullWidthPhoto({ src, alt = 'Full Width Photo' }: FullWidthPhotoProps) {
  return (
    <section className="w-full overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-cover"
      />
    </section>
  )
}
