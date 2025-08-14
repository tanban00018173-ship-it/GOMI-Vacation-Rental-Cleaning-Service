'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getConfig } from '@/lib/data'

const navigation = [
  { name: '首頁', href: '/' },
  { name: '服務內容', href: '/services' },
  { name: '價格方案', href: '/pricing' },
  { name: '服務流程', href: '/process' },
  { name: '成功案例', href: '/cases' },
  { name: '客戶評價', href: '/reviews' },
  { name: '常見問題', href: '/faq' },
  { name: '關於我們', href: '/about' },
  { name: '聯絡預約', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const config = getConfig()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/LOGO.png"
                alt="狗米整理 Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-brand-navy">狗米整理</h1>
                <p className="text-sm text-gray-600">民宿清潔服務</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-navy hover:bg-brand-light rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-200"
              asChild
            >
              <Link href={`tel:${config.brand.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                馬上聯絡
              </Link>
            </Button>
            <Button
              className="bg-brand-teal hover:bg-brand-teal/90 text-white transition-all duration-200"
              size="sm"
              asChild
            >
              <Link href={config.brand.line}>
                <MessageCircle className="h-4 w-4 mr-2" />
                LINE 諮詢
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="space-y-1 px-2 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-navy hover:bg-brand-light rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 px-2">
                <Button
                  variant="outline"
                  className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  asChild
                >
                  <Link href={`tel:${config.brand.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {config.brand.phone}
                  </Link>
                </Button>
                <Button
                  className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white"
                  asChild
                >
                  <Link href={config.brand.line}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    LINE 諮詢
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
