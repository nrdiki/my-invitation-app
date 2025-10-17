// app/types/wedding.ts

// 🧍‍♀️🧍 Person data type (mempelai)
export interface Person {
  name: string
  photo: string
  childOrder?: string
  parent?: string
  instagram?: string
}

// 📅 Acara (akad/resepsi)
export interface EventDetail {
  date: string
  day: string
  time: string
  location: string
  address: string
  mapLink: string
}

// 🎁 Kado digital / transfer
export interface Gift {
  logo: string
  name: string
  number: string
}

// 🌸 Info umum pernikahan
export interface WeddingInfo {
  coupleNames: string
  date: string
  coverImage: string
  verse: string
  prayerText: string
}

// 🎊 Props gabungan untuk komponen
export interface CoupleProps {
  bride: Person
  groom: Person
  prayerText?: string
}

export interface EventProps {
  date: string
  day: string
  time: string
  location: string
  address: string
  mapLink?: string
}

export interface AkadResepsiProps {
  backgroundSrc: string
  akad: EventProps
  resepsi: EventProps
}

export interface WeddingGiftProps {
  gifts: Gift[]
  address: string
  message?: string
}

export interface CountdownProps {
  targetDate: string
  photoSrc?: string
}

export interface FullWidthPhotoProps {
  src: string
  alt?: string
}

export interface QuoteProps {
  text: string
}
