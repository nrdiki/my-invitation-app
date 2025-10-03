import { GiButterflyFlower } from "react-icons/gi";


interface QuoteProps {
  text: string
}

export default function Quote({ text }: QuoteProps) {
  return (
    <div className="w-screen flex justify-center py-16 px-4 bg-mono-50">
      <div className="bg-mono-900 text-mono-50 rounded-2xl p-8 max-w-xl text-center relative">
        <GiButterflyFlower className="text-7xl mb-4 mx-auto" />
        <blockquote className="text-xs md:text-x1 leading-relaxed">
          {text}
        </blockquote>
      </div>
    </div>
  )
}
