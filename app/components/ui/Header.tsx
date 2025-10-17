'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-mono-900 text-mono-50 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Diki & Pasangan</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-mono-200">Home</Link>
          <Link href="/rsvp" className="hover:text-mono-200">RSVP</Link>
          <Link href="/gallery" className="hover:text-mono-200">Gallery</Link>
        </nav>
      </div>
    </header>
  )
}
