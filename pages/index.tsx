import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Benefits from '../components/benefits/Benefits'
import HowItWorks from '../components/howitworks/HowItWorks'
import SuccessStories from '../components/success_stories/SuccessStories'
import Testimonials from '../components/testimonials/Testimonials'
import Pricing from '../components/pricing/Pricing'
import Footer from '../components/footer/Footer'
import CallToAction from '../components/calltoaction/CallToAction'
import { Container } from '@mui/material'

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
        <link rel='icon' href='/spendin-logo.svg' />
      </Head>
      <main>
        <Navbar />
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            px: 5,
          }}
        >
          <Hero />
          <Benefits />
          <HowItWorks />
          <SuccessStories />
          <Testimonials />
          <Pricing />
          <CallToAction />
          <Footer />
        </Container>
      </main>
    </>
  )
}
