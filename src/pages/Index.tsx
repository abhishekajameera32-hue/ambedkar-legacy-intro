// Main Ambedkar Experience App

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Home from './Home';
import ConstitutionalGame from '../components/ConstitutionalGame';
import ExperimentPage from '../components/ExperimentPage';
import VoiceIntro from '../components/VoiceIntro';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'intro':
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-6">
              <h1 className="text-4xl font-bold text-constitutional text-center mb-8">
                Dr. Ambedkar's Voice
              </h1>
              <VoiceIntro 
                autoPlay={false}
                onIntroComplete={() => console.log('Voice intro completed')} 
              />
            </div>
          </div>
        );
      case 'game':
        return (
          <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-constitutional mb-4">
                  Constitutional Knowledge Game
                </h1>
                <p className="text-xl text-muted-foreground">
                  Test your knowledge of Dr. Ambedkar's constitutional legacy
                </p>
              </div>
              <ConstitutionalGame />
            </div>
          </div>
        );
      case 'experiment':
        return <ExperimentPage />;
      case 'legacy':
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 text-center">
              <h1 className="text-4xl font-bold text-constitutional mb-8">
                Dr. Ambedkar's Legacy
              </h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-xl shadow-constitutional">
                  <h3 className="text-2xl font-semibold text-dignity mb-4">
                    Constitutional Architect
                  </h3>
                  <p className="text-muted-foreground">
                    Dr. Ambedkar chaired the Constitution Drafting Committee and is credited as the principal architect of the Indian Constitution, ensuring justice, liberty, equality, and fraternity for all citizens.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-constitutional">
                  <h3 className="text-2xl font-semibold text-dignity mb-4">
                    Social Reformer
                  </h3>
                  <p className="text-muted-foreground">
                    A champion of social justice, Dr. Ambedkar fought against caste discrimination and worked tirelessly for the rights of marginalized communities, advocating for education and equality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;
