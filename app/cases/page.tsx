import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getConfig, getCases } from '@/lib/data'
import { 
  ArrowRight, 
  MessageCircle,
  Star,
  MapPin,
  Calendar,
  Users,
  Home
} from 'lucide-react'

export const metadata: Metadata = {
  title: '成功案例 - 狗米整理｜民宿整理服務',
  description: '查看狗米整理的實際成功案例，了解我們如何為宜蘭地區民宿提供專業的清潔整理服務。',
  keywords: '狗米整理, 民宿清潔, 成功案例, 宜蘭民宿, 清潔服務案例',
  openGraph: {
    title: '成功案例 - 狗米整理｜民宿整理服務',
    description: '查看狗米整理的實際成功案例，了解我們如何為宜蘭地區民宿提供專業的清潔整理服務。',
    type: 'website',
  },
}

export default async function CasesPage() {
  const config = await getConfig()
  const cases = await getCases()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            成功案例
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            看看我們如何為宜蘭地區的民宿提供專業的清潔整理服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <a href={config.brand.googleForm} target="_blank" rel="noopener noreferrer">
                立即預約服務
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline">
              <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                LINE 諮詢
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cases Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              實際服務案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              這些都是我們實際服務過的民宿案例，每個案例都展現了我們的專業能力
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={caseItem.id} className="card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-brand-teal" />
                      <span className="text-sm text-gray-600">{caseItem.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < caseItem.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Home className="h-4 w-4" />
                      <span>{caseItem.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{caseItem.rooms} 房</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{caseItem.date}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-brand-navy">服務內容：</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {caseItem.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-brand-navy mb-2">客戶評價：</h4>
                      <p className="text-sm text-gray-600 italic">"{caseItem.testimonial}"</p>
                      <p className="text-xs text-gray-500 mt-2">- {caseItem.client}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              服務統計
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的服務成果數字會說話
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">服務民宿</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-brand-teal rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">滿意度</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">清潔次數</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-brand-teal rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-sm opacity-90">快速回應</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              服務區域
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們主要服務宜蘭地區的民宿，提供專業的清潔整理服務
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card text-center">
              <CardHeader>
                <CardTitle className="text-xl">宜蘭市</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  市區民宿集中區域，提供快速響應服務
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <CardTitle className="text-xl">礁溪鄉</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  溫泉區民宿，專業處理特殊清潔需求
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <CardTitle className="text-xl">羅東鎮</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  商業區民宿，標準化清潔服務
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <CardTitle className="text-xl">頭城鎮</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  海景民宿，處理海風造成的特殊清潔需求
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <CardTitle className="text-xl">員山鄉</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  山區民宿，專業處理戶外區域清潔
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <CardTitle className="text-xl">三星鄉</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  田園民宿，自然環境的清潔維護
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            想要成為下一個成功案例嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即聯絡我們，讓我們為您的民宿提供專業的清潔整理服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href={config.brand.googleForm} target="_blank" rel="noopener noreferrer">
                填寫預約表單
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-navy hover:bg-gray-100">
              <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                LINE 諮詢
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
