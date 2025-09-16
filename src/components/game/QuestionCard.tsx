import { Question } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showCorrectAnswer: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
  className?: string;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  showCorrectAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
  className
}: QuestionCardProps) => {
  const getAnswerButtonVariant = (index: number) => {
    if (!showCorrectAnswer) {
      return selectedAnswer === index ? "default" : "outline";
    }
    
    if (index === question.correctAnswer) {
      return "success";
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "destructive";
    }
    
    return "outline";
  };

  const getAnswerButtonClasses = (index: number) => {
    if (!showCorrectAnswer) {
      return cn(
        "h-auto min-h-[60px] p-4 text-left justify-start transition-all duration-200",
        selectedAnswer === index && "ring-2 ring-primary shadow-glow"
      );
    }
    
    if (index === question.correctAnswer) {
      return "h-auto min-h-[60px] p-4 text-left justify-start bg-gradient-success shadow-success";
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "h-auto min-h-[60px] p-4 text-left justify-start bg-gradient-error shadow-error";
    }
    
    return "h-auto min-h-[60px] p-4 text-left justify-start opacity-60";
  };

  return (
    <Card className={cn("w-full max-w-4xl animate-slide-in", className)}>
      <CardHeader className="space-y-4">
        {/* Question Progress */}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
            {question.category}
          </span>
        </div>
        
        {/* Question Text */}
        <h2 className="text-2xl font-bold leading-relaxed text-foreground">
          {question.question}
        </h2>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Answer Options */}
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={getAnswerButtonVariant(index)}
              onClick={() => !showCorrectAnswer && onAnswerSelect(index)}
              disabled={showCorrectAnswer}
              className={getAnswerButtonClasses(index)}
            >
              <div className="flex items-center w-full gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-left">{option}</span>
                {showCorrectAnswer && (
                  <div className="flex-shrink-0">
                    {index === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-success-foreground" />
                    ) : selectedAnswer === index ? (
                      <XCircle className="h-5 w-5 text-error-foreground" />
                    ) : null}
                  </div>
                )}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};