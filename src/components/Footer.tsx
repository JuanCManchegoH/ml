const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#services' },
    { name: 'Clasificados', href: '/clasificados' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-semibold font-semibold leading-6 text-gray-600 hover:text-pink-800">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2023 ML Condominios, todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
