import { Metadata } from 'next'
import { getConfig } from '@/lib/data'
import ProcessPageClient from './ProcessPageClient'

export const metadata: Metadata = {
  title: '服務流程 - 狗米整理｜民宿清潔服務',
  description: '完整的民宿清潔服務流程，從預約到完成，每個步驟都透明化。',
}

export default async function ProcessPage() {
  const config = await getConfig()
  
  return <ProcessPageClient config={config} />
}
