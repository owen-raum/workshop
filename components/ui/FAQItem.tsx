'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-center justify-between text-left group transition-all duration-300"
      >
        <span className="font-display text-xl font-bold text-slate-900 pr-8 group-hover:text-orange-600 transition-colors">
          {question}
        </span>
        <svg
          className={`w-7 h-7 text-orange-600 flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180 scale-110' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 text-slate-700 text-lg leading-relaxed font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
}
