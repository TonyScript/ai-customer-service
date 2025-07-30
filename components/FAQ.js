import { useState } from 'react';

// 中文内容
const zhContent = {
  // title: "常见问题",
  subtitle: "您可能关心的问题",
  faqs: [
    {
      question: "AI客服能完全替代人工客服吗？",
      answer: "AI客服可以处理大部分常见问题，但对于复杂或特殊情况，仍需要人工客服介入。我们提供人机协作模式，实现最佳服务效果。"
    },
    {
      question: "部署AI客服需要多长时间？",
      answer: "基础版本可在30分钟内完成部署，定制化需求根据复杂程度不同，通常在1-3个工作日内完成。"
    },
    {
      question: "如何保证对话的安全性和隐私性？",
      answer: "我们采用端到端加密技术，所有对话数据均加密存储，并严格遵守相关数据保护法规，确保客户隐私安全。"
    },
    {
      question: "支持哪些语言？",
      answer: "目前支持中文、英文、日文、韩文等多种语言，并可根据客户需求定制其他语言版本。"
    }
  ]
};

// 英文内容
const enContent = {
  // title: "Frequently Asked Questions",
  subtitle: "Questions you might have",
  faqs: [
    {
      question: "Can AI customer service completely replace human agents?",
      answer: "AI customer service can handle most common questions, but for complex or special situations, human agents are still needed. We provide a human-AI collaboration model to achieve the best service results."
    },
    {
      question: "How long does it take to deploy AI customer service?",
      answer: "The basic version can be deployed within 30 minutes. Customized requirements usually take 1-3 business days depending on complexity."
    },
    {
      question: "How do you ensure conversation security and privacy?",
      answer: "We use end-to-end encryption technology, all conversation data is encrypted and stored, and we strictly comply with relevant data protection regulations to ensure customer privacy security."
    },
    {
      question: "Which languages are supported?",
      answer: "Currently supports Chinese, English, Japanese, Korean and other languages, and can customize other language versions according to customer needs."
    }
  ]
};

export default function FAQ({ language }) {
  const content = language === 'en' ? enContent : zhContent;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{content.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-dark">{faq.question}</span>
                  <svg
                    className={`h-6 w-6 text-primary transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}