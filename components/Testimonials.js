export default function Testimonials() {
  const testimonials = [
    {
      company: "TechFlow Inc.",
      description: "通过部署AI客服系统，客户满意度提升了35%，客服成本降低了60%。"
    },
    {
      company: "E-commerce Plus",
      description: "实现7x24小时客户服务，解决了夜间和节假日客服响应慢的问题。"
    },
    {
      company: "Global Finance Group",
      description: "自动处理80%的常见问题咨询，让人工客服专注于复杂问题处理。"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Customer Stories</h2>
        <p className="section-subtitle">Trusted by innovative companies worldwide</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.company.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-dark">{testimonial.company}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.description}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}