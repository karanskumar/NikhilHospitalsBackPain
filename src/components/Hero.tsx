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
    <section id="hero" className="relative bg-blue-900 py-16 md:py-24 overflow-hidden">
      {/* Background image + readability scrim */}
      <div className="absolute inset-0 -z-0">
        <img
          src={`${import.meta.env.BASE_URL}spine-hero.png`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/60 to-blue-800/25"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/25 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <Activity className="w-4 h-4" />
              Advanced Day-Care Spine Treatments
            </div>

            <h1 className="text-white font-bold text-[40px] md:text-[52px] leading-tight">
              Walk In With Pain.{' '}
              <span className="text-teal-300">Walk Out With Relief.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-50">
              If your back pain is preventing you from working, sleeping, traveling, or
              enjoying life, you may be a candidate for a{' '}
              <span className="font-semibold text-white">minimally invasive spine procedure</span>.
            </p>

            <div className="bg-white/95 border-l-4 border-teal-400 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">
                Most procedures are completed within hours, with minimal downtime — so you can
                get back to the life you've been missing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-300 flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
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
