// 中文内容
const zhContent = {
  // title: "客户案例",
  subtitle: "他们都在使用我们的AI客服",
  testimonials: [
    {
      company: "科技有限公司",
      description: "通过部署AI客服系统，客户满意度提升了35%，客服成本降低了60%。"
    },
    {
      company: "电商平台",
      description: "实现7x24小时客户服务，解决了夜间和节假日客服响应慢的问题。"
    },
    {
      company: "金融服务公司",
      description: "自动处理80%的常见问题咨询，让人工客服专注于复杂问题处理。"
    }
  ]
};

// 英文内容
const enContent = {
  // title: "Customer Stories",
  subtitle: "They're using our AI customer service",
  testimonials: [
    {
      company: "Tech Ltd.",
      description: "By deploying the AI customer service system, customer satisfaction increased by 35% and customer service costs decreased by 60%."
    },
    {
      company: "E-commerce Platform",
      description: "Achieved 24/7 customer service, solving slow response issues during nights and holidays."
    },
    {
      company: "Financial Services Company",
      description: "Automatically handles 80% of common inquiries, allowing human agents to focus on complex issues."
    }
  ]
};

export default function Testimonials({ language }) {
  const content = language === 'en' ? enContent : zhContent;

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{content.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-primary font-bold">{testimonial.company.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-dark">{testimonial.company}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                    {testimonial.description}
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