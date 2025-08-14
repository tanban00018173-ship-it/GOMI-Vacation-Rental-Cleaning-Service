import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ArrowLeft, AlertTriangle, Clock, DollarSign, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '服務條款 - 狗米整理｜民宿整理服務',
  description: '狗米整理的服務條款，詳細說明服務範圍、預約取消、報價付款、客戶義務及責任限制等規範。',
  keywords: '狗米整理, 服務條款, 服務規範, 客戶權益, 預約取消, 報價付款',
  openGraph: {
    title: '服務條款 - 狗米整理｜民宿整理服務',
    description: '狗米整理的服務條款，詳細說明服務範圍、預約取消、報價付款、客戶義務及責任限制等規範。',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            服務條款
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            詳細的服務規範與客戶權益
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

      {/* Terms of Service Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              服務條款 Terms of Service
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto mb-4"></div>
            <p className="text-gray-600">
              最後更新日期：2025 年 8 月 14 日
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* 1. 服務範圍 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-brand-teal" />
                  <span>1. 服務範圍</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>本公司提供之服務包括民宿房務清潔、備品補充、入住前檢查、退房後整備及月度督導抽查等。</li>
                  <li>本公司不處理任何垃圾收集、載運或廢棄物處理業務，並依法合規提供服務。</li>
                </ul>
              </CardContent>
            </Card>

            {/* 2. 預約與取消 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-brand-teal" />
                  <span>2. 預約與取消</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>所有服務須透過 Google 表單或 LINE 官方帳號預約。</li>
                  <li>如需取消或更改時間，請於預定服務時間至少 24 小時前通知本公司，否則本公司有權收取相當於服務費用 50% 的取消費用。</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. 報價與付款 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-brand-teal" />
                  <span>3. 報價與付款</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>所有價格均以現場勘查為準，並於合約中載明。</li>
                  <li>付款方式將於報價確認時說明，須於服務當日或事前完成付款。</li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. 客戶義務 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-brand-teal" />
                  <span>4. 客戶義務</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>提供真實且完整的服務資訊（如房間數量、坪數、備品需求等）。</li>
                  <li>確保服務當日可進入清潔範圍並提供必要的進出協助。</li>
                </ul>
              </CardContent>
            </Card>

            {/* 5. 責任限制 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-brand-teal" />
                  <span>5. 責任限制</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  因天災、不可抗力或非本公司可控之因素導致服務延誤或無法履行，本公司不承擔賠償責任，但將盡力協助重新安排服務時間。
                </p>
              </CardContent>
            </Card>

            {/* 6. 條款變更 */}
            <Card className="card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-brand-teal" />
                  <span>6. 條款變更</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  本公司保留隨時修改本服務條款之權利，修改後將公告於本網站。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="card border-brand-teal">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-brand-navy">
                  <AlertTriangle className="h-6 w-6 text-brand-teal" />
                  <span>重要提醒</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-brand-teal/10 rounded-lg p-4 space-y-3">
                  <p className="text-gray-700 font-semibold">
                    • 本公司依法合規經營，不涉及垃圾載運業務
                  </p>
                  <p className="text-gray-700 font-semibold">
                    • 所有服務均需現場勘查後報價
                  </p>
                  <p className="text-gray-700 font-semibold">
                    • 請提前 24 小時通知取消或更改服務時間
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            對服務條款有疑問嗎？
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
