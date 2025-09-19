import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Scale, Users, Zap } from 'lucide-react';

interface LoadingIntroProps {
  onLoadingComplete: () => void;
}

const LoadingIntro: React.FC<LoadingIntroProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    { icon: Scale, text: "Justice", color: "text-justice" },
    { icon: Users, text: "Liberty", color: "text-dignity" },
    { icon: Coins, text: "Equality", color: "text-constitutional" },
    { icon: Zap, text: "Fraternity", color: "text-revolution" }
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-constitutional"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-8">
        {/* Main Logo/Icon */}
        <motion.div
          className="relative w-32 h-32 mx-auto"
          animate={{ 
            rotate: progress * 3.6,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 0.05, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-full h-full bg-gradient-justice rounded-full flex items-center justify-center shadow-constitutional">
            <Coins className="w-16 h-16 text-white animate-coin-shine" />
          </div>
          
          {/* Orbiting Elements */}
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const angle = (index / phases.length) * 360 + (progress * 2);
            const isActive = currentPhase >= index;
            
            return (
              <motion.div
                key={index}
                className="absolute w-8 h-8 rounded-full bg-card border-2 border-constitutional flex items-center justify-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${angle}deg) 
                    translateX(60px) 
                    rotate(-${angle}deg)
                  `,
                }}
                animate={{
                  scale: isActive ? 1.2 : 0.8,
                  opacity: isActive ? 1 : 0.5
                }}
              >
                <Icon className={`w-4 h-4 ${isActive ? phase.color : 'text-muted-foreground'}`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Ambedkar Token
          </h1>
          <p className="text-xl text-white/80">
            Empowering Constitutional Values
          </p>
        </motion.div>

        {/* Current Phase Display */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-2xl font-semibold text-white">
            {phases[currentPhase]?.text}
          </div>
          
          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="bg-white/20 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-justice h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="text-white/70 text-sm mt-2">
              {Math.round(progress)}% Loading...
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="max-w-md mx-auto text-white/90 text-center italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          "Cultivation of mind should be the ultimate aim of human existence"
          <div className="text-sm mt-2 text-white/70">- Dr. B.R. Ambedkar</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingIntro;