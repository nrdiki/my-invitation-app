interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
}

export default function Button({ children, onClick, href }: ButtonProps) {
  const className = "px-6 py-3 bg-mono-500 text-mono-50 rounded hover:bg-blue-700 transition"
  
  if (href) {
    return <a href={href} className={className}>{children}</a>
  }

  return <button onClick={onClick} className={className}>{children}</button>
}
