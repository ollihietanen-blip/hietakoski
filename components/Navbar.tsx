'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/kohteet', label: 'Kohteet', isHash: false },
    { href: '/rakentaminen', label: 'Rakentaminen', isHash: false },
    { href: '/yhteystiedot', label: 'Ota yhteyttä', isHash: false },
  ]

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.split('#')[1]
      if (pathname !== '/') {
        // If not on home page, navigate first then scroll
        e.preventDefault()
        window.location.href = href
      } else {
        // If on home page, just scroll
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Link 
              href="/#etusivu" 
              onClick={(e) => handleHashClick(e, '/#etusivu')}
              className="group"
            >
              <Logo className="group-hover:[&_svg]:text-aged-copper group-hover:[&_span]:text-aged-copper transition-colors duration-300" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 text-slate-blue font-medium text-sm tracking-wide rounded-lg hover:text-aged-copper transition-colors duration-200 group cursor-pointer"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-aged-copper"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            ))}
            
            {/* CTA Button - Myynnissä */}
            <Link href="/kohteet">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-aged-copper text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-aged-copper/90 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Myynnissä
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-slate-blue p-2 rounded-lg hover:bg-mist-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-white z-50"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block py-4 px-4 text-deep-charcoal font-medium text-lg border-b border-gray-100 hover:text-aged-copper transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link href="/kohteet">
                <motion.div
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="block mt-6 py-4 px-6 bg-aged-copper text-white font-semibold text-lg rounded-lg text-center cursor-pointer"
                >
                  Myynnissä
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

