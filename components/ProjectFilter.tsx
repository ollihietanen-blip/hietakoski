'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ProjectStatus, Kohdetyyppi, Kaytto } from '@/lib/data'

interface ProjectFilterProps {
  selectedStatus: ProjectStatus | 'Kaikki' | 'Valmis / Myyty / Vuokrattu'
  selectedKohdetyyppi: Kohdetyyppi | 'Kaikki'
  selectedKaytto: Kaytto | 'Kaikki'
  selectedLocation: string | 'Kaikki'
  onStatusChange: (status: ProjectStatus | 'Kaikki' | 'Valmis / Myyty / Vuokrattu') => void
  onKohdetyyppiChange: (type: Kohdetyyppi | 'Kaikki') => void
  onKayttoChange: (kaytto: Kaytto | 'Kaikki') => void
  onLocationChange: (location: string | 'Kaikki') => void
  availableLocations: string[]
  availableKohdetyypit: Kohdetyyppi[]
  availableKaytto: Kaytto[]
  activeFilterCount: number
  onClearFilters: () => void
}

export default function ProjectFilter({
  selectedStatus,
  selectedKohdetyyppi,
  selectedKaytto,
  selectedLocation,
  onStatusChange,
  onKohdetyyppiChange,
  onKayttoChange,
  onLocationChange,
  availableLocations,
  availableKohdetyypit,
  availableKaytto,
  activeFilterCount,
  onClearFilters,
}: ProjectFilterProps) {
  const statusOptions: (ProjectStatus | 'Kaikki' | 'Valmis / Myyty / Vuokrattu')[] = [
    'Kaikki',
    'Myynnissä',
    'Vuokrattavana',
    'Tulossa',
    'Valmis / Myyty / Vuokrattu'
  ]

  return (
    <div className="mb-12 md:mb-16">
      {/* Pääsuodatus - Status */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-meta-text mb-4 uppercase tracking-wide">
          Tila
        </h3>
        <div className="flex flex-wrap gap-3">
          {statusOptions.map((status) => (
            <motion.button
              key={status}
              onClick={() => onStatusChange(status)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                selectedStatus === status
                  ? 'bg-deep-teal text-white shadow-md'
                  : 'bg-white border-2 border-gray-200 text-dark-muted hover:border-deep-teal hover:text-deep-teal'
              }`}
            >
              {status}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lisäsuodatukset */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Kohdetyyppi */}
        <div>
          <label className="block text-sm font-semibold text-meta-text mb-3 uppercase tracking-wide">
            Kohdetyyppi
          </label>
          <select
            value={selectedKohdetyyppi}
            onChange={(e) => onKohdetyyppiChange(e.target.value as Kohdetyyppi | 'Kaikki')}
            className="w-full px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-dark-muted focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all"
          >
            <option value="Kaikki">Kaikki</option>
            {availableKohdetyypit.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Käyttö */}
        <div>
          <label className="block text-sm font-semibold text-meta-text mb-3 uppercase tracking-wide">
            Käyttö
          </label>
          <select
            value={selectedKaytto}
            onChange={(e) => onKayttoChange(e.target.value as Kaytto | 'Kaikki')}
            className="w-full px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-dark-muted focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all"
          >
            <option value="Kaikki">Kaikki</option>
            {availableKaytto.map((kaytto) => (
              <option key={kaytto} value={kaytto}>
                {kaytto}
              </option>
            ))}
          </select>
        </div>

        {/* Paikkakunta */}
        <div>
          <label className="block text-sm font-semibold text-meta-text mb-3 uppercase tracking-wide">
            Paikkakunta
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value as string | 'Kaikki')}
            className="w-full px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-dark-muted focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all"
          >
            <option value="Kaikki">Kaikki</option>
            {availableLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear filters */}
      {activeFilterCount > 0 && (
        <motion.button
          onClick={onClearFilters}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-meta-text hover:text-dark-muted transition-colors"
        >
          <X size={16} />
          <span>Tyhjennä suodattimet ({activeFilterCount})</span>
        </motion.button>
      )}
    </div>
  )
}
