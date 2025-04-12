
import { useEffect, useRef } from 'react';
import DownloadResume from "./download-resume";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-pink-200/20 to-purple-200/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-100/30 to-rose-100/30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-violet-100/20 to-purple-100/20 blur-3xl"></div>
      </div>
      
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-pink-100 text-pink-700 mb-5 animate-fade-in">
            Frontend Developer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
            Creating <span className="text-primary">beautiful</span> digital experiences
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            I craft elegant, responsive websites and applications that combine aesthetics with functionality, focusing on delightful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '450ms' }}>
            <a 
              href="#projects" 
              className="aesthetic-button"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-pink-200 text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-all"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Floating shapes for aesthetic decoration */}
          <div className="absolute -bottom-4 left-1/4 transform -translate-x-1/2 w-16 h-16 rounded-full border border-pink-200 opacity-60 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-10 left-1/3 transform -translate-x-1/2 w-10 h-10 rounded-full border border-pink-300 opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-2/5 transform -translate-x-1/2 w-6 h-6 rounded-full border border-purple-200 opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="absolute -bottom-6 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent">
      </div>
    </section>
  );
};

export default Hero;
