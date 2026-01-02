import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

