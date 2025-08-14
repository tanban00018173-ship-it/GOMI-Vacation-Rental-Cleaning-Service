'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Users,
  Target,
  Award,
  Heart,
  Shield,
  Clock,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin
} from 'lucide-react'
import { motion } from 'framer-motion'

interface AboutPageClientProps {
  config: any
}

export default function AboutPageClient({ config }: AboutPageClientProps) {
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
              關於狗米整理
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              專業的民宿整理服務，讓您的民宿煥然一新
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
                  聯絡我們
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
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
              品牌故事 Brand Story
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">中文</h3>
                  <p className="text-gray-700 leading-relaxed">
                    狗米整理成立於2023年，專注於為宜蘭地區的民宿提供專業的清潔整理服務。我們深知民宿業主面臨的挑戰：如何在有限的時間內維持高品質的住宿環境，同時專注於提升客人體驗。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    我們的團隊由經驗豐富的清潔專業人員組成，每位成員都經過嚴格的培訓，掌握標準化的清潔流程。我們相信，一個乾淨整潔的環境不僅能提升客人的滿意度，更能為民宿建立良好的口碑。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">English</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Doggy Cleaning was established in 2023, specializing in providing professional cleaning and organizing services for homestays in the Yilan area. We deeply understand the challenges faced by homestay owners: how to maintain high-quality accommodation environments within limited time while focusing on enhancing guest experiences.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Our team consists of experienced cleaning professionals, each member receiving rigorous training and mastering standardized cleaning procedures. We believe that a clean and tidy environment not only enhances guest satisfaction but also builds a strong reputation for homestays.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8" />
                    <h4 className="text-xl font-semibold">專業認證</h4>
                  </div>
                  <p>所有清潔人員均通過專業培訓認證</p>
                  
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8" />
                    <h4 className="text-xl font-semibold">品質保證</h4>
                  </div>
                  <p>標準化SOP確保服務品質一致性</p>
                  
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8" />
                    <h4 className="text-xl font-semibold">用心服務</h4>
                  </div>
                  <p>以客為尊，用心打造完美住宿環境</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
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
              創辦團隊 Our Founding Team
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">中文</h3>
                    <p className="text-gray-700 leading-relaxed">
                      我們的創辦團隊由資深的服務業專業人士組成，擁有豐富的民宿管理和清潔服務經驗。團隊成員來自不同的專業背景，包括酒店管理、環境衛生、客戶服務等領域。
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      我們深知民宿業主的痛點，因此致力於提供量身定制的解決方案。透過持續的創新和改進，我們不斷提升服務品質，為客戶創造更大的價值。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">English</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our founding team consists of senior service industry professionals with extensive experience in homestay management and cleaning services. Team members come from diverse professional backgrounds, including hotel management, environmental hygiene, customer service, and other fields.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We deeply understand the pain points of homestay owners, therefore we are committed to providing tailored solutions. Through continuous innovation and improvement, we constantly enhance service quality and create greater value for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <Card className="card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-brand-teal" />
                      <span>專業團隊</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">經驗豐富的清潔專業人員，經過嚴格培訓認證</p>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-6 w-6 text-brand-teal" />
                      <span>服務導向</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">以客戶需求為中心，提供客製化清潔解決方案</p>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-6 w-6 text-brand-teal" />
                      <span>準時可靠</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">嚴格遵守時間安排，確保服務準時完成</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
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
              價值主張 Our Value Proposition
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-brand-teal" />
                    <span>專業品質</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">中文</h4>
                      <p className="text-gray-600 text-sm">
                        標準化的清潔流程，確保每個角落都得到專業的照顧。我們使用高品質的清潔用品，並嚴格執行品質檢查制度。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">English</h4>
                      <p className="text-gray-600 text-sm">
                        Standardized cleaning procedures ensure every corner receives professional care. We use high-quality cleaning supplies and strictly enforce quality inspection systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-brand-teal" />
                    <span>用心服務</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">中文</h4>
                      <p className="text-gray-600 text-sm">
                        我們不只是清潔，更是用心為您的民宿創造完美的住宿體驗。每個細節都經過精心處理，讓客人感受到家的溫暖。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">English</h4>
                      <p className="text-gray-600 text-sm">
                        We don't just clean, we wholeheartedly create perfect accommodation experiences for your homestay. Every detail is carefully handled to make guests feel the warmth of home.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-brand-teal" />
                    <span>值得信賴</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">中文</h4>
                      <p className="text-gray-600 text-sm">
                        透明的服務流程，誠實的價格政策，以及完善的售後保障。我們致力於建立長期合作關係，成為您最值得信賴的清潔夥伴。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">English</h4>
                      <p className="text-gray-600 text-sm">
                        Transparent service processes, honest pricing policies, and comprehensive after-sales protection. We are committed to building long-term partnerships and becoming your most trusted cleaning partner.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              準備好體驗專業的民宿整理服務了嗎？
            </h3>
            <p className="text-lg mb-6 opacity-90">
              聯絡我們，讓我們為您的民宿創造完美的住宿環境
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <Button asChild size="lg" variant="brandSecondary">
                <a href={config.brand.googleForm} target="_blank" rel="noopener noreferrer">
                  立即預約服務
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
          </motion.div>
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
              聯絡資訊
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                                <a href={config.brand.line} target="_blank" rel="noopener noreferrer">
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
                              <div className="h-12 w-12 bg-brand-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white font-bold">址</span>
                              </div>
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
          </div>
        </div>
      </section>
    </div>
  )
}
