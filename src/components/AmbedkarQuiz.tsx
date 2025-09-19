import React, { useState, useEffect } from 'react';
import { Trophy, Star, RefreshCw, CheckCircle2, XCircle, BookOpen, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface AmbedkarQuizProps {
  className?: string;
}

const AmbedkarQuiz: React.FC<AmbedkarQuizProps> = ({ className = "" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [streak, setStreak] = useState(0);
  const [knowledge, setKnowledge] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "What was Dr. B.R. Ambedkar's birth name?",
      options: ["Bhimrao Ramji Ambedkar", "Bhimrao Sakpal", "Bhim Rao Ambavadekar", "Bhimsen Ambedkar"],
      correct: 1,
      explanation: "Dr. Ambedkar was born as Bhimrao Sakpal. He later adopted the surname 'Ambedkar' from his teacher Krishnaji Keshav Ambedkar.",
      category: "Biography",
      difficulty: 'easy'
    },
    {
      id: 2,
      question: "Which university did Dr. Ambedkar attend for his higher studies abroad?",
      options: ["Harvard University", "Columbia University", "Oxford University", "All of the above"],
      correct: 3,
      explanation: "Dr. Ambedkar was exceptionally educated, studying at Columbia University (PhD), London School of Economics, and Oxford University (D.Sc).",
      category: "Education",
      difficulty: 'medium'
    },
    {
      id: 3,
      question: "Dr. Ambedkar converted to which religion in 1956?",
      options: ["Christianity", "Buddhism", "Islam", "Sikhism"],
      correct: 1,
      explanation: "Dr. Ambedkar converted to Buddhism in 1956, along with around 500,000 of his followers, seeking equality and liberation from caste discrimination.",
      category: "Religion",
      difficulty: 'easy'
    },
    {
      id: 4,
      question: "What was the name of Dr. Ambedkar's political party founded in 1942?",
      options: ["Republican Party of India", "All India Scheduled Castes Federation", "Independent Labour Party", "Scheduled Castes Federation"],
      correct: 1,
      explanation: "Dr. Ambedkar founded the All India Scheduled Castes Federation in 1942 to represent the political interests of Dalits.",
      category: "Politics",
      difficulty: 'hard'
    },
    {
      id: 5,
      question: "Which book written by Dr. Ambedkar critiques Hinduism?",
      options: ["The Buddha and His Dhamma", "Annihilation of Caste", "Who Were the Shudras?", "The Untouchables"],
      correct: 1,
      explanation: "'Annihilation of Caste' is Dr. Ambedkar's most famous work criticizing the Hindu caste system and advocating for its complete abolition.",
      category: "Literature",
      difficulty: 'medium'
    },
    {
      id: 6,
      question: "Dr. Ambedkar was the chairman of which important committee?",
      options: ["Planning Commission", "Constitution Drafting Committee", "Finance Commission", "Election Commission"],
      correct: 1,
      explanation: "Dr. Ambedkar chaired the Constitution Drafting Committee and is rightfully called the 'Architect of the Indian Constitution'.",
      category: "Constitution",
      difficulty: 'easy'
    },
    {
      id: 7,
      question: "What was Dr. Ambedkar's profession before entering politics?",
      options: ["Lawyer", "Teacher", "Economist", "All of the above"],
      correct: 3,
      explanation: "Dr. Ambedkar was a highly qualified lawyer, taught economics, and was an accomplished economist before entering politics.",
      category: "Career",
      difficulty: 'medium'
    },
    {
      id: 8,
      question: "Which movement did Dr. Ambedkar lead for temple entry rights?",
      options: ["Satyagraha", "Mahad Satyagraha", "Kalaram Temple Entry", "Vaikom Satyagraha"],
      correct: 2,
      explanation: "Dr. Ambedkar led the Kalaram Temple Entry movement in Nashik in 1930 to secure temple entry rights for Dalits.",
      category: "Social Reform",
      difficulty: 'hard'
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    if (optionIndex === questions[currentQuestion].correct) {
      const points = questions[currentQuestion].difficulty === 'hard' ? 3 : 
                    questions[currentQuestion].difficulty === 'medium' ? 2 : 1;
      setScore(score + points);
      setStreak(streak + 1);
      setKnowledge(knowledge + points * 10);
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
    setKnowledge(0);
  };

  const getScoreMessage = () => {
    const maxScore = questions.reduce((sum, q) => sum + (q.difficulty === 'hard' ? 3 : q.difficulty === 'medium' ? 2 : 1), 0);
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return "Ambedkar Scholar! 🎓";
    if (percentage >= 70) return "Constitutional Expert! ⚖️";
    if (percentage >= 50) return "Knowledge Seeker! 📚";
    return "Keep Learning About Babasaheb! 🙏";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-justice/20 text-justice';
      case 'medium': return 'bg-constitutional/20 text-constitutional';
      case 'hard': return 'bg-revolution/20 text-revolution';
      default: return 'bg-muted';
    }
  };

  if (gameComplete) {
    const maxScore = questions.reduce((sum, q) => sum + (q.difficulty === 'hard' ? 3 : q.difficulty === 'medium' ? 2 : 1), 0);
    
    return (
      <div className={`text-center p-8 ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-justice animate-coin-shine" />
            <h2 className="text-2xl font-bold text-constitutional mb-2">Quiz Complete!</h2>
            <p className="text-lg text-dignity font-semibold">{getScoreMessage()}</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-constitutional mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-constitutional">{score}</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-justice">{knowledge}</div>
                <div className="text-sm text-muted-foreground">Knowledge XP</div>
              </div>
            </div>
            
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-gradient-justice h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(score / maxScore) * 100}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {Math.round((score / maxScore) * 100)}% Mastery
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-constitutional">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Learn More About Babasaheb</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Continue exploring Dr. Ambedkar's legacy through our educational resources
            </p>
          </div>

          <Button variant="constitutional" size="lg" onClick={resetGame}>
            <RefreshCw className="w-5 h-5 mr-2" />
            Take Quiz Again
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
            <span className="font-semibold text-constitutional">{score} pts</span>
          </div>
          {streak > 0 && (
            <div className="flex items-center space-x-1 bg-justice/20 px-2 py-1 rounded-full">
              <span className="text-xs font-semibold text-justice">🔥 {streak}</span>
            </div>
          )}
          <div className="flex items-center space-x-1 bg-dignity/20 px-2 py-1 rounded-full">
            <Heart className="w-3 h-3 text-dignity" />
            <span className="text-xs font-semibold text-dignity">{knowledge} XP</span>
          </div>
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
        <div className="flex items-center justify-between mb-4">
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty.toUpperCase()}
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-wisdom/20 text-dignity`}>
            {question.category}
          </div>
        </div>

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
              <span className="font-semibold">Did you know:</span> {question.explanation}
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

export default AmbedkarQuiz;