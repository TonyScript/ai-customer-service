import Head from 'next/head'
import Hero from '../components/Hero'
import PainPoints from '../components/PainPoints'
import Solutions from '../components/Solutions'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>AI Customer Service - Intelligent Customer Support Solution</title>
        <meta name="description" content="AI-powered customer service solution that provides 24/7 automated support, reduces costs, and improves customer satisfaction." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Features />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}