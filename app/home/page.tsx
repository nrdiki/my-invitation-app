'use client'
import BackgroundMusic from '@/app/components/sections/BackgroundMusic'
import { bride, groom, gifts, giftAddress, akad, resepsi } from '@/app/data/weddingData'
import Quote from '@/app/components/sections/Quote'
import Couple from '@/app/components/sections/Couple'
import FullWidthPhoto from '@/app/components/sections/FullWidthPhoto'
import AkadResepsi from '@/app/components/sections/Akad'
import Countdown from '@/app/components/sections/Countdown'
import Story from '@/app/components/sections/Story'
import Gallery from '@/app/components/sections/Gallery'
import WeddingGift from '@/app/components/sections/WeddingGift'
import RSVPForm from '@/app/components/sections/RSVPForm'
import WishList from '@/app/components/sections/Wishlist'

export default function Home() {

  return (
    <div className="flex flex-col overflow-x-hidden">
      <BackgroundMusic />
      {/* Hero */}
      <section
        className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 overflow-x-hidden"
        style={{ backgroundImage: "url('/images/cover.jpg')" }}
      >
        <h2 className="text-2xl md:text-3xl text-mono-50 mb-2">The Wedding of</h2>
        <h1 className="text-7xl md:text-7xl font-dancing text-mono-50 mb-2">Citra & Yoga</h1>
        <p className="text-lg md:text-xl text-mono-50 mb-6">Minggu, 09 November 2025</p>
      </section>

      {/* Quote */}
      <Quote text="Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." />

      {/* Couple */}
      <Couple 
        bride={bride} 
        groom={groom} 
        prayerText="Ya Allah dengan segala kesucian Hati, kami bersujud memohon Ridho-Mu, untuk menuju Sunnah Rasul Mu, membentuk keluarga yang sakinah, mawadah, warahmah"
      />

      {/* Foto full-width sebelum Akad & Resepsi */}
      <FullWidthPhoto src="/images/foto1.jpg" alt="Foto Pre-Wedding" />

      {/* Akad & Resepsi dalam satu section background */}
      <AkadResepsi
        backgroundSrc="/images/akad-bg.jpg"
        akad={akad}
        resepsi={resepsi}
      />

      <Countdown 
        targetDate="2025-11-09T09:00:00" 
        photoSrc="/images/countdown.JPG" 
      />

      <Story />

      <Gallery />

      <WeddingGift
        gifts={gifts}
        address={giftAddress}
        message="Kalau mau kasih tanda kasih bisa lewat sini yaa, makasih banyak 💖"
      />

      <RSVPForm />
      <WishList />
    </div>
  )
}
