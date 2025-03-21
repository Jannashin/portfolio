
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submitted state after a delay
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section-container relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div ref={sectionRef} className="reveal">
        <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="relative inline-block">
          <span className="absolute -top-3 -left-3 px-3 py-1 text-sm font-medium rounded-full bg-pink-100 text-pink-700 z-10">
            Get In Touch
          </span>
          <h2 className="section-title relative inline-block decorated-border decorated-border text-4xl md:text-5xl font-bold pt-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'd love to hear about your project or answer any questions you might have. 
            Feel free to reach out and I'll get back to you soon!
          </p>
        </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 shadow-lg border border-pink-100">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 bg-white/80 border border-pink-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 bg-white/80 border border-pink-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="block w-full px-4 py-3 bg-white/80 border border-pink-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  placeholder="Your message"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={cn(
                    "w-full aesthetic-button",
                    (isSubmitting || submitted) ? "opacity-80 cursor-not-allowed" : ""
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
