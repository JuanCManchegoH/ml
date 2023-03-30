// export default function LowCost() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
//           <div className="mx-auto w-full max-w-xl lg:mx-0">
//             <h2 className="text-3xl font-bold tracking-tight text-pink-800">Gerencia Low Cost</h2>
//             <p className="mt-6 text-justify text-lg leading-8 text-gray-600">
//               La alianza estratégica de nuestro grupo empresarial nos permite plantear la estrategia GLC-PH (Gerencia Low Cost en Propiedad Horizontal), dirigida a copropiedades pequeñas de hasta 30
//               inmuebles.
//             </p>
//             <p className="mt-6 text-justify text-lg leading-8 text-gray-600">¡Disminución de hasta el 45% en el valor de las cuotas de administración mensuales!</p>
//             <p className="mt-6 text-justify text-lg leading-8 text-gray-600 underline">Contáctanos para más información</p>
//           </div>
//           <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
//             <img className="max-h-12 w-full object-contain object-left" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="Tuple" width={105} height={48} />
//             <img className="max-h-12 w-full object-contain object-left" src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg" alt="Reform" width={104} height={48} />
//             <img className="max-h-12 w-full object-contain object-left" src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg" alt="SavvyCal" width={140} height={48} />
//             <img className="max-h-12 w-full object-contain object-left" src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg" alt="Laravel" width={136} height={48} />
//             <img className="max-h-12 w-full object-contain object-left" src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg" alt="Transistor" width={158} height={48} />
//             <img className="max-h-12 w-full object-contain object-left" src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg" alt="Statamic" width={147} height={48} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function LowCost() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-rose-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-rose-600/10 ring-1 ring-rose-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">Gerencia Low Cost.</h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-justify text-lg leading-8 text-gray-600">
                La alianza estratégica de nuestro grupo empresarial nos permite plantear la estrategia GLC-PH (Gerencia Low Cost en Propiedad Horizontal), dirigida a copropiedades pequeñas de hasta 30
                inmuebles.
              </p>
              <p className="mt-6 text-justify text-lg leading-8 text-gray-600">¡Disminución de hasta el 45% en el valor de las cuotas de administración mensuales!</p>
              <p className="mt-6 text-justify text-lg leading-8 text-gray-600">Contáctanos para más información</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
