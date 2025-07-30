export default function Features() {
  const features = [
    {
      title: "24/7 Operation",
      description: "AI客服全天候工作，无需休息，随时为客户提供服务支持。"
    },
    {
      title: "No-code Setup",
      description: "简洁直观的操作界面，非技术人员也能快速部署和使用。"
    },
    {
      title: "Multi-language Support",
      description: "支持中文、英文等多种语言，满足国际化业务需求。"
    },
    {
      title: "Continuous Learning",
      description: "基于机器学习算法，持续优化对话质量和准确率。"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Product Features & Advantages</h2>
        <p className="section-subtitle">Why our AI customer service stands out</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 p-6 bg-light rounded-xl hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}