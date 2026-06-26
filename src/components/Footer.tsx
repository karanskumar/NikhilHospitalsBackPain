import { Phone, Mail, MapPin } from 'lucide-react';
import nikhilHospitalsLogo from 'figma:asset/41ad6b3d3fdcacc3610dd592e5f067197cdefa95.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={nikhilHospitalsLogo}
                alt="Nikhil Hospitals"
                className="h-16 w-auto m-[0px]"
              />
            </div>
            <p className="text-gray-400 text-[15px]">
              Advanced, minimally invasive spine care to help you live free from chronic back pain.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 font-bold">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+914071241111" className="hover:text-white transition-colors">
                  +91 40 7124 1111
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:info@nikhilhospitals.com" className="hover:text-white transition-colors">
                  info@nikhilhospitals.com
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg mb-4 font-bold">Our Locations</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white mb-1">Dilsukhnagar</div>
                  <a
                    href="https://share.google/GRiUPx8GJDCbXjMt5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white mb-1">Srinagar Colony</div>
                  <a
                    href="https://share.google/VN03YElT4GcVJEqPJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Nikhil Hospitals. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Dedicated to your spine health and a pain-free life
          </p>
        </div>
      </div>
    </footer>
  );
}
