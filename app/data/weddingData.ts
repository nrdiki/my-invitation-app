// app/data/weddingData.ts

// -----------------------------
// 🧩 Type Definitions
// -----------------------------

export interface Person {
  name: string
  photo: string
  childOrder?: string
  parent?: string
  instagram?: string
}

export interface EventDetail {
  date: string
  day: string
  time: string
  location: string
  address: string
  mapLink: string
}

export interface Gift {
  logo: string
  name: string
  number: string
}

// -----------------------------
// 💍 Bride & Groom Data
// -----------------------------

export const bride: Person = {
  name: 'Citra Siti Nur Aulia, A.Md',
  photo: '/images/bride.jpg',
  childOrder: 'Anak ke-2 dari',
  parent: 'Alm. Bapak Dadang & Ibu Eneng',
  instagram: 'snacitra',
}

export const groom: Person = {
  name: 'Muhammad Yoga Nugraha',
  photo: '/images/groom.jpg',
  childOrder: 'Anak ke-3 dari',
  parent: 'Bapak Daryo & Alm. Ibu Eem',
  instagram: 'nekofutotta_',
}

// -----------------------------
// 🕊️ Wedding Events (Akad & Resepsi)
// -----------------------------

export const akad: EventDetail = {
  date: '09 November 2025',
  day: 'Minggu',
  time: '10:00 WIB',
  location: 'Rumah Makan Saung Gunung Jati',
  address:
    'Jl. Letjen Mashudi No.45, Setiaratu, Kec. Cibeureum, Kota Tasikmalaya, Jawa Barat 46123',
  mapLink: 'https://maps.app.goo.gl/YieT1Kd6k9ASyEUQ6',
}

export const resepsi: EventDetail = {
  date: '09 November 2025',
  day: 'Minggu',
  time: '13:00 WIB',
  location: 'Rumah Makan Saung Gunung Jati',
  address:
    'Jl. Letjen Mashudi No.45, Setiaratu, Kec. Cibeureum, Kota Tasikmalaya, Jawa Barat 46123',
  mapLink: 'https://maps.app.goo.gl/YieT1Kd6k9ASyEUQ6',
}

// -----------------------------
// 🎁 Gift Information
// -----------------------------

export const gifts: Gift[] = [
  {
    logo: '/images/rek1.png',
    name: 'Citra Siti Nur Aulia',
    number: '0541249931',
  },
  {
    logo: '/images/rek2.png',
    name: 'Muhammad Yoga Nugraha',
    number: '0895405236882',
  },
]

export const giftAddress =
  'Sawah Lempay, RT04/RW08, Kel.Argasari, Kec.Cihideung, Kota Tasikmalaya, Jawa Barat, 46122'

// -----------------------------
// 🌸 Wedding Info Metadata
// -----------------------------

export const weddingInfo = {
  coupleNames: 'Citra & Yoga',
  date: 'Minggu, 09 November 2025',
  coverImage: '/images/cover.jpg',
  verse:
    'Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  prayerText:
    'Ya Allah dengan segala kesucian hati, kami bersujud memohon ridho-Mu, untuk menuju sunnah Rasul-Mu, membentuk keluarga yang sakinah, mawaddah, warahmah.',
}
