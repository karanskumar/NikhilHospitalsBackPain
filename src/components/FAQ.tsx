import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is a minimally invasive spine procedure?',
    answer: 'It is a modern treatment that relieves back and leg pain through very small incisions, instead of traditional open surgery. This usually means less pain, smaller scars, and a much faster recovery.'
  },
  {
    question: 'Will I really be discharged the same day?',
    answer: 'Most of our day-care spine procedures are completed within a few hours, and the majority of patients are discharged the same day with minimal downtime. Your specialist will confirm what to expect for your specific condition.'
  },
  {
    question: 'Am I a candidate for a day-care spine procedure?',
    answer: 'If your back pain is affecting your work, sleep, travel or daily life — or you have leg pain, numbness or tingling — you may be a candidate. A short evaluation with our spine specialist will determine the right option for you.'
  },
  {
    question: 'How long is the recovery?',
    answer: 'Because these procedures are minimally invasive, most patients return to light daily activities much sooner than with open surgery. Your specialist will give you a personalised recovery plan.'
  },
  {
    question: 'Do I need surgery, or are there other options?',
    answer: 'Not everyone needs surgery. Wherever possible, we recommend the least invasive approach that will give you lasting relief. The evaluation helps identify the most effective option for your condition.'
  },
  {
    question: 'What should I bring for my evaluation?',
    answer: 'Please bring any previous medical records, MRI or X-ray reports, your current medications list, and a valid ID. Wear comfortable clothing.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about day-care spine treatment
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Schedule Your Evaluation
          </a>
        </div>
      </div>
    </section>
  );
}
