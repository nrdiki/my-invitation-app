export default function Footer() {
  return (
    <footer className="bg-mono-900 text-mono-50 py-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Diki & Pasangan. All rights reserved.
      </div>
    </footer>
  )
}
