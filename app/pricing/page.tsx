import { Metadata } from 'next'
import { getConfig } from '@/lib/data'
import PricingPageClient from './PricingPageClient'

export const metadata: Metadata = {
  title: '價格方案 - 狗米整理｜民宿清潔服務',
  description: '透明化的價格方案，包含單間清潔、包棟計價、包月服務等收費標準。',
}

export default async function PricingPage() {
  const config = await getConfig()
  
  return <PricingPageClient config={config} />
}
