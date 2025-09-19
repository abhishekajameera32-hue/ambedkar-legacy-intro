import React, { useState } from 'react';
import { Users, MessageSquare, Calendar, Trophy, Heart, Star, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Community = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const communityStats = [
    { label: 'Active Members', value: '125K+', icon: Users, color: 'text-justice' },
    { label: 'Daily Discussions', value: '2.5K+', icon: MessageSquare, color: 'text-constitutional' },
    { label: 'Events This Month', value: '50+', icon: Calendar, color: 'text-dignity' },
    { label: 'Community Projects', value: '200+', icon: Trophy, color: 'text-revolution' }
  ];

  const featuredMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Constitutional Law Expert',
      location: 'New Delhi, India',
      contributions: 'Educational Content Creator',
      rating: 4.9,
      posts: 150
    },
    {
      name: 'Raj Patel',
      role: 'Community Organizer',
      location: 'Mumbai, India',
      contributions: 'Event Coordinator',
      rating: 4.8,
      posts: 89
    },
    {
      name: 'Sarah Johnson',
      role: 'Social Justice Advocate',
      location: 'London, UK',
      contributions: 'International Outreach',
      rating: 4.9,
      posts: 203
    },
    {
      name: 'Dr. Amit Kumar',
      role: 'Blockchain Developer',
      location: 'Bangalore, India',
      contributions: 'Technical Innovation',
      rating: 5.0,
      posts: 76
    }
  ];

  const upcomingEvents = [
    {
      title: 'Constitutional Rights Workshop',
      date: '2024-02-15',
      time: '10:00 AM IST',
      type: 'Online',
      attendees: 234,
      description: 'Interactive session on fundamental rights and their applications'
    },
    {
      title: 'Ambedkar Jayanti Celebration',
      date: '2024-04-14',
      time: '6:00 PM IST',
      type: 'Hybrid',
      attendees: 1200,
      description: 'Grand celebration of Dr. Ambedkar\'s birth anniversary'
    },
    {
      title: 'Community Impact Showcase',
      date: '2024-03-01',
      time: '2:00 PM IST',
      type: 'Online',
      attendees: 456,
      description: 'Showcasing real-world impact of community projects'
    },
    {
      title: 'Tech for Justice Hackathon',
      date: '2024-02-28',
      time: '9:00 AM IST',
      type: 'Offline',
      attendees: 89,
      description: '48-hour hackathon building solutions for social justice'
    }
  ];

  const discussionTopics = [
    {
      title: 'Digital Constitutional Literacy: Breaking Barriers',
      author: 'Dr. Meena Krishnan',
      replies: 45,
      likes: 128,
      category: 'Education',
      timeAgo: '2 hours ago'
    },
    {
      title: 'Blockchain Governance: The Future of Democracy?',
      author: 'Tech Visionary',
      replies: 67,
      likes: 203,
      category: 'Technology',
      timeAgo: '4 hours ago'
    },
    {
      title: 'Local Chapter Updates: Mumbai Community Center',
      author: 'Raj Patel',
      replies: 23,
      likes: 89,
      category: 'Local',
      timeAgo: '6 hours ago'
    },
    {
      title: 'Success Story: Rural Legal Aid Initiative Impact',
      author: 'Sarah Mitchell',
      replies: 34,
      likes: 156,
      category: 'Impact',
      timeAgo: '8 hours ago'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Education': return 'bg-justice/20 text-justice';
      case 'Technology': return 'bg-constitutional/20 text-constitutional';
      case 'Local': return 'bg-dignity/20 text-dignity';
      case 'Impact': return 'bg-revolution/20 text-revolution';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-constitutional mb-6">
            Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A global network of changemakers united by Dr. Ambedkar's vision of justice, 
            equality, and social transformation.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300 animate-scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-constitutional rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['overview', 'events', 'discussions', 'members'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeSection === section
                  ? 'bg-constitutional text-white shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-accent'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeSection === 'overview' && (
          <div className="space-y-16 animate-fade-in">
            {/* Welcome Message */}
            <Card className="p-8 bg-gradient-constitutional text-white shadow-constitutional">
              <div className="text-center">
                <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold mb-4">Welcome to Our Community</h2>
                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  Together, we're building a movement that transcends boundaries, bringing people 
                  from all walks of life together to create positive change through education, 
                  technology, and social action.
                </p>
              </div>
            </Card>

            {/* Featured Discussions */}
            <div>
              <h3 className="text-3xl font-bold text-constitutional mb-8">Trending Discussions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {discussionTopics.slice(0, 4).map((topic, index) => (
                  <Card key={index} className="p-6 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={getCategoryColor(topic.category)}>
                        {topic.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{topic.timeAgo}</span>
                    </div>
                    <h4 className="text-lg font-bold text-constitutional mb-2 hover:text-dignity cursor-pointer">
                      {topic.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">by {topic.author}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{topic.replies} replies</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{topic.likes} likes</span>
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'events' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-constitutional mb-8">Upcoming Events</h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={event.type === 'Online' ? 'default' : event.type === 'Hybrid' ? 'secondary' : 'outline'}>
                      {event.type}
                    </Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-constitutional mb-3">{event.title}</h4>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <Button variant="constitutional" size="sm">Join Event</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'discussions' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-constitutional">Community Discussions</h3>
              <Button variant="constitutional">Start New Discussion</Button>
            </div>
            
            <div className="space-y-6">
              {discussionTopics.map((topic, index) => (
                <Card key={index} className="p-6 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getCategoryColor(topic.category)}>
                          {topic.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{topic.timeAgo}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-constitutional mb-2 hover:text-dignity cursor-pointer">
                        {topic.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">by {topic.author}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{topic.replies} replies</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{topic.likes} likes</span>
                        </span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">View Discussion</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'members' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-constitutional mb-8">Featured Community Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-constitutional rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-constitutional mb-2">{member.name}</h4>
                  <p className="text-dignity font-semibold mb-1">{member.role}</p>
                  
                  <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{member.location}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{member.contributions}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-justice fill-current" />
                      <span>{member.rating}</span>
                    </div>
                    <span className="text-muted-foreground">{member.posts} posts</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Join Community CTA */}
        <Card className="mt-16 p-8 bg-gradient-dignity text-white text-center shadow-constitutional">
          <Users className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Connect with like-minded individuals, participate in meaningful discussions, 
            and contribute to positive social change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-dignity border-white hover:bg-white/90">
              Join Community
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Community;