import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../types';
import { Shuffle, RefreshCw, Check, X } from 'lucide-react';

interface MatchingGameProps {
  vocabulary: VocabularyItem[];
  color: string;
}

interface Card {
  id: number;
  text: string;
  type: 'tr' | 'ar';
  pairId: string; // The turkish word acts as the unique ID for the pair
  state: 'default' | 'selected' | 'matched' | 'wrong';
}

const MatchingGame: React.FC<MatchingGameProps> = ({ vocabulary, color }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize game with a random subset of words
  const initGame = () => {
    // 1. Pick random 6 words from vocabulary
    const shuffledVocab = [...vocabulary].sort(() => 0.5 - Math.random());
    const selectedVocab = shuffledVocab.slice(0, 6);

    // 2. Create card pairs (Turkish and Arabic)
    const gameCards: Card[] = [];
    selectedVocab.forEach((item, index) => {
      gameCards.push({
        id: index * 2,
        text: item.turkish,
        type: 'tr',
        pairId: item.turkish,
        state: 'default'
      });
      gameCards.push({
        id: index * 2 + 1,
        text: item.arabic,
        type: 'ar',
        pairId: item.turkish,
        state: 'default'
      });
    });

    // 3. Shuffle cards
    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setScore(0);
    setGameComplete(false);
    setSelectedCards([]);
  };

  useEffect(() => {
    initGame();
  }, [vocabulary]);

  const handleCardClick = (clickedCard: Card) => {
    if (
      isProcessing || 
      clickedCard.state === 'matched' || 
      clickedCard.state === 'selected' ||
      selectedCards.length >= 2
    ) return;

    // Update card state to selected
    const newCards = cards.map(c => 
      c.id === clickedCard.id ? { ...c, state: 'selected' as const } : c
    );
    setCards(newCards);
    
    const newSelected = [...selectedCards, clickedCard];
    setSelectedCards(newSelected);

    // Check for match if 2 cards selected
    if (newSelected.length === 2) {
      setIsProcessing(true);
      checkMatch(newSelected[0], newSelected[1]);
    }
  };

  const checkMatch = (card1: Card, card2: Card) => {
    const isMatch = card1.pairId === card2.pairId;

    setTimeout(() => {
      setCards(prev => prev.map(c => {
        if (c.id === card1.id || c.id === card2.id) {
          return { ...c, state: isMatch ? 'matched' : 'default' };
        }
        return c;
      }));

      if (isMatch) {
        setScore(prev => prev + 1);
        // Check if game is complete
        const remaining = cards.filter(c => c.state !== 'matched').length - 2; // -2 because we just matched 2
        if (remaining <= 0) {
            setGameComplete(true);
        }
      }

      setSelectedCards([]);
      setIsProcessing(false);
    }, isMatch ? 500 : 1000);
    
    // If not match, show wrong state briefly before resetting
    if (!isMatch) {
        setCards(prev => prev.map(c => {
            if (c.id === card1.id || c.id === card2.id) {
              return { ...c, state: 'wrong' };
            }
            return c;
        }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">لعبة المطابقة</h3>
        <p className="text-slate-600 mb-4">طابق الكلمة التركية مع معناها العربي</p>
        
        {gameComplete ? (
           <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl animate-fade-in mb-4">
               <p className="font-bold text-lg">🎉 أحسنت! لقد أكملت المجموعة.</p>
           </div>
        ) : (
           <div className="flex justify-center gap-4 text-sm font-bold text-slate-500">
             <span>المطابقات: {score}/6</span>
           </div>
        )}

        <button 
            onClick={initGame}
            className={`${color} text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto hover:opacity-90 transition-all shadow-md`}
        >
            <Shuffle className="w-4 h-4" />
            {gameComplete ? 'لعب مجموعة جديدة' : 'خلط البطاقات'}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card)}
            disabled={card.state === 'matched'}
            className={`
              relative h-32 rounded-xl p-4 flex items-center justify-center text-center shadow-sm transition-all duration-300 transform
              ${card.state === 'default' ? 'bg-white hover:shadow-md hover:-translate-y-1 border-2 border-slate-100 text-slate-700' : ''}
              ${card.state === 'selected' ? `border-2 ${color.replace('bg-', 'border-')} bg-blue-50 text-slate-900 scale-105 shadow-lg z-10` : ''}
              ${card.state === 'matched' ? 'bg-green-500 border-2 border-green-500 text-white scale-0 opacity-0' : ''}
              ${card.state === 'wrong' ? 'bg-red-50 border-2 border-red-400 text-red-800 animate-pulse' : ''}
            `}
          >
            <span className={`font-bold ${card.type === 'tr' ? 'tr-font text-lg' : 'text-lg'}`}>
              {card.text}
            </span>
            
            {/* Icons indicating state */}
            {card.state === 'wrong' && <X className="absolute top-2 right-2 w-4 h-4 text-red-500" />}
            {card.state === 'selected' && <div className={`absolute w-2 h-2 rounded-full bottom-2 ${color} opacity-50`}></div>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MatchingGame;