'use client'

import { useState } from "react"
import Image from "next/image"
import pabloFernandezFoto from '@/public/images/clients/Pablo.webp'
//
import santiMalanoFoto from '@/public/images/clients/Santi_Malano.webp'
//
import saltenoFoto from '@/public/images/clients/salteno.webp'

export default function experience() {
    const [clientState, setClientState] = useState('pabloFernandez')
    const clientsImages = [
        {
            src: pabloFernandezFoto,
            id: 'pabloFernandez'
        },
        {
            src: santiMalanoFoto,
            id: 'santiMalano'
        },
        {
            src: saltenoFoto,
            id: 'salteno'
        },
    ]

    function changeCliente(e: any) {
        let id = e.target.id
        switch (id) {
            case 'pabloFernandez':
                setClientState('pabloFernandez')
                break;
            case 'santiMalano':
                setClientState('santiMalano')
                break;
            case 'salteno':
                setClientState('salteno')
                break;
            default:
                break;
        }
    }

    const pabloFernandezVideos = ['/videos/clients/pablo_fernandez/pf1.mp4', '/videos/clients/pablo_fernandez/pf2.mp4', '/videos/clients/pablo_fernandez/pf3.mp4', '/videos/clients/pablo_fernandez/pf4.mp4', '/videos/clients/pablo_fernandez/pf5.mp4', '/videos/clients/pablo_fernandez/pf6.mp4']
    const santiMalanoVideos = ['/videos/clients/santi_malano/sm1.mp4', '/videos/clients/santi_malano/sm2.mp4', '/videos/clients/santi_malano/sm3.mp4', '/videos/clients/santi_malano/sm4.mp4', '/videos/clients/santi_malano/sm5.mp4', '/videos/clients/santi_malano/sm6.mp4']
    const saltenoVideos = ['/videos/clients/salteno/s1.mp4', '/videos/clients/salteno/s2.mp4', '/videos/clients/salteno/s3.mp4', '/videos/clients/salteno/s4.mp4', '/videos/clients/salteno/s5.mp4', '/videos/clients/salteno/s6.mp4']

    return (
        <section className="relative" id="experienceSection">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 pb-16 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Experiencia</h1>
                        {/* <p className="text-xl text-gray-600"></p> */}
                    </div>

                    {/* Section content */}
                    <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-none py-2">
                        <div className='flex gap-6 flex-wrap align-center justify-center pb-8'>
                            {
                                clientsImages &&
                                clientsImages.map((clientImage, i) => (
                                    <Image src={clientImage.src} id={clientImage.id} key={i} alt='cliente' className={`${clientState === clientImage.id ? 'selectedClient' : ''} clients`} onClick={changeCliente}></Image>
                                ))
                            }
                        </div>
                        {
                            clientState === 'pabloFernandez' &&
                            <div>
                                <section className="flex flex-col gap-2">
                                    <h3 className="font-bold text-xl leading-snug tracking-tight mb-1">Pablo Fernandez</h3>
                                    <p className="text-gray-700">"La edición de video para mi canal de YouTube superó todas mis expectativas.
                                        No solo logró capturar la esencia de mi marca, sino que también  hicieron que mis videos se destacaran."
                                    </p>
                                    <div className='flex gap-3'>
                                        <a href='https://www.youtube.com/@6R.Institue' target='_blank' rel='noreferrer' className='rounded bg-gray-900 text-white py-1 px-2 hover:bg-blue-600'>Youtube</a>
                                        <a href='https://www.linkedin.com/in/pablo-fernandez-marketingtech/' target='_blank' rel='noreferrer' className="rounded bg-gray-900 text-white py-1 px-2 hover:bg-blue-600">LinkedIn</a>
                                    </div>
                                </section>
                                <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
                                    {
                                        pabloFernandezVideos &&
                                        pabloFernandezVideos.map((pabloFernandezVideo, i) => (
                                            <video src={pabloFernandezVideo} controls preload='metadatos' muted key={i} width={'200px'} height={'220px'} className="rounded border-black" data-aos='fade-right'></video>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        {
                            clientState === 'santiMalano' &&
                            <div>
                                <section className="flex flex-col gap-2">
                                    <h3 className="font-bold text-xl leading-snug tracking-tight mb-1">Santiago Malano</h3>
                                    <p className="text-gray-700">"Gracias a la edición de Fran, mis videos en redes  ganaron más interacción y se ven mucho mejor."</p>
                                    <div className='flex gap-3'>
                                        <a href='https://www.youtube.com/@santimalano' target='_blank' rel='noreferrer' className='rounded bg-gray-900 text-white py-1 px-2 hover:bg-blue-600'>Youtube</a>
                                        <a href='https://www.instagram.com/santi.malano/' target='_blank' rel='noreferrer' className="rounded bg-gray-900 text-white py-1 px-2 hover:bg-blue-600">Instagram</a>
                                    </div>
                                </section>
                                <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
                                    {
                                        santiMalanoVideos &&
                                        santiMalanoVideos.map((santiMalanoVideo, i) => (
                                            <video src={santiMalanoVideo} controls preload='metadatos' muted key={i} width={'200px'} height={'220px'} className="rounded border-black" data-aos='fade-right'></video>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        {
                            clientState === 'salteno' &&
                            <div>
                                <section className="flex flex-col gap-2">
                                    <h3 className="font-bold text-xl leading-snug tracking-tight mb-1">Salteno</h3>
                                    {/* <p className="text-gray-700"></p> */}
                                    <div className='flex gap-3'>
                                        <a href='https://www.twitch.tv/Saltenno' target='_blank' rel='noreferrer' className='rounded bg-gray-900 text-white py-1 px-2 hover:bg-blue-600'>Twitch</a>
                                        <a href='https://www.tiktok.com/@saltenno' target='_blank' rel='noreferrer' className="rounded bg-gray-900 text-white py-1 px-2 hover:bg-blue-600">Tiktok</a>
                                    </div>
                                </section>
                                <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
                                    {
                                        saltenoVideos &&
                                        saltenoVideos.map((saltenoVideo, i) => (
                                            <video src={saltenoVideo} controls preload='metadatos' muted key={i} width={'200px'} height={'220px'} className="rounded border-black" data-aos='fade-right'></video>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}
