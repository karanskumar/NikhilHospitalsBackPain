import { Clock, Microscope, ShieldCheck, Users, Activity, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Dedicated Spine Care Team',
    description: 'Spine specialists, pain experts and physiotherapists working together on your recovery',
  },
  {
    icon: Microscope,
    title: 'Minimally Invasive Technology',
    description: 'Advanced day-care techniques for disc, nerve and spinal procedures with smaller incisions',
  },
  {
    icon: Clock,
    title: 'Day-Care Procedures',
    description: 'Most treatments completed within hours, with same-day discharge and minimal downtime',
  },
  {
    icon: Activity,
    title: 'Advanced Diagnostics',
    description: 'Accurate evaluation of the source of your pain before any treatment is recommended',
  },
  {
    icon: ShieldCheck,
    title: 'Surgery-Sparing Options',
    description: 'Wherever possible, relief through the least invasive approach for your condition',
  },
  {
    icon: Users,
    title: 'Personalised Recovery Plans',
    description: 'Guided rehabilitation to help you return to daily activities faster and stay pain-free',
  },
];

export function NikhilSpineCare() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-teal-600 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Spine Care at Nikhil Hospitals
          </h2>
          <p className="text-xl md:text-2xl text-blue-100">
            Advanced, Minimally Invasive Treatment for Chronic Back Pain
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-3 font-bold">{feature.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-medium">
              Experience advanced spine care, close to home, at Nikhil Hospitals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
