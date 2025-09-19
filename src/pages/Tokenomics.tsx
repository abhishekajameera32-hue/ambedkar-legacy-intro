import React from 'react';
import { PieChart, TrendingUp, Shield, Coins, Users, GraduationCap, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Tokenomics = () => {
  const tokenDistribution = [
    { 
      name: "Community & Education", 
      percentage: 40, 
      amount: "400M AMBD",
      color: "bg-justice",
      icon: GraduationCap,
      description: "Allocated for educational initiatives, community building, and spreading Ambedkar's teachings"
    },
    { 
      name: "Development & Operations", 
      percentage: 25, 
      amount: "250M AMBD",
      color: "bg-constitutional", 
      icon: TrendingUp,
      description: "Platform development, technical infrastructure, and operational expenses"
    },
    { 
      name: "Liquidity & Exchange", 
      percentage: 15, 
      amount: "150M AMBD",
      color: "bg-dignity",
      icon: Coins, 
      description: "Ensuring healthy trading liquidity and exchange listings"
    },
    { 
      name: "Team & Advisors", 
      percentage: 10, 
      amount: "100M AMBD",
      color: "bg-revolution",
      icon: Users,
      description: "Core team allocation with vesting schedule and advisory board"
    },
    { 
      name: "Social Impact Fund", 
      percentage: 10, 
      amount: "100M AMBD",
      color: "bg-wisdom",
      icon: Heart,
      description: "Funding social justice initiatives and marginalized community support"
    }
  ];

  const tokenUtilities = [
    {
      title: "Governance Rights",
      description: "Vote on community proposals and platform development decisions",
      icon: Shield
    },
    {
      title: "Educational Access", 
      description: "Access premium educational content and constitutional learning materials",
      icon: GraduationCap
    },
    {
      title: "Staking Rewards",
      description: "Earn rewards by staking tokens and supporting network security",
      icon: TrendingUp
    },
    {
      title: "Community Benefits",
      description: "Exclusive access to events, scholarships, and community programs", 
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-constitutional mb-6">
            Tokenomics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a sustainable ecosystem that honors Dr. Ambedkar's vision while 
            creating value for education, community development, and social justice.
          </p>
        </div>

        {/* Token Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center shadow-constitutional border-card-border">
            <div className="w-16 h-16 bg-gradient-justice rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-constitutional mb-2">Total Supply</h3>
            <p className="text-3xl font-bold text-justice">1B AMBD</p>
            <p className="text-muted-foreground mt-2">Fixed supply, no inflation</p>
          </Card>

          <Card className="p-8 text-center shadow-constitutional border-card-border">
            <div className="w-16 h-16 bg-gradient-constitutional rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-constitutional mb-2">Initial Price</h3>
            <p className="text-3xl font-bold text-constitutional">$0.001</p>
            <p className="text-muted-foreground mt-2">Fair launch pricing</p>
          </Card>

          <Card className="p-8 text-center shadow-constitutional border-card-border">
            <div className="w-16 h-16 bg-gradient-dignity rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-constitutional mb-2">Network</h3>
            <p className="text-3xl font-bold text-dignity">Ethereum</p>
            <p className="text-muted-foreground mt-2">ERC-20 Standard</p>
          </Card>
        </div>

        {/* Token Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pie Chart Representation */}
          <Card className="p-8 shadow-constitutional border-card-border">
            <h3 className="text-2xl font-bold text-constitutional mb-8 text-center">Token Distribution</h3>
            <div className="relative w-80 h-80 mx-auto">
              {/* SVG Pie Chart */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {tokenDistribution.map((item, index) => {
                  let cumulativePercentage = 0;
                  for (let i = 0; i < index; i++) {
                    cumulativePercentage += tokenDistribution[i].percentage;
                  }
                  
                  const angle = (item.percentage / 100) * 360;
                  const startAngle = (cumulativePercentage / 100) * 360;
                  
                  const startX = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                  const startY = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                  const endX = 100 + 80 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                  const endY = 100 + 80 * Math.sin(((startAngle + angle) * Math.PI) / 180);
                  
                  const largeArc = angle > 180 ? 1 : 0;
                  
                  return (
                    <path
                      key={index}
                      d={`M 100 100 L ${startX} ${startY} A 80 80 0 ${largeArc} 1 ${endX} ${endY} Z`}
                      className={`${item.color.replace('bg-', 'fill-')} hover:opacity-80 transition-opacity`}
                    />
                  );
                })}
              </svg>
            </div>
          </Card>

          {/* Distribution Details */}
          <Card className="p-8 shadow-constitutional border-card-border">
            <h3 className="text-2xl font-bold text-constitutional mb-8">Distribution Breakdown</h3>
            <div className="space-y-6">
              {tokenDistribution.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-constitutional">{item.name}</h4>
                        <span className="text-dignity font-semibold">{item.percentage}%</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                      <p className="text-justice font-semibold">{item.amount}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Token Utility */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-constitutional text-center mb-12">Token Utility</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenUtilities.map((utility, index) => {
              const Icon = utility.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300 animate-scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-constitutional rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-constitutional mb-3">{utility.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{utility.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Economic Model */}
        <Card className="p-8 shadow-constitutional border-card-border bg-gradient-constitutional text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Sustainable Economic Model</h3>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our tokenomics is designed to create a self-sustaining ecosystem that grows stronger 
              as more people engage with Dr. Ambedkar's teachings and contribute to social justice initiatives.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">Deflationary Mechanism</h4>
                <p className="text-white/80">Regular token burns from platform fees ensure long-term value appreciation</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">Community Rewards</h4>
                <p className="text-white/80">Active participants earn tokens through education and community contribution</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">Impact Tracking</h4>
                <p className="text-white/80">Transparent reporting on how tokens create real-world social impact</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tokenomics;