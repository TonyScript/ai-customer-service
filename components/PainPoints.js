export default function PainPoints() {
  const painPoints = [
    {
      title: "Slow Customer Service Response → Customer Loss",
      description: "Traditional customer service has long response times, leading to customer frustration and loss.",
      icon: "⏱️"
    },
    {
      title: "High Labor Costs → Low ROI",
      description: "Hiring and training large customer service teams is expensive with inconsistent quality.",
      icon: "💰"
    },
    {
      title: "Scattered FAQ Knowledge → High Training Costs",
      description: "Knowledge scattered across documents makes training new employees time-consuming and expensive.",
      icon: "📚"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Customer Pain Points</h2>
        <p className="section-subtitle">We understand your challenges in customer service</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((painPoint, index) => (
            <div key={index} className="bg-light rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{painPoint.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{painPoint.title}</h3>
              <p className="text-gray-600">{painPoint.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}