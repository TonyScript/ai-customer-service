import Head from 'next/head'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import PainPoints from '../components/PainPoints'
import Solutions from '../components/Solutions'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  const [language, setLanguage] = useState('zh')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'zh'
    setLanguage(savedLanguage)
  }, [])

  const toggleLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{language === 'en' ? 'AI Customer Service - Intelligent Customer Support Solution' : 'AI智能客服 - 智能客户服务解决方案'}</title>
        <meta name="description" content={language === 'en' ? "AI-powered customer service solution that provides 24/7 automated support, reduces costs, and improves customer satisfaction." : "AI驱动的客户服务解决方案，提供7x24小时自动化支持，降低成本，提升客户满意度。"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-primary">AI {language === 'en' ? 'Customer Service' : '智能客服'}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero language={language} />
        <PainPoints language={language} />
        <Solutions language={language} />
        <Features language={language} />
        <Testimonials language={language} />
        <FAQ language={language} />
      </main>

      <div className="fixed bottom-4 right-4 flex space-x-2 bg-white p-2 rounded-lg shadow-lg">
        <button
          onClick={() => toggleLanguage('zh')}
          className={`px-3 py-1 text-sm rounded-md ${language === 'zh' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          中文
        </button>
        <button
          onClick={() => toggleLanguage('en')}
          className={`px-3 py-1 text-sm rounded-md ${language === 'en' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          EN
        </button>
      </div>

      <Footer language={language} />
    </div>
  )
}