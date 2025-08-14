'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  FileText,
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'

interface ContactPageClientProps {
  config: any
  faqs: any[]
}

export default function ContactPageClient({ config, faqs }: ContactPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
              聯絡我們
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              選擇最適合您的聯絡方式，我們將盡快回覆您的需求
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              聯絡方式
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Google Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Google 預約表單</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    填寫詳細的服務需求，我們將根據您的民宿狀況提供客製化報價
                  </p>
                  <Button asChild className="btn-primary w-full">
                    <a href={config.googleForm} target="_blank" rel="noopener noreferrer">
                      填寫預約表單
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* LINE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">LINE 官方帳號</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    加入我們的 LINE 官方帳號，享受即時諮詢和快速回覆服務
                  </p>
                  <Button asChild className="btn-secondary w-full">
                    <a href={config.line} target="_blank" rel="noopener noreferrer">
                      加入 LINE
                      <MessageCircle className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recruitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="card h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">招募專區</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    加入我們的專業團隊，一起為宜蘭地區的民宿提供優質服務
                  </p>
                  <Button asChild variant="outline" className="btn-outline w-full">
                    <a href={config.recruitmentForm} target="_blank" rel="noopener noreferrer">
                      查看招募資訊
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              詳細聯絡資訊
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Phone className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">電話聯絡</h3>
                <p className="text-gray-600">{config.phone}</p>
                <p className="text-sm text-gray-500 mt-2">陳經理</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <a href={`tel:${config.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    撥打電話
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <MessageCircle className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">LINE 官方帳號</h3>
                <p className="text-gray-600">即時諮詢服務</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <a href={config.line} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    加入 LINE
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <MapPin className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">公司地址</h3>
                <p className="text-gray-600">{config.address}</p>
                <p className="text-sm text-gray-500 mt-2">瓏會算有限公司</p>
                <Button asChild variant="outline" size="sm" className="mt-3">
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(config.address)}`} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Google 導航
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Clock className="h-12 w-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">服務時間</h3>
                <p className="text-gray-600">週一至週日</p>
                <p className="text-sm text-gray-500 mt-2">08:00 - 20:00</p>
                <p className="text-xs text-gray-400 mt-2">24小時緊急服務</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              服務區域
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                宜蘭地區全境服務
              </h3>
              <p className="text-lg mb-6 opacity-90">
                我們主要服務宜蘭縣各鄉鎮市，包括宜蘭市、礁溪鄉、羅東鎮、頭城鎮、員山鄉、三星鄉等地區
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div>• 宜蘭市</div>
                <div>• 礁溪鄉</div>
                <div>• 羅東鎮</div>
                <div>• 頭城鎮</div>
                <div>• 員山鄉</div>
                <div>• 三星鄉</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              常見問題
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解更多關於我們的服務細節
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.slice(0, 6).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="btn-primary">
              <a href="/faq">
                查看更多問題
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
