
import React, { useState, useMemo } from 'react';
import { BookOpen, Gamepad2, GraduationCap, MessageCircle, Puzzle, ChevronRight, Home, CheckCircle2, XCircle, ArrowLeft, RefreshCw, Layers, FileText, Image as ImageIcon, Library } from 'lucide-react';
import { COURSES } from './constants';
import { UnitContent, ModuleType, VocabularyItem, QuizQuestion, Course } from './types';
import TranslationToggle from './components/TranslationToggle';
import AudioButton from './components/AudioButton';

// --- Sub-components for specific views ---

// 1. Vocabulary View
const VocabularyView: React.FC<{ items: VocabularyItem[] }> = ({ items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <BookOpen className="text-teal-600" />
        Kelime Hazinesi / المفردات
      </h3>
      {items.length === 0 ? (
        <p className="text-center text-slate-500 py-8">Bu ünite için kelime listesi bulunmamaktadır.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <AudioButton text={item.turkish} />
                  <span className="text-lg font-bold text-slate-800">{item.turkish}</span>
                </div>
              </div>
              
              <TranslationToggle text={item.arabic} />
              
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-sm text-slate-600 italic">"{item.exampleTr}"</p>
                <TranslationToggle text={item.exampleAr} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 2. Grammar View
const GrammarView: React.FC<{ rules: UnitContent['grammar'] }> = ({ rules }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Puzzle className="text-teal-600" />
        Dil Bilgisi / القواعد
      </h3>
      {rules.length === 0 ? (
        <p className="text-center text-slate-500 py-8">Bu ünite için dil bilgisi kuralı bulunmamaktadır.</p>
      ) : (
        rules.map((rule, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
            <h4 className="text-lg font-bold text-teal-800 mb-2">{rule.title}</h4>
            <p className="text-slate-700 mb-2">{rule.explanationTr}</p>
            <div className="mb-4">
               <TranslationToggle text={rule.explanationAr} />
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h5 className="font-semibold text-slate-600 text-sm mb-2">Örnekler / أمثلة</h5>
              <ul className="space-y-2">
                {rule.examples.map((ex, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-slate-800">{ex.tr}</span>
                    <div className="mt-1 sm:mt-0">
                      <TranslationToggle text={ex.ar} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// 3. Conversation View
const ConversationView: React.FC<{ dialogues: UnitContent['dialogue'] }> = ({ dialogues }) => {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 justify-center">
        <MessageCircle className="text-teal-600" />
        Konuşmalar / المحادثات
      </h3>
      
      {dialogues.length === 0 ? (
        <p className="text-center text-slate-500 py-8">Bu ünite için konuşma bulunmamaktadır.</p>
      ) : (
        dialogues.map((dialogue, dIdx) => (
          <div key={dIdx} className="border-b border-slate-200 pb-12 last:border-0">
            <h4 className="text-lg font-bold text-teal-700 mb-4 text-center">{dialogue.title}</h4>
            
            {/* Visual Placeholder */}
            <div className="mb-8 bg-slate-100 rounded-xl p-6 text-center border-2 border-dashed border-slate-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-200 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="text-4xl mb-3 text-slate-400"><ImageIcon className="mx-auto h-12 w-12" /></div>
              <p className="font-semibold text-slate-700 max-w-lg mx-auto leading-relaxed">{dialogue.imageDescription}</p>
              <p className="text-xs text-teal-600 mt-2 font-medium uppercase tracking-wide">Görsel Bağlam / سياق بصري</p>
            </div>

            <div className="space-y-4">
              {dialogue.lines.map((line, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`
                      max-w-[85%] rounded-2xl p-4 shadow-sm relative transition-transform hover:scale-[1.01]
                      ${isEven ? 'bg-white border-l-4 border-teal-500 rounded-tl-none' : 'bg-teal-50 border-r-4 border-teal-600 rounded-tr-none'}
                    `}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider opacity-60 text-slate-600">{line.speaker}</span>
                        <AudioButton text={line.textTr} />
                      </div>
                      <p className="text-lg font-medium text-slate-800 mb-2 leading-relaxed">{line.textTr}</p>
                      <TranslationToggle text={line.textAr} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// 4. Reading View
const ReadingView: React.FC<{ readings: UnitContent['reading'] }> = ({ readings }) => {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 justify-center">
        <FileText className="text-teal-600" />
        Okuma Parçaları / نصوص القراءة
      </h3>

      {readings.length === 0 ? (
        <p className="text-center text-slate-500 py-8">Bu ünite için okuma parçası bulunmamaktadır.</p>
      ) : (
        readings.map((reading, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             {/* Visual Placeholder */}
             <div className="bg-slate-100 p-8 text-center border-b border-slate-200">
               <ImageIcon className="mx-auto h-10 w-10 text-slate-400 mb-2" />
               <p className="text-slate-600 font-medium italic">{reading.imageDescription}</p>
             </div>
             
             <div className="p-6 sm:p-8">
               <h4 className="text-2xl font-bold text-teal-800 mb-6 text-center">{reading.title}</h4>
               
               <div className="prose prose-lg text-slate-700 leading-loose mb-6">
                 <div className="flex justify-end mb-2"><AudioButton text={reading.contentTr} /></div>
                 <p>{reading.contentTr}</p>
               </div>

               <div className="border-t border-slate-100 pt-6">
                 <TranslationToggle text={reading.contentAr} />
               </div>
             </div>
          </div>
        ))
      )}
    </div>
  );
};

// 5. Game View
const GameView: React.FC<{ vocabulary: VocabularyItem[] }> = ({ vocabulary }) => {
  const [gameMode, setGameMode] = useState<'match' | 'flashcard' | null>(null);
  
  // Matching Game State
  const [selectedTr, setSelectedTr] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  
  // Flashcard Game State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Prepare subset for matching to avoid overcrowding (max 6 pairs)
  // For Unit 9 (large vocab), pick random 6. For small units, take all.
  const matchingSubset = useMemo(() => {
    return [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 6);
  }, [vocabulary]);

  const trItems = useMemo(() => [...matchingSubset].sort(() => Math.random() - 0.5), [matchingSubset]);
  const arItems = useMemo(() => [...matchingSubset].sort(() => Math.random() - 0.5), [matchingSubset]);

  if (!vocabulary || vocabulary.length === 0) {
    return <div className="text-center py-10 text-slate-500">Bu ünite için oyun verisi yok.</div>;
  }

  // --- Flashcard Logic ---
  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentCardIndex((prev) => (prev + 1) % vocabulary.length), 150);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentCardIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length), 150);
  };

  // --- Matching Logic ---
  const handleCardClick = (type: 'tr' | 'ar', val: string) => {
    if (selectedTr) {
      if (type === 'tr') {
        setSelectedTr(val); 
        return;
      }
      // Check match
      const correctMatch = matchingSubset.find(v => v.turkish === selectedTr)?.arabic === val;
      if (correctMatch) {
        setMatchedPairs([...matchedPairs, selectedTr]);
        setFeedback('correct');
        setTimeout(() => setFeedback(null), 1000);
        setSelectedTr(null);
      } else {
        setFeedback('wrong');
        setTimeout(() => setFeedback(null), 500);
        setSelectedTr(null);
      }
    } else {
      if (type === 'tr') setSelectedTr(val);
    }
  };

  const isMatchComplete = matchedPairs.length === matchingSubset.length;

  if (!gameMode) {
    return (
      <div className="space-y-6 text-center max-w-lg mx-auto mt-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Oyun Seçiniz / اختر لعبة</h3>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setGameMode('match')} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all flex flex-col items-center gap-4 group">
            <div className="p-4 bg-teal-50 rounded-full text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Layers size={32} />
            </div>
            <span className="font-bold text-slate-700">Eşleştirme <br/><span className="text-xs font-normal arabic-text text-slate-500">مطابقة</span></span>
          </button>
          <button onClick={() => setGameMode('flashcard')} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all flex flex-col items-center gap-4 group">
            <div className="p-4 bg-teal-50 rounded-full text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <BookOpen size={32} />
            </div>
            <span className="font-bold text-slate-700">Kartlar <br/><span className="text-xs font-normal arabic-text text-slate-500">بطاقات</span></span>
          </button>
        </div>
      </div>
    );
  }

  if (gameMode === 'flashcard') {
    const currentItem = vocabulary[currentCardIndex];
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Kelime Kartları ({currentCardIndex + 1}/{vocabulary.length})</h3>
          <button onClick={() => setGameMode(null)} className="text-sm text-slate-500 hover:text-red-500">Çıkış</button>
        </div>
        
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="perspective-1000 cursor-pointer h-64 w-full"
        >
          <div className={`
            relative w-full h-full text-center transition-transform duration-500 transform-style-3d
            ${isFlipped ? 'rotate-y-180' : ''}
          `}>
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-md border border-slate-200 flex flex-col items-center justify-center p-8">
              <span className="text-3xl font-bold text-slate-800 mb-4">{currentItem.turkish}</span>
              <p className="text-xs text-slate-400">(Çevirmek için tıklayın)</p>
            </div>
            
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-teal-600 text-white rounded-2xl shadow-md border border-teal-600 flex flex-col items-center justify-center p-8 rotate-y-180">
              <span className="text-3xl font-bold arabic-text mb-4">{currentItem.arabic}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={handlePrevCard} className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 shadow-sm">Önceki</button>
          <button onClick={handleNextCard} className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 shadow-md">Sonraki</button>
        </div>
      </div>
    );
  }

  // Match Game View
  if (isMatchComplete) {
    return (
      <div className="text-center py-16">
        <div className="inline-block p-6 rounded-full bg-green-100 text-green-600 mb-6 animate-bounce">
          <Gamepad2 size={64} />
        </div>
        <h3 className="text-3xl font-bold text-slate-800 mb-2">Tebrikler! / مبروك</h3>
        <p className="text-slate-600 mb-8">Bütün eşleşmeleri buldunuz.</p>
        <button 
          onClick={() => setGameMode(null)}
          className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors font-bold"
        >
          Oyun Menüsü
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Gamepad2 className="text-teal-600" />
          Eşleştirme
        </h3>
        <button onClick={() => setGameMode(null)} className="text-sm text-slate-500 hover:text-red-500">Çıkış</button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-3">
          {trItems.map((item, idx) => (
            !matchedPairs.includes(item.turkish) && (
              <button
                key={idx}
                onClick={() => handleCardClick('tr', item.turkish)}
                className={`w-full p-4 rounded-lg border-2 text-left font-bold transition-all h-20 flex items-center
                  ${selectedTr === item.turkish 
                    ? 'border-teal-500 bg-teal-50 text-teal-800' 
                    : 'border-white bg-white shadow-sm hover:border-teal-200'
                  }
                `}
              >
                {item.turkish}
              </button>
            )
          ))}
        </div>
        <div className="space-y-3">
          {arItems.map((item, idx) => (
            !matchedPairs.includes(item.turkish) && (
              <button
                key={idx}
                onClick={() => handleCardClick('ar', item.arabic)}
                className={`w-full p-4 rounded-lg border-2 text-right font-medium arabic-text transition-all h-20 flex items-center justify-end bg-white border-white shadow-sm hover:border-teal-200`}
              >
                {item.arabic}
              </button>
            )
          ))}
        </div>
      </div>
      {feedback && (
        <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-8 py-4 rounded-full text-white font-bold shadow-lg z-50 text-lg ${feedback === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}>
          {feedback === 'correct' ? 'Doğru! / صحيح' : 'Yanlış! / خطأ'}
        </div>
      )}
    </div>
  );
};

// 6. Quiz View (Smart Generator & Exam Mode)
const QuizView: React.FC<{ unit: UnitContent }> = ({ unit }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<QuizQuestion[]>([]);

  // Function to generate questions
  const generateQuestions = React.useCallback(() => {
    // 1. Generate questions for EVERY vocabulary item in the provided unit
    const vocabQuestions: QuizQuestion[] = unit.vocabulary.map((vocabItem) => {
      // Create distractors from other items in the same unit
      const distractors = unit.vocabulary
        .filter(v => v.turkish !== vocabItem.turkish)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(v => v.arabic);
      
      while (distractors.length < 3) {
         distractors.push("Yanlış Cevap"); 
      }

      const options = [...distractors, vocabItem.arabic].sort(() => Math.random() - 0.5);
      
      return {
        question: `"${vocabItem.turkish}" kelimesinin anlamı nedir?`,
        options: options,
        correctIndex: options.indexOf(vocabItem.arabic)
      };
    });

    // 2. Combine Manual Grammar Questions + All Vocab Questions
    let allQuestions = [...unit.manualQuiz, ...vocabQuestions];
    
    // 3. Handling Unit 9 (General Exam) logic
    // Since Unit 9 contains ALL vocab/grammar from previous units, the 'allQuestions' array is massive.
    // We shouldn't make the user answer 500 questions.
    // We pick a random subset (e.g., 30) for the "Exam".
    if (unit.id === 9) {
       allQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 30);
    } else {
       // For regular units, we can also limit or shuffle everything.
       // Let's just shuffle.
       allQuestions = allQuestions.sort(() => Math.random() - 0.5);
    }

    return allQuestions;
  }, [unit]);

  // Initial Load
  React.useEffect(() => {
    setGeneratedQuestions(generateQuestions());
  }, [generateQuestions]);

  const handleRefresh = () => {
    setGeneratedQuestions(generateQuestions());
    setCurrentQ(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === generatedQuestions[currentQ].correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < generatedQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (generatedQuestions.length === 0) return <div className="text-center p-8">Soru bulunamadı...</div>;

  if (isFinished) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-xl mx-auto">
        <GraduationCap size={64} className="mx-auto text-teal-600 mb-4" />
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Test Tamamlandı</h3>
        <p className="text-lg text-slate-600 mb-6">Skorunuz: {score} / {generatedQuestions.length}</p>
        <div className="w-full bg-slate-100 rounded-full h-4 max-w-xs mx-auto mb-8 overflow-hidden">
          <div 
            className="bg-teal-500 h-4 rounded-full transition-all duration-1000" 
            style={{ width: `${(score / generatedQuestions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setIsFinished(false);
              setSelectedOption(null);
              setIsAnswered(false);
            }}
            className="px-6 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-full hover:bg-teal-50 transition-colors"
          >
            Aynı Testi Tekrarla
          </button>
          <button 
            onClick={handleRefresh}
            className="px-6 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Yeni Sorular
          </button>
        </div>
      </div>
    );
  }

  const question = generatedQuestions[currentQ];

  return (
    <div className="max-w-xl mx-auto">
      {unit.id === 9 && (
        <div className="mb-4 flex justify-end">
           <button onClick={handleRefresh} className="text-sm text-teal-600 flex items-center gap-1 hover:underline bg-teal-50 px-3 py-1 rounded-lg">
             <RefreshCw size={14} /> Soruları Değiştir / تغيير الأسئلة
           </button>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">Soru {currentQ + 1}/{generatedQuestions.length}</span>
        <span className="text-sm text-slate-400">Anlık Skor: {score}</span>
      </div>
      
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 mb-6">
        <h4 className="text-lg font-bold text-slate-800 mb-6 leading-relaxed">{question.question}</h4>
        
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let btnClass = "w-full p-4 rounded-xl border-2 text-left transition-all font-medium ";
            if (isAnswered) {
              if (idx === question.correctIndex) btnClass += "border-green-500 bg-green-50 text-green-800";
              else if (idx === selectedOption) btnClass += "border-red-500 bg-red-50 text-red-800";
              else btnClass += "border-slate-100 text-slate-400 opacity-50";
            } else {
              btnClass += "border-slate-100 hover:border-teal-300 hover:bg-teal-50 text-slate-700";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={isAnswered}
                className={btnClass}
              >
                <div className="flex justify-between items-center">
                  <span>{opt}</span>
                  {isAnswered && idx === question.correctIndex && <CheckCircle2 className="text-green-600" size={20} />}
                  {isAnswered && idx === selectedOption && idx !== question.correctIndex && <XCircle className="text-red-600" size={20} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <button 
          onClick={nextQuestion}
          className="w-full py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-200"
        >
          {currentQ === generatedQuestions.length - 1 ? "Sonucu Gör" : "Sonraki Soru"}
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeUnitId, setActiveUnitId] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState<ModuleType | null>(null);

  const activeCourse = COURSES.find(c => c.id === selectedCourseId);
  const activeUnit = activeCourse?.units.find(u => u.id === activeUnitId);

  const handleCourseSelect = (id: string) => {
    setSelectedCourseId(id);
    setActiveUnitId(null);
    setActiveModule(null);
  };

  const handleUnitSelect = (id: number) => {
    setActiveUnitId(id);
    setActiveModule(null);
  };

  const renderModule = () => {
    if (!activeUnit || !activeModule) return null;

    switch (activeModule) {
      case ModuleType.VOCABULARY: return <VocabularyView items={activeUnit.vocabulary} />;
      case ModuleType.GRAMMAR: return <GrammarView rules={activeUnit.grammar} />;
      case ModuleType.CONVERSATION: return <ConversationView dialogues={activeUnit.dialogue} />;
      case ModuleType.READING: return <ReadingView readings={activeUnit.reading || []} />;
      case ModuleType.GAME: return <GameView vocabulary={activeUnit.vocabulary} />;
      case ModuleType.QUIZ: return <QuizView unit={activeUnit} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => { setSelectedCourseId(null); setActiveUnitId(null); setActiveModule(null); }}
          >
            <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform">A</div>
            <span className="font-bold text-slate-800 tracking-tight hidden sm:inline group-hover:text-teal-700 transition-colors">Al-Furqan Türkçe</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h1 className="text-sm font-bold text-slate-900 arabic-text">جمعية الفرقان</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Education Platform</p>
            </div>
            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100 overflow-hidden shadow-sm">
               <span className="text-xl">🕌</span> 
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6">
        
        {/* VIEW 1: COURSE SELECTION */}
        {!selectedCourseId ? (
          <div className="animate-fade-in space-y-12">
            <div className="text-center py-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ders Kitabı Seçiniz <span className="text-teal-600">/</span> <span className="arabic-text">اختر الكتاب الدراسي</span></h2>
              <p className="text-slate-600">Lütfen çalışmak istediğiniz kitabı seçin.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {COURSES.map((course) => (
                <button
                  key={course.id}
                  onClick={() => handleCourseSelect(course.id)}
                  className="group relative bg-white rounded-3xl shadow-md border-2 border-slate-100 hover:border-teal-500 transition-all overflow-hidden text-left h-64 flex flex-col justify-end p-8 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity ${course.coverColor}`}></div>
                  <div className={`absolute top-0 right-0 p-6 opacity-20`}>
                    <Library size={120} className={course.id === 'istanbul_a1' ? 'text-red-900' : 'text-blue-900'} />
                  </div>
                  
                  <div className="relative z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${course.coverColor}`}>
                      A1 SEVİYE
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.titleTr}</h3>
                    <h4 className="text-xl font-medium text-slate-600 arabic-text">{course.titleAr}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : !activeUnitId ? (
          /* VIEW 2: UNIT SELECTION */
          <div className="animate-fade-in">
            <div className="mb-8">
              <button 
                onClick={() => setSelectedCourseId(null)}
                className="flex items-center gap-2 text-slate-500 hover:text-teal-600 font-medium transition-colors mb-4"
              >
                <ArrowLeft size={18} /> Kitap Seçimine Dön
              </button>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{activeCourse?.titleTr}</h2>
              <p className="text-slate-600 arabic-text text-lg">{activeCourse?.titleAr}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCourse?.units.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => handleUnitSelect(unit.id)}
                  className={`group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all text-left relative overflow-hidden ${unit.id === 9 ? 'ring-2 ring-teal-500 ring-offset-2' : ''}`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-8 -mt-8 transition-colors ${unit.id === 9 ? 'bg-teal-100' : 'bg-slate-50 group-hover:bg-teal-50'}`}></div>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 relative z-10 ${unit.id === 9 ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-700'}`}>
                    {unit.id === 9 ? 'ÖZEL SINAV / REVIEW' : `Ünite ${unit.id}`}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-teal-700 transition-colors relative z-10">{unit.titleTr}</h3>
                  <h4 className="text-lg font-medium text-slate-500 arabic-text mb-4 relative z-10">{unit.titleAr}</h4>
                  <p className="text-sm text-slate-600 relative z-10 line-clamp-2">{unit.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* VIEW 3: MODULE SELECTION & CONTENT */
          <div className="animate-fade-in">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-3 rounded-full shadow-sm border border-slate-100 w-fit">
              <button 
                onClick={() => { setSelectedCourseId(null); setActiveUnitId(null); }}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                title="Kitaplar"
              >
                <Library size={20} />
              </button>
              <ChevronRight size={16} className="text-slate-300" />
              <button 
                onClick={() => setActiveUnitId(null)}
                className="px-2 hover:text-teal-600 font-medium text-slate-600 transition-colors"
              >
                {activeCourse?.titleTr.split(' ')[0]}...
              </button>
              <ChevronRight size={16} className="text-slate-300" />
              <span className="font-bold text-slate-800 px-2 truncate max-w-[150px] sm:max-w-none">
                {activeUnit?.id === 9 ? 'Genel Sınav' : `Ünite ${activeUnitId}`}
              </span>
              {activeModule && (
                <>
                  <ChevronRight size={16} className="text-slate-300" />
                  <span className="text-teal-600 font-bold px-2 capitalize bg-teal-50 rounded-full py-1 text-xs sm:text-sm">{activeModule}</span>
                </>
              )}
            </div>

            {/* Module Selection Grid */}
            {!activeModule ? (
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{activeUnit?.titleTr}</h2>
                  <h3 className="text-2xl text-slate-600 arabic-text">{activeUnit?.titleAr}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { id: ModuleType.VOCABULARY, icon: BookOpen, label: 'Kelime', labelAr: 'المفردات' },
                    { id: ModuleType.GRAMMAR, icon: Puzzle, label: 'Dil Bilgisi', labelAr: 'القواعد' },
                    { id: ModuleType.CONVERSATION, icon: MessageCircle, label: 'Konuşma', labelAr: 'المحادثات' },
                    { id: ModuleType.READING, icon: FileText, label: 'Okuma', labelAr: 'النصوص' },
                    { id: ModuleType.GAME, icon: Gamepad2, label: 'Oyun', labelAr: 'لعبة' },
                    { id: ModuleType.QUIZ, icon: GraduationCap, label: 'Test', labelAr: 'اختبار' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveModule(m.id)}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all gap-4 group h-40"
                    >
                      <div className="p-4 bg-teal-50 text-teal-600 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <m.icon size={28} />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-slate-800 text-sm group-hover:text-teal-700">{m.label}</div>
                        <div className="text-xs text-slate-500 arabic-text mt-1 group-hover:text-teal-600">{m.labelAr}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Active Module Content */
              <div>
                <div className="mb-6">
                  <button 
                    onClick={() => setActiveModule(null)}
                    className="text-sm font-medium text-slate-500 hover:text-teal-600 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 hover:border-teal-300 transition-all w-fit"
                  >
                    <ArrowLeft size={16} /> Modüllere Dön
                  </button>
                </div>
                <div className="bg-white/50 rounded-3xl p-1 md:p-4">
                   {renderModule()}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm mb-2">© 2025 Al-Furkan Türkçe Öğrenim Platformu</p>
          <p className="text-teal-700 font-bold arabic-text text-lg">مع تحيات جمعية الفرقان</p>
        </div>
      </footer>
    </div>
  );
}
