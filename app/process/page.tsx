import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ProcessStepper from '@/components/ProcessStepper'
import { getConfig } from '@/lib/data'
import { 
  ArrowRight, 
  MessageCircle,
  CheckCircle,
  Clock,
  Users,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: '服務流程 - 狗米整理｜民宿整理服務',
  description: '了解狗米整理的標準化服務流程：預約諮詢、現場勘查、報價簽約、專業清潔、品質驗收。',
  keywords: '狗米整理, 民宿清潔, 服務流程, 標準化SOP, 品質驗收',
  openGraph: {
    title: '服務流程 - 狗米整理｜民宿整理服務',
    description: '了解狗米整理的標準化服務流程：預約諮詢、現場勘查、報價簽約、專業清潔、品質驗收。',
    type: 'website',
  },
}

export default async function ProcessPage() {
  const config = await getConfig()

  const processSteps = [
    {
      step: 1,
      title: '預約諮詢',
      description: '透過LINE或電話與我們聯繫，了解您的需求'
    },
    {
      step: 2,
      title: '現場勘查',
      description: '專業人員到場勘查，了解備品補充方式、清潔重點與出入動線'
    },
    {
      step: 3,
      title: '報價與合約',
      description: '根據勘查結果提供詳細報價，簽訂服務合約（不含垃圾載運）'
    },
    {
      step: 4,
      title: '專業清潔',
      description: '依SOP進行標準化清潔，確保每個角落都得到專業照顧'
    },
    {
      step: 5,
      title: '品質驗收',
      description: '清潔完成後拍照驗收，確保品質符合標準'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            服務流程
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            標準化的服務流程，確保每個環節都達到專業水準
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
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              五步驟標準流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從預約到驗收，每個步驟都經過精心設計，確保服務品質
            </p>
          </div>

          <ProcessStepper steps={processSteps} />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              流程特色
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              為什麼選擇我們的服務流程？
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">標準化SOP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  每個步驟都有標準作業程序，確保服務品質一致性
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">準時可靠</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  嚴格遵守時間安排，讓您安心安排後續行程
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">專業團隊</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  經驗豐富的清潔專業人員，經過嚴格培訓認證
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">品質保證</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  照片驗收機制，確保每個細節都達到標準
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                重要提醒
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">現場勘查必要</h4>
                    <p className="opacity-90">
                      為提供準確報價，我們需要進行現場勘查，了解您的民宿狀況和特殊需求
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">不處理垃圾載運</h4>
                    <p className="opacity-90">
                      我們的服務範圍僅限於清潔整理，不包含垃圾或廢棄物的載運處理
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">照片驗收</h4>
                    <p className="opacity-90">
                      清潔完成後會提供前後對比照片，確保服務品質符合標準
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            準備開始您的第一次服務嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即聯絡我們，讓我們為您安排現場勘查和報價
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
        </div>
      </section>
    </div>
  )
}
