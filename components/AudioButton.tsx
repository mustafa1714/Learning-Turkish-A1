import React from 'react';
import { Volume2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ text }) => {
  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Tarayıcınız seslendirmeyi desteklemiyor.");
    }
  };

  return (
    <button 
      onClick={speak} 
      className="p-2 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors"
      aria-label="Dinle"
    >
      <Volume2 size={18} />
    </button>
  );
};

export default AudioButton;