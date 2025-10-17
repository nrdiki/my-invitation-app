import Quote from '../components/Quote'
import Couple from '../components/Couple'
import FullWidthPhoto from '../components/FullWidthPhoto'
import AkadResepsi from '../components/Akad'
import Countdown from '../components/Countdown'
import Story from '../components/Story'
import Gallery from '../components/Gallery'
import WeddingGift from '../components/WeddingGift'
import RSVPForm from '../components/RSVPForm'
import WishList from '../components/Wishlist'

export default function Home() {
  const bride = {
    name: 'Citra Siti Nur Aulia,A.Md',
    photo: '/images/bride.jpg',
    childOrder: 'Anak ke-2 dari',
    parent: 'Alm. Bapak Dadang & Ibu Eneng',
    instagram: 'snacitra'
  }

  const groom = {
    name: 'Muhammad Yoga Nugraha',
    photo: '/images/groom.jpg',
    childOrder: 'Anak ke-3 dari',
    parent: 'Bapak Daryo & Alm. Ibu Eem',
    instagram: 'nekofutotta_'
  }

   const gifts = [
    {
      logo: "images/rek1.png",
      name: "Citra Siti Nur Aulia",
      number: "0541249931",
    },
    {
      logo: "images/rek2.png",
      name: "Muhammad Yoga Nugraha",
      number: "0895405236882",
    },
  ];

  const giftAddress = "Sawah Lempay, RT04/RW08, Kel.Argasari, Kec.Cihideung, Kota Tasikmalaya, Jawa Barat, 46122"

  // Detail acara
  const akad = {
    date: '09 November 2025',
    day: 'Minggu',
    time: '10:00 WIB',
    location: 'Rumah Makan Saung Gunung Jati',
    address: 'Jl. Letjen Mashudi No.45, Setiaratu, Kec. Cibeureum, Kota. Tasikmalaya, Jawa Barat 46123',
    mapLink: 'https://maps.app.goo.gl/YieT1Kd6k9ASyEUQ6'
  }

  const resepsi = {
    date: '09 November 2025',
    day: 'Minggu',
    time: '13:00 WIB',
    location: 'Rumah Makan Saung Gunung Jati',
    address: 'Jl. Letjen Mashudi No.45, Setiaratu, Kec. Cibeureum, Kota. Tasikmalaya, Jawa Barat 46123',
    mapLink: 'https://maps.app.goo.gl/YieT1Kd6k9ASyEUQ6'
  }

  return (
    <div className="flex flex-col overflow-x-hidden">
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
