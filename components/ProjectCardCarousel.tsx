'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectCardCarouselProps {
  images: string[]
  alt: string
  aspectRatio?: '16:9' | '4:3'
}

export default function ProjectCardCarousel({ images, alt, aspectRatio = '16:9' }: ProjectCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (images.length === 0) {
    return (
      <div className={`relative w-full ${aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[4/3]'} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
        <p className="text-deep-charcoal/50 text-sm">Kuvat tulossa</p>
      </div>
    )
  }

  return (
    <div className="relative w-full" role="region" aria-label={`Kuvakaruselli: ${alt}`}>
      <div className={`relative w-full ${aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[4/3]'} overflow-hidden bg-gray-100 rounded-t-lg`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Kuva ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all z-10"
              aria-label="Edellinen kuva"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all z-10"
              aria-label="Seuraava kuva"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Dot Indicators */}
        {images.length > 1 && images.length <= 5 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Siirry kuvaan ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

