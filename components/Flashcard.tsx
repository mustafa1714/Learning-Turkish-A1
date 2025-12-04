import React, { useState } from 'react';
import { VocabularyItem } from '../types';
import { RotateCw, Volume2 } from 'lucide-react';

interface FlashcardProps {
  item: VocabularyItem;
  color: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ item, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSpeech = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(item.turkish);
    utterance.lang = 'tr-TR';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className="perspective-1000 w-full h-64 cursor-pointer group transition-transform duration-300 hover:-translate-y-2"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-2 ${color.replace('bg-', 'border-')} flex flex-col items-center justify-center p-6`}>
          <div className="text-4xl font-bold mb-4 tr-font text-slate-800 text-center">{item.turkish}</div>
          <p className="text-slate-400 text-sm mb-6">اضغط لقلب البطاقة</p>
          <button 
            onClick={handleSpeech}
            className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('500', '100')} ${color.replace('bg-', 'text-')} hover:opacity-80 transition-colors`}
          >
            <Volume2 className="w-6 h-6" />
          </button>
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-slate-800 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center p-6 text-white`}>
           <div className="text-3xl font-bold mb-4 text-center">{item.arabic}</div>
           <RotateCw className="w-6 h-6 text-slate-400 mt-4" />
        </div>
      </div>
      
      {/* CSS for 3D flip effect needed in index.html style or simple style object */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default Flashcard;