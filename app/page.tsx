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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              為什麼選擇狗米整理？
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              我們提供專業的民宿清潔服務，讓您專心接待下一位旅客
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              服務流程
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              從預約到完成，每個步驟都透明化，讓您安心託付
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ProcessStepper steps={config.process} />
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              看看我們如何幫助宜蘭地區的民宿主提升服務品質
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {cases.map((caseItem, index) => (
              <Card key={caseItem.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <div className="aspect-video bg-gradient-to-br from-brand-light to-white relative overflow-hidden">
                  <img
                    src={
                      caseItem.afterImage || 
                      (index === 0 
                        ? "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        : index === 1
                        ? "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        : "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      )
                    }
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // 如果圖片載入失敗，使用預設的漸層背景
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.className = 'aspect-video bg-gradient-to-br from-brand-teal/20 to-brand-navy/20 relative overflow-hidden';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {caseItem.type}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                  <CardDescription className="text-base">{caseItem.location}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
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
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 italic leading-relaxed">"{caseItem.testimonial}"</p>
                      <p className="text-sm font-medium text-brand-navy mt-3">— {caseItem.client}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/cases">
                查看更多案例
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              客戶評價
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              聽聽宜蘭地區民宿主對我們的真實評價
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                      <CardDescription className="text-base">{review.location} • {review.service}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-6 leading-relaxed">"{review.content}"</p>
                  <div className="flex flex-wrap gap-2">
                    {review.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/reviews">
                查看更多評價
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            準備好提升您的民宿品質了嗎？
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            立即預約現場勘查，我們將為您提供專業的清潔服務方案
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-6 text-xl font-semibold"
              asChild
            >
              <a href={config.brand.googleForm} target="_blank" rel="noopener noreferrer">
                立即預約服務
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-10 py-6 text-xl font-semibold"
              asChild
            >
              <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                LINE 諮詢
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-base">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>{config.brand.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5" />
              <span>服務宜蘭全區</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5" />
              <span>週一至週日 8:00-18:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
