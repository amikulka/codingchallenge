import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Benefits from '../components/benefits/Benefits'
import HowItWorks from '../components/howitworks/HowItWorks'
import SuccessStories from '../components/success_stories/SuccessStories'
import Testimonials from '../components/testimonials/Testimonials'
import Pricing from '../components/pricing/Pricing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Spend.In</title>
        <meta
          name='description'
          content='All your business expenses in one place'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Benefits />
        <HowItWorks />
        <SuccessStories />
        <Testimonials />
        <Pricing />
      </main>
    </>
  )
}
