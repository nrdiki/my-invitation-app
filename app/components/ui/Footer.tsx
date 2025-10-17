export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white/20 backdrop-blur-md border-t border-white/30 text-center text-sm text-mono-900 shadow-inner">
      <p>
        &copy; {new Date().getFullYear()} Made with ❤️ by Invitas.id.
      </p>
      <p className="mt-1 text-xs text-mono-500">
        Terima kasih telah hadir di hari spesial kami 💞
      </p>
    </footer>
  )
}
