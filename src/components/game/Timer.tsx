import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimerProps {
  timeRemaining: number;
  totalTime: number;
  onTimeUp: () => void;
  isActive: boolean;
  className?: string;
}

export const Timer = ({ timeRemaining, totalTime, onTimeUp, isActive, className }: TimerProps) => {
  const [lastSecond, setLastSecond] = useState(timeRemaining);
  
  useEffect(() => {
    if (timeRemaining === 0 && isActive) {
      onTimeUp();
    }
    
    if (timeRemaining !== lastSecond && timeRemaining <= 5) {
      setLastSecond(timeRemaining);
    }
  }, [timeRemaining, isActive, onTimeUp, lastSecond]);

  const percentage = (timeRemaining / totalTime) * 100;
  const isWarning = timeRemaining <= 5;
  const isCritical = timeRemaining <= 3;

  return (
    <div className={cn("relative w-full", className)}>
      {/* Progress Bar Background */}
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full transition-all duration-1000 ease-linear rounded-full",
            isCritical ? "bg-gradient-error animate-pulse" :
            isWarning ? "bg-warning" : 
            "bg-gradient-primary"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Timer Display */}
      <div className={cn(
        "absolute -top-8 right-0 text-sm font-bold transition-all duration-300",
        isCritical ? "text-error animate-countdown" :
        isWarning ? "text-warning" : 
        "text-foreground"
      )}>
        {timeRemaining}s
      </div>
      
      {/* Warning pulse effect */}
      {isWarning && (
        <div className={cn(
          "absolute inset-0 rounded-full",
          isCritical ? "animate-pulse-glow bg-error/10" : "animate-pulse bg-warning/10"
        )} />
      )}
    </div>
  );
};