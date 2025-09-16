import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Timer } from '@/components/game/Timer';
import { QuestionCard } from '@/components/game/QuestionCard';
import { GameStats } from '@/components/game/GameStats';
import { sampleQuestions } from '@/data/questions';
import { GameState, GameSettings, Question } from '@/types/game';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const settings = location.state?.settings as GameSettings || {
    category: 'all',
    difficulty: 'mixed',
    questionsCount: 10,
    timePerQuestion: 15
  };

  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    timeRemaining: settings.timePerQuestion,
    isGameActive: true,
    isGameFinished: false,
    selectedAnswer: null,
    showCorrectAnswer: false,
    streak: 0
  });

  // Filter questions based on settings
  const getFilteredQuestions = useCallback((): Question[] => {
    let filtered = [...sampleQuestions];
    
    if (settings.category !== 'all') {
      filtered = filtered.filter(q => 
        q.category.toLowerCase() === settings.category.toLowerCase()
      );
    }
    
    if (settings.difficulty !== 'mixed') {
      filtered = filtered.filter(q => q.difficulty === settings.difficulty);
    }
    
    // Shuffle and take only the required number
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, settings.questionsCount);
  }, [settings]);

  const [questions] = useState<Question[]>(getFilteredQuestions());
  const currentQuestion = questions[gameState.currentQuestionIndex];

  // Timer countdown
  useEffect(() => {
    if (!gameState.isGameActive || gameState.showCorrectAnswer) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 1) {
          return { ...prev, timeRemaining: 0 };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isGameActive, gameState.showCorrectAnswer]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!gameState.isGameActive || gameState.selectedAnswer !== null) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const points = isCorrect ? 
      (gameState.timeRemaining * 10) + (gameState.streak * 50) : 0;

    setGameState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showCorrectAnswer: true,
      score: prev.score + points,
      streak: isCorrect ? prev.streak + 1 : 0,
      isGameActive: false
    }));

    // Auto-advance after showing answer
    setTimeout(() => {
      handleNextQuestion();
    }, 2500);
  };

  const handleTimeUp = () => {
    if (gameState.selectedAnswer !== null) return;
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: null,
      showCorrectAnswer: true,
      streak: 0,
      isGameActive: false
    }));

    setTimeout(() => {
      handleNextQuestion();
    }, 2500);
  };

  const handleNextQuestion = () => {
    const nextIndex = gameState.currentQuestionIndex + 1;
    
    if (nextIndex >= questions.length) {
      setGameState(prev => ({ ...prev, isGameFinished: true }));
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: nextIndex,
      timeRemaining: settings.timePerQuestion,
      selectedAnswer: null,
      showCorrectAnswer: false,
      isGameActive: true
    }));
  };

  const handlePlayAgain = () => {
    navigate('/');
  };

  const handleBackToMenu = () => {
    navigate('/');
  };

  if (gameState.isGameFinished) {
    const accuracy = ((gameState.score > 0 ? questions.filter((_, i) => i < gameState.currentQuestionIndex).length : 0) / questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Game Complete! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">{gameState.score}</div>
              <div className="text-xl text-muted-foreground">Final Score</div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{accuracy.toFixed(0)}%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button onClick={handlePlayAgain} className="flex-1" size="lg">
                <RotateCcw className="h-5 w-5 mr-2" />
                Play Again
              </Button>
              <Button onClick={handleBackToMenu} variant="outline" size="lg">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Menu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">No questions found for this category</p>
          <Button onClick={handleBackToMenu}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={handleBackToMenu}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Exit Game
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Category: <span className="font-medium text-foreground">{settings.category}</span>
          </div>
        </div>

        {/* Game Stats */}
        <GameStats
          score={gameState.score}
          streak={gameState.streak}
          questionNumber={gameState.currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />

        {/* Timer */}
        <Timer
          timeRemaining={gameState.timeRemaining}
          totalTime={settings.timePerQuestion}
          onTimeUp={handleTimeUp}
          isActive={gameState.isGameActive}
          className="mb-6"
        />

        {/* Question */}
        <div className="flex justify-center">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={gameState.selectedAnswer}
            showCorrectAnswer={gameState.showCorrectAnswer}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={gameState.currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        </div>
      </div>
    </div>
  );
}