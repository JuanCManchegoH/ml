import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Estamos para ayudarte</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Sin formularios ni preguntas molestas, solo llamanos o escribenos.</p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex items-center justify-center gap-x-6 ">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-800">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Bogotá | Colombia</h3>
            <address className="text-md mt-1 leading-6 text-gray-600">
              <p>Calle 12B No. 71D-31</p>
              <p>3174765642</p>
              <p>
                <a href="mailto:mlcondominios@hotmail.com" className="text-pink-800 hover:text-pink-600">
                  mlcondominios@hotmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
