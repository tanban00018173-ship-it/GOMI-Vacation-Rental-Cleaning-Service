import { Metadata } from 'next'
import { getConfig, getFAQ } from '@/lib/data'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: '聯絡我們 - 狗米整理｜民宿整理服務',
  description: '聯絡狗米整理，預約專業的民宿清潔服務。提供多種聯絡方式：LINE官方帳號、電話預約、Google表單。服務宜蘭地區民宿。',
  keywords: '狗米整理, 民宿清潔, 宜蘭清潔服務, 聯絡方式, 預約服務, LINE官方帳號',
  openGraph: {
    title: '聯絡我們 - 狗米整理｜民宿整理服務',
    description: '聯絡狗米整理，預約專業的民宿清潔服務。提供多種聯絡方式：LINE官方帳號、電話預約、Google表單。服務宜蘭地區民宿。',
    type: 'website',
  },
}

export default async function ContactPage() {
  const config = await getConfig()
  const faqs = await getFAQ()
  
  return <ContactPageClient config={config} faqs={faqs} />
}
