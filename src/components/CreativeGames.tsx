import React, { useState } from 'react';
import { Gamepad2, Puzzle, Zap, Target, Heart, Star, Trophy, RefreshCw } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface CreativeGamesProps {
  className?: string;
}

const CreativeGames: React.FC<CreativeGamesProps> = ({ className = "" }) => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [wordGameState, setWordGameState] = useState({
    currentWord: '',
    scrambledWord: '',
    score: 0,
    streak: 0,
    gameOver: false
  });
  const [memoryGameState, setMemoryGameState] = useState({
    sequence: [] as number[],
    playerSequence: [] as number[],
    currentStep: 0,
    score: 0,
    gameActive: false,
    showingSequence: false
  });

  // Word Scramble Game Data
  const ambedkarWords = [
    { word: 'CONSTITUTION', hint: 'Document that Dr. Ambedkar drafted for India' },
    { word: 'EQUALITY', hint: 'Core principle Dr. Ambedkar fought for' },
    { word: 'JUSTICE', hint: 'What Dr. Ambedkar sought for all people' },
    { word: 'EDUCATION', hint: 'Dr. Ambedkar believed this was key to liberation' },
    { word: 'BUDDHISM', hint: 'Religion Dr. Ambedkar converted to in 1956' },
    { word: 'DALIT', hint: 'Community Dr. Ambedkar championed' },
    { word: 'COLUMBIA', hint: 'University where Dr. Ambedkar studied abroad' },
    { word: 'BABASAHEB', hint: 'Respectful name for Dr. Ambedkar' }
  ];

  const scrambleWord = (word: string) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const startWordGame = () => {
    const randomWord = ambedkarWords[Math.floor(Math.random() * ambedkarWords.length)];
    setWordGameState({
      currentWord: randomWord.word,
      scrambledWord: scrambleWord(randomWord.word),
      score: 0,
      streak: 0,
      gameOver: false
    });
    setActiveGame('word');
  };

  const checkWordAnswer = (answer: string) => {
    if (answer.toUpperCase() === wordGameState.currentWord) {
      const points = wordGameState.currentWord.length * 10;
      setWordGameState(prev => ({
        ...prev,
        score: prev.score + points + (prev.streak * 5),
        streak: prev.streak + 1
      }));
      
      // Next word
      setTimeout(() => {
        const randomWord = ambedkarWords[Math.floor(Math.random() * ambedkarWords.length)];
        setWordGameState(prev => ({
          ...prev,
          currentWord: randomWord.word,
          scrambledWord: scrambleWord(randomWord.word)
        }));
      }, 1000);
    } else {
      setWordGameState(prev => ({
        ...prev,
        streak: 0
      }));
    }
  };

  // Memory Pattern Game
  const startMemoryGame = () => {
    const initialSequence = [Math.floor(Math.random() * 4)];
    setMemoryGameState({
      sequence: initialSequence,
      playerSequence: [],
      currentStep: 0,
      score: 0,
      gameActive: true,
      showingSequence: true
    });
    setActiveGame('memory');
    showSequence(initialSequence);
  };

  const showSequence = (sequence: number[]) => {
    setMemoryGameState(prev => ({ ...prev, showingSequence: true }));
    
    sequence.forEach((step, index) => {
      setTimeout(() => {
        // Flash the button
        const button = document.querySelector(`[data-memory-button="${step}"]`);
        if (button) {
          button.classList.add('animate-pulse', 'bg-constitutional');
          setTimeout(() => {
            button.classList.remove('animate-pulse', 'bg-constitutional');
            if (index === sequence.length - 1) {
              setMemoryGameState(prev => ({ ...prev, showingSequence: false }));
            }
          }, 600);
        }
      }, index * 800);
    });
  };

  const handleMemoryClick = (buttonIndex: number) => {
    if (memoryGameState.showingSequence) return;
    
    const newPlayerSequence = [...memoryGameState.playerSequence, buttonIndex];
    
    if (newPlayerSequence[memoryGameState.currentStep] === memoryGameState.sequence[memoryGameState.currentStep]) {
      if (memoryGameState.currentStep === memoryGameState.sequence.length - 1) {
        // Correct sequence completed
        const newSequence = [...memoryGameState.sequence, Math.floor(Math.random() * 4)];
        setMemoryGameState(prev => ({
          ...prev,
          sequence: newSequence,
          playerSequence: [],
          currentStep: 0,
          score: prev.score + (newSequence.length * 10)
        }));
        
        setTimeout(() => showSequence(newSequence), 1000);
      } else {
        setMemoryGameState(prev => ({
          ...prev,
          playerSequence: newPlayerSequence,
          currentStep: prev.currentStep + 1
        }));
      }
    } else {
      // Game over
      setMemoryGameState(prev => ({ ...prev, gameActive: false }));
    }
  };

  const games = [
    {
      id: 'word',
      title: 'Constitution Word Scramble',
      description: 'Unscramble words related to Dr. Ambedkar and the Constitution',
      icon: Puzzle,
      color: 'bg-justice'
    },
    {
      id: 'memory',
      title: 'Rights & Duties Memory',
      description: 'Test your memory with constitutional principles pattern game',
      icon: Zap,
      color: 'bg-constitutional'
    },
    {
      id: 'quiz',
      title: 'Ambedkar Trivia Challenge',
      description: 'Quick-fire questions about Dr. Ambedkar\'s life and legacy',
      icon: Target,
      color: 'bg-dignity'
    }
  ];

  if (activeGame === 'word') {
    const currentWordData = ambedkarWords.find(w => w.word === wordGameState.currentWord);
    
    return (
      <div className={`max-w-2xl mx-auto p-6 ${className}`}>
        <Card className="p-8 shadow-constitutional border-card-border">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-constitutional mb-2">Word Scramble</h3>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-justice" />
                <span className="font-semibold">{wordGameState.score} points</span>
              </div>
              {wordGameState.streak > 0 && (
                <div className="flex items-center space-x-1 bg-justice/20 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-justice">🔥 {wordGameState.streak}</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold tracking-widest text-constitutional mb-4">
              {wordGameState.scrambledWord}
            </div>
            <p className="text-muted-foreground italic">
              Hint: {currentWordData?.hint}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <input
              type="text"
              placeholder="Enter your answer..."
              className="px-4 py-2 border rounded-lg text-center uppercase tracking-widest"
              maxLength={wordGameState.currentWord.length}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  checkWordAnswer((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setActiveGame(null)}
              className="mr-4"
            >
              Back to Games
            </Button>
            <Button variant="constitutional" onClick={startWordGame}>
              <RefreshCw className="w-4 h-4 mr-2" />
              New Word
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (activeGame === 'memory') {
    return (
      <div className={`max-w-2xl mx-auto p-6 ${className}`}>
        <Card className="p-8 shadow-constitutional border-card-border">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-constitutional mb-2">Memory Pattern</h3>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-constitutional" />
                <span className="font-semibold">{memoryGameState.score} points</span>
              </div>
              <div className="text-muted-foreground">
                Level {memoryGameState.sequence.length}
              </div>
            </div>
          </div>

          {memoryGameState.gameActive ? (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  data-memory-button={index}
                  onClick={() => handleMemoryClick(index)}
                  disabled={memoryGameState.showingSequence}
                  className={`h-20 rounded-lg border-2 transition-all duration-200 ${
                    index === 0 ? 'bg-justice hover:bg-justice/80' :
                    index === 1 ? 'bg-constitutional hover:bg-constitutional/80' :
                    index === 2 ? 'bg-dignity hover:bg-dignity/80' :
                    'bg-revolution hover:bg-revolution/80'
                  } ${memoryGameState.showingSequence ? 'opacity-50' : ''}`}
                >
                  <div className="text-white font-bold">
                    {index === 0 ? 'Justice' : 
                     index === 1 ? 'Liberty' : 
                     index === 2 ? 'Equality' : 
                     'Fraternity'}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-dignity mb-4">Game Over!</h4>
              <p className="text-muted-foreground mb-4">
                You reached level {memoryGameState.sequence.length} and scored {memoryGameState.score} points!
              </p>
            </div>
          )}

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setActiveGame(null)}
              className="mr-4"
            >
              Back to Games
            </Button>
            <Button variant="constitutional" onClick={startMemoryGame}>
              {memoryGameState.gameActive ? 'Restart' : 'Play Again'}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-constitutional mb-4">Creative Games</h2>
        <p className="text-xl text-muted-foreground">
          Learn about Dr. Ambedkar through fun and interactive games
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <Card 
              key={game.id}
              className="p-6 shadow-constitutional border-card-border hover:shadow-lg transition-all duration-300 cursor-pointer animate-scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                if (game.id === 'word') startWordGame();
                else if (game.id === 'memory') startMemoryGame();
                else setActiveGame(game.id);
              }}
            >
              <div className={`w-16 h-16 ${game.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-constitutional text-center mb-3">
                {game.title}
              </h3>
              
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                {game.description}
              </p>
              
              <div className="text-center">
                <Button variant="constitutional" className="w-full">
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Play Now
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeGames;