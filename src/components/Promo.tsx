export default function Promo() {
  return (
    <div className="bg-white">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
          <div className="relative bg-gray-100 lg:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div className="lg:pr-16">
                  <h1 className="text-4xl font-bold tracking-tight text-yellow-500 sm:text-5xl xl:text-6xl">Abby Accesorios</h1>
                  <p className="mt-4 text-xl text-gray-600">Detalles infantiles, baby shower, turbantes, bolsos, regalos para toda ocasión. Contacto : 3127503875 - 3174765642</p>
                  <div className="mt-6">
                    <a
                      href="https://www.instagram.com/abbyaccesoriosinfantiles/"
                      target="_blank"
                      className="inline-block rounded-md border border-transparent bg-yellow-500 px-8 py-3 font-medium text-white hover:bg-yellow-600"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-48 w-full items-center p-4 sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
            <img src="abby.jpg" alt="" className="w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
