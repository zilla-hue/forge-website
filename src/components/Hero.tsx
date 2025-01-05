import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import forgeVideo from '/assets/videos/forge-hero.mp4';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload video
    const video = new Audio(forgeVideo);
    video.addEventListener('canplaythrough', () => {
      setIsLoading(false);
    });
    return () => video.remove();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-secondary animate-pulse">
          {/* Loading state */}
        </div>
      )}
      
      <video
        autoPlay
        muted
        loop
        playsInline
        onError={() => setVideoError(true)}
        className={cn(
          "absolute top-0 left-0 w-full h-full object-cover",
          isLoading && "opacity-0",
          "transition-opacity duration-500"
        )}
      >
        <source src={forgeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {videoError && (
        <div className="absolute inset-0 bg-secondary">
          <div className="container mx-auto px-6 text-center text-white">
            <p>Failed to load video background</p>
          </div>
        </div>
      )}

      <div className={cn(
        "absolute inset-0 bg-secondary",
        "bg-opacity-60 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Forge Your Brand's Future
            </h1>
            <p className="text-xl text-white mb-8">
            Innovative advertising solutions that drive results.
            </p>
            <a 
              href="#contact"
              className={cn(
                "group inline-flex items-center space-x-2",
                "bg-primary text-white px-8 py-4 rounded-full",
                "hover:bg-primary-dark transition-all"
              )}
            >
              <span>Start Your Project</span>
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;