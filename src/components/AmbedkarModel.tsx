import React, { useEffect, useState } from 'react';
import { Coins, Scale, BookOpen, Users } from 'lucide-react';

interface AmbedkarModelProps {
  className?: string;
  showCoin?: boolean;
  animate?: boolean;
}

const AmbedkarModel: React.FC<AmbedkarModelProps> = ({ 
  className = "",
  showCoin = true,
  animate = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Main Ambedkar Figure */}
      <div className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${animate ? 'animate-ambedkar-float' : ''}`}>
        
        {/* Ambedkar Silhouette/Figure */}
        <div className="relative w-48 h-64 mx-auto">
          {/* Placeholder for 2D Model - Replace with actual image */}
          <div className="w-full h-full bg-gradient-hero rounded-lg shadow-wisdom flex items-center justify-center">
            <div className="text-center text-hero-foreground">
              <div className="text-4xl mb-2">👤</div>
              <p className="text-xs font-semibold">Dr. B.R. Ambedkar</p>
              <p className="text-xs opacity-80">Architect of Constitution</p>
            </div>
          </div>
          
          {/* Constitutional Aura */}
          <div className="absolute inset-0 animate-constitution-glow rounded-lg pointer-events-none" />
          
          {/* Floating Constitutional Elements */}
          <div className="absolute -top-4 -right-4 animate-justice-pulse">
            <Scale className="w-8 h-8 text-justice" />
          </div>
          
          <div className="absolute -top-2 -left-6 animate-pulse">
            <BookOpen className="w-6 h-6 text-constitutional" />
          </div>
          
          <div className="absolute -bottom-2 -left-4 animate-bounce">
            <Users className="w-6 h-6 text-transformation" />
          </div>
        </div>

        {/* Ambedkar's Coin */}
        {showCoin && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-justice rounded-full flex items-center justify-center animate-coin-shine shadow-justice">
                <Coins className="w-8 h-8 text-constitutional-dark" />
              </div>
              
              {/* Coin Rays */}
              <div className="absolute inset-0 animate-spin">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-4 bg-justice opacity-60"
                    style={{
                      top: '-8px',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${i * 45}deg)`,
                      transformOrigin: '50% 24px'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Constitutional Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-constitutional rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Base Platform */}
      <div className="mt-4 w-56 h-4 bg-gradient-constitutional rounded-full mx-auto opacity-30 blur-sm" />
    </div>
  );
};

export default AmbedkarModel;