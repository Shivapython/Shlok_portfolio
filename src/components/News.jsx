import React from 'react'

export default function News(){
  const newsItems = [
    {
      date: '2025/7/2',
      title: '『CROSS-TALK』「PFFアワード2025」入選',
      content: '撮影作品である映画『CROSS-TALK』（監督：原田捷）が第47回ぴあフィルムフェスティバル「PFFアワード2025」にて入選しました。',
      details: [
        '①東京：国立映画アーカイブ',
        '2024年9月7日(土)～21日(土)※月曜休館',
        '②京都：京都文化博物館', 
        '2024年11月9日(土)～17日(日)※月曜休館'
      ],
      link: 'https://pff.jp/jp/'
    },
    {
      date: '2025/8/16',
      title: '『CSS Design Awards』複数部門受賞',
      content: '当サイトが国際的なWebデザインアワード CSS Design Awards にて複数部門を受賞しました。',
      details: [
        '・Special Kudos （審査員特別賞）',
        '・Best UI（一般投票）',
        '・Best UX（一般投票）',
        '・Best Innovation（一般投票）',
        '・Site of the Day ノミネート'
      ],
      link: 'https://www.cssdesignawards.com/'
    }
  ]

  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-16 text-center text-white">NEWS</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {newsItems.map((item, index) => (
            <article key={index} className="border-b border-gray-700 pb-12 last:border-b-0">
              <div className="mb-4">
                <time className="text-sm opacity-70 font-light text-gray-300">{item.date}</time>
              </div>
              
              <h3 className="text-xl md:text-2xl font-light mb-4 tracking-wide text-white">
                {item.title}
              </h3>
              
              <p className="content-text opacity-90 mb-6 text-gray-200">
                {item.content}
              </p>
              
              {item.details && (
                <div className="mb-6 space-y-2">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-sm opacity-70 font-light text-gray-400">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
              
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity underline text-gray-300 hover:text-white"
                >
                  詳細はこちら
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
