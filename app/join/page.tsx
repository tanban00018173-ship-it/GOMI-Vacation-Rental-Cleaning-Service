import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, ArrowRight, CheckCircle, ExternalLink, MessageCircle, FileText, DollarSign } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '招募專區 - 狗米整理｜民宿整理服務',
  description: '加入狗米整理團隊，成為專業民宿清潔與備品補充夥伴。提供彈性接案機會、專業培訓與督導制度。',
  keywords: '狗米整理, 招募專區, 職缺, 清潔人員, 民宿清潔, 備品補充, 工作機會',
  openGraph: {
    title: '招募專區 - 狗米整理｜民宿整理服務',
    description: '加入狗米整理團隊，成為專業民宿清潔與備品補充夥伴。提供彈性接案機會、專業培訓與督導制度。',
    type: 'website',
  },
}

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
            招募專區
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            加入狗米 GOMI 團隊，成為專業民宿清潔與備品補充夥伴
          </p>
        </div>
      </section>

      {/* We Are Looking For Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              我們尋找
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">細心負責</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  細心、負責、有時間彈性的人員
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">相關經驗</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  擁有餐旅、清潔或管家經驗者佳
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">具機動性</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  具機動性（自備交通工具）者優先
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* We Provide Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              我們提供
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">彈性接案</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  彈性接案機會，依您的時間安排
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-teal rounded-full w-16 h-16 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">按件計酬</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  按件計酬（依清潔規模與難易度計算）
                </p>
              </CardContent>
            </Card>

            <Card className="card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">專業培訓</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  專業培訓與督導制度
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              申請方式
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card">
              <CardContent className="prose prose-lg max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">中文</h3>
                    <p className="text-gray-700 leading-relaxed">
                      加入我們的清潔社群後請透過招募專用 Google 表單提交申請，我們將於收到資料後與您聯繫。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">English</h3>
                    <p className="text-gray-700 leading-relaxed">
                      After joining our cleaning community, please submit your application through our recruitment Google form. We will contact you after receiving your information.
                    </p>
                  </div>

                  <div className="bg-brand-teal/10 rounded-lg p-4">
                    <p className="text-gray-700 font-semibold">
                      您已被邀請加入「狗米民宿整理」！請點選以下連結加入社群：
                    </p>
                    <div className="mt-3">
                      <Button asChild className="btn-primary">
                        <a href="https://line.me/ti/g2/DTASF-rDddw60tkuv_rhhKbTC6oPSl-Elp6OuA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          加入 LINE 社群
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            準備好加入我們了嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            成為狗米整理團隊的一員，一起為宜蘭地區的民宿提供優質服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="https://line.me/ti/g2/DTASF-rDddw60tkuv_rhhKbTC6oPSl-Elp6OuA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                加入 LINE 社群
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-navy hover:bg-gray-100">
              <Link href="/contact">
                <FileText className="mr-2 h-5 w-5" />
                聯絡我們
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
