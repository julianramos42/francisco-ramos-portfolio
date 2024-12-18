'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useIntersectionObserver from './useIntersectionObserver'
import pabloFernandezFoto from '@/public/images/clients/Pablo.webp'
//
import santiMalanoFoto from '@/public/images/clients/Santi_Malano.webp'
//
import saltenoFoto from '@/public/images/clients/salteno.webp'
//
import norteVerdeFoto from '@/public/images/clients/Norte_Verde.png'
import { Asap } from "next/font/google";

const LazyVideo = ({ src } :any) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });
    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        if (isIntersecting && !hasRendered) {
            setHasRendered(true);
        }
    }, [isIntersecting, hasRendered]);

    return (
        <div ref={ref} style={{ width: '200px', height: '354px' }}>
            {hasRendered && <video src={src} controls preload='metadata' muted width='200px' height='220px' className="border rounded border-black" data-aos='fade-right'></video>}
        </div>
    );
};
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
        // {
        //     src: saltenoFoto,
        //     id: 'salteno'
        // },
        // {
        //     src: norteVerdeFoto,
        //     id: 'norteVerde'
        // },
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
            case 'norteVerde':
                setClientState('norteVerde')
                break;
            default:
                break;
        }
    }

    const pabloFernandezVideos = ['/videos/clients/pablo_fernandez/pf1.webm', '/videos/clients/pablo_fernandez/pf2.webm', '/videos/clients/pablo_fernandez/pf3.webm', '/videos/clients/pablo_fernandez/pf4.webm', '/videos/clients/pablo_fernandez/pf5.webm', '/videos/clients/pablo_fernandez/pf6.mp4', '/videos/clients/pablo_fernandez/pf7.mp4', '/videos/clients/pablo_fernandez/pf8.mp4', '/videos/clients/pablo_fernandez/pf9.mp4', '/videos/clients/pablo_fernandez/pf10.mp4', '/videos/clients/pablo_fernandez/pf11.mp4']
    const santiMalanoVideos = ['/videos/clients/santi_malano/sm1.webm', '/videos/clients/santi_malano/sm2.webm', '/videos/clients/santi_malano/sm3.webm', '/videos/clients/santi_malano/sm4.webm', '/videos/clients/santi_malano/sm5.webm', '/videos/clients/santi_malano/sm6.mp4', '/videos/clients/santi_malano/sm7.mp4', '/videos/clients/santi_malano/sm8.mp4', '/videos/clients/santi_malano/sm9.mp4', '/videos/clients/santi_malano/sm10.mp4', '/videos/clients/santi_malano/sm11.mp4', '/videos/clients/santi_malano/sm12.mp4', '/videos/clients/santi_malano/sm13.mp4', '/videos/clients/santi_malano/sm14.mp4', '/videos/clients/santi_malano/sm15.mp4', '/videos/clients/santi_malano/sm16.mp4', '/videos/clients/santi_malano/sm17.mp4', '/videos/clients/santi_malano/sm18.mp4', '/videos/clients/santi_malano/sm19.mp4', '/videos/clients/santi_malano/sm20.mp4', '/videos/clients/santi_malano/sm21.mp4', '/videos/clients/santi_malano/sm22.mp4', '/videos/clients/santi_malano/sm23.mp4', '/videos/clients/santi_malano/sm24.mp4', '/videos/clients/santi_malano/sm25.mp4', '/videos/clients/santi_malano/sm26.mp4', '/videos/clients/santi_malano/sm27.mp4', '/videos/clients/santi_malano/sm28.mp4', '/videos/clients/santi_malano/sm29.mp4', '/videos/clients/santi_malano/sm30.mp4', '/videos/clients/santi_malano/sm31.mp4']
    const saltenoVideos = ['/videos/clients/salteno/s1.webm', '/videos/clients/salteno/s2.webm', '/videos/clients/salteno/s3.webm', '/videos/clients/salteno/s4.webm', '/videos/clients/salteno/s5.webm', '/videos/clients/salteno/s6.mp4', '/videos/clients/salteno/s7.mp4']
    const norteVerdeVideos = ['/videos/clients/norte_verde/nv1.mp4', '/videos/clients/norte_verde/nv2.mp4', '/videos/clients/norte_verde/nv3.mp4', '/videos/clients/norte_verde/nv4.mp4', '/videos/clients/norte_verde/nv5.mp4', '/videos/clients/norte_verde/nv6.mp4', '/videos/clients/norte_verde/nv7.mp4', '/videos/clients/norte_verde/nv8.mp4', '/videos/clients/norte_verde/nv9.mp4']

    const pabloFernandezProcess = [
        {
            title: 'Edición de 2 Cámaras:',
            text: 'Realicé una edición fluida utilizando material de dos cámaras, asegurando transiciones suaves y una narrativa visual coherente.'
        },
        {
            title: 'Subtitulado:',
            text: 'Añadí subtítulos precisos y sincronizados, mejorando la accesibilidad y el alcance del video.'
        },
        {
            title: 'Sincronización de Audio:',
            text: 'Sincronización meticulosa del audio para garantizar una experiencia auditiva clara y profesional.'
        },
        {
            title: 'Estética Formal y Acorde a la Marca:',
            text: 'Mantuvimos una estética formal que refleja perfectamente la identidad y los valores de la marca del cliente.'
        },
        {
            title: 'Videos de Stock:',
            text: 'Incorporé videos de stock seleccionados para enriquecer el contenido visual y apoyar la narrativa del video.'
        },
        {
            title: 'Corrección de Color:',
            text: 'Aplicación de corrección de color para garantizar una apariencia visual cohesiva y atractiva.'
        },
        {
            title: 'Edición de Videos Cortos:',
            text: 'Edité cada reel para maximizar el impacto en pocos segundos, manteniendo la narrativa clara y efectiva.'
        },
        {
            title: 'Zooms Dinámicos:',
            text: 'Implementé zooms estratégicos para enfatizar puntos clave y añadir un toque de dinamismo a los videos.'
        },
        {
            title: 'Transiciones y Cortes:',
            text: 'Utilicé transiciones suaves y creativas para mantener la fluidez y dinamismo entre los cortes.'
        },
    ]

    const santiMalanoProcess = [
        {
            title: 'Edición dinámica:',
            text: 'Edité cada reel para maximizar el impacto en pocos segundos, manteniendo el mensaje del video claro.',
        },
        {
            title: 'Zooms Dinámicos:',
            text: 'Implementé zooms estratégicos para enfatizar puntos clave y añadir un toque de dinamismo a los videos.',
        },
        {
            title: 'Transiciones y Cortes:',
            text: 'Utilicé transiciones suaves y creativas para mantener la fluidez y dinamismo entre los cortes.',
        },
        {
            title: 'Subtitulado:',
            text: 'Añadí subtítulos precisos y sincronizados, mejorando la accesibilidad y el alcance del video.',
        },
        {
            title: 'Sincronización de Audio:',
            text: 'Sincronización meticulosa del audio para garantizar una experiencia auditiva clara y profesional.',
        },
    ]

    const saltenoProcess = [
        {
            title: 'Edición dinámica:',
            text: 'Edité cada reel para maximizar el impacto en pocos segundos.'
        },
        {
            title: 'Highlights:',
            text: 'Recopile los mejores momentos de su stream y jugadas en videojuegos.'
        },
        {
            title: 'Transiciones y Cortes:',
            text: 'Utilicé transiciones suaves y creativas para mantener la fluidez y dinamismo entre los cortes.'
        },
        {
            title: 'Zooms Dinámicos:',
            text: 'Implementé zooms estratégicos para enfatizar puntos clave y añadir un toque de dinamismo a los videos.'
        },
    ]

    const norteVerdeProcess = [
        {
            title: 'Croquis a Mano Alzada:',
            text: 'Dibujé a mano alzada los edificios solicitados, capturando su esencia arquitectónica en un estilo croquis detallado.'
        },
        {
            title: 'División en Capas:',
            text: 'Utilicé Photoshop para dividir cada dibujo en múltiples capas, preparando los elementos para una animación dinámica y fluida.'
        },
        {
            title: 'Animación en Adobe Premiere Pro:',
            text: 'Animé los croquis en Adobe Premiere Pro, creando secuencias visuales impactantes que muestran la evolución de cada edificio desde el papel hasta la realidad digital.'
        }
    ]

    return (
        <section className="relative bg-black-1" id="experienceSection">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 pb-16 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4 text-white">Experiencia</h1>
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
                                    <h3 className="font-bold text-xl leading-snug tracking-tight mb-1 text-white">Pablo Fernandez</h3>
                                    <p className="text-gray-300">"La edición de video para mi canal de YouTube superó todas mis expectativas.
                                        No solo logró capturar la esencia de mi marca, sino que también  hicieron que mis videos se destacaran."
                                    </p>
                                    <div className='flex gap-3'>
                                        <a href='https://www.youtube.com/@6R.Institue' target='_blank' rel='noreferrer' className='rounded bg-gray-900 text-white py-1 px-2 hover:bg-white hover:text-gray-800'>Youtube</a>
                                        <a href='https://www.linkedin.com/in/pablo-fernandez-marketingtech/' target='_blank' rel='noreferrer' className="rounded bg-gray-900 text-white py-1 px-2 hover:bg-white hover:text-gray-800">LinkedIn</a>
                                    </div>
                                </section>
                                <Accordion className="mt-4 shadow shadow-black" style={{ marginTop: '16px' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className="hover:bg-gray-200 flex items-center font-semibold text-md leading-snug tracking-tight"
                                    >
                                        Más Información
                                    </AccordionSummary>
                                    <AccordionDetails className="border-t border-gray-400 text-gray-800 bg-gray-900 text-white" sx={{ p: 2 }}>
                                        <ul className="list-disc ml-4">
                                            {
                                                pabloFernandezProcess &&
                                                pabloFernandezProcess.map((item, i) => (
                                                    <li key={i} className="mb-3">
                                                        <b>{item.title}</b>
                                                        <br />
                                                        <p className="ml-2 text-gray-300">{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                                <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
                                    {
                                        pabloFernandezVideos &&
                                        pabloFernandezVideos.map((pabloFernandezVideo, i) => (
                                            <LazyVideo key={i} src={pabloFernandezVideo} />
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        {
                            clientState === 'santiMalano' &&
                            <div>
                                <section className="flex flex-col gap-2">
                                    <h3 className="font-bold text-xl leading-snug tracking-tight mb-1 text-white">Santiago Malano</h3>
                                    <p className="text-gray-300">"Gracias a la edición de Fran, mis videos en redes  ganaron más interacción y se ven mucho mejor."</p>
                                    <div className='flex gap-3'>
                                        <a href='https://www.youtube.com/@santimalano' target='_blank' rel='noreferrer' className='rounded bg-gray-900 text-white py-1 px-2 hover:bg-white hover:text-gray-800'>Youtube</a>
                                        <a href='https://www.instagram.com/santi.malano/' target='_blank' rel='noreferrer' className="rounded bg-gray-900 text-white py-1 px-2 hover:bg-white hover:text-gray-800">Instagram</a>
                                    </div>
                                </section>
                                <Accordion className="mt-4 shadow shadow-black" style={{ marginTop: '16px' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className="hover:bg-gray-200 flex items-center font-semibold text-md leading-snug tracking-tight"
                                    >
                                        Más Información
                                    </AccordionSummary>
                                    <AccordionDetails className="border-t border-gray-400 text-gray-800 bg-gray-900 text-white" sx={{ p: 2 }}>
                                        <ul className="list-disc ml-4">
                                            {
                                                santiMalanoProcess &&
                                                santiMalanoProcess.map((item, i) => (
                                                    <li key={i} className="mb-3">
                                                        <b>{item.title}</b>
                                                        <br />
                                                        <p className="ml-2 text-gray-300">{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                                <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
                                    {
                                        santiMalanoVideos &&
                                        santiMalanoVideos.map((santiMalanoVideo, i) => (
                                            <LazyVideo key={i} src={santiMalanoVideo} />
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

// {
//     clientState === 'salteno' &&
//     <div>
//         <section className="flex flex-col gap-2">
//             <h3 className="font-bold text-xl leading-snug tracking-tight mb-1">Salteno</h3>
//             <p className="text-gray-300"></p>
//             <div className='flex gap-3'>
//                 <a href='https://www.twitch.tv/Saltenno' target='_blank' rel='noreferrer' className='rounded bg-gray-400 text-white py-1 px-2 hover:bg-white'>Twitch</a>
//                 <a href='https://www.tiktok.com/@saltenno' target='_blank' rel='noreferrer' className="rounded bg-gray-400 text-white py-1 px-2 hover:bg-white">Tiktok</a>
//             </div>
//         </section>
//         <Accordion className="mt-4 shadow shadow-black" style={{ marginTop: '16px' }}>
//             <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1-content"
//                 id="panel1-header"
//                 className="hover:bg-gray-200 flex items-center font-semibold text-md leading-snug tracking-tight"
//             >
//                 Más Información
//             </AccordionSummary>
//             <AccordionDetails className="border-t border-gray-400 text-gray-800" sx={{ p: 2 }}>
//                 <ul className="list-disc ml-4">
//                     {
//                         saltenoProcess &&
//                         saltenoProcess.map((item, i) => (
//                             <li key={i} className="mb-3">
//                                 <b>{item.title}</b>
//                                 <br />
//                                 <p className="ml-2">{item.text}</p>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </AccordionDetails>
//         </Accordion>
//         <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
//             {
//                 saltenoVideos &&
//                 saltenoVideos.map((saltenoVideo, i) => (
//                     <LazyVideo key={i} src={saltenoVideo} />
//                 ))
//             }
//         </div>
//     </div>
// }
// {
//     clientState === 'norteVerde' &&
//     <div>
//         <section className="flex flex-col gap-2">
//             <h3 className="font-bold text-xl leading-snug tracking-tight mb-1">Norte Verde</h3>
//             <p className="text-gray-300"></p>
//             <div className='flex gap-3'>
//                 <a href='https://norte-verde.cl/' target='_blank' rel='noreferrer' className='rounded bg-gray-400 text-white py-1 px-2 hover:bg-white'>Web</a>
//                 <a href='https://www.instagram.com/inorteverde/' target='_blank' rel='noreferrer' className="rounded bg-gray-400 text-white py-1 px-2 hover:bg-white">Instagram</a>
//                 <a href='https://www.linkedin.com/company/norte-verde/' target='_blank' rel='noreferrer' className="rounded bg-gray-400 text-white py-1 px-2 hover:bg-white">LinkedIn</a>
//             </div>
//         </section>
//         <Accordion className="mt-4 shadow shadow-black" style={{ marginTop: '16px' }}>
//             <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1-content"
//                 id="panel1-header"
//                 className="hover:bg-gray-200 flex items-center font-semibold text-md leading-snug tracking-tight"
//             >
//                 Más Información
//             </AccordionSummary>
//             <AccordionDetails className="border-t border-gray-400 text-gray-800" sx={{ p: 2 }}>
//                 <ul className="list-disc ml-4">
//                     {
//                         norteVerdeProcess &&
//                         norteVerdeProcess.map((item, i) => (
//                             <li key={i} className="mb-3">
//                                 <b>{item.title}</b>
//                                 <br />
//                                 <p className="ml-2">{item.text}</p>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </AccordionDetails>
//         </Accordion>
//         <div className='flex flex-wrap gap-y-8 gap-x-5 justify-center pt-5 md:justify-start'>
//             {
//                 norteVerdeVideos &&
//                 norteVerdeVideos.map((norteVerdeVideo, i) => (
//                     <LazyVideo key={i} src={norteVerdeVideo} />
//                 ))
//             }
//         </div>
//     </div>
// }