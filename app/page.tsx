import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustCards from '@/components/TrustCards'
import CustomerJourney from '@/components/CustomerJourney'
import ProjectsSection from '@/components/ProjectsSection'
import ReferenceHighlight from '@/components/ReferenceHighlight'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustCards />
      <CustomerJourney />
      <ProjectsSection />
      <ReferenceHighlight />
      <ContactSection />
      <Footer />
    </main>
  )
}

