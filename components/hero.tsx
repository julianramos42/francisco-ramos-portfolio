'use client'

import VideoThumb from '@/public/images/hero-image.jpg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {

  const scrollToSection = (e: any) => {
    const id = e.target.id
    const section = document.getElementById(`${id}Section`);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-black-1" id='top'>

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-30 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">Francisco Ramos</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 mb-8" data-aos="zoom-y-out" data-aos-delay="150">"La calidad es el idioma universal que todos aprecian y comprenden."</p>
              <section className="max-w-xs mx-auto sm:max-w-none flex flex-col  gap-3 sm:flex-row sm:justify-center sm:items-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <button className="btn bg-gray-900 text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto sm:mb-0 sm:ml-4" onClick={scrollToSection} id='aboutMe'>Sobre Mi</button>
                </div>
                <div>
                  <button className="btn py-4 bg-white hover:bg-gray-900 hover:text-white w-full sm:w-auto sm:ml-4" onClick={scrollToSection} id='contact'>Contactame</button>
                </div>
                <div>
                  <button className="btn bg-gray-900 text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto sm:mb-0 sm:ml-4" onClick={scrollToSection} id='experience'>Experiencia</button>
                </div>
              </section>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={668}
            thumbHeight={466}
            thumbAlt="Modal video"
            video="/videos/Presentacion.webm"
            videoWidth={1920}
            videoHeight={1080} />
        </div>

      </div>
    </section>
  )
}