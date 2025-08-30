import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AttractionsGrid from '@/components/AttractionsGrid'
import AccessSection from '@/components/AccessSection'
import PermitSafety from '@/components/PermitSafety'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Page(){
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main" className="container">

        <AttractionsGrid />
        <AccessSection />
        <PermitSafety />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
