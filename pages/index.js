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

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{language === 'en' ? 'AI Customer Service - Intelligent Customer Support Solution' : 'AI智能客服 - 智能客户服务解决方案'}</title>
        <meta name="description" content={language === 'en' ? "AI-powered customer service solution that provides 24/7 automated support, reduces costs, and improves customer satisfaction." : "AI驱动的客户服务解决方案，提供7x24小时自动化支持，降低成本，提升客户满意度。"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 语言切换按钮 - 固定在右上角 */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 flex items-center"
          aria-label={language === 'en' ? '切换到中文' : 'Switch to English'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-1 text-sm font-medium text-gray-700">
            {language === 'en' ? '中文' : 'EN'}
          </span>
        </button>
      </div>

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

      <Footer language={language} />
    </div>
  )
}