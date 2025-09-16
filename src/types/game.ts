export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    timeLimit?: number;
  }
  
  export interface GameState {
    currentQuestionIndex: number;
    score: number;
    timeRemaining: number;
    isGameActive: boolean;
    isGameFinished: boolean;
    selectedAnswer: number | null;
    showCorrectAnswer: boolean;
    streak: number;
  }
  
  export interface GameSettings {
    category: string;
    difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
    questionsCount: number;
    timePerQuestion: number;
  }
  
  export type Category = {
    id: string;
    name: string;
    icon: string;
    description: string;
  };