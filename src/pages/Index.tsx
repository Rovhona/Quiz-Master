import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CategorySelector } from '@/components/game/CategorySelector';
import { GameSettings } from '@/types/game';
import { Play, Users, Trophy, Zap } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    category: 'all',
    difficulty: 'mixed',
    questionsCount: 10,
    timePerQuestion: 15
  });

  const handleStartGame = () => {
    const settings = {
      ...gameSettings,
      category: selectedCategory
    };
    navigate('/game', { state: { settings } });
  };

  const handleSettingChange = (key: keyof GameSettings, value: any) => {
    setGameSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-slide-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              QuizMaster
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Test your knowledge with our exciting trivia game! Challenge yourself across multiple categories and climb the leaderboard.
            </p>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Fast-Paced</h3>
                  <p className="text-sm text-muted-foreground">Quick rounds with timed questions to keep you on your toes</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-lg font-semibold mb-2">Competitive</h3>
                  <p className="text-sm text-muted-foreground">Earn points, build streaks, and compete for high scores</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-success/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-success" />
                  <h3 className="text-lg font-semibold mb-2">Multiplayer Ready</h3>
                  <p className="text-sm text-muted-foreground">Built for future multiplayer battles with friends</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Game Setup */}
      <div className="container mx-auto px-4 pb-16">
        <Card className="max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Start Your Quiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Category Selection */}
            <CategorySelector
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            
            {/* Game Settings */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Game Settings</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Difficulty */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-muted-foreground">Difficulty</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['easy', 'medium', 'hard', 'mixed'].map((diff) => (
                      <Button
                        key={diff}
                        variant={gameSettings.difficulty === diff ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSettingChange('difficulty', diff)}
                        className="capitalize"
                      >
                        {diff}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Questions Count */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-muted-foreground">Questions</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[5, 10, 15, 20].map((count) => (
                      <Button
                        key={count}
                        variant={gameSettings.questionsCount === count ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSettingChange('questionsCount', count)}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Time Per Question */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-muted-foreground">Time per Question</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[10, 15, 20, 30].map((time) => (
                      <Button
                        key={time}
                        variant={gameSettings.timePerQuestion === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSettingChange('timePerQuestion', time)}
                      >
                        {time}s
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Start Game Button */}
            <div className="text-center pt-6">
              <Button 
                onClick={handleStartGame}
                size="lg"
                className="text-lg px-12 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Play className="h-6 w-6 mr-3" />
                Start Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
