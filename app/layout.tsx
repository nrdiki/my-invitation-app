import './globals.css'
import { ReactNode } from 'react'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

export const metadata = {
  title: 'Citra & Yoga',
  description: 'The Wedding of Citra & Yoga',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <link rel="preload" href="/fonts/YourFont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/music/wedding.mp3" as="audio" />
      <body className="font-sans flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}