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
      <body className="font-sans flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}