'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { href: '#etusivu', label: 'Etusivu' },
    { href: '#kohteet', label: 'Kohteet' },
    { href: '#yritys', label: 'Yritys' },
    { href: '#yhteystiedot', label: 'Ota yhteyttä' },
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#etusivu"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            <span className="font-display text-xl md:text-2xl font-bold text-deep-charcoal group-hover:text-aged-copper transition-colors duration-300 tracking-tight">
              HIETAKOSKI
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aged-copper group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-slate-blue font-medium rounded-lg hover:text-aged-copper transition-colors duration-200 group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-aged-copper"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-16 right-0 bottom-0 w-64 bg-white shadow-2xl z-50"
            >
              <div className="px-6 pt-8 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="block py-4 px-4 text-slate-blue font-medium rounded-lg hover:bg-mist-white hover:text-aged-copper transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

