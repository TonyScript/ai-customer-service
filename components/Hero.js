import { useState } from 'react';

// 中文内容
const zhContent = {
  title: (
    <>
      智能客服，自动响应，<span className="text-primary">效率翻倍</span>
    </>
  ),
  subtitle: "AI驱动的客户服务解决方案，降低成本，提升响应速度，改善客户体验。",
  trialButton: "立即试用",
  contactButton: "联系我们"
};

// 英文内容
const enContent = {
  title: (
    <>
      Intelligent Customer Service, Automated Response, <span className="text-primary">Double Efficiency</span>
    </>
  ),
  subtitle: "AI-powered customer service solution that reduces costs, improves response times, and enhances customer experience.",
  trialButton: "Start Free Trial",
  contactButton: "Contact Us"
};

export default function Hero({ language }) {
  const content = language === 'en' ? enContent : zhContent;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">
              {content.trialButton}
            </button>
            <button className="btn-secondary">
              {content.contactButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}