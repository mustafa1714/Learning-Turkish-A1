import React, { useState } from 'react';
import { Unit, ReadingItem } from '../types';
import Flashcard from './Flashcard';
import Quiz from './Quiz';
import MatchingGame from './MatchingGame';
import ConversationPractice from './ConversationPractice';
import GrammarTool from './GrammarTool';
import { ArrowRight, Book, Layers, HelpCircle, AlertCircle, FileText, Search, X, Gamepad2, MessageCircle } from 'lucide-react';

interface LessonViewProps {
  unit: Unit;
  onBack: () => void;
  onUnitComplete: () => void;
}

const LessonView: React.FC<LessonViewProps> = ({ unit, onBack, onUnitComplete }) => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar' | 'reading' | 'quiz' | 'game'>('vocab');
  const [searchQuery, setSearchQuery] = useState('');
  const [practicingReading, setPracticingReading] = useState<ReadingItem | null>(null);

  const filteredVocabulary = unit.content.vocabulary.filter(item =>
    item.turkish.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.arabic.includes(searchQuery)
  );

  const filteredGrammar = unit.content.grammar.filter(rule =>
    rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rule.examples.some(ex => ex.tr.toLowerCase().includes(searchQuery.toLowerCase()) || ex.ar.includes(searchQuery))
  );

  const filteredReadings = unit.content.readings.filter(reading =>
    reading.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reading.turkish.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reading.arabic.includes(searchQuery)
  );

  // Clear search when switching tabs
  const handleTabChange = (tab: 'vocab' | 'grammar' | 'reading' | 'quiz' | 'game') => {
    setActiveTab(tab);
    setSearchQuery('');
    setPracticingReading(null);
  };

  const handleQuizComplete = (score: number) => {
    // If user gets at least 50% score, mark unit as complete
    if (score >= unit.content.quiz.length / 2) {
      onUnitComplete();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className={`${unit.color} text-white shadow-lg sticky top-0 z-10`}>
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tr-font">{unit.title}</h1>
            <p className="text-white/80 text-sm">{unit.subtitle}</p>
          </div>
        </div>
        
        {/* Search Bar - Only show for searchable tabs */}
        {activeTab !== 'quiz' && activeTab !== 'game' && !practicingReading && (
          <div className="container mx-auto px-4 mt-2">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="بحث في الدرس..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-lg py-2 pr-10 pl-10 focus:outline-none focus:bg-white/20 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Tabs */}
        <div className="container mx-auto px-4 mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => handleTabChange('vocab')}
            className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'vocab' ? 'bg-slate-50 text-slate-900' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Layers className="w-5 h-5" />
            المفردات
          </button>
          <button
            onClick={() => handleTabChange('grammar')}
            className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'grammar' ? 'bg-slate-50 text-slate-900' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Book className="w-5 h-5" />
            القواعد
          </button>
           <button
            onClick={() => handleTabChange('reading')}
            className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'reading' ? 'bg-slate-50 text-slate-900' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <FileText className="w-5 h-5" />
            نصوص
          </button>
          <button
            onClick={() => handleTabChange('game')}
            className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'game' ? 'bg-slate-50 text-slate-900' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
            ألعاب
          </button>
          <button
            onClick={() => handleTabChange('quiz')}
            className={`px-6 py-3 rounded-t-lg font-bold flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'quiz' ? 'bg-slate-50 text-slate-900' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            الاختبار
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 flex-1 pb-20">
        
        {/* Vocabulary Tab */}
        {activeTab === 'vocab' && (
          <div className="animate-fade-in">
             <div className="mb-6 flex items-center gap-2 text-slate-600 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <AlertCircle className="w-5 h-5" />
                <p>اضغط على البطاقة لقلبها ورؤية الترجمة، واستخدم زر الصوت للاستماع.</p>
             </div>
             {filteredVocabulary.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVocabulary.map((item, index) => (
                    <Flashcard key={index} item={item} color={unit.color} />
                  ))}
               </div>
             ) : (
                <div className="text-center py-12 text-gray-500">
                  لا توجد نتائج للبحث "{searchQuery}"
                </div>
             )}
          </div>
        )}

        {/* Grammar Tab */}
        {activeTab === 'grammar' && (
          <div className="animate-fade-in max-w-4xl mx-auto space-y-8">
            {/* Interactive Tool */}
            {!searchQuery && <GrammarTool color={unit.color} />}

            {filteredGrammar.length > 0 ? filteredGrammar.map((rule, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
                <div className={`p-4 ${unit.color.replace('bg-', 'bg-').replace('500', '50')} border-b border-slate-100`}>
                  <h3 className={`text-xl font-bold ${unit.color.replace('bg-', 'text-')}`}>{rule.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg whitespace-pre-line">{rule.description}</p>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${unit.color}`}></span>
                       أمثلة:
                    </h4>
                    <ul className="space-y-3">
                      {rule.examples.map((ex, i) => (
                        <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                          <span className="font-bold tr-font text-lg text-slate-800 dir-ltr text-left w-full sm:w-1/2">{ex.tr}</span>
                          <span className="text-gray-600 w-full sm:w-1/2 text-left sm:text-right border-t sm:border-t-0 sm:border-r border-gray-100 pt-2 sm:pt-0 sm:pr-2">{ex.ar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) : (
              <div className="text-center py-12 text-gray-500">
                لا توجد نتائج للبحث "{searchQuery}"
              </div>
            )}
          </div>
        )}

        {/* Reading Tab */}
        {activeTab === 'reading' && (
          <div className="animate-fade-in max-w-3xl mx-auto space-y-6">
            {practicingReading ? (
              <ConversationPractice 
                reading={practicingReading}
                color={unit.color}
                onBack={() => setPracticingReading(null)}
              />
            ) : (
              <>
                {filteredReadings.length > 0 ? filteredReadings.map((reading, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 transition-all hover:shadow-lg">
                    <div className={`p-4 ${unit.color.replace('bg-', 'bg-').replace('500', '100')} flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <FileText className={`w-6 h-6 ${unit.color.replace('bg-', 'text-')}`} />
                        <h3 className="text-xl font-bold text-slate-800">{reading.title}</h3>
                      </div>
                      <button 
                         onClick={() => setPracticingReading(reading)}
                         className={`bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-slate-50 transition-colors ${unit.color.replace('bg-', 'text-')}`}
                      >
                         <MessageCircle className="w-4 h-4" />
                         ممارسة
                      </button>
                    </div>
                    <div className="p-6 grid gap-6">
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                          <p className="tr-font text-lg text-slate-800 leading-relaxed whitespace-pre-line dir-ltr text-left">
                            {reading.turkish}
                          </p>
                      </div>
                      <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-500">الترجمة</span>
                          </div>
                        </div>
                      <div>
                          <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                            {reading.arabic}
                          </p>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-12 text-gray-500">
                    {searchQuery ? `لا توجد نتائج للبحث "${searchQuery}"` : "لا توجد نصوص قراءة إضافية في هذه الوحدة."}
                  </div>
                )}
              </>
            )}
          </div>
        )}
        
        {/* Games Tab */}
        {activeTab === 'game' && (
           <div className="animate-fade-in">
              <MatchingGame vocabulary={unit.content.vocabulary} color={unit.color} />
           </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="animate-fade-in">
             <Quiz 
               questions={unit.content.quiz} 
               color={unit.color} 
               onComplete={handleQuizComplete}
             />
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonView;