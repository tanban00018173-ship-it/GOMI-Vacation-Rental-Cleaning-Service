'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Clock, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProcessPageClientProps {
  config: any
}

export default function ProcessPageClient({ config }: ProcessPageClientProps) {
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
              服務流程
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              從預約到完成，每個步驟都透明化，讓您安心託付
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

      {/* Process Steps */}
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
              完整服務流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              7個步驟，從諮詢到持續服務，每個環節都精心設計
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              
              <div className="space-y-8">
                {config.process.map((step: any, index: number) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Step indicator */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold text-brand-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
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
              服務特色
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              為什麼選擇狗米整理的服務流程？
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">標準化SOP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    每個步驟都有標準作業程序，確保服務品質一致
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">準時服務</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    嚴格遵守預約時間，不影響您的營業安排
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl text-brand-navy">服務宜蘭全區</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    服務範圍涵蓋宜蘭全區，無論您在哪裡都能享受專業服務
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              準備開始您的清潔服務？
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              立即預約現場勘查，我們將為您制定專屬的服務方案
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
