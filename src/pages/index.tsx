import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LowCost from '@/components/LowCost';
import Promo from '@/components/Promo';
import Services from '@/components/Servicios';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ML Condominios | Inicio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="h-full overflow-y-auto">
        <Hero />
        <Services />
        <LowCost />
        <Promo />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
