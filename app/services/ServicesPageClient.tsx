'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Sparkles, 
  Camera, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  MapPin
} from 'lucide-react'
import { motion } from 'framer-motion'

interface ServicesPageClientProps {
  config: any
}

export default function ServicesPageClient({ config }: ServicesPageClientProps) {
  const services = [
    {
      icon: Sparkles,
      title: '房間清潔',
      description: '專業的房間清潔服務，確保每個角落都一塵不染',
      details: [
        '床鋪整理與更換',
        '地面清潔與消毒',
        '桌面擦拭與整理',
        '鏡面清潔保養',
        '窗戶玻璃清潔',
        '空調濾網清潔'
      ]
    },
    {
      icon: Shield,
      title: '衛浴消毒',
      description: '徹底的衛浴清潔與消毒，確保衛生安全',
      details: [
        '馬桶清潔與消毒',
        '洗手台清潔',
        '淋浴間清潔',
        '鏡面清潔',
        '地面清潔',
        '備品補充'
      ]
    },
    {
      icon: Camera,
      title: '照片驗收',
      description: '清潔前後對比照片，透明化服務品質',
      details: [
        '清潔前拍照記錄',
        '清潔後拍照驗收',
        'LINE即時回報',
        '品質確認機制',
        '問題即時處理',
        '服務記錄保存'
      ]
    },
    {
      icon: Users,
      title: '備品補充',
      description: '完整的備品檢查與補充服務',
      details: [
        '毛巾浴巾更換',
        '洗髮精沐浴乳補充',
        '牙刷牙膏補充',
        '衛生紙補充',
        '其他備品檢查',
        '備品清單確認'
      ]
    },
    {
      icon: Clock,
      title: '床單更換',
      description: '專業的床單更換服務，確保舒適衛生',
      details: [
        '床單被套更換',
        '枕頭套更換',
        '床墊保護墊檢查',
        '床鋪整理',
        '品質檢查',
        '更換記錄'
      ]
    },
    {
      icon: MapPin,
      title: '公共區域',
      description: '公共區域的清潔與整理服務',
      details: [
        '走廊清潔',
        '樓梯清潔',
        '大廳整理',
        '電梯清潔',
        '出入口清潔',
        '公共設施清潔'
      ]
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
              服務內容
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              我們提供全方位的民宿清潔服務，從房間清潔到備品補充，每個細節都不馬虎
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

      {/* Services Grid */}
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
              服務項目
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              專業的清潔服務，讓您的民宿保持最佳狀態
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-brand-teal" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-brand-navy">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
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
              服務範圍
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              清楚定義清潔範圍，讓您了解服務內容
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {config.services.areas.map((area: any, index: number) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-brand-teal/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-navy">{area.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
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
              服務限制
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              為了確保服務的合法合規性，以下項目不在服務範圍內
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl text-red-800">不包含的服務</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {config.services.exclusions.map((exclusion: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-red-700">{exclusion}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
                  <p className="text-sm text-red-700">
                    <strong>說明：</strong>根據法規規定，垃圾載運需要特殊許可證。我們專注於清潔服務，
                    不涉及垃圾載運業務，以確保服務的合法合規性。如有垃圾處理需求，
                    建議您聯繫專業的垃圾清運公司。
                  </p>
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
              需要更詳細的服務說明？
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              聯繫我們進行現場勘查，我們將為您提供客製化的服務方案
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
