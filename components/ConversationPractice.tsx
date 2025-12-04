import React, { useState, useEffect, useMemo } from 'react';
import { ReadingItem } from '../types';
import { Check, X, RefreshCw, Volume2, ArrowRight, Play, MessageCircle } from 'lucide-react';

interface ConversationPracticeProps {
  reading: ReadingItem;
  color: string;
  onBack: () => void;
}

const ConversationPractice: React.FC<ConversationPracticeProps> = ({ reading, color, onBack }) => {
  const [mode, setMode] = useState<'read' | 'quiz'>('read');
  
  // Parsing the dialogue into lines
  const lines = useMemo(() => {
    return reading.turkish.split('\n').map(line => {
      const parts = line.split(':');
      if (parts.length > 1) {
        return {
          speaker: parts[0].trim(),
          text: parts.slice(1).join(':').trim()
        };
      }
      return { speaker: '', text: line.trim() };
    });
  }, [reading.turkish]);

  const arabicLines = useMemo(() => {
      return reading.arabic.split('\n').map(line => {
          const parts = line.split(':');
          return parts.length > 1 ? parts.slice(1).join(':').trim() : line.trim();
      });
  }, [reading.arabic]);

  // Quiz State
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  // Initialize options for current line when in quiz mode
  useEffect(() => {
    if (mode === 'quiz' && !completed && lines[currentLineIndex]) {
      generateOptions();
    }
  }, [currentLineIndex, mode, lines]);

  const generateOptions = () => {
    if (!lines[currentLineIndex]) return;

    const correctText = lines[currentLineIndex].text;
    
    // Get all other lines as potential distractors
    const otherLines = lines
      .filter((_, idx) => idx !== currentLineIndex)
      .map(l => l.text)
      .filter((v, i, a) => a.indexOf(v) === i); // Unique
    
    // Shuffle and pick 2
    const distractors = otherLines.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    // Fallback if conversation is too short
    while (distractors.length < 2) {
      const fallbacks = ["Teşekkür ederim", "Nasılsın?", "Görüşürüz", "Evet", "Hayır", "Tamam"];
      const randomFallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      if (!distractors.includes(randomFallback) && randomFallback !== correctText) {
        distractors.push(randomFallback);
      }
    }

    const allOptions = [correctText, ...distractors].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleOptionClick = (option: string, index: number) => {
    if (selectedOption !== null) return; 

    setSelectedOption(index);
    const correct = option === lines[currentLineIndex].text;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLineIndex(prev => prev + 1);
        } else {
          setCompleted(true);
        }
      }, 1000);
    }
  };

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    window.speechSynthesis.speak(utterance);
  };

  const handleStartQuiz = () => {
    setMode('quiz');
    setCurrentLineIndex(0);
    setCompleted(false);
  };

  // 1. Reading Mode View
  if (mode === 'read') {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fade-in border border-slate-100">
        <div className={`p-4 ${color} text-white flex justify-between items-center sticky top-0 z-10`}>
           <div className="flex items-center gap-2">
             <button onClick={onBack} className="hover:bg-white/20 p-1 rounded-full transition-colors">
               <ArrowRight className="w-5 h-5" />
             </button>
             <h3 className="font-bold text-lg flex items-center gap-2">
               <MessageCircle className="w-5 h-5" />
               ممارسة المحادثة
             </h3>
           </div>
           <button 
             onClick={handleStartQuiz}
             className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
           >
             <Play className="w-4 h-4" />
             اختبر نفسك
           </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {lines.map((line, idx) => (
            <div key={idx} className={`flex flex-col gap-1 ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}>
               <div className={`
                 relative max-w-[85%] rounded-2xl p-4 shadow-sm border border-slate-100
                 ${idx % 2 === 0 
                   ? 'bg-slate-50 rounded-tr-2xl rounded-tl-none mr-auto' 
                   : `${color.replace('bg-', 'bg-').replace('500', '50')} rounded-tl-2xl rounded-tr-none ml-auto`
                 }
               `}>
                 {line.speaker && (
                   <span className={`text-xs font-bold block mb-1 uppercase tracking-wider ${idx % 2 === 0 ? 'text-slate-400' : color.replace('bg-', 'text-')}`}>
                     {line.speaker}
                   </span>
                 )}
                 
                 <div className="flex items-start gap-3">
                   <p className="tr-font text-lg font-medium text-slate-800 leading-snug">{line.text}</p>
                   <button 
                     onClick={() => speakText(line.text)} 
                     className="mt-1 text-slate-400 hover:text-blue-500 transition-colors shrink-0"
                     title="استماع"
                   >
                     <Volume2 className="w-4 h-4" />
                   </button>
                 </div>
                 
                 {arabicLines[idx] && (
                   <div className="mt-2 pt-2 border-t border-slate-200/50">
                     <p className="text-slate-500 text-sm leading-relaxed">{arabicLines[idx]}</p>
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Quiz Mode View
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fade-in border border-slate-100">
      <div className={`p-4 ${color} text-white flex justify-between items-center`}>
         <div className="flex items-center gap-2">
            <button onClick={() => setMode('read')} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
            <h3 className="font-bold text-lg">أكمل المحادثة ({currentLineIndex + 1}/{lines.length})</h3>
         </div>
      </div>

      <div className="p-6">
        {completed ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Check className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">أحسنت! 🎉</h3>
            <p className="text-gray-600 mb-8 text-lg">لقد أكملت المحادثة بنجاح.</p>
            <button 
              onClick={() => { setMode('read'); }}
              className={`${color} text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto`}
            >
              <RefreshCw className="w-5 h-5" />
              مراجعة المحادثة
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
             {/* Context: Previous lines (limit to last 2) */}
             <div className="space-y-4 mb-8">
               {currentLineIndex > 0 && lines.slice(Math.max(0, currentLineIndex - 2), currentLineIndex).map((line, idx) => (
                  <div key={idx} className={`flex flex-col gap-1 opacity-60 ${line.speaker === lines[currentLineIndex].speaker ? 'items-end' : 'items-start'}`}>
                     <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 max-w-[80%]">
                        <span className="text-xs font-bold text-slate-400 block mb-1">{line.speaker}</span>
                        <p className="tr-font text-slate-600">{line.text}</p>
                     </div>
                  </div>
               ))}
               
               {/* Current Line (Question) */}
               <div className={`flex flex-col gap-1 ${true ? 'items-end' : 'items-start'}`}> 
                   <div className={`bg-blue-50 border-2 ${color.replace('bg-', 'border-')} rounded-xl p-5 max-w-[90%] w-full shadow-sm`}>
                      <span className={`text-xs font-bold block mb-2 ${color.replace('bg-', 'text-')}`}>
                        {lines[currentLineIndex].speaker || '???'}
                      </span>
                      <div className="h-8 bg-white/50 rounded-lg w-full border border-dashed border-blue-200 flex items-center justify-center text-blue-300 font-medium">
                        ??? اختر الرد الصحيح ???
                      </div>
                   </div>
               </div>
             </div>

             {/* Options */}
             <div className="grid gap-3">
               {options.map((option, idx) => {
                 let btnClass = "bg-white border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-700";
                 let icon = null;

                 if (selectedOption === idx) {
                   if (isCorrect) {
                     btnClass = "bg-green-50 border-green-500 text-green-700 shadow-sm";
                     icon = <Check className="w-5 h-5 text-green-600" />;
                   } else {
                     btnClass = "bg-red-50 border-red-500 text-red-700 shadow-sm";
                     icon = <X className="w-5 h-5 text-red-600" />;
                   }
                 } else if (selectedOption !== null && option === lines[currentLineIndex].text) {
                    // Show correct answer if user picked wrong
                    btnClass = "bg-green-50 border-green-200 text-green-700 opacity-70";
                 }
                 
                 return (
                   <button
                     key={idx}
                     onClick={() => handleOptionClick(option, idx)}
                     disabled={selectedOption !== null}
                     className={`w-full p-4 rounded-xl transition-all font-medium text-lg tr-font flex items-center justify-between group ${btnClass}`}
                   >
                     <span>{option}</span>
                     {icon}
                   </button>
                 );
               })}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationPractice;