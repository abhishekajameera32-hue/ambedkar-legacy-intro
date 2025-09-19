import React from 'react';
import { CheckCircle2, Clock, Target, Rocket, Users, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Phase 1: Foundation",
      period: "Q1 2024",
      status: "completed",
      items: [
        "Token Launch & Smart Contract Deployment",
        "Community Building & Social Media Presence", 
        "Partnership with Educational Institutions",
        "Ambedkar Legacy Documentation"
      ]
    },
    {
      phase: "Phase 2: Ecosystem Development", 
      period: "Q2 2024",
      status: "in-progress",
      items: [
        "Constitutional Learning Platform Launch",
        "Mobile App Development",
        "Governance Token Integration",
        "Educational Content Creation"
      ]
    },
    {
      phase: "Phase 3: Global Expansion",
      period: "Q3 2024", 
      status: "upcoming",
      items: [
        "International University Partnerships",
        "Multi-language Support",
        "Global Constitutional Study Programs",
        "Scholarship Fund Establishment"
      ]
    },
    {
      phase: "Phase 4: Legacy Institution",
      period: "Q4 2024",
      status: "future", 
      items: [
        "Digital Ambedkar Museum",
        "AI-Powered Constitutional Assistant",
        "Global Justice Network",
        "Sustainable Development Initiatives"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-justice" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-constitutional animate-spin" />;
      case 'upcoming':
        return <Target className="w-6 h-6 text-dignity" />;
      default:
        return <Rocket className="w-6 h-6 text-revolution" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-justice bg-justice/10';
      case 'in-progress':
        return 'border-constitutional bg-constitutional/10';
      case 'upcoming':
        return 'border-dignity bg-dignity/10';
      default:
        return 'border-revolution bg-revolution/10';
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-constitutional mb-6">
            Our Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Charting the path toward a more just and equitable society through education, 
            technology, and the timeless principles of Dr. B.R. Ambedkar.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-constitutional"></div>
          
          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div 
                key={index}
                className="relative flex items-start space-x-8 animate-scroll-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getStatusColor(phase.status)} flex items-center justify-center shadow-constitutional`}>
                  {getStatusIcon(phase.status)}
                </div>

                {/* Content */}
                <Card className="flex-1 p-8 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-constitutional mb-2">
                        {phase.phase}
                      </h3>
                      <div className="text-dignity font-semibold">
                        {phase.period}
                      </div>
                    </div>
                    <div className={`mt-4 lg:mt-0 px-4 py-2 rounded-full text-sm font-semibold ${
                      phase.status === 'completed' ? 'bg-justice/20 text-justice' :
                      phase.status === 'in-progress' ? 'bg-constitutional/20 text-constitutional' :
                      phase.status === 'upcoming' ? 'bg-dignity/20 text-dignity' :
                      'bg-revolution/20 text-revolution'
                    }`}>
                      {phase.status.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-constitutional mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="p-8 bg-gradient-constitutional text-white">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl mb-6 text-white/90">
              Be part of building a future that honors Dr. Ambedkar's vision of justice and equality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-constitutional font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Join Community
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;