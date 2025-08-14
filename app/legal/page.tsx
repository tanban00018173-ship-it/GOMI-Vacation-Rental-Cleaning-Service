import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, FileText, Scale, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '法律資訊 - 狗米整理｜民宿整理服務',
  description: '狗米整理的法律資訊、隱私權政策、服務條款及招募專區。了解我們的法規遵循與客戶權益保障。',
  keywords: '狗米整理, 法律資訊, 隱私權政策, 服務條款, 招募專區, 法規遵循',
  openGraph: {
    title: '法律資訊 - 狗米整理｜民宿整理服務',
    description: '狗米整理的法律資訊、隱私權政策、服務條款及招募專區。了解我們的法規遵循與客戶權益保障。',
    type: 'website',
  },
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            法律資訊
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            了解狗米整理的法規遵循與客戶權益保障
          </p>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              法律資訊 Legal Information
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card">
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  本網站由 <strong>瓏會算有限公司</strong>（以下簡稱「本公司」）建立與維護，提供「狗米整理｜民宿整理服務」之資訊與相關服務。使用本網站或服務，即視為您已閱讀、瞭解並同意遵守本公司所訂之 <Link href="/legal/privacy" className="text-brand-teal hover:underline">隱私權政策</Link> 與 <Link href="/legal/terms" className="text-brand-teal hover:underline">服務條款</Link>。
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  本公司依法經營，遵循中華民國相關法令，包括但不限於《民法》、《消費者保護法》、《個人資料保護法》與《廢棄物清理法》。
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  如有任何疑問，您可透過本公司之聯絡方式與我們取得聯繫。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Pages Grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              相關文件
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">隱私權政策</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  了解我們如何保護您的個人資料
                </p>
                <Button asChild className="btn-primary">
                  <Link href="/legal/privacy">
                    查看詳情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">服務條款</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  詳細的服務規範與客戶權益
                </p>
                <Button asChild className="btn-secondary">
                  <Link href="/legal/terms">
                    查看詳情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">法規遵循</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  依法合規，不涉及垃圾載運業務
                </p>
                <div className="text-sm text-gray-500">
                  遵循相關法令規定
                </div>
              </CardContent>
            </Card>

            <Card className="card text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">招募專區</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  加入我們的專業團隊
                </p>
                <Button asChild variant="outline" className="btn-outline">
                  <Link href="/join">
                    查看職缺
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            有任何法律相關問題嗎？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            我們的專業團隊隨時為您提供協助
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/contact">
                聯絡我們
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline">
              <Link href="/faq">
                常見問題
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
