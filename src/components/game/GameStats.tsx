import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Trophy, Target, Flame } from 'lucide-react';

interface GameStatsProps {
  score: number;
  streak: number;
  questionNumber: number;
  totalQuestions: number;
  className?: string;
}

export const GameStats = ({ 
  score, 
  streak, 
  questionNumber, 
  totalQuestions,
  className 
}: GameStatsProps) => {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {/* Score */}
      <Card className="bg-gradient-primary">
        <CardContent className="p-4 text-center">
          <Trophy className="h-6 w-6 mx-auto mb-2 text-primary-foreground" />
          <div className="text-2xl font-bold text-primary-foreground">{score}</div>
          <div className="text-xs text-primary-foreground/80">Score</div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card className="bg-gradient-to-r from-accent to-accent/80">
        <CardContent className="p-4 text-center">
          <Target className="h-6 w-6 mx-auto mb-2 text-accent-foreground" />
          <div className="text-2xl font-bold text-accent-foreground">
            {questionNumber}/{totalQuestions}
          </div>
          <div className="text-xs text-accent-foreground/80">Progress</div>
        </CardContent>
      </Card>

      {/* Streak */}
      <Card className={cn(
        "transition-all duration-300",
        streak > 0 ? "bg-gradient-success shadow-success" : "bg-muted"
      )}>
        <CardContent className="p-4 text-center">
          <Flame className={cn(
            "h-6 w-6 mx-auto mb-2",
            streak > 0 ? "text-success-foreground" : "text-muted-foreground"
          )} />
          <div className={cn(
            "text-2xl font-bold",
            streak > 0 ? "text-success-foreground" : "text-muted-foreground"
          )}>
            {streak}
          </div>
          <div className={cn(
            "text-xs",
            streak > 0 ? "text-success-foreground/80" : "text-muted-foreground"
          )}>
            Streak
          </div>
        </CardContent>
      </Card>
    </div>
  );
};