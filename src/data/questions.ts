import { Question } from '@/types/game';

export const sampleQuestions: Question[] = [
  // Geography Questions
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
    question: 'Which is the largest country in the world by area?',
    options: ['China', 'Canada', 'Russia', 'United States'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '3',
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '4',
    question: 'Which river is the longest in the world?',
    options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '5',
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium',
    timeLimit: 15
  },

  // Technology Questions
  {
    id: '6',
    question: 'Which programming language is known as the "mother of all languages"?',
    options: ['Python', 'C', 'Java', 'Assembly'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 20
  },
  {
    id: '7',
    question: 'In which year was the first iPhone released?',
    options: ['2006', '2007', '2008', '2009'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '8',
    question: 'What does "HTML" stand for?',
    options: ['High Tech Modern Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'easy',
    timeLimit: 20
  },
  {
    id: '9',
    question: 'What is the smallest unit of data in a computer?',
    options: ['Byte', 'Bit', 'Megabyte', 'Kilobyte'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 20
  },
  {
    id: '10',
    question: 'Who is the founder of Microsoft?',
    options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '11',
    question: 'What does "AI" stand for?',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Automated Integration'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '12',
    question: 'Which company developed the Android operating system?',
    options: ['Apple', 'Microsoft', 'Google', 'Samsung'],
    correctAnswer: 2,
    category: 'Technology',
    difficulty: 'medium',
    timeLimit: 15
  },

  // Science Questions
  {
    id: '13',
    question: 'What is the largest planet in our solar system?',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Earth'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '14',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '15',
    question: 'What is the speed of light in vacuum?',
    options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '16',
    question: 'How many bones are in the human body?',
    options: ['206', '196', '216', '226'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '17',
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '18',
    question: 'Which gas makes up most of Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium',
    timeLimit: 15
  },

  // Sports Questions
  {
    id: '19',
    question: 'Which country hosted the 2016 Summer Olympics?',
    options: ['China', 'Brazil', 'United Kingdom', 'Russia'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '20',
    question: 'How many players are on a basketball team on the court at one time?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '21',
    question: 'Which sport is known as "the beautiful game"?',
    options: ['Basketball', 'Tennis', 'Football (Soccer)', 'Baseball'],
    correctAnswer: 2,
    category: 'Sports',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '22',
    question: 'In which year did the first modern Olympics take place?',
    options: ['1896', '1900', '1904', '1908'],
    correctAnswer: 0,
    category: 'Sports',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '23',
    question: 'How many players are on a football (soccer) team?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy',
    timeLimit: 15
  },

  // Arts Questions
  {
    id: '24',
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
    correctAnswer: 2,
    category: 'Arts',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '25',
    question: 'Which composer wrote "The Four Seasons"?',
    options: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'],
    correctAnswer: 2,
    category: 'Arts',
    difficulty: 'medium',
    timeLimit: 20
  },
  {
    id: '26',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
    correctAnswer: 1,
    category: 'Arts',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '27',
    question: 'Which art movement is Vincent van Gogh associated with?',
    options: ['Impressionism', 'Cubism', 'Surrealism', 'Abstract Expressionism'],
    correctAnswer: 0,
    category: 'Arts',
    difficulty: 'hard',
    timeLimit: 20
  },

  // Gaming Questions
  {
    id: '28',
    question: 'Which popular game features characters named Mario and Luigi?',
    options: ['Sonic the Hedgehog', 'Super Mario Bros', 'Street Fighter', 'Mortal Kombat'],
    correctAnswer: 1,
    category: 'Gaming',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '29',
    question: 'Which company created the PlayStation console?',
    options: ['Nintendo', 'Microsoft', 'Sony', 'Sega'],
    correctAnswer: 2,
    category: 'Gaming',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '30',
    question: 'What is the best-selling video game of all time?',
    options: ['Minecraft', 'Tetris', 'Grand Theft Auto V', 'Wii Sports'],
    correctAnswer: 0,
    category: 'Gaming',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '31',
    question: 'Which game features a character named Link?',
    options: ['Final Fantasy', 'The Legend of Zelda', 'Pokemon', 'Dragon Quest'],
    correctAnswer: 1,
    category: 'Gaming',
    difficulty: 'medium',
    timeLimit: 15
  },

  // Cristiano Ronaldo Questions
  {
    id: '32',
    question: 'Who is the Greatest Player of All Time (GOAT)?',
    options: ['Lionel Messi', 'Cristiano Ronaldo', 'Ronaldinho', 'Pelé'],
    correctAnswer: 1,
    category: 'Cristiano Ronaldo',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '33',
    question: 'In which country was Cristiano Ronaldo born?',
    options: ['Spain', 'Brazil', 'Portugal', 'Argentina'],
    correctAnswer: 2,
    category: 'Cristiano Ronaldo',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '34',
    question: 'Which club did Cristiano Ronaldo join in 2003?',
    options: ['Barcelona', 'Real Madrid', 'Manchester United', 'Juventus'],
    correctAnswer: 2,
    category: 'Cristiano Ronaldo',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '35',
    question: 'How many Ballon d\'Or awards has Cristiano Ronaldo won?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '36',
    question: 'Which jersey number does Cristiano Ronaldo famously wear?',
    options: ['7', '9', '10', '11'],
    correctAnswer: 0,
    category: 'Cristiano Ronaldo',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '37',
    question: 'In which year did Cristiano Ronaldo win his first Champions League?',
    options: ['2007', '2008', '2009', '2010'],
    correctAnswer: 1,
    category: 'Cristiano Ronaldo',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '38',
    question: 'Which club did Cristiano Ronaldo join in 2018?',
    options: ['Real Madrid', 'Juventus', 'PSG', 'Manchester City'],
    correctAnswer: 1,
    category: 'Cristiano Ronaldo',
    difficulty: 'medium',
    timeLimit: 15
  },
  {
    id: '39',
    question: 'What is Cristiano Ronaldo\'s full name?',
    options: ['Cristiano Ronaldo dos Santos', 'Cristiano Ronaldo de Lima', 'Cristiano Ronaldo dos Santos Aveiro', 'Cristiano Ronaldo Silva'],
    correctAnswer: 2,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '40',
    question: 'Which position does Cristiano Ronaldo primarily play?',
    options: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
    correctAnswer: 3,
    category: 'Cristiano Ronaldo',
    difficulty: 'easy',
    timeLimit: 15
  },
  {
    id: '41',
    question: 'How many goals has Cristiano Ronaldo scored in his career (as of 2025)?',
    options: ['800+', '850+', '900+', '950+'],
    correctAnswer: 3,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '42',
    question: 'To whom is Ronaldo most often compared?',
    options: ['Harry Kane', 'Eden Hazard', 'Neymar', 'Lionel Messi'],
    correctAnswer: 3,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '43',
    question: 'In which year was Cristiano Ronaldo born?',
    options: ['1986', '1985', '1989', '1987'],
    correctAnswer: 1,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '44',
    question: 'What\'s Cristiano Ronaldo\'s nickname?',
    options: ['El Comandante', 'Mr Champions League', 'El Bicho', 'Cris'],
    correctAnswer: 2,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '45',
    question: 'In which year did Cristiano Ronaldo win his first Ballon d\'Or?',
    options: ['2010', '2009', '2007', '2008'],
    correctAnswer: 3,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
    timeLimit: 20
  },
  {
    id: '46',
    question: 'What was Cristiano Ronaldo first club?',
    options: ['Sporting CP', 'PSG', 'Benfica', 'Porto'],
    correctAnswer: 0,
    category: 'Cristiano Ronaldo',
    difficulty: 'hard',
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
  },
  {
    id: 'cristiano ronaldo',
    name: 'Cristiano Ronaldo',
    icon: '🐐',
    description: 'How well do you know Cristiano Ronaldo?'
  }
];