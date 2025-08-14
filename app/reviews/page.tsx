import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getConfig, getReviews } from '@/lib/data'
import { 
  ArrowRight, 
  MessageCircle,
  Star,
  MapPin,
  Calendar,
  Quote
} from 'lucide-react'

export const metadata: Metadata = {
  title: '客戶評價 - 狗米整理｜民宿整理服務',
  description: '查看狗米整理客戶的真實評價，了解我們如何贏得宜蘭地區民宿主的信任與推薦。',
  keywords: '狗米整理, 民宿清潔, 客戶評價, 客戶推薦, 宜蘭民宿評價',
  openGraph: {
    title: '客戶評價 - 狗米整理｜民宿整理服務',
    description: '查看狗米整理客戶的真實評價，了解我們如何贏得宜蘭地區民宿主的信任與推薦。',
    type: 'website',
  },
}

export default async function ReviewsPage() {
  const config = await getConfig()
  const reviews = await getReviews()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            客戶評價
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            聽聽我們的客戶怎麼說，真實評價會說話
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

      {/* Overall Rating Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              整體評價
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-2xl font-bold text-brand-navy">5.0 / 5.0</p>
            <p className="text-gray-600">基於 {reviews.length} 個客戶評價</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">推薦率</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-brand-teal rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">5.0</div>
                <div className="text-sm opacity-90">平均評分</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">服務客戶</div>
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

      {/* Reviews Grid Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              客戶真實評價
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              這些都是我們實際客戶的真實評價，沒有經過任何修改
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-brand-teal" />
                      <span className="text-sm text-gray-600">{review.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{review.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <Quote className="h-5 w-5 text-brand-teal mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700 italic">"{review.content}"</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-brand-navy text-sm">服務類型：</h4>
                      <p className="text-sm text-gray-600">{review.serviceType}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-brand-navy text-sm">關鍵詞：</h4>
                      <div className="flex flex-wrap gap-2">
                        {review.keywords.map((keyword, keywordIndex) => (
                          <span
                            key={keywordIndex}
                            className="px-2 py-1 bg-brand-teal/10 text-brand-teal text-xs rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              客戶推薦重點
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              客戶最常提到的服務特色
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">專業品質</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "清潔品質非常專業，每個角落都處理得很仔細"
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">準時可靠</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "時間安排很準確，從來不會遲到或延誤"
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">溝通良好</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "溝通很順暢，有任何問題都能快速回應"
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">值得信賴</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "服務很值得信賴，可以放心交給他們處理"
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">細節用心</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "很注重細節，連我們沒注意到的地方都會處理"
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">推薦度高</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "會推薦給其他民宿朋友，真的很棒的服務"
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
            想要成為下一個滿意客戶嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即聯絡我們，讓我們為您提供同樣優質的服務體驗
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
