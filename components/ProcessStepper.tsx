'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessStepperProps {
  steps: ProcessStep[]
}

export default function ProcessStepper({ steps }: ProcessStepperProps) {
  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start space-x-6"
          >
            {/* Step indicator */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                {step.step}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
