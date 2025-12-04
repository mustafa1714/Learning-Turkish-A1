import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import Confetti from './Confetti';

interface QuizProps {
  questions: QuizQuestion[];
  color: string;
  onComplete?: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, color, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === questions[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (onComplete) {
        onComplete(score);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    const isPerfect = score === questions.length;

    return (
      <div className="relative">
        {isPerfect && <Confetti />}
        
        <div className={`bg-white rounded-2xl shadow-lg p-8 text-center max-w-lg mx-auto mt-8 transition-all duration-500 ${isPerfect ? 'scale-105 shadow-2xl ring-4 ring-yellow-400 ring-opacity-50' : ''}`}>
          
          {isPerfect && (
             <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-yellow-400 rounded-full p-4 shadow-lg animate-bounce">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
             </div>
          )}

          <h2 className={`text-3xl font-bold mb-4 ${isPerfect ? 'text-yellow-500 mt-6' : 'text-slate-800'}`}>
            {isPerfect ? '🎉 نتيجة مذهلة! 🎉' : 'النتيجة النهائية'}
          </h2>
          
          <div className={`text-6xl font-bold mb-6 ${isPerfect ? 'text-yellow-500' : color.replace('bg-', 'text-')}`}>
            {score} / {questions.length}
          </div>
          
          <p className="text-gray-600 mb-8 text-lg">
            {isPerfect 
              ? "أداء رائع! لقد أجبت على جميع الأسئلة بشكل صحيح." 
              : score > questions.length / 2 
                ? "جيد جداً! استمر في المحاولة لتحقيق العلامة الكاملة." 
                : "جيد جداً، حاول مرة أخرى لتحسين نتيجتك."
            }
          </p>

          <button
            onClick={restartQuiz}
            className={`${color} text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto hover:opacity-90 transition-opacity`}
          >
            <RefreshCw className="w-5 h-5" />
            إعادة الاختبار
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className={`${color} h-2.5 rounded-full transition-all duration-300`} 
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-start gap-2">
            <span className={`${color} text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm`}>
              {currentIndex + 1}
            </span>
            {currentQuestion.question}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => {
              let btnClass = "border-2 border-gray-100 hover:bg-gray-50 text-slate-700";
              let Icon = null;

              if (isAnswered) {
                if (idx === currentQuestion.correctAnswer) {
                  btnClass = "border-green-500 bg-green-50 text-green-700";
                  Icon = <CheckCircle className="w-5 h-5 text-green-600" />;
                } else if (idx === selectedOption) {
                  btnClass = "border-red-500 bg-red-50 text-red-700";
                  Icon = <XCircle className="w-5 h-5 text-red-600" />;
                } else {
                  btnClass = "border-gray-100 opacity-50";
                }
              } else if (selectedOption === idx) {
                btnClass = `border-${color.replace('bg-', '')} bg-slate-50`;
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl text-right transition-all duration-200 flex justify-between items-center font-medium ${btnClass}`}
                >
                  <span className="tr-font">{option}</span>
                  {Icon}
                </button>
              );
            })}
          </div>
        </div>

        {isAnswered && (
          <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={nextQuestion}
              className={`${color} text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity`}
            >
              {currentIndex < questions.length - 1 ? "التالي" : "إنهاء"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;