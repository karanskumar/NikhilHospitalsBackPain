import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SymptomsSection } from './components/SymptomsSection';
import { TreatmentSection } from './components/TreatmentSection';
import { DoctorSection } from './components/DoctorSection';
import { NikhilSpineCare } from './components/NikhilSpineCare';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SymptomsSection />
      <DoctorSection />
      <TreatmentSection />
      <NikhilSpineCare />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
