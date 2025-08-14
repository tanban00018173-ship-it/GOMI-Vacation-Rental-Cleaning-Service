import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, ArrowLeft, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '隱私權政策 - 狗米整理｜民宿整理服務',
  description: '狗米整理的隱私權政策，說明我們如何保護您的個人資料。了解資料蒐集、使用、保護及您的權利。',
  keywords: '狗米整理, 隱私權政策, 個人資料保護, 資料安全, 隱私保護',
  openGraph: {
    title: '隱私權政策 - 狗米整理｜民宿整理服務',
    description: '狗米整理的隱私權政策，說明我們如何保護您的個人資料。了解資料蒐集、使用、保護及您的權利。',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            隱私權政策
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            了解我們如何保護您的個人資料
          </p>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="btn-outline">
              <Link href="/legal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回法律資訊
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              隱私權政策 Privacy Policy
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto mb-4"></div>
            <p className="text-gray-600">
              最後更新日期：2025 年 8 月 14 日
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* 1. 資料蒐集 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>1. 資料蒐集</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  本公司僅於您透過外部 Google 表單或 LINE 官方帳號主動提供時，蒐集您的個人資料，包括但不限於：姓名、聯絡電話、電子郵件、服務地址及其他必要資訊。
                </p>
              </CardContent>
            </Card>

            {/* 2. 資料使用目的 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>2. 資料使用目的</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  蒐集之資料僅用於：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>提供並履行本公司之清潔與備品補充服務</li>
                  <li>聯絡與安排服務時間</li>
                  <li>實施顧客滿意度追蹤與售後服務</li>
                  <li>符合法令或主管機關要求之義務</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. 資料保護 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>3. 資料保護</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  本公司採取合理的技術與管理措施，確保您的個人資料免於遺失、竊取、未經授權之存取、使用、修改或洩漏。
                </p>
              </CardContent>
            </Card>

            {/* 4. 資料揭露 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>4. 資料揭露</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  除非事先取得您的同意或依法律規定，本公司不會向第三方揭露您的個人資料。但以下情況除外：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>依法令規定或主管機關要求</li>
                  <li>為防止危害人身安全或財產之重大危險</li>
                </ul>
              </CardContent>
            </Card>

            {/* 5. 資料存續期間 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>5. 資料存續期間</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  您的個人資料將保存至服務目的達成後或法令要求之保存期間屆滿為止，屆時將予以刪除或匿名化處理。
                </p>
              </CardContent>
            </Card>

            {/* 6. 聯絡方式 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>6. 聯絡方式</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  如有任何關於隱私權政策的疑問，請聯絡：
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">瓏會算有限公司</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>地址：宜蘭縣宜蘭市陽明三路65號</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>客服電話：0963-350089</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            對隱私權政策有疑問嗎？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            我們隨時為您提供協助，歡迎聯絡我們
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/contact">
                聯絡我們
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline">
              <Link href="/legal">
                返回法律資訊
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
