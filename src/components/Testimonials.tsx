import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 52,
    text: 'I had pain shooting down my leg for months and could barely sit at work. The day-care procedure took just a few hours and I went home the same day. I\'m finally back to my normal routine.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    age: 45,
    text: 'I was scared of spine surgery, but the minimally invasive treatment was nothing like I feared. No long hospital stay, and my recovery was much quicker than I expected.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    age: 58,
    text: 'Years of recurring back pain finally gone. The team explained everything clearly and the relief was almost immediate. I can walk and travel again without dreading the pain.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by patients across the region for lasting relief from back pain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-100 relative">
              <Quote className="w-10 h-10 text-blue-200 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-blue-200 pt-4">
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">Age: {testimonial.age}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Patient stories shown for illustration. Replace with real, consented testimonials before publishing.
        </p>
      </div>
    </section>
  );
}
