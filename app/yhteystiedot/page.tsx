'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Building2 } from 'lucide-react'
import Image from 'next/image'
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Kiitos viestistäsi! Otamme sinuun yhteyttä mahdollisimman pian.')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
        
        // Piilota viesti 5 sekunnin jälkeen
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Virhe viestin lähettämisessä. Yritä myöhemmin uudelleen.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('Virhe viestin lähettämisessä. Yritä myöhemmin uudelleen.')
    } finally {
      setIsSubmitting(false)
    }
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
      
      <section className="pt-24 md:pt-32 pb-24 bg-gradient-to-b from-white via-warm-rose/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-deep-teal" />
              <span className="text-deep-teal text-sm font-medium tracking-wider uppercase">Yhteystiedot</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark-muted mb-6 leading-[1.1] tracking-tight">
              Ota yhteyttä heti tänään.
            </h1>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-muted mb-8">
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
              {/* Elma - Myynti ja vuokraus */}
              <div className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-deep-teal/20 shadow-md">
                      <Image
                        src="/yhteystiedot/Elma_Alakoski.jpg"
                        alt="Elma Alakoski-Tomberg"
                        fill
                        className="object-cover object-[center_15%]"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-1">Myynti ja vuokraus</h3>
                    <p className="font-semibold text-dark-muted mb-2">Elma Alakoski-Tomberg</p>
                    <div className="space-y-1 text-body-text text-sm">
                      <p>
                        <a href="tel:+358442063617" className="text-deep-teal hover:underline">044 206 3617</a>
                      </p>
                      <p>
                        <a href="mailto:elma.alakoski@areagroup.fi" className="text-deep-teal hover:underline break-all">
                          elma.alakoski@areagroup.fi
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Janne - Rakennustyömaat ja valvonta */}
              <div className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-deep-teal/20 shadow-md">
                      <Image
                        src="/yhteystiedot/Janne_Alakoski.jpg"
                        alt="Janne Alakoski"
                        fill
                        className="object-cover object-[center_15%]"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-1">Rakennustyömaat ja valvonta</h3>
                    <p className="font-semibold text-dark-muted mb-2">Janne Alakoski</p>
                    <div className="space-y-1 text-body-text text-sm">
                      <p>
                        <a href="tel:+358505903080" className="text-deep-teal hover:underline">+358 505903 080</a>
                      </p>
                      <p>
                        <a href="mailto:janne.alakoski@areagroup.fi" className="text-deep-teal hover:underline break-all">
                          janne.alakoski@areagroup.fi
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Olli - Suunnittelu ja lupa-asiat */}
              <div className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-deep-teal/20 shadow-md">
                      <Image
                        src="/yhteystiedot/Olli_Hietanen.jpg"
                        alt="Olli Hietanen"
                        fill
                        className="object-cover object-[center_15%]"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-1">Suunnittelu ja lupa-asiat</h3>
                    <p className="font-semibold text-dark-muted mb-2">Olli Hietanen</p>
                    <div className="space-y-1 text-body-text text-sm">
                      <p>
                        <a href="tel:+358504496321" className="text-deep-teal hover:underline">+35850 4496 321</a>
                      </p>
                      <p>
                        <a href="mailto:olli.hietanen@areagroup.fi" className="text-deep-teal hover:underline break-all">
                          olli.hietanen@areagroup.fi
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Postiosoite */}
              <div className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-teal/10 flex items-center justify-center">
                    <MapPin className="text-deep-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-2">Postiosoite</h3>
                    <p className="text-body-text leading-relaxed">
                      Kuninkaanlähteenkatu 8<br />
                      38700 Kankaanpää
                    </p>
                  </div>
                </div>
              </div>

              {/* Sähköposti */}
              <div className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-teal/10 flex items-center justify-center">
                    <Mail className="text-deep-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-2">Sähköposti</h3>
                    <p className="text-body-text leading-relaxed">
                      <a href="mailto:hietakoski@gmail.com" className="text-deep-teal hover:underline">
                        hietakoski@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Laskutusohje */}
              <div id="laskutus" className="bg-sand-white/80 backdrop-blur-sm p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-teal/10 flex items-center justify-center">
                    <Building2 className="text-deep-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-dark-muted mb-4">Laskutusohje</h3>
                    <div className="text-body-text leading-relaxed space-y-2 text-sm">
                      <p><strong>Hietakoski Oy,</strong> 3000614-7</p>
                      <p><strong>Verkkolaskuosoite:</strong> 003730006147</p>
                      <p><strong>Operaattori:</strong> Maventa (003721291126)</p>
                      <p><strong>Välittäjätunnus pankkiverkosta lähetettäessä:</strong> DABAFIHH*</p>
                      <p className="text-xs text-meta-text mt-3">
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
              <div className="bg-sand-white/80 backdrop-blur-sm p-8 md:p-10 border border-gray-200/60 shadow-xl">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-dark-muted mb-6">
                  Lähetä viesti
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-dark-muted mb-2">
                        Etunimi <span className="text-deep-teal">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all bg-sand-white text-dark-muted"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-dark-muted mb-2">
                        Sukunimi <span className="text-deep-teal">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all bg-sand-white text-dark-muted"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-muted mb-2">
                      Sähköposti <span className="text-deep-teal">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all bg-sand-white text-dark-muted"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-muted mb-2">
                      Viesti <span className="text-deep-teal">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 outline-none transition-all bg-sand-white text-dark-muted resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-deep-teal text-white font-semibold hover:bg-deep-teal/90 transition-all duration-200 shadow-md hover:shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                  >
                    {isSubmitting ? 'Lähetetään...' : 'Lähetä'}
                  </motion.button>

                  {/* Status Message */}
                  {submitStatus !== 'idle' && submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl ${
                        submitStatus === 'success'
                          ? 'bg-green-50 border border-green-200 text-green-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                    >
                      <p className="text-sm font-medium">{submitMessage}</p>
                    </motion.div>
                  )}
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

