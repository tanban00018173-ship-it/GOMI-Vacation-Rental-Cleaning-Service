import { Metadata } from 'next'
import { getConfig } from '@/lib/data'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: '服務內容 - 狗米整理｜民宿清潔服務',
  description: '專業民宿清潔服務內容，包含房間清潔、衛浴消毒、備品補充、照片驗收等服務項目。',
}

export default async function ServicesPage() {
  const config = await getConfig()
  
  return <ServicesPageClient config={config} />
}
