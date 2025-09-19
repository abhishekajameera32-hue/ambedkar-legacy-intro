import React, { useState } from 'react';
import { Zap, Users, BookOpen, Scale, Heart, Globe, Award, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Revolution = () => {
  const [activeTab, setActiveTab] = useState('education');

  const revolutionPillars = [
    {
      id: 'education',
      title: 'Educational Revolution',
      icon: BookOpen,
      color: 'bg-justice',
      description: 'Democratizing access to constitutional knowledge and legal education',
      stats: { primary: '500K+', secondary: 'Students Educated' },
      initiatives: [
        'Free Constitutional Law Courses',
        'Digital Ambedkar Library', 
        'Legal Aid Training Programs',
        'Rural Education Outreach'
      ]
    },
    {
      id: 'social',
      title: 'Social Justice',
      icon: Scale,
      color: 'bg-constitutional',
      description: 'Fighting discrimination and promoting equality for all communities',
      stats: { primary: '100K+', secondary: 'Lives Impacted' },
      initiatives: [
        'Anti-Discrimination Support',
        'Legal Rights Awareness',
        'Community Empowerment Programs', 
        'Economic Inclusion Projects'
      ]
    },
    {
      id: 'digital',
      title: 'Digital Inclusion',
      icon: Globe,
      color: 'bg-dignity',
      description: 'Bridging the digital divide and ensuring technology serves justice',
      stats: { primary: '50K+', secondary: 'Digital Citizens' },
      initiatives: [
        'Digital Literacy Programs',
        'Blockchain for Transparency',
        'AI Ethics Framework',
        'Tech for Social Good'
      ]
    },
    {
      id: 'community',
      title: 'Community Building',
      icon: Users,
      color: 'bg-revolution',
      description: 'Creating inclusive communities that embody Ambedkar\'s vision',
      stats: { primary: '1000+', secondary: 'Active Communities' },
      initiatives: [
        'Local Leadership Development',
        'Inter-community Dialogue',
        'Youth Mentorship Programs',
        'Cultural Exchange Initiatives'
      ]
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Foundation Year',
      achievement: 'Launched educational platform reaching 500K+ learners',
      impact: 'Established 100+ local chapters across India'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      achievement: 'International partnerships with 50+ universities',
      impact: 'Reached 1M+ students worldwide with constitutional education'
    },
    {
      year: '2026',
      title: 'Digital Democracy',
      achievement: 'Blockchain-based governance platform launch',
      impact: 'Enabled transparent community decision-making for 5M+ users'
    },
    {
      year: '2027',
      title: 'Legacy Institution',
      achievement: 'Established the Digital Ambedkar University',
      impact: 'Created sustainable framework for social justice education'
    }
  ];

  const activePillar = revolutionPillars.find(p => p.id === activeTab);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-revolution rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-constitutional mb-6">
            The Digital Revolution
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Carrying forward Dr. Ambedkar's revolutionary spirit into the digital age, 
            creating a more just and equitable world through technology and education.
          </p>
        </div>

        {/* Revolution Pillars */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-constitutional text-center mb-12">
            Pillars of Change
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {revolutionPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === pillar.id 
                      ? `${pillar.color} text-white shadow-lg` 
                      : 'bg-card text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content */}
          {activePillar && (
            <Card className="p-8 shadow-constitutional border-card-border animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${activePillar.color} rounded-full flex items-center justify-center`}>
                      <activePillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-constitutional">{activePillar.title}</h3>
                      <p className="text-muted-foreground">{activePillar.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-accent rounded-lg">
                      <div className="text-3xl font-bold text-constitutional">{activePillar.stats.primary}</div>
                      <div className="text-muted-foreground text-sm">{activePillar.stats.secondary}</div>
                    </div>
                    <div className="text-center p-4 bg-accent rounded-lg">
                      <div className="text-3xl font-bold text-justice">Active</div>
                      <div className="text-muted-foreground text-sm">Programs Running</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-constitutional mb-4">Key Initiatives</h4>
                  <div className="space-y-3">
                    {activePillar.initiatives.map((initiative, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                        <div className="w-2 h-2 bg-constitutional rounded-full"></div>
                        <span className="text-muted-foreground">{initiative}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Timeline of Revolution */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-constitutional text-center mb-12">
            Revolutionary Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-constitutional h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-scroll-reveal`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <Card className="p-6 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-revolution mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-constitutional mb-3">{milestone.title}</h4>
                      <p className="text-muted-foreground mb-2">{milestone.achievement}</p>
                      <p className="text-justice font-semibold">{milestone.impact}</p>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-revolution rounded-full border-4 border-background shadow-lg"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-12 bg-gradient-revolution text-white text-center shadow-constitutional">
          <div className="max-w-4xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Be part of a movement that's reshaping society through education, technology, and 
              unwavering commitment to justice. Together, we can build the world Dr. Ambedkar envisioned.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-revolution border-white hover:bg-white/90">
                <Award className="w-5 h-5 mr-2" />
                Become a Champion
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Globe className="w-5 h-5 mr-2" />
                Spread the Message
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Revolution;