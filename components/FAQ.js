import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Can AI customer service completely replace human agents?",
      answer: "AI客服可以处理大部分常见问题，但对于复杂或特殊情况，仍需要人工客服介入。我们提供人机协作模式，实现最佳服务效果。"
    },
    {
      question: "How long does it take to deploy the AI customer service system?",
      answer: "基础版本可在30分钟内完成部署，定制化需求根据复杂程度不同，通常在1-3个工作日内完成。"
    },
    {
      question: "How do you ensure conversation security and privacy?",
      answer: "我们采用端到端加密技术，所有对话数据均加密存储，并严格遵守相关数据保护法规，确保客户隐私安全。"
    },
    {
      question: "What languages do you support?",
      answer: "目前支持中文、英文、日文、韩文等多种语言，并可根据客户需求定制其他语言版本。"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about our AI customer service</p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-light hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-dark">{faq.question}</span>
                <svg 
                  className={`h-6 w-6 text-primary transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}