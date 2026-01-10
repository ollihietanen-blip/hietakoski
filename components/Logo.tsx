'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  // Navbarissa (default): valkoinen tausta -> väritetty originaali logo
  // Footerissa (light): tumma tausta -> valkoinen logo
  const logoPath = variant === 'light' 
    ? '/logo/hietakoski-logo_hor-white.png'  // Valkoinen logo tummalle taustalle
    : '/logo/hietakoski-logo_hor-col-orig.png' // Väritetty logo valkoiselle taustalle
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoPath}
        alt="Hietakoski Oy"
        width={200}
        height={60}
        className="h-10 md:h-12 w-auto object-contain"
        priority
      />
    </div>
  )
}

