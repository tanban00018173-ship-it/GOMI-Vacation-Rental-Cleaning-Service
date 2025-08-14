import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '狗米整理｜民宿清潔服務 - 宜蘭專業民宿整理',
  description: '專業民宿清潔服務，標準化SOP、照片驗收、每月督導抽查。服務宜蘭全區，讓您的民宿保持最佳狀態。',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            狗米整理
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            民宿整理交給我們，你專心接待下一位旅客
          </p>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              專業民宿清潔服務
            </h2>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                標準化清潔SOP
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                照片驗收制度
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                每月督導抽查
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                服務宜蘭全區
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              聯絡電話：0963350089 | 服務時間：週一至週日 8:00-18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
