'use client'

interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-blue'
  const squareColor = variant === 'light' ? 'text-white' : 'text-slate-blue'
  const line1Color = variant === 'light' ? 'text-white' : 'text-slate-blue'
  const line2Color = variant === 'light' ? 'text-white' : 'text-aged-copper'
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Graphic - Square with intersecting diagonal lines */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Square outline */}
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          rx="0"
          stroke="currentColor"
          strokeWidth="1.5"
          className={squareColor}
        />
        {/* First line - blue-grey: starts from bottom-left corner, goes diagonally up-right, stops at center */}
        <path
          d="M 6 38 L 22 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="miter"
          className={line1Color}
        />
        {/* Second line - orange-brown: starts top-right, goes diagonally down-left, intersects, then turns sharply almost vertically down to bottom-right quadrant */}
        <path
          d="M 38 6 L 20 24 L 20 36"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="miter"
          className={line2Color}
        />
      </svg>
      
      {/* Company Name */}
      <span className={`font-sans text-xl md:text-2xl font-light ${textColor} tracking-wide transition-colors duration-300`}>
        HIETAKOSKI
      </span>
    </div>
  )
}

