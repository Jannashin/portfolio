
import { useEffect, useRef } from 'react';
import ProjectCard from './projectcard';

const Projects = () => {
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
  
  const projects = [
    {
      title: "Digital Portfolio",
      description: "A personal portfolio showcasing creative work with subtle animations and elegant typography.",
      image: "https://unsplash.com/photos/person-holding-ballpoint-pen-writing-on-notebook-505eectW54k",
      tags: ["Design", "React", "Framer Motion"],
      link: "#"
    },
    {
      title: "Cafe's Website",
      description: "A modern website design for a cafe with a clean layout, beautiful imagery, and smooth transitions.",
      image: "https://unsplash.com/photos/interior-of-a-coffee-shop-tKN1WXrzQ3s",
      tags: ["UI/UX", "Vite + React", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Creative Dashboard",
      description: "Intuitive analytics interface with beautiful data visualization and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Dashboard", "React", "Data Viz"],
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="section-container relative">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div ref={sectionRef} className="reveal">
      <div className="max-w-3xl mx-auto text-center mb-16">
  <div className="relative inline-block">
    <span className="absolute -top-3 -left-3 px-3 py-1 text-sm font-medium rounded-full bg-pink-100 text-pink-700 z-10">
      My Work
    </span>
    <h2 className="section-title relative inline-block decorated-border text-4xl md:text-5xl font-bold pt-4">
      Featured Projects
    </h2>
  </div>
  <p className="text-gray-600 max-w-2xl mx-auto mt-8">
    Explore a collection of my creative work showcasing beautiful design,
    intuitive user experiences, and clean code solutions.
  </p>
</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
  {projects.slice(0, 2).map((project, i) => (
    <ProjectCard
      key={i}
      index={i}
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tags}
      link={project.link}
    />
  ))}
  <div className="md:col-span-2 md:max-w-lg mx-auto">
    <ProjectCard
      key={2}
      index={2}
      title={projects[2].title}
      description={projects[2].description}
      image={projects[2].image}
      tags={projects[2].tags}
      link={projects[2].link}
    />
  </div>
</div>
    </section>
  );
};

export default Projects;
