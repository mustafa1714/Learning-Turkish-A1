import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface TranslationToggleProps {
  text: string;
  isRtl?: boolean;
}

const TranslationToggle: React.FC<TranslationToggleProps> = ({ text, isRtl = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="text-xs text-teal-600 hover:text-teal-800 flex items-center gap-1 w-fit transition-colors"
      >
        {isVisible ? <EyeOff size={14} /> : <Eye size={14} />}
        {isVisible ? "Gizle" : "Tercüme"}
      </button>
      <div 
        className={`
          transition-all duration-300 overflow-hidden 
          ${isVisible ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
          ${isRtl ? 'arabic-text text-right text-lg' : 'text-left'} 
          text-slate-600 font-medium
        `}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {text}
      </div>
    </div>
  );
};

export default TranslationToggle;