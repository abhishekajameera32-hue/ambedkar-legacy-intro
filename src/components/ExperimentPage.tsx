import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, BookOpen, Users, Scale, Eye, Brain, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface ExperimentPageProps {
  className?: string;
}

const ExperimentPage: React.FC<ExperimentPageProps> = ({ className = "" }) => {
  const [activeExperiment, setActiveExperiment] = useState<string | null>(null);
  const [particleCount, setParticleCount] = useState(0);
  const [constitutionWords, setConstitutionWords] = useState<string[]>([]);

  // Constitutional words that float around
  const words = [
    'Justice', 'Liberty', 'Equality', 'Fraternity', 'Dignity', 'Rights', 
    'Democracy', 'Secular', 'Socialist', 'Republic', 'Constitution', 'Law'
  ];

  useEffect(() => {
    if (activeExperiment === 'word-storm') {
      const interval = setInterval(() => {
        setConstitutionWords(prev => {
          const newWords = [...prev];
          if (newWords.length < 15) {
            newWords.push(words[Math.floor(Math.random() * words.length)]);
          }
          return newWords;
        });
      }, 500);

      const cleanup = setTimeout(() => {
        setConstitutionWords([]);
        setActiveExperiment(null);
      }, 10000);

      return () => {
        clearInterval(interval);
        clearTimeout(cleanup);
      };
    }
  }, [activeExperiment]);

  const experiments = [
    {
      id: 'constitutional-aura',
      title: 'Constitutional Aura',
      description: 'Watch the Constitution come alive with animated justice particles',
      icon: Sparkles,
      color: 'constitutional'
    },
    {
      id: 'justice-pulse',
      title: 'Justice Pulse',
      description: 'Feel the heartbeat of democracy through interactive pulses',
      icon: Heart,
      color: 'justice'
    },
    {
      id: 'equality-scales',
      title: 'Equality Scales',
      description: 'Balance the scales of justice in this interactive experiment',
      icon: Scale,
      color: 'wisdom'
    },
    {
      id: 'word-storm',
      title: 'Constitutional Word Storm',
      description: 'Experience fundamental rights floating in constitutional space',
      icon: Brain,
      color: 'hero'
    },
    {
      id: 'ambedkar-vision',
      title: 'Ambedkar\'s Vision',
      description: 'Immerse yourself in the philosophical depth of constitutional values',
      icon: Eye,
      color: 'transformation'
    }
  ];

  const runExperiment = (experimentId: string) => {
    setActiveExperiment(experimentId);
    
    if (experimentId === 'constitutional-aura') {
      setParticleCount(50);
      setTimeout(() => {
        setParticleCount(0);
        setActiveExperiment(null);
      }, 8000);
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-constitutional opacity-5 animate-pulse" />
      
      {/* Header */}
      <div className="relative z-10 text-center py-12">
        <div className="animate-scroll-reveal">
          <h1 className="text-4xl md:text-6xl font-bold text-constitutional mb-4">
            Constitutional Experiments
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience Dr. Ambedkar's vision through interactive digital art and constitutional philosophy
          </p>
        </div>
      </div>

      {/* Experiment Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon;
            const isActive = activeExperiment === experiment.id;
            
            return (
              <div
                key={experiment.id}
                className={`relative p-6 bg-card rounded-xl shadow-constitutional border border-card-border transition-all duration-500 hover:shadow-wisdom hover:scale-105 ${
                  isActive ? 'animate-constitution-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-${experiment.color} animate-justice-pulse`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-constitutional mb-2">
                    {experiment.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {experiment.description}
                  </p>
                </div>

                <Button
                  variant={experiment.color as any}
                  size="lg"
                  onClick={() => runExperiment(experiment.id)}
                  disabled={isActive}
                  className="w-full"
                >
                  {isActive ? (
                    <>
                      <Zap className="w-4 h-4 mr-2 animate-bounce" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Launch Experiment
                    </>
                  )}
                </Button>

                {/* Active Experiment Effects */}
                {isActive && (
                  <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
                    <div className="absolute inset-0 animate-constitution-glow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Experiment Overlays */}
      
      {/* Constitutional Aura Particles */}
      {activeExperiment === 'constitutional-aura' && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-constitutional rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Constitutional Word Storm */}
      {activeExperiment === 'word-storm' && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {constitutionWords.map((word, i) => (
            <div
              key={`${word}-${i}`}
              className="absolute text-2xl font-bold text-constitutional/60 animate-ambedkar-float"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            >
              {word}
            </div>
          ))}
        </div>
      )}

      {/* Justice Pulse Effect */}
      {activeExperiment === 'justice-pulse' && (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-justice rounded-full animate-justice-pulse" 
               style={{ animationDuration: '1s' }} />
          <div className="absolute w-48 h-48 border-2 border-justice/50 rounded-full animate-justice-pulse"
               style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
          <div className="absolute w-64 h-64 border border-justice/30 rounded-full animate-justice-pulse"
               style={{ animationDuration: '2s', animationDelay: '1s' }} />
        </div>
      )}

      {/* Floating Action Message */}
      {activeExperiment && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-constitutional">
            <p className="text-constitutional font-semibold">
              🌟 Constitutional Experiment in Progress...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperimentPage;