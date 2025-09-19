import React, { useState } from 'react';
import { Menu, X, Home, Play, Gamepad2, Sparkles, Scale } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage = 'home',
  onNavigate
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'intro', label: 'Voice Intro', icon: Play },
    { id: 'game', label: 'Constitutional Game', icon: Gamepad2 },
    { id: 'experiment', label: 'Experiments', icon: Sparkles },
    { id: 'legacy', label: 'Legacy', icon: Scale }
  ];

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border shadow-constitutional">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-constitutional rounded-full flex items-center justify-center animate-coin-shine">
                <Scale className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-constitutional">Ambedkar Legacy</h1>
                <p className="text-xs text-muted-foreground">Architect of Modern India</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? 'constitutional' : 'ghost'}
                    size="sm"
                    onClick={() => handleNavigation(item.id)}
                    className="space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-constitutional rounded-full flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-constitutional">Ambedkar</span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? 'constitutional' : 'ghost'}
                    size="sm"
                    onClick={() => handleNavigation(item.id)}
                    className="w-full justify-start space-x-3"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Navigation Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Navigation;