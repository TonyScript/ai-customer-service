// 中文内容
const zhContent = {
  // title: "解决方案",
  subtitle: "我们的AI客服能力",
  description: "通过人工智能技术，重新定义客户服务体验",
  solutions: [
    {
      title: "实时对话",
      description: "基于自然语言理解(NLU)技术，实现与客户的自然对话，准确理解客户意图。",
      icon: "💬"
    },
    {
      title: "FAQ 知识库自动构建",
      description: "自动整理历史对话记录，构建结构化知识库，持续优化客服能力。",
      icon: "🧠"
    },
    {
      title: "多渠道接入",
      description: "支持Web、微信、邮件等多种渠道接入，统一管理客户服务体验。",
      icon: "🔌"
    }
  ]
};

// 英文内容
const enContent = {
  // title: "Solutions",
  subtitle: "Our AI Customer Service Capabilities",
  description: "Redefining customer service experiences through artificial intelligence",
  solutions: [
    {
      title: "Real-time Conversations",
      description: "Powered by Natural Language Understanding (NLU) technology to enable natural conversations with customers and accurately understand their intentions.",
      icon: "💬"
    },
    {
      title: "Automatic FAQ Knowledge Base Construction",
      description: "Automatically organize historical conversation records to build a structured knowledge base and continuously optimize customer service capabilities.",
      icon: "🧠"
    },
    {
      title: "Omnichannel Access",
      description: "Support multiple channels including Web, WeChat, and email, providing a unified customer service experience.",
      icon: "🔌"
    }
  ]
};

export default function Solutions({ language }) {
  const content = language === 'en' ? enContent : zhContent;

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{content.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
            {content.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {content.description}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {content.solutions.map((solution, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary text-white text-2xl">
                  {solution.icon}
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-dark">{solution.title}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {solution.description}
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