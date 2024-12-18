'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  const items = [
    {
      number: 1,
      title: 'Preproducción',
      text: 'Empiezo organizando todos mis archivos de video, audio y gráficos. Esta etapa es fundamental para asegurar que tengo acceso rápido a todo el material necesario durante el proceso de edición.',
    },
    {
      number: 2,
      title: 'Montaje',
      text: 'Creo una secuencia de edición inicial colocando las tomas seleccionadas. Durante este proceso, ajusto los cortes entre las tomas para mejorar la fluidez narrativa. Agrego transiciones si es necesario para suavizar los cambios entre escenas.',
    },
    {
      number: 3,
      title: 'Subtítulado',
      text: 'Sigo con los subtítulos, revisando que esten sincronizados con el audio y los cortes del video. Que sean fácil de leer y ajusto el tiempo de estos para una buena compresión.',
    },
    {
      number: 4,
      title: 'Planificación',
      text: 'Examino el material visual planificando donde voy a colocar zooms, gráficos, efectos de sonido y así lograr una edición eficaz.',
    },
    {
      number: 5,
      title: 'Acciónar',
      text: 'Empiezo a crear todo lo planificado.',
    },
    {
      number: 6,
      title: 'Revisión',
      text: 'Una vez completada la edición, procedo a la revisión y retroalimentación, donde repaso el video internamente y realizo ajustes según sea necesario. Luego, solicito una opinión y si es necesario realizo los cambios solicitados.',
    },
    {

    },
    {
      number: 7,
      title: 'Entrega',
      text: 'Finalmente, selecciono el formato de archivo y la configuración de exportación adecuados para el proyecto. Exporto el video en la resolución y calidad deseadas, y procedo a la entrega final.',
    },
  ]

  return (
    <section className="relative bg-black-1">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-26" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-white">Mi Proceso</h1>
            {/* <p className="text-xl text-gray-600"></p> */}
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none pb-20">
            {
              items &&
              items.map((item, i) => (
                item.number ?
                  <div key={i} className="relative flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded shadow-xl border border-black" data-aos="fade-right">
                    {/* <p className='top-0 bg-black text-gray-900 px-5 py-3 rounded-full mb-3' style={{ marginTop: '-15px' }}>{item.number}</p> */}
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-center">{item.text}</p>
                  </div>
                  : <div key={i} className="relative" data-aos="fade-right"></div>
              ))
            }
          </div>

        </div>
      </div>
    </section>
  )
}