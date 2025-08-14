import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
  features: string[]
  delay?: number
}

export default function ServiceCard({ iconName, title, description, features, delay = 0 }: ServiceCardProps) {
  // 動態獲取圖示組件
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Sparkles

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
          <IconComponent className="h-8 w-8 text-brand-teal" />
        </div>
        <CardTitle className="text-xl font-semibold text-brand-navy">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
