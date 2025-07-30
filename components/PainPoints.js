// 中文内容
const zhContent = {
  title: "客户痛点",
  subtitle: "我们理解您的困扰",
  painPoints: [
    {
      title: "客服响应慢 → 客户流失",
      description: "传统人工客服响应时间长，客户等待过程中容易失去耐心，导致客户流失率上升。",
      icon: "⏱️"
    },
    {
      title: "人工成本高 → 投入产出比低",
      description: "雇佣大量客服人员成本高昂，且培训周期长，难以应对业务高峰期的需求波动。",
      icon: "💰"
    },
    {
      title: "FAQ 知识散乱 → 新员工培训成本高",
      description: "知识分散在各个文档中，新员工需要花费大量时间学习，培训成本居高不下。",
      icon: "📚"
    }
  ]
};

// 英文内容
const enContent = {
  title: "Customer Pain Points",
  subtitle: "We understand your challenges",
  painPoints: [
    {
      title: "Slow response → Customer loss",
      description: "Traditional customer service has long response times, causing customers to lose patience and increasing churn rate.",
      icon: "⏱️"
    },
    {
      title: "High labor costs → Low ROI",
      description: "Hiring large numbers of customer service staff is expensive with long training periods, making it difficult to cope with peak demand fluctuations.",
      icon: "💰"
    },
    {
      title: "Scattered FAQ knowledge → High training costs",
      description: "Knowledge scattered across various documents requires new employees to spend significant time learning, resulting in high training costs.",
      icon: "📚"
    }
  ]
};

export default function PainPoints({ language }) {
  const content = language === 'en' ? enContent : zhContent;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{content.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark sm:text-4xl">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {content.painPoints.map((painPoint, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary text-white text-2xl">
                  {painPoint.icon}
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-dark">{painPoint.title}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {painPoint.description}
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