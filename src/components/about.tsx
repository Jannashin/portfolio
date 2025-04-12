
import { useEffect, useRef } from 'react';
import DownloadResume from './download-resume';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);
  
  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Figma", level: 85 }
  ];
  
  return (
    <section id="about" className="section-container bg-gradient-to-b from-white to-pink-50/50 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-purple-50 blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-pink-50 blur-3xl opacity-40 -z-10"></div>
      
      <div ref={sectionRef} className="reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-700 mb-4">
              About Me
            </span>
            <h2 className="section-title relative inline-block decorated-border mb-10">
              Frontend Developer & UI Designer
            </h2>
            <div className="space-y-5 text-gray-600">
              <p>
                I create elegant digital experiences with a keen eye for design and attention to detail. 
                My approach combines aesthetic beauty with functional, intuitive interfaces that delight users.
              </p>
              <p>
                With a passion for frontend development, I transform creative concepts into responsive, 
                accessible websites that work beautifully across all devices and platforms.
              </p>
              <p>
                When I'm not coding, you'll find me exploring design trends, creating art, 
                or seeking inspiration in nature and everyday beauty.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className="aesthetic-button"
              >
                Get in Touch
              </a>
              <DownloadResume
                resumeUrl=".\resume_jannashin.pdf"
                className="inline-flex items-center justify-center px-8 py-6 border border-pink-200 text-gray-700 rounded-full font-medium hover:bg-pink-50 transition-all"
                />
            </div>
          </div>
          
          <div className="space-y-6 relative">
            <h3 className="text-xl font-display font-semibold">Skills & Expertise</h3>
            <div className="space-y-5 relative z-10">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-pink-100/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-400 to-primary rounded-full transition-all duration-1000 ease-out" 
                      style={{ 
                        width: '0%', 
                        transitionDelay: '300ms' 
                      }}
                      ref={(el) => {
                        if (el && sectionRef.current?.classList.contains('active')) {
                          setTimeout(() => {
                            el.style.width = `${skill.level}%`;
                          }, 300);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-pink-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border border-pink-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
