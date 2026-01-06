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
    { href: '/kohteet', label: 'Kohteet' },
    { href: '/rakentaminen', label: 'Rakentaminen' },
    { href: '/yhteystiedot', label: 'Yhteystiedot' },
  ]

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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo className="group-hover:[&_svg]:text-aged-copper group-hover:[&_span]:text-aged-copper transition-colors duration-300" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative px-4 py-2 font-medium text-sm transition-colors duration-200 cursor-pointer ${
                    isActive(link.href) 
                      ? 'text-aged-copper' 
                      : 'text-deep-charcoal hover:text-aged-copper'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-aged-copper"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link href="/kohteet?status=Myynnissa">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-6 py-2.5 bg-aged-copper text-white font-semibold text-sm rounded-lg hover:bg-aged-copper/90 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                Myynnissä
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-deep-charcoal p-2 rounded-lg hover:bg-mist-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block py-3 px-4 font-medium text-base rounded-lg transition-colors cursor-pointer ${
                      isActive(link.href)
                        ? 'text-aged-copper bg-aged-copper/5'
                        : 'text-deep-charcoal hover:text-aged-copper hover:bg-mist-white'
                    }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link href="/kohteet">
                <motion.div
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="block mt-4 py-3 px-6 bg-aged-copper text-white font-semibold text-base rounded-lg text-center cursor-pointer"
                >
                  Myynnissä olevat kohteet
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
