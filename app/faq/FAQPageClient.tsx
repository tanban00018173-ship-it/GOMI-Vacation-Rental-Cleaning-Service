'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { 
  HelpCircle, 
  ArrowRight, 
  MessageCircle,
  Shield,
  FileText,
  Scale
} from 'lucide-react'
import { motion } from 'framer-motion'

interface FAQPageClientProps {
  config: any
  faqs: any[]
}

export default function FAQPageClient({ config, faqs }: FAQPageClientProps) {
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
              常見問題
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              解答您對狗米整理民宿清潔服務的疑問
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <a href={config.googleForm} target="_blank" rel="noopener noreferrer">
                  立即預約服務
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline">
                <a href={config.line} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  LINE 諮詢
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              常見問題解答
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-brand-teal flex-shrink-0" />
                      <span className="font-semibold text-brand-navy">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Legal Notice Section */}
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
              法律聲明
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">依法合規</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    本服務依法合規，不涉及垃圾載運業務，專注於專業清潔服務
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
              <Card className="card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">服務條款</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    詳細的服務條款和隱私權政策，保障您的權益
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
              <Card className="card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">品質保證</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    標準化SOP確保服務品質，照片驗收機制保障您的權益
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
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
              服務特色
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">標準化SOP</h3>
                <p className="text-sm opacity-90">每個步驟都有標準作業程序</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-brand-teal to-brand-navy rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">照片驗收</h3>
                <p className="text-sm opacity-90">清潔前後對比照片</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">每月督導</h3>
                <p className="text-sm opacity-90">資深主管定期抽查</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-brand-teal to-brand-navy rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">依法合規</h3>
                <p className="text-sm opacity-90">不涉及垃圾載運業務</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              還有其他問題嗎？
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              如果以上問題無法解答您的疑問，歡迎直接聯絡我們
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href={config.googleForm} target="_blank" rel="noopener noreferrer">
                  填寫預約表單
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-brand-navy hover:bg-gray-100">
                <a href={config.line} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
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
