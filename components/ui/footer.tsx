import Image from 'next/image'
import mail from '../../public/images/mail.png'
import linkedIn from '../../public/images/linkedin.png'
import instagram from '../../public/images/instagram.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <section className='md:order-1 flex justify-center items-center gap-1'>
            <h3 className='font-bold text-md leading-snug tracking-tight' id='contactSection'>Contactame:</h3>
            <ul className="flex md:ml-4 md:mb-0">
              <li className="ml-4">
                <a href="mailto:ramosbusiness56@gmail.com" className="flex justify-center items-center text-gray-600 hover:text-gray-900 hover:scale-110 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2" aria-label="Email">
                  <Image src={mail} alt='mail icon' className='w-6 h-6'></Image>
                </a>
              </li>
              <li className="ml-4">
                <a href="https://www.linkedin.com/in/franrammos/" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 hover:scale-110 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2" aria-label="LinkedIn">
                  <Image src={linkedIn} alt='mail icon' className='w-6 h-6'></Image>
                </a>
              </li>
              <li className="ml-4">
                <a href="https://www.instagram.com/franrammos_/" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 hover:scale-110 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2" aria-label="Instagram">
                  <Image src={instagram} alt='mail icon' className='w-6 h-6'></Image>
                </a>
              </li>
            </ul>
          </section>

          {/* Copyrights note */}
          <div className="hidden text-sm text-gray-600 mr-4 sm:block">- Francisco Ramos</div>
        </div>

      </div>
    </footer>
  )
}

