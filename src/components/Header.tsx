import { Phone } from 'lucide-react';
import nikhilHospitalsLogo from 'figma:asset/ac793006f526a76ad8ae9e8f2be734a4b79dfd9c.png';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          {/* Main Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src={nikhilHospitalsLogo}
              alt="Nikhil Hospitals"
              className="h-12 md:h-16 w-auto"
            />
            <span className="hidden sm:inline-block text-sm md:text-base text-blue-700 font-semibold border-l border-gray-200 pl-3">
              Spine &amp; Back Pain Care
            </span>
          </div>

          {/* Call CTA */}
          <a
            href="tel:+914071241111"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-5 py-2.5 rounded-lg transition-colors font-semibold text-sm md:text-base"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
