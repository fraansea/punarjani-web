import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { ConditionsSection } from '@/components/landing/ConditionsSection';
import { DoctorSection } from '@/components/landing/DoctorSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { Footer } from '@/components/landing/Footer';

function useScrollFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('animate-scroll-fade-in');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useStaggeredScrollFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            node.classList.add('animate-scroll-fade-in');
          }, delay);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

const Index: React.FC = () => {
  const heroRef = useScrollFadeIn();
  const [visibleParts, setVisibleParts] = useState<number[]>([]);
  const headlineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const newVisibleParts: number[] = [];
    const viewportThreshold = window.innerHeight * 0.8;

    headlineRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportThreshold) {
        newVisibleParts.push(i);
      }
    });

    setVisibleParts(prev => {
      if (newVisibleParts.length !== prev.length) {
        return newVisibleParts;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const headlineParts = useMemo(() => [
    <span key="0">Experience safe
      <span className="inline-block align-middle ml-2 mr-2">
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-200">
          <img src="/love.png" alt="heart hand" className="w-12 h-12" loading="lazy" />
        </span>
      </span>
      <span className="text-gray-500">effective holistic</span>
    </span>,
    <span key="1" className="text-gray-500">healing</span>,
    <span key="2">
      <span className="inline-block align-middle mr-2">
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
          <img src="/medicine.png" alt="pill" className="w-12 h-12" loading="lazy" />
        </span>
      </span>
      with Electro Acupuncture,<span className="text-gray-500"> Cupping</span>
    </span>,
    <span key="3" className="text-gray-500">Therapy,</span>,
    <span key="4">Yoga
      <span className="inline-block align-middle ml-2 mr-2">
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-100">
          <img src="/yoga.png" alt="yoga" className="w-12 h-12" loading="lazy" />
        </span>
      </span>
      and
    </span>,
    <span key="5">Herbal Therapy for lasting</span>,
    <span key="6" className="flex items-center justify-center gap-4">well-being
      <span className="inline-block align-middle ml-2">
        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 overflow-hidden">
          <img src="/twodoc.png" alt="doctor" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
        </span>
      </span>
    </span>,
  ], []);

  const servicesRef = useScrollFadeIn();
  const conditionsRef = useScrollFadeIn();
  const doctorRef = useScrollFadeIn();
  const testimonialsRef = useScrollFadeIn();
  const footerRef = useScrollFadeIn();
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center py-11">
      <main className="flex flex-col relative w-full max-w-[1361px] items-stretch">
        <div ref={heroRef}><HeroSection /></div>
        <section className="text-black text-[72px] font-normal leading-[88px] text-center mt-[119px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px] max-md:mt-10">
          <h2 className="flex flex-col items-center gap-2">
            {headlineParts.map((part, i) => (
              <span
                key={i}
                ref={el => (headlineRefs.current[i] = el)}
                className={`transition-all duration-700 will-change-transform ${
                  visibleParts.includes(i) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  minHeight: '110px',
                  transform: 'translateZ(0)',
                }}
              >
                {part}
              </span>
            ))}
          </h2>
        </section>
        <div ref={servicesRef}><ServicesSection /></div>
        <div ref={conditionsRef}><ConditionsSection /></div>
        <div ref={doctorRef}><DoctorSection /></div>
        <div ref={testimonialsRef}><TestimonialsSection /></div>
        <div ref={footerRef}><Footer /></div>
      </main>
    </div>
  );
};

export default React.memo(Index);
