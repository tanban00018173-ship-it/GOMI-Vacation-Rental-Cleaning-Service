import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getConfig } from '@/lib/data'
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Shield, 
  Clock,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: '關於我們 - 狗米整理｜民宿整理服務',
  description: '了解狗米整理的品牌故事、創辦團隊與價值主張。我們致力於為宜蘭地區民宿提供專業、標準化的清潔服務。',
  keywords: '狗米整理, 民宿清潔, 宜蘭清潔服務, 品牌故事, 創辦團隊, 價值主張',
  openGraph: {
    title: '關於我們 - 狗米整理｜民宿整理服務',
    description: '了解狗米整理的品牌故事、創辦團隊與價值主張。我們致力於為宜蘭地區民宿提供專業、標準化的清潔服務。',
    type: 'website',
  },
}

export default async function AboutPage() {
  const config = await getConfig()
  
  return <AboutPageClient config={config} />
}
