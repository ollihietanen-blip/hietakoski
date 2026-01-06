'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const statusColorClass = project.statusColor === 'copper' 
    ? 'bg-aged-copper' 
    : 'bg-slate-blue'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100/50"
    >
      {/* Project Image with Overlay */}
      <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className={`object-cover object-[center_65%] transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Tag on Image - more refined */}
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm text-aged-copper text-xs font-semibold shadow-lg border border-white/50">
            {project.tag}
          </span>
        </div>

        {/* Status Badge on Image */}
        <div className="absolute top-5 right-5 z-10">
          <span className={`inline-block px-4 py-1.5 ${statusColorClass} text-white text-xs font-semibold shadow-lg`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-7">
        {/* Name and Location with better typography */}
        <div className="mb-4">
          <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-2 group-hover:text-aged-copper transition-colors duration-300 leading-tight">
            {project.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-aged-copper" />
            <p className="text-slate-blue/60 text-sm font-medium">{project.location}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-deep-charcoal/70 text-sm mb-5 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Specs with better styling */}
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-200/50">
          <p className="text-deep-charcoal font-semibold text-sm tracking-wide">
            {project.specs}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <motion.a
            href={`/kohteet#${project.id}`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-deep-charcoal text-white font-medium hover:bg-aged-copper transition-all duration-300 shadow-sm hover:shadow-md text-sm"
          >
            <span>Katso kohde</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.a>
          
          {project.status === 'Myynnissä / Valmis' && (
            <motion.a
              href="https://www.etuovi.com/myytavat-asunnot?rakentaja=Hietakoski"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-aged-copper text-aged-copper font-medium hover:bg-aged-copper hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <span>Etuovi</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.a>
          )}
          
          <motion.a
            href="#elma"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('elma')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-mist-white text-deep-charcoal font-medium hover:bg-aged-copper hover:text-white transition-all duration-300 text-sm"
          >
            <span>Kysy Elmalta</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

