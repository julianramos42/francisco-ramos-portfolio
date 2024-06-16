export default function Testimonials() {
  const items = [
    {
      number: 1,
      year: 2022,
      texts: ["Empecé a aprender el paquete Adobe, incluyendo Premiere Pro, After Effects y Photoshop.", "Inicié la creación de contenido en TikTok sobre videojuegos, logrando alcanzar 5 millones de visitas."]
    },
    {
      number: 2,
      year: 2023,
      texts: ["Perfeccioné mis habilidades de edición de video e imágenes", "Empecé a subir mis ediciones a TikTok, alcanzando más de 10 millones de visitas."]
    },
    {
      number: 3,
      year: 2024,
      texts: ["Inicié mi marca personal en Instagram y TikTok.", "Más de 500 videos editados.", "Más de 50 miniaturas realizadas.", "Colaboré exitosamente con más de 20 clientes."]
    },
  ]

  return (
    <section className="relative" id='aboutMeSection'>

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Sobre Mí</h2>
            {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out"></p> */}
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full border-l-2 border-gray-200"></div>
            {
              items &&
              items.map((item, i) => (
                <div className="mb-10 ml-12 relative" key={i}>
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full" style={{ marginLeft: "-47px" }}>{item.number}</div>
                  <div className="p-4 bg-white border border-gray-400 rounded shadow-lg">
                    <p className="text-lg font-bold mb-2">{item.year}</p>
                    <ul className="list-disc list-inside">
                      {
                        item.texts?.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))
            }

          </div>

        </div>
      </div>
    </section>
  )
}