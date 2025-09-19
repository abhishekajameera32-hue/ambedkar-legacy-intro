import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

interface VoiceIntroProps {
  onIntroComplete?: () => void;
  autoPlay?: boolean;
  className?: string;
}

const VoiceIntro: React.FC<VoiceIntroProps> = ({
  onIntroComplete,
  autoPlay = true,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showWaves, setShowWaves] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Ambedkar's inspiring quotes for the intro
  const introTexts = [
    "In the Constitution of India...",
    "We have envisioned a society based on justice...",
    "Where equality and fraternity shall prevail...",
    "Education is the right of every human being...",
    "The Constitution is not a mere lawyer's document..."
  ];

  useEffect(() => {
    if (autoPlay) {
      startIntro();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoPlay]);

  const startIntro = () => {
    setIsPlaying(true);
    setShowWaves(true);
    let textIndex = 0;
    let progressValue = 0;

    const showNextText = () => {
      if (textIndex < introTexts.length) {
        setCurrentText(introTexts[textIndex]);
        progressValue = ((textIndex + 1) / introTexts.length) * 100;
        setProgress(progressValue);
        textIndex++;
        
        timeoutRef.current = setTimeout(showNextText, 3000);
      } else {
        // Complete intro after 15 seconds total
        timeoutRef.current = setTimeout(() => {
          setIsPlaying(false);
          setShowWaves(false);
          setProgress(100);
          onIntroComplete?.();
        }, 1000);
      }
    };

    showNextText();
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setShowWaves(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } else {
      startIntro();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Voice Visualization */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-end space-x-1 h-20">
          {showWaves && [...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-justice w-2 rounded-full animate-voice-wave"
              style={{
                animationDelay: `${i * 0.1}s`,
                minHeight: '10px'
              }}
            />
          ))}
          {!showWaves && (
            <div className="w-24 h-1 bg-muted rounded-full">
              <div 
                className="h-full bg-gradient-justice rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Current Text Display */}
      <div className="text-center mb-6 min-h-[4rem] flex items-center justify-center">
        <p className="text-lg font-semibold text-constitutional max-w-md leading-relaxed">
          {currentText}
        </p>
      </div>

      {/* Control Button */}
      <div className="flex justify-center">
        <Button
          variant="constitutional"
          size="lg"
          onClick={togglePlay}
          className="space-x-2"
        >
          {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          <span>{isPlaying ? 'Stop Voice' : 'Play Intro'}</span>
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 text-center">
        <div className="w-full max-w-xs mx-auto bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-constitutional h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Voice Introduction Progress: {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default VoiceIntro;