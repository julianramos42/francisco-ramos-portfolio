export default function FeaturesBlocks() {
  const items = [
    {
      number: 1,
      title: 'Responsabilidad',
      text: 'Respeto las fechas limites, sigo el plan.',
    },
    {
      number: 2,
      title: 'Calidad',
      text: 'Siempre doy lo maximo y trato de superarme en cada resultado.',
    },
    {
      number: 3,
      title: 'Comunicación',
      text: 'Durante la cooperación, es muy importante para mi mantener una buena relación donde todos somos respetados y apreciados. Me gusta mantener al tanto de todo el proceso a mis clientes.',
    },
  ]


  return (
    <section className="relative bg-black-1">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-white">Mis Principios</h2>
            {/* <p className="text-xl text-gray-600"></p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">

            {
              items &&
              items.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded shadow-xl border border-black" data-aos="fade-left">
                  <p className='top-0 bg-black text-white px-5 py-3 rounded-full mb-3 hidden' style={{ marginTop: '-15px' }}>{item.number}</p>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-center">{item.text}</p>
                </div>
              ))
            }

          </div>

        </div>
      </div>
    </section>
  )
}