'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { getConfig } from '@/lib/data'

export default function Hero() {
  const config = getConfig()

  return (
    <section className="relative bg-gradient-to-br from-brand-light to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight"
              >
                民宿整理交給專業
                <br />
                <span className="text-brand-teal">讓房客每次打開門都說 WOW</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                標準化清潔SOP × 照片驗收 × 每月督導抽查
                <br />
                從頭到尾不處理垃圾或載運廢棄物（依法合規）
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-teal" />
                <span className="text-gray-700">標準化清潔流程，品質一致</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-teal" />
                <span className="text-gray-700">照片驗收制度，透明化服務</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-teal" />
                <span className="text-gray-700">每月督導抽查，持續改善</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
                  LINE 洽詢
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500">
                <strong>服務區域：</strong>宜蘭全區 • <strong>服務時間：</strong>週一至週日 8:00-18:00
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="專業民宿清潔服務"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-navy">500+</div>
                  <div className="text-sm text-gray-600">服務民宿</div>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-brand-teal/95 backdrop-blur-sm rounded-xl p-4 shadow-lg text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">5.0</div>
                  <div className="text-sm">客戶評分</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full translate-y-32 -translate-x-32"></div>
    </section>
  )
}
