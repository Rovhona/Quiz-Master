# 🎮 QuizMaster - Interactive Trivia Quiz Game

A modern, fast-paced trivia quiz game built with React and TypeScript. Test your knowledge across multiple categories with customizable difficulty levels, timed questions, and competitive scoring. Challenge yourself and climb the leaderboard!

## ✨ Features

### 🎯 Current Features
- **Single Player Mode** - Play trivia questions solo with immediate feedback
- **7 Categories** - Technology, Science, Geography, Sports, Arts, Gaming, and Mixed
- **Customizable Settings** - Select difficulty (Easy/Medium/Hard/Mixed), number of questions (5-20), and time per question (10-30s)
- **Dynamic Timer** - Visual countdown timer with progress indication
- **Smart Scoring System** - Points based on speed + streak bonuses for consecutive correct answers
- **Responsive Design** - Beautiful gradient UI that works perfectly on desktop and mobile
- **Real-time Statistics** - Live score tracking, streak counter, and progress indicators
- **Immediate Feedback** - Visual indicators for correct/incorrect answers with smooth animations

### 🚀 Planned Features
- **Multiplayer Mode** - Real-time multiplayer battles with friends
- **Global Leaderboards** - Compete with players worldwide
- **User Authentication** - Sign up, login, and user profiles
- **Expanded Question Database** - More categories and difficulty levels
- **Achievement System** - Unlock badges and rewards for milestones
- **Social Features** - Friend system and challenges

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect, useCallback)
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript strict mode
- **UI Components**: Custom design system with gradient backgrounds and animations

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

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
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
├── hooks/                         # Custom React hooks
└── lib/
    └── utils.ts                   # Utility functions
```

## 🎮 How to Play

1. **Choose Your Category** - Select from 7 categories (Technology, Science, Geography, Sports, Arts, Gaming) or play with mixed questions
2. **Customize Settings** - Set your preferred difficulty (Easy/Medium/Hard/Mixed), number of questions (5-20), and time per question (10-30s)
3. **Start Playing** - Answer questions within the time limit to score points
4. **Earn Points** - Get more points for faster answers and consecutive correct answers (streaks)
5. **Track Progress** - Monitor your live score, current streak, and question progress
6. **View Results** - See your final score, accuracy percentage, and performance summary

## 🎨 Design System

The project features a modern, custom design system built with Tailwind CSS:
- **Gradient Backgrounds** - Beautiful gradient overlays and glass-morphism effects
- **Semantic Color Tokens** - Consistent theming with primary, accent, success, and error colors
- **Smooth Animations** - Slide-in effects, hover transitions, and loading states
- **Responsive Design** - Mobile-first approach that works on all screen sizes
- **Interactive Elements** - Hover effects, focus states, and visual feedback
- **Typography** - Clean, readable fonts with proper hierarchy

## 🚀 Deployment

### Deploy to Production
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting platform (Vercel, Netlify, GitHub Pages, etc.)
3. The app is a static SPA, so it works with any static hosting service

## 🔮 Roadmap

- [ ] **Multiplayer Implementation** - Real-time multiplayer lobbies with WebSocket integration
- [ ] **User Authentication** - Sign up, login, and user profiles with persistent data
- [ ] **Global Leaderboards** - Compete with players worldwide with ranking system
- [ ] **Question Expansion** - More categories, difficulty levels, and question types
- [ ] **Achievement System** - Unlock badges, rewards, and milestone celebrations
- [ ] **Social Features** - Friend system, challenges, and sharing capabilities
- [ ] **Question Editor** - Allow users to create and submit their own questions
- [ ] **Tournament Mode** - Bracket-style competitions with elimination rounds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Deploy to see your app in action!]
- **GitHub Repository**: [Your repository URL]

## 📸 Screenshots

*Add screenshots of your app here to showcase the beautiful UI and gameplay*

## 🏆 Key Features Showcase

- **Smart Scoring**: Points = (Time Remaining × 10) + (Streak × 50)
- **Category Variety**: 7 different knowledge areas to choose from
- **Responsive Design**: Seamless experience across all devices
- **Modern UI**: Gradient backgrounds, smooth animations, and intuitive navigation
- **Type Safety**: Full TypeScript implementation for robust development

---

Built with ❤️ using React and TypeScript