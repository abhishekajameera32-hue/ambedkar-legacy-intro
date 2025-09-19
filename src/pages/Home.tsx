import React, { useState, useEffect } from 'react';
import AmbedkarModel from '../components/AmbedkarModel';
import VoiceIntro from '../components/VoiceIntro';
import ScrollVideo from '../components/ScrollVideo';
import { Button } from '../components/ui/button';
import { Play, BookOpen, Gamepad2 } from 'lucide-react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [introComplete, setIntroComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Show main content after a brief delay
    const timer = setTimeout(() => setShowMainContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Ambedkar Model and Voice Intro */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
        {/* Background Constitutional Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-constitutional rounded-full animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-justice rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-wisdom rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-hero-foreground mb-4 leading-tight">
                Dr. B.R.
                <span className="block text-justice">Ambedkar</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-justice mx-auto lg:mx-0 mb-6" />
              <p className="text-xl text-hero-foreground/80 max-w-lg mx-auto lg:mx-0">
                Architect of the Indian Constitution • Champion of Social Justice • Father of Modern India
              </p>
            </div>

            {/* Voice Intro Component */}
            <VoiceIntro 
              onIntroComplete={handleIntroComplete}
              className="mb-8"
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="justice" 
                size="xl"
                onClick={() => onNavigate?.('intro')}
                className="group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Experience His Legacy
              </Button>
              <Button 
                variant="wisdom" 
                size="xl"
                onClick={() => onNavigate?.('game')}
              >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Constitutional Game
              </Button>
            </div>
          </div>

          {/* Right Column - Ambedkar 3D Model */}
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${
            showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <AmbedkarModel 
              className="transform hover:scale-105 transition-transform duration-500"
              showCoin={true}
              animate={true}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-hero-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-hero-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Constitutional Values Section */}
      <section className="py-20 bg-constitutional relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-constitutional opacity-90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
              Constitutional Values
            </h2>
            <p className="text-xl text-hero-foreground/80 max-w-3xl mx-auto">
              The pillars of justice, liberty, equality, and fraternity that Dr. Ambedkar embedded in our Constitution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Justice', description: 'Social, economic and political justice for all', icon: '⚖️' },
              { title: 'Liberty', description: 'Freedom of thought, expression, belief and worship', icon: '🕊️' },
              { title: 'Equality', description: 'Equal status and opportunity for every citizen', icon: '🤝' },
              { title: 'Fraternity', description: 'Unity and dignity of all individuals', icon: '🤲' }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-wisdom text-center animate-scroll-reveal border border-card-border hover:shadow-constitutional transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-constitutional mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Video Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-constitutional mb-6">
              Journey Through History
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience Dr. Ambedkar's transformative journey and his lasting impact on modern India
            </p>
          </div>

          <ScrollVideo autoPlay={true} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-wisdom relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-scroll-reveal">
            <h2 className="text-4xl lg:text-5xl font-bold text-constitutional mb-6">
              Explore His Legacy
            </h2>
            <p className="text-xl text-dignity mb-8 max-w-2xl mx-auto">
              Dive deeper into Dr. Ambedkar's philosophy, play interactive games, and discover unique experiments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="constitutional" 
                size="xl"
                onClick={() => onNavigate?.('experiment')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Experiments
              </Button>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => onNavigate?.('legacy')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;