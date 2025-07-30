export default function Solutions() {
  const solutions = [
    {
      title: "Real-time Conversation",
      description: "NLU-powered conversations that understand customer intent and provide accurate responses.",
      icon: "💬"
    },
    {
      title: "Automatic FAQ Knowledge Base",
      description: "Automatically builds and maintains a structured knowledge base from historical conversations.",
      icon: "🧠"
    },
    {
      title: "Multi-channel Integration",
      description: "Seamlessly integrates with web, WeChat, email, and other communication channels.",
      icon: "🔌"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Solutions</h2>
        <p className="section-subtitle">Powerful AI capabilities to transform your customer service</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}