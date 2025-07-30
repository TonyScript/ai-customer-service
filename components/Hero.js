import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you! We will contact you at ${email}`)
    setEmail('')
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Intelligent Customer Service, <span className="text-primary">Automated Response</span>, Efficiency Doubled
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            AI-powered customer service platform that reduces costs, improves response times, and enhances customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="btn-primary">
              Start Free Trial
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
          
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-1">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}