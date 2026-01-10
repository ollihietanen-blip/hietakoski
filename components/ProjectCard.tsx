'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Status-värikoodaus
  const getStatusColor = () => {
    switch (project.status) {
      case 'Myynnissä':
        return 'bg-deep-teal'
      case 'Vuokrattavana':
        return 'bg-deep-teal'
      case 'Tulossa':
        return 'bg-deep-teal'
      case 'Suunnittelussa':
        return 'bg-deep-teal'
      case 'Valmis':
        return 'bg-meta-text'
      case 'Myyty':
        return 'bg-meta-text'
      case 'Vuokrattu':
        return 'bg-meta-text'
      default:
        return 'bg-deep-teal'
    }
  }

  const statusColorClass = getStatusColor()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Project Image with Overlay */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className={`object-cover object-[center_65%] transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-block px-3 py-1.5 ${statusColorClass} text-white text-xs font-semibold uppercase tracking-wide rounded-lg shadow-md`}>
            {project.status}
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-dark-muted text-xs font-medium rounded-lg shadow-md">
            {project.kohdetyyppi}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Name and Location */}
        <div className="mb-3">
          <h3 className="font-display text-xl md:text-2xl font-bold text-dark-muted mb-1 group-hover:text-deep-teal transition-colors duration-300 leading-tight">
            {project.name}
          </h3>
          <p className="text-meta-text text-sm flex items-center gap-1">
            <MapPin size={14} className="text-deep-teal" />
            {project.location}
          </p>
        </div>

        {/* Description */}
        <p className="text-body-text text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Specs */}
        {project.specs && (
          <p className="text-meta-text text-xs font-medium mb-4 pb-4 border-b border-gray-100">
            {project.specs}
          </p>
        )}

        {/* CTA */}
        <Link href={`/kohteet/${project.slug}`}>
          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn inline-flex items-center gap-2 text-deep-teal font-semibold text-sm cursor-pointer"
          >
            <span>Katso kohde</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
