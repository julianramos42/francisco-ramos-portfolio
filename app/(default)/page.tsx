import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Process from '@/components/process'
import ProcessBlocks from '@/components/process-blocks'
import AboutMe from '@/components/aboutMe'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Experience/>
      <Process />
      <ProcessBlocks />
      <AboutMe />
      <Contact/>
    </>
  )
}
