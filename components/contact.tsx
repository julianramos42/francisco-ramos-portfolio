import Image from "next/image"
import mail from '../public/images/mail.webp'
import linkedIn from '../public/images/linkedin.webp'
import instagram from '../public/images/instagram.webp'

export default function contact() {
    return (
        <section className="relative pb-24 bg-black-1" id="contactSection">       

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4 text-white">Contactame</h2>
                <p className="text-xl text-gray-300">Estoy siempre en busca de nuevos desafíos y oportunidades para colaborar en proyectos innovadores.</p>
                <p className="text-xl text-gray-300">Si necesitas un profesional comprometido y creativo, no dudes en contactarme.</p>
            </div>

            <div className="relative text-white flex flex-col sm:flex-wrap sm:flex-row gap-5 justify-center items-center pb-10">
                <a href="mailto:ramosbusiness56@gmail.com" className="flex gap-2 justify-center items-center text-gray-800 hover:text-gray-900 hover:scale-110 bg-white border hover:bg-white-100 rounded-full shadow shadow-black transition duration-150 ease-in-out p-2" aria-label="Email">
                    <p>Mail -</p><Image src={mail} alt='mail icon' className='w-6 h-6'></Image>
                </a>
                <a href="https://www.linkedin.com/in/franrammos/" target='_blank' className="flex gap-2 justify-center items-center text-gray-800 hover:text-gray-900 hover:scale-110 bg-white border hover:bg-white-100 rounded-full shadow shadow-black transition duration-150 ease-in-out p-2" aria-label="LinkedIn">
                    <p>LinkedIn -</p><Image src={linkedIn} alt='mail icon' className='w-6 h-6'></Image>
                </a>
                <a href="https://www.instagram.com/franrammos_/" target='_blank' className="flex gap-2 justify-center items-center text-gray-800 hover:text-gray-900 hover:scale-110 bg-white border hover:bg-white-100 rounded-full shadow shadow-black transition duration-150 ease-in-out p-2" aria-label="Instagram">
                    <p>Instagram -</p><Image src={instagram} alt='mail icon' className='w-6 h-6'></Image>
                </a>
            </div>
        </section>
    )
}
