import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface ScrollVideoProps {
  className?: string;
  autoPlay?: boolean;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({
  className = "",
  autoPlay = true
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && autoPlay) {
          setIsPlaying(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      ref={videoRef}
      className={`relative overflow-hidden rounded-xl ${className} ${
        isVisible ? 'animate-scroll-reveal' : 'opacity-0'
      }`}
    >
      {/* Video Container */}
      <div className="relative w-full h-96 bg-gradient-hero rounded-xl shadow-wisdom">
        {/* Placeholder for actual video - Replace with real video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-hero-foreground">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-hero-foreground/20 rounded-full flex items-center justify-center animate-justice-pulse">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Ambedkar's Legacy Video</h3>
            <p className="text-sm opacity-80 max-w-md">
              Discover Dr. Ambedkar's contributions to Indian Constitution and social justice
            </p>
          </div>
        </div>

        {/* Constitutional Animation Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {isPlaying && (
            <div className="absolute inset-0 animate-constitution-glow rounded-xl" />
          )}
          
          {/* Animated Constitutional Elements */}
          <div className="absolute top-4 left-4 opacity-60">
            <div className="w-8 h-8 bg-justice rounded-full animate-pulse" />
          </div>
          <div className="absolute top-4 right-4 opacity-60">
            <div className="w-6 h-6 bg-constitutional rounded-full animate-bounce" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-60">
            <div className="w-10 h-10 bg-transformation rounded-full animate-pulse" />
          </div>
        </div>

        {/* Play/Pause Control */}
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-card/90 text-card-foreground p-3 rounded-full shadow-lg hover:bg-card transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="w-full bg-card-foreground/20 rounded-full h-1">
            <div 
              className="bg-gradient-justice h-1 rounded-full transition-all duration-300"
              style={{ 
                width: isPlaying ? '100%' : '0%',
                transitionDuration: isPlaying ? '30s' : '0.3s'
              }}
            />
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="mt-4 text-center">
        <h4 className="text-lg font-semibold text-constitutional mb-2">
          Constitutional Journey
        </h4>
        <p className="text-muted-foreground text-sm">
          Experience the transformative vision of Dr. Ambedkar through immersive storytelling
        </p>
      </div>
    </div>
  );
};

export default ScrollVideo;