import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ConditionsSection } from '@/components/landing/ConditionsSection';
import { DoctorSection } from '@/components/landing/DoctorSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { Footer } from '@/components/landing/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-11">
      <main className="flex flex-col relative w-full max-w-[1361px] items-stretch">
        <HeroSection />
        
        <section className="text-black text-[72px] font-normal leading-[88px] text-center mt-[119px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px] max-md:mt-10">
          <h2 className="flex flex-col items-center gap-2">
            <span>
              Experience safe
              <span className="inline-block align-middle ml-2 mr-2">
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-200">
                  <img src="/love.png" alt="heart hand" className="w-12 h-12" />
                </span>
              </span>
              <span className="text-gray-500">effective holistic healing</span>
            </span>
            <span>
              <span className="inline-block align-middle mr-2">
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                  <img src="/medicine.png" alt="pill" className="w-12 h-12" />
                </span>
              </span>
              with Electro Acupuncture,
              <span className="text-gray-500"> Cupping Therapy,</span>
              <span className="ml-2">Yoga</span>
              <span className="inline-block align-middle ml-2 mr-2">
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-100">
                  <img src="/yoga.png" alt="yoga" className="w-12 h-12" />
                </span>
              </span>
              and
            </span>
            <span>
              Herbal Therapy for lasting
            </span>
            <span className="flex items-center justify-center gap-4">
              well-being
              <span className="inline-block align-middle ml-2">
                <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 overflow-hidden">
                  <img src="/twodoc.png" alt="doctor" className="w-16 h-16 rounded-full object-cover" />
                </span>
              </span>
            </span>
          </h2>
        </section>

        <ServicesSection />
        
        <ConditionsSection />
        
        <DoctorSection />
        
        <TestimonialsSection />
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
