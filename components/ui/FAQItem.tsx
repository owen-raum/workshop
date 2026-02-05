'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[rgba(34,34,34,0.12)] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-center justify-between text-left group transition-all duration-300"
      >
        <span className="font-display text-xl md:text-2xl font-semibold text-gray-900 pr-8 group-hover:text-gray-700 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 text-gray-600 text-lg leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
