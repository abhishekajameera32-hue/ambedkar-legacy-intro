import React, { useState, useEffect } from 'react';
import { Trophy, Star, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface ConstitutionalGameProps {
  className?: string;
}

const ConstitutionalGame: React.FC<ConstitutionalGameProps> = ({ className = "" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [streak, setStreak] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "Who is known as the 'Architect of the Indian Constitution'?",
      options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Vallabhbhai Patel"],
      correct: 1,
      explanation: "Dr. B.R. Ambedkar chaired the Constitution Drafting Committee and is rightfully called the Architect of the Indian Constitution."
    },
    {
      id: 2,
      question: "How many fundamental rights are guaranteed by the Indian Constitution?",
      options: ["5", "6", "7", "8"],
      correct: 1,
      explanation: "The Indian Constitution guarantees 6 fundamental rights to all citizens, ensuring equality and justice."
    },
    {
      id: 3,
      question: "In which year was the Indian Constitution adopted?",
      options: ["1947", "1949", "1950", "1951"],
      correct: 1,
      explanation: "The Constitution was adopted on 26th November 1949, and came into effect on 26th January 1950."
    },
    {
      id: 4,
      question: "What does 'Justice, Liberty, Equality, Fraternity' represent in the Constitution?",
      options: ["Directive Principles", "Preamble ideals", "Fundamental Duties", "Emergency Provisions"],
      correct: 1,
      explanation: "These are the core ideals enshrined in the Preamble of the Indian Constitution, reflecting Dr. Ambedkar's vision."
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameComplete(false);
    setStreak(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Constitutional Scholar! 🏆";
    if (percentage >= 70) return "Justice Champion! 🌟";
    if (percentage >= 50) return "Knowledge Seeker! 📚";
    return "Keep Learning! 💪";
  };

  if (gameComplete) {
    return (
      <div className={`text-center p-8 ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-justice animate-coin-shine" />
            <h2 className="text-2xl font-bold text-constitutional mb-2">Game Complete!</h2>
            <p className="text-lg text-dignity font-semibold">{getScoreMessage()}</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-constitutional mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Final Score</span>
              <span className="text-2xl font-bold text-constitutional">
                {score}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-gradient-justice h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(score / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {Math.round((score / questions.length) * 100)}% Accuracy
            </p>
          </div>

          <Button variant="constitutional" size="lg" onClick={resetGame}>
            <RefreshCw className="w-5 h-5 mr-2" />
            Play Again
          </Button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className={`max-w-2xl mx-auto p-6 ${className}`}>
      {/* Game Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-justice" />
            <span className="font-semibold text-constitutional">{score} / {questions.length}</span>
          </div>
          {streak > 0 && (
            <div className="flex items-center space-x-1 bg-justice/20 px-2 py-1 rounded-full">
              <span className="text-xs font-semibold text-justice">🔥 {streak}</span>
            </div>
          )}
        </div>
        
        <div className="w-24 bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-constitutional h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-card rounded-xl p-6 shadow-constitutional border border-card-border animate-scroll-reveal">
        <h3 className="text-xl font-semibold text-constitutional mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonVariant: "outline" | "constitutional" | "destructive" = "outline";
            
            if (showResult && selectedAnswer !== null) {
              if (index === question.correct) {
                buttonVariant = "constitutional";
              } else if (index === selectedAnswer) {
                buttonVariant = "destructive";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 ${
                  showResult && index === question.correct 
                    ? 'bg-constitutional text-primary-foreground border-constitutional' 
                    : showResult && index === selectedAnswer && index !== question.correct
                    ? 'bg-destructive text-destructive-foreground border-destructive'
                    : 'bg-card'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && index === question.correct && (
                    <CheckCircle2 className="w-5 h-5 text-current" />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <XCircle className="w-5 h-5 text-current" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Result Explanation */}
        {showResult && (
          <div className="mt-6 p-4 bg-wisdom rounded-lg border border-constitutional/20">
            <p className="text-sm text-dignity">
              <span className="font-semibold">Explanation:</span> {question.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {showResult && (
          <div className="mt-6 text-center">
            <Button variant="constitutional" onClick={nextQuestion}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConstitutionalGame;