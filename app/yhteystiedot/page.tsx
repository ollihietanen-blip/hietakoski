'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Building2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Kiitos viestistäsi! Otamme sinuun yhteyttä mahdollisimman pian.')
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-24 bg-gradient-to-b from-white via-mist-white/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-aged-copper" />
              <span className="text-aged-copper text-sm font-medium tracking-wider uppercase">Yhteystiedot</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-deep-charcoal mb-6 leading-[1.1] tracking-tight">
              Ota yhteyttä heti tänään.
            </h1>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-charcoal mb-8">
              HIETAKOSKI Oy
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Postiosoite */}
              <div className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-aged-copper/10 flex items-center justify-center">
                    <MapPin className="text-aged-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-charcoal mb-2">Postiosoite</h3>
                    <p className="text-deep-charcoal/70 leading-relaxed">
                      Kuninkaanlähteenkatu 8<br />
                      38700 Kankaanpää
                    </p>
                  </div>
                </div>
              </div>

              {/* Rakennustyömaat ja valvonta */}
              <div className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-blue/10 flex items-center justify-center">
                    <Phone className="text-slate-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-charcoal mb-2">Rakennustyömaat ja valvonta</h3>
                    <p className="text-deep-charcoal/70 leading-relaxed">
                      Janne, <a href="tel:+358505903080" className="text-aged-copper hover:underline">+358 505903 080</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Suunnittelu ja lupa-asiat */}
              <div className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-blue/10 flex items-center justify-center">
                    <Phone className="text-slate-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-charcoal mb-2">Suunnittelu ja lupa-asiat</h3>
                    <p className="text-deep-charcoal/70 leading-relaxed">
                      Olli, <a href="tel:+358504496321" className="text-aged-copper hover:underline">+35850 4496 321</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sähköposti */}
              <div className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-aged-copper/10 flex items-center justify-center">
                    <Mail className="text-aged-copper" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-charcoal mb-2">Sähköposti</h3>
                    <p className="text-deep-charcoal/70 leading-relaxed">
                      <a href="mailto:hietakoski@gmail.com" className="text-aged-copper hover:underline">
                        hietakoski@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Laskutusohje */}
              <div id="laskutus" className="bg-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-blue/10 flex items-center justify-center">
                    <Building2 className="text-slate-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-deep-charcoal mb-4">Laskutusohje</h3>
                    <div className="text-deep-charcoal/70 leading-relaxed space-y-2 text-sm">
                      <p><strong>Hietakoski Oy,</strong> 3000614-7</p>
                      <p><strong>Verkkolaskuosoite:</strong> 003730006147</p>
                      <p><strong>Operaattori:</strong> Maventa (003721291126)</p>
                      <p><strong>Välittäjätunnus pankkiverkosta lähetettäessä:</strong> DABAFIHH*</p>
                      <p className="text-xs text-deep-charcoal/60 mt-3">
                        *Käyttäkää tätä välittäjätunnusta mikäli käytössänne olevasta verkkolaskutusohjelmasta ei voi lähettää laskuja suoraan Maventan välittäjätunnukselle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 border border-gray-200/60 shadow-xl">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-deep-charcoal mb-6">
                  Lähetä viesti
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-deep-charcoal mb-2">
                        First Name <span className="text-aged-copper">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-aged-copper focus:ring-2 focus:ring-aged-copper/20 outline-none transition-all bg-white text-deep-charcoal"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-deep-charcoal mb-2">
                        Last Name <span className="text-aged-copper">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-aged-copper focus:ring-2 focus:ring-aged-copper/20 outline-none transition-all bg-white text-deep-charcoal"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-charcoal mb-2">
                      Sähköposti <span className="text-aged-copper">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-aged-copper focus:ring-2 focus:ring-aged-copper/20 outline-none transition-all bg-white text-deep-charcoal"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-charcoal mb-2">
                      Viesti <span className="text-aged-copper">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-aged-copper focus:ring-2 focus:ring-aged-copper/20 outline-none transition-all bg-white text-deep-charcoal resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-aged-copper text-white font-semibold hover:bg-aged-copper/90 transition-all duration-200 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Lähetetään...' : 'Lähetä'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

