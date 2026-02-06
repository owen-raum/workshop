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
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left rounded-lg hover:bg-white/5 group transition-colors duration-200"
      >
        <span className="text-lg md:text-xl font-bold text-white pr-8 group-hover:text-blue-400 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-all duration-300 group-hover:text-blue-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={2}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 text-gray-300 text-base md:text-lg leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
