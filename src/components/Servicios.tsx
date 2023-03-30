import { ClipboardDocumentCheckIcon, Cog8ToothIcon, BuildingOffice2Icon, BookmarkSquareIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Mantenimiento',
    description: 'Toderos, jardineros y mantenimientos generales en zonas comunes e internas en los inmuebles, compromiso ambiental economico y social en la propiedad horizontal.',
    icon: Cog8ToothIcon,
  },
  {
    name: 'Compras y ventas',
    description: 'Realizamos acompanamiento y asesoramos en compra y venta de finca raiz.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Organización',
    description: 'Procesos y mantenimientos sistematizados, trabajo con sentido de pertenencia, proactividad, organización, creatividad y honestidad.',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Administración',
    description: 'Gerencia de la propiedad horizontal, contabilidad, análisis financieros, presupuestos.',
    icon: BuildingOffice2Icon,
  },
  // {
  //   name: 'Gerencia Low Costo',
  //   description:
  //     'La alianza estratégica de nuestro grupo empresarial nos permite plantear la estrategia GHC-PH (Gerencia Low Costo en Propiedad Horizontal). ¡Disminución de hasta el 45% en el valor de las cuotas de administración mensuales de cada inmueble!',
  //   icon: StarIcon,
  // },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-800">ML Condominios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros servicios</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Servicios cuidadosamente diseñados cuidadosamente, ejecutados con precisión y con un enfoque en la calidad.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-800">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-justify text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
