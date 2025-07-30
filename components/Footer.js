export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AI Customer Service</h3>
            <p className="text-gray-300 max-w-md">
              利用先进的人工智能技术，为企业提供高效、智能的客户服务解决方案。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@ai-customer-service.com</li>
              <li>Phone: +86 123 4567 8900</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://github.com/TonyScript/ai-customer-service" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 AI Customer Service. All rights reserved.</p>
          <p className="text-gray-400 mt-4 md:mt-0">京ICP备00000000号</p>
          <div className="mt-4 md:mt-0">
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" 
                alt="Vercel" 
                className="h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}