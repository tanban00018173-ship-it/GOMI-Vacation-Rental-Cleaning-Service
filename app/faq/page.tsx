import { Metadata } from 'next'
import { getConfig, getFAQ } from '@/lib/data'
import FAQPageClient from './FAQPageClient'

export const metadata: Metadata = {
  title: '常見問題 - 狗米整理｜民宿整理服務',
  description: '狗米整理民宿清潔服務的常見問題解答。了解服務範圍、價格、流程、品質保證等相關資訊。',
  keywords: '狗米整理, 民宿清潔, 常見問題, FAQ, 服務範圍, 價格, 流程',
  openGraph: {
    title: '常見問題 - 狗米整理｜民宿整理服務',
    description: '狗米整理民宿清潔服務的常見問題解答。了解服務範圍、價格、流程、品質保證等相關資訊。',
    type: 'website',
  },
}

export default async function FAQPage() {
  const config = await getConfig()
  const faqs = await getFAQ()
  
  return <FAQPageClient config={config} faqs={faqs} />
}
