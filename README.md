# 🎮 QuizMaster - Multiplayer Trivia Quiz Game

A modern, interactive trivia quiz game built with React and powered by Supabase. Test your knowledge across multiple categories with customizable difficulty levels and time constraints.

## ✨ Features

### 🎯 Current Features
- **Single Player Mode** - Play trivia questions solo with immediate feedback
- **Multiple Categories** - Choose from Science, History, Sports, Entertainment, Geography, and more
- **Customizable Settings** - Select difficulty level, number of questions, and time per question
- **Dynamic Timer** - Visual countdown timer with progress indication
- **Responsive Design** - Beautiful UI that works on desktop and mobile
- **Real-time Scoring** - Track your performance with detailed statistics

### 🚀 Planned Features
- **Multiplayer Mode** - Real-time multiplayer battles with friends
- **Global Leaderboards** - Compete with players worldwide
- **User Profiles** - Track your progress and achievements
- **Question Database** - Expanding collection of trivia questions

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Backend**: Supabase (Database, Authentication, Real-time)
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   The project includes environment variables for Supabase integration:
   ```env
   VITE_SUPABASE_PROJECT_ID="zyiqsgcsejwrohagetgk"
   VITE_SUPABASE_URL="https://zyiqsgcsejwrohagetgk.supabase.co"
   VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` to start playing!

## 📁 Project Structure

```
src/
├── components/
│   ├── game/
│   │   ├── CategorySelector.tsx    # Category selection component
│   │   ├── GameStats.tsx          # Score and statistics display
│   │   ├── QuestionCard.tsx       # Question and answers display
│   │   └── Timer.tsx              # Countdown timer component
│   └── ui/                        # shadcn/ui components
├── data/
│   └── questions.ts               # Static question database
├── pages/
│   ├── Index.tsx                  # Home page with game setup
│   ├── Game.tsx                   # Main game interface
│   └── NotFound.tsx              # 404 page
├── types/
│   └── game.ts                    # TypeScript type definitions
├── integrations/
│   └── supabase/                  # Supabase client configuration
└── lib/
    └── utils.ts                   # Utility functions
```

## 🎮 How to Play

1. **Choose Your Category** - Select from various knowledge categories or play with mixed questions
2. **Customize Settings** - Set your preferred difficulty, number of questions, and time limit
3. **Start Playing** - Answer questions within the time limit to score points
4. **Track Progress** - Monitor your score, streak, and remaining questions
5. **View Results** - See your final score and performance statistics

## 🎨 Design System

The project uses a custom design system built with Tailwind CSS:
- **Semantic color tokens** for consistent theming
- **Gradient backgrounds** for visual appeal
- **Smooth animations** for enhanced user experience
- **Responsive design** for all screen sizes

## 🚀 Deployment

### Deploy with Lovable
1. Open your [Lovable project](https://lovable.dev/projects/017233ae-5193-43af-975e-c880bdc52910)
2. Click "Share" → "Publish"
3. Your app will be live at `yourapp.lovable.app`

### Deploy Elsewhere
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting platform

## 🔮 Roadmap

- [ ] **Multiplayer Implementation** - Real-time multiplayer lobbies
- [ ] **User Authentication** - Sign up, login, and user profiles
- [ ] **Global Leaderboards** - Compete with players worldwide  
- [ ] **Question Expansion** - More categories and difficulty levels
- [ ] **Achievement System** - Unlock badges and rewards
- [ ] **Social Features** - Friend system and challenges

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Your deployed app URL]
- **Lovable Project**: https://lovable.dev/projects/017233ae-5193-43af-975e-c880bdc52910
- **Supabase Dashboard**: https://supabase.com/dashboard/project/zyiqsgcsejwrohagetgk

---

Built with ❤️ using [Lovable](https://lovable.dev)