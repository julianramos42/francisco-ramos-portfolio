import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Experience/>
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Contact/>
    </>
  )
}
