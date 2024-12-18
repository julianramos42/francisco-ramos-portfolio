import './css/style.css'

import { Inter } from 'next/font/google'
import { Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata = {
  title: 'Francisco Ramos',
  description: 'Francisco Ramos Portfolio - Una muestra de mis proyectos y habilidades en la edición de video.',
  keywords: 'Francisco Ramos, portfolio, edicion, video, proyectos, habilidades, edicion de video',
  robots: 'index, follow',
  openGraph: {
    title: 'Francisco Ramos Portfolio',
    type: 'website',
    // url: 'https://www.franciscoramos.com',
    // images: [
    //   {
    //     url: 'https://www.franciscoramos.com/images/og-image.jpg',
    //     width: 800,
    //     height: 600,
    //     alt: 'Francisco Ramos Portfolio Image',
    //   },
    // ],
    description: 'Exploré los proyectos y habilidades de Francisco Ramos en la edición de video.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
