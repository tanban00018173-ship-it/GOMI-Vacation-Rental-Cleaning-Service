import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { getConfig } from '@/lib/data'

export default function Footer() {
  const config = getConfig()

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/LOGO.png"
                alt="狗米整理 Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">狗米整理</h3>
                <p className="text-sm text-gray-300">民宿清潔服務</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              {config.brand.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">聯絡資訊</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{config.brand.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{config.brand.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>LINE 官方帳號</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">快速連結</h4>
            <div className="space-y-2 text-sm">
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                服務內容
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                價格方案
              </Link>
              <Link href="/process" className="block text-gray-300 hover:text-white transition-colors">
                服務流程
              </Link>
              <Link href="/cases" className="block text-gray-300 hover:text-white transition-colors">
                成功案例
              </Link>
              <Link href="/reviews" className="block text-gray-300 hover:text-white transition-colors">
                客戶評價
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">法律資訊</h4>
            <div className="space-y-2 text-sm">
              <Link href="/legal" className="block text-gray-300 hover:text-white transition-colors">
                法律資訊
              </Link>
              <Link href="/legal/privacy" className="block text-gray-300 hover:text-white transition-colors">
                隱私權政策
              </Link>
              <Link href="/legal/terms" className="block text-gray-300 hover:text-white transition-colors">
                服務條款
              </Link>
              <Link href="/join" className="block text-gray-300 hover:text-white transition-colors">
                招募專區
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              <p>&copy; 2024 {config.brand.company}. 保留所有權利。</p>
              <p className="mt-1">{config.legal.compliance}</p>
            </div>
            <div className="flex space-x-4">
              <Link href={config.brand.googleForm}>
                <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  立即預約
                </button>
              </Link>
              <Link href={config.brand.line}>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  LINE 諮詢
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
