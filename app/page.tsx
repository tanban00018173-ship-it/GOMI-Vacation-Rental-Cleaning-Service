import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ProcessStepper from '@/components/ProcessStepper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Sparkles, 
  Camera, 
  Users, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone
} from 'lucide-react'
import { getConfig, getCases, getReviews } from '@/lib/data'

export const metadata: Metadata = {
  title: '狗米整理｜民宿清潔服務 - 宜蘭專業民宿整理',
  description: '專業民宿清潔服務，標準化SOP、照片驗收、每月督導抽查。服務宜蘭全區，讓您的民宿保持最佳狀態。',
}

export default function HomePage() {
  const config = getConfig()
  const cases = getCases().slice(0, 3)
  const reviews = getReviews().slice(0, 6)

  const services = [
    {
      iconName: 'Sparkles',
      title: '標準化清潔',
      description: '依SOP進行專業清潔，確保品質一致',
      features: [
        '房間本體清潔',
        '衛浴設施消毒',
        '地面桌面擦拭',
        '鏡面清潔保養'
      ]
    },
    {
      iconName: 'Camera',
      title: '照片驗收',
      description: '清潔前後對比照片，透明化服務品質',
      features: [
        '清潔前後對比',
        'LINE即時回報',
        '品質確認機制',
        '問題即時處理'
      ]
    },
    {
      iconName: 'Users',
      title: '每月督導',
      description: '資深主管定期抽查，持續改善服務',
      features: [
        '定期品質抽查',
        '服務流程檢視',
        '客戶滿意度調查',
        '持續改善計畫'
      ]
    },
    {
      iconName: 'Shield',
      title: '依法合規',
      description: '專注清潔服務，不涉及垃圾載運業務',
      features: [
        '合法清潔服務',
        '環保清潔用品',
        '安全作業流程',
        '保險保障'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              為什麼選擇狗米整理？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供專業的民宿清潔服務，讓您專心接待下一位旅客
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              服務流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從預約到完成，每個步驟都透明化，讓您安心託付
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProcessStepper steps={config.process} />
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              看看我們如何幫助宜蘭地區的民宿主提升服務品質
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <Card key={caseItem.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={caseItem.afterImage}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseItem.type}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">房間數：</span>
                      <span className="font-medium">{caseItem.rooms}間</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">面積：</span>
                      <span className="font-medium">{caseItem.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">清潔時間：</span>
                      <span className="font-medium">{caseItem.duration}</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600 italic">"{caseItem.testimonial}"</p>
                      <p className="text-sm font-medium text-brand-navy mt-2">— {caseItem.client}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <a href="/cases">
                查看更多案例
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              客戶評價
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              聽聽宜蘭地區民宿主對我們的真實評價
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.location} • {review.service}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">"{review.content}"</p>
                  <div className="flex flex-wrap gap-2">
                    {review.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 bg-brand-teal/10 text-brand-teal text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <a href="/reviews">
                查看更多評價
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            準備好提升您的民宿品質了嗎？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即預約現場勘查，我們將為您提供專業的清潔服務方案
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href={config.brand.googleForm} target="_blank" rel="noopener noreferrer">
                立即預約服務
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                LINE 諮詢
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{config.brand.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>服務宜蘭全區</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>週一至週日 8:00-18:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
