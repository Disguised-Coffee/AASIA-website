"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { PortableText } from "next-sanity"

interface FAQ {
  question: string
  answer: Array<any>
}

interface FAQSectionProps {
  title: string
  faqs: FAQ[]
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  console.log(faqs.map(faq => faq.answer))

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">{title}</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            >
              <span className="text-gray-900 font-medium text-sm md:text-base pr-4">{faq.question}</span>
              <Plus
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                  openItems.includes(index) ? "rotate-45" : ""
                }`}
              />
            </button>

            {openItems.includes(index) && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-sm md:text-base leading-relaxed">
                <PortableText value={faq.answer} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
