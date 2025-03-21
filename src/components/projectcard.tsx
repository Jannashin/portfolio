
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, link, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-700 opacity-0 translate-y-12",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-wrapper aspect-[4/3] overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out scale-105",
            isHovered && "scale-110"
          )}
        />
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/40 to-transparent text-white transition-all duration-500",
          isHovered ? "opacity-100" : "opacity-90"
        )}
      >
        <div className="transform transition-transform duration-500 ease-out">
          <h3 className="text-xl font-display font-semibold mb-2 group-hover:translate-y-0">
            {title}
          </h3>
          <p className="text-sm text-white/80 mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-medium bg-white/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-white hover:text-blue-200 transition-colors"
            >
              View Project 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
