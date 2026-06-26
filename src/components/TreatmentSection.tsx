import { Disc3, Activity, Bone, ShieldCheck, Clock, Home, Gauge, HeartPulse, CheckCircle2 } from 'lucide-react';

const conditions = [
  {
    icon: Disc3,
    name: 'Herniated / Slipped Disc',
    description: 'Targeted relief for disc bulges pressing on spinal nerves',
  },
  {
    icon: Activity,
    name: 'Sciatica',
    description: 'Pain radiating from the lower back down the leg',
  },
  {
    icon: Bone,
    name: 'Spinal Stenosis',
    description: 'Narrowing of the spinal canal causing pain and numbness',
  },
  {
    icon: Disc3,
    name: 'Degenerative Disc Disease',
    description: 'Age-related wear that triggers chronic back pain',
  },
  {
    icon: Activity,
    name: 'Facet Joint Pain',
    description: 'Persistent pain from inflamed spinal joints',
  },
  {
    icon: Bone,
    name: 'Recurring Lower Back Pain',
    description: 'Repeated episodes that disrupt work and sleep',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Same-Day Discharge',
    description: 'Most procedures are completed within hours — go home the same day.',
  },
  {
    icon: Home,
    title: 'No Prolonged Hospital Stay',
    description: 'Day-care treatment means no long, draining admissions.',
  },
  {
    icon: Gauge,
    title: 'Quick Recovery',
    description: 'Minimally invasive techniques mean smaller incisions and less downtime.',
  },
  {
    icon: HeartPulse,
    title: 'Return to Daily Activities Faster',
    description: 'Get back to working, sleeping, and moving without the pain holding you back.',
  },
];

export function TreatmentSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Advanced Day-Care Spine Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minimally invasive procedures designed to relieve chronic back pain with minimal
            downtime — so you can get back to life faster.
          </p>
        </div>

        {/* Conditions Treated */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 mb-8 text-center font-bold">Conditions We Treat</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2 font-bold">{item.name}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl text-gray-900 mb-2 text-center font-bold">
            Why Choose Minimally Invasive Day-Care Treatment?
          </h3>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Modern spine care that fits your life — not the other way around.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl shadow-lg">
              <ShieldCheck className="w-7 h-7" />
              <span className="text-lg font-semibold">
                A short evaluation tells you if a day-care procedure is right for you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
