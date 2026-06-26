import { Activity, CheckCircle2 } from 'lucide-react';
import { LeadForm } from './LeadForm';

const highlights = [
  'Same-Day Discharge',
  'No Prolonged Hospital Stay',
  'Quick Recovery',
  'Return to Daily Activities Faster',
];

export function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Activity className="w-4 h-4" />
              Advanced Day-Care Spine Treatments
            </div>

            <h1 className="text-gray-900 font-bold text-[40px] md:text-[52px] leading-tight">
              Walk In With Pain.{' '}
              <span className="text-blue-600">Walk Out With Relief.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600">
              If your back pain is preventing you from working, sleeping, traveling, or
              enjoying life, you may be a candidate for a{' '}
              <span className="font-semibold text-gray-800">minimally invasive spine procedure</span>.
            </p>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                Most procedures are completed within hours, with minimal downtime — so you can
                get back to the life you've been missing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
