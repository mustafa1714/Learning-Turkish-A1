export enum ContentType {
  VOCABULARY = 'VOCABULARY',
  GRAMMAR = 'GRAMMAR',
  READING = 'READING',
  QUIZ = 'QUIZ'
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: number[]; // Array of completed unit IDs
}

export interface VocabularyItem {
  turkish: string;
  arabic: string;
  pronunciation?: string;
  image?: string;
}

export interface GrammarRule {
  title: string;
  description: string;
  examples: { tr: string; ar: string }[];
  type?: 'harmony-2' | 'harmony-4' | 'general'; // Type for interactive tools
}

export interface ReadingItem {
  title: string;
  turkish: string;
  arabic: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface LessonContent {
  type: ContentType;
  vocabulary?: VocabularyItem[];
  grammar?: GrammarRule;
  reading?: ReadingItem[];
  quiz?: QuizQuestion[];
}

export interface Unit {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  content: {
    vocabulary: VocabularyItem[];
    grammar: GrammarRule[];
    readings: ReadingItem[];
    quiz: QuizQuestion[];
  };
}