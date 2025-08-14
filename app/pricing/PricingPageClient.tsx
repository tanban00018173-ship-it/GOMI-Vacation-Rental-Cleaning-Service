'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Clock,
  Users,
  Home
} from 'lucide-react'
import { motion } from 'framer-motion'

interface PricingPageClientProps {
  config: any
}

export default function PricingPageClient({ config }: PricingPageClientProps) {
  const pricingPlans = [
    {
      name: '單間清潔',
      icon: Home,
      price: `${config.pricing.singleRoom.currency}${config.pricing.singleRoom.min}～${config.pricing.singleRoom.max}`,
      description: '適合單間房間的清潔服務',
      features: [
        '房間本體清潔',
        '衛浴設施消毒',
        '備品檢查',
        '照片驗收',
        '標準化SOP'
      ],
      note: config.pricing.singleRoom.note,
      popular: false
    },
    {
      name: '包棟服務',
      icon: Users,
      price: `${config.pricing.singleRoom.currency}${config.pricing.wholeHouse[0].price}起`,
      description: '整棟民宿的清潔服務',
      features: [
        '全棟房間清潔',
        '公共區域整理',
        '備品補充',
        '照片驗收',
        '品質保證',
        '每月督導'
      ],
      note: '依坪數計價，實際價格以勘查為準',
      popular: true
    },
    {
      name: '包月服務',
      icon: Clock,
      price: '客製化報價',
      description: '長期合作的優惠方案',
      features: [
        '固定清潔頻率',
        '優先服務安排',
        '專屬服務窗口',
        '每月督導抽查',
        '品質保證',
        '優惠價格'
      ],
      note: config.pricing.monthly.description,
      popular: false
    }
  ]

  const wholeHousePricing = [
    {
      size: config.pricing.wholeHouse[0].size,
      price: config.pricing.wholeHouse[0].price,
      description: '適合小型民宿'
    },
    {
      size: config.pricing.wholeHouse[1].size,
      price: config.pricing.wholeHouse[1].price,
      description: '適合中型民宿'
    },
    {
      size: '100坪以上',
      price: '客製化報價',
      description: '適合大型民宿'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light to-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              價格方案
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              透明化的收費標準，讓您清楚了解服務費用
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-lg font-semibold"
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
                className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                  LINE 諮詢
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              服務方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根據您的需求選擇最適合的服務方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`relative h-full hover:shadow-lg transition-shadow ${
                    plan.popular ? 'border-brand-teal shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-medium">
                        最受歡迎
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                      <plan.icon className="h-8 w-8 text-brand-teal" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-brand-navy">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-brand-navy mb-2">{plan.price}</div>
                      <p className="text-sm text-gray-500">{plan.note}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-brand-teal hover:bg-brand-teal/90 text-white' 
                          : 'bg-brand-navy hover:bg-brand-navy/90 text-white'
                      }`}
                      asChild
                    >
                      <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                        諮詢詳情
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whole House Pricing */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              包棟計價標準
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根據民宿坪數提供不同的收費標準
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wholeHousePricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-brand-navy">{item.size}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-brand-teal mb-4">
                        {item.price}
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
                          諮詢詳情
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Info className="h-6 w-6 text-yellow-600" />
                  <CardTitle className="text-xl text-yellow-800">重要提醒</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-800 font-medium">價格以現場勘查為準</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        實際收費會根據民宿的實際狀況、房間數量、清潔難度等因素進行調整。
                        我們會在現場勘查後提供詳細的報價單。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-800 font-medium">包月服務說明</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        包月服務以單月20天為上限，超過部分依單次包棟價格計算。
                        具體合作細節請聯繫我們進行討論。
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-800 font-medium">服務保證</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        所有服務都包含照片驗收和品質保證。如有不滿意的地方，
                        我們會立即進行改善，直到您滿意為止。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              需要客製化報價？
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              聯繫我們進行現場勘查，我們將為您提供最適合的服務方案和價格
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href={config.brand.googleForm} target="_blank" rel="noopener noreferrer">
                  立即預約勘查
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
