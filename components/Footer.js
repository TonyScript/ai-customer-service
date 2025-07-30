// 中文内容
const zhContent = {
  productName: "AI智能客服",
  productDescription: "利用先进的人工智能技术，为企业提供高效、智能的客户服务解决方案。",
  contact: "联系方式",
  email: "contact@example.com",
  github: "GitHub 项目",
  legal: "法律信息",
  copyright: "© 2025 AI客服. 保留所有权利.",
  icp: "ICP备案号: 京ICP备00000000号"
};

// 英文内容
const enContent = {
  productName: "AI Customer Service",
  productDescription: "Using advanced artificial intelligence technology to provide efficient and intelligent customer service solutions for businesses.",
  contact: "Contact",
  email: "contact@example.com",
  github: "GitHub Project",
  legal: "Legal Information",
  copyright: "© 2025 AI Customer Service. All rights reserved.",
  icp: "ICP License: 京ICP备00000000号"
};

export default function Footer({ language }) {
  const content = language === 'en' ? enContent : zhContent;

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold">{content.productName}</h3>
            <p className="mt-4 text-base text-gray-300">
              {content.productDescription}
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">{content.contact}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:contact@example.com" className="text-base text-gray-300 hover:text-white">
                  {content.email}
                </a>
              </li>
              {/* <li>
                <a href="https://github.com/TonyScript/ai-customer-service" className="text-base text-gray-300 hover:text-white">
                  {content.github}
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">{content.legal}</h3>
            <p className="mt-4 text-base text-gray-300">
              {content.copyright}<br />
              {content.icp}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}