import { Award, GraduationCap, BadgeCheck, Star } from 'lucide-react';

export function DoctorSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Doctor Image/Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}Dr.NikhilSunkarineni.png`}
                alt="Dr. Nikhil Sunkarineni — Neurologist, Nikhil Hospitals"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900 font-bold">18+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm mb-4">
                Free Consultation Included
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
                Expert Care from Our Lead Neurologist
              </h2>
              <p className="text-gray-600">
                Back pain that radiates, tingles, or causes numbness is often a nerve problem.
                Get a personalised evaluation from one of Hyderabad's most experienced
                neurologists to find out exactly what's causing your pain.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-2xl text-gray-900 mb-1 font-bold">Dr. Nikhil Sunkarineni</h3>
              <p className="text-blue-600 mb-3">MBBS, DM (Neurology) — Neurologist</p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  <BadgeCheck className="w-4 h-4" />
                  Medical Registration Verified
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white text-gray-700 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  93% rating
                </span>
              </div>

              <p className="text-gray-600">
                Leading neurologist in Dilsukhnagar, Hyderabad and Head of Nikhil Hospitals,
                with extensive experience treating both surgical and non-surgical neurological
                conditions — including chronic and nerve-related back pain.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Distinguished Education</h4>
                  <p className="text-gray-600">MBBS from Dr. NTR University of Health Sciences; MD &amp; DM in Neurology from Jawaharlal Nehru Medical College</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Proven Experience</h4>
                  <p className="text-gray-600">Practised as a neurology specialist at Princess Esra Hospital, Metro Cure Hospital and Udai Omni Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
