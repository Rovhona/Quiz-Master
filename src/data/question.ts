import { Question } from '@/types/game';

export const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '2',
    question: 'Which programming language is known as the "mother of all languages"?',
    options: ['Python', 'C', 'Java', 'Assembly'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 20
  },
  {
    id: '3',
    question: 'In which year was the first iPhone released?',
    options: ['2006', '2007', '2008', '2009'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '4',
    question: 'What is the largest planet in our solar system?',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Earth'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '5',
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
    correctAnswer: 2,
    category: 'Arts',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '6',
    question: 'What does "HTML" stand for?',
    options: ['High Tech Modern Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'easy',
    timeLimit: 20
  },
  {
    id: '7',
    question: 'Which country hosted the 2016 Summer Olympics?',
    options: ['China', 'Brazil', 'United Kingdom', 'Russia'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '8',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '9',
    question: 'Which popular game features characters named Mario and Luigi?',
    options: ['Sonic the Hedgehog', 'Super Mario Bros', 'Street Fighter', 'Mortal Kombat'],
    correctAnswer: 1,
    category: 'Gaming',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '10',
    question: 'What is the smallest unit of data in a computer?',
    options: ['Byte', 'Bit', 'Megabyte', 'Kilobyte'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 20
  }
];

export const categories = [
  {
    id: 'all',
    name: 'All Categories',
    icon: '🌟',
    description: 'Mixed questions from all categories'
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Programming, software, and tech innovations'
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    description: 'Physics, chemistry, biology, and space'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    description: 'Countries, capitals, and world knowledge'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    description: 'Sports events, athletes, and records'
  },
  {
    id: 'arts',
    name: 'Arts',
    icon: '🎨',
    description: 'Painting, music, literature, and culture'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: '🎮',
    description: 'Video games, consoles, and gaming history'
  }
];