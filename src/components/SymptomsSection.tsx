import { ArrowDownRight, Armchair, Footprints, RefreshCw, Zap, AlertTriangle } from 'lucide-react';

const symptoms = [
  {
    icon: ArrowDownRight,
    text: 'Pain radiating down the leg?',
  },
  {
    icon: Armchair,
    text: 'Difficulty sitting for long periods?',
  },
  {
    icon: Footprints,
    text: 'Pain while walking?',
  },
  {
    icon: RefreshCw,
    text: 'Repeated episodes of back pain?',
  },
  {
    icon: Zap,
    text: 'Numbness or tingling in the legs?',
  },
];

export function SymptomsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Is This You?
          </h2>
          <p className="text-lg text-gray-600">
            If you recognise any of these, your spine may need attention.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <symptom.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-gray-800 font-medium">{symptom.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <span className="text-lg font-semibold">Don't ignore the warning signs.</span>
          </div>
          <div className="mt-8">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              Schedule Your Evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
