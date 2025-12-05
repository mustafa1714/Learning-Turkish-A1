
export enum ModuleType {
  VOCABULARY = 'vocabulary',
  GRAMMAR = 'grammar',
  CONVERSATION = 'conversation',
  READING = 'reading',
  GAME = 'game',
  QUIZ = 'quiz'
}

export interface VocabularyItem {
  turkish: string;
  transliteration?: string;
  arabic: string;
  exampleTr: string;
  exampleAr: string;
}

export interface GrammarRule {
  title: string;
  explanationTr: string;
  explanationAr: string;
  examples: { tr: string; ar: string }[];
}

export interface DialogLine {
  speaker: string;
  textTr: string;
  textAr: string;
}

export interface ReadingSection {
  title: string;
  imageDescription: string; // Turkish description of the scene
  contentTr: string;
  contentAr: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface UnitContent {
  id: number;
  titleTr: string;
  titleAr: string;
  description: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarRule[];
  dialogue: {
    title: string;
    imageDescription: string;
    lines: DialogLine[];
  }[];
  reading: ReadingSection[];
  manualQuiz: QuizQuestion[];
}

export interface Course {
  id: string;
  titleTr: string;
  titleAr: string;
  coverColor: string; // Tailwind color class for UI distinction
  units: UnitContent[];
}
