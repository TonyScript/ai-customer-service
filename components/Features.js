// 中文内容
const zhContent = {
  // title: "产品亮点",
  subtitle: "为什么选择我们的AI客服",
  features: [
    {
      title: "7x24 全天候工作",
      description: "AI客服全天候在线，无需休息，随时为客户提供服务支持。"
    },
    {
      title: "快速上手，无需代码",
      description: "简洁直观的操作界面，非技术人员也能快速部署和使用。"
    },
    {
      title: "多语言支持",
      description: "支持中文、英文等多种语言，满足国际化业务需求。"
    },
    {
      title: "自动学习+持续优化",
      description: "基于机器学习算法，持续优化对话质量和准确率。"
    }
  ]
};

// 英文内容
const enContent = {
  // title: "Product Features",
  subtitle: "Why Choose Our AI Customer Service",
  features: [
    {
      title: "24/7 Operation",
      description: "AI customer service is always online, no breaks required, providing service support anytime."
    },
    {
      title: "Quick Setup, No Coding Required",
      description: "Simple and intuitive interface that allows non-technical users to deploy and use quickly."
    },
    {
      title: "Multi-language Support",
      description: "Supports Chinese, English and other languages to meet international business needs."
    },
    {
      title: "Auto-learning + Continuous Optimization",
      description: "Based on machine learning algorithms, continuously optimizing dialogue quality and accuracy."
    }
  ]
};

export default function Features({ language }) {
  const content = language === 'en' ? enContent : zhContent;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{content.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {content.features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-dark">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}