import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface GrammarToolProps {
  color: string;
}

const GrammarTool: React.FC<GrammarToolProps> = ({ color }) => {
  const [inputWord, setInputWord] = useState('');

  // Helper to find the last vowel
  const getLastVowel = (word: string) => {
    const vowels = ['a', 'ı', 'o', 'u', 'e', 'i', 'ö', 'ü', 'A', 'I', 'O', 'U', 'E', 'İ', 'Ö', 'Ü'];
    for (let i = word.length - 1; i >= 0; i--) {
      if (vowels.includes(word[i])) return word[i].toLowerCase();
    }
    return null;
  };

  const lastVowel = getLastVowel(inputWord);
  
  // 2-Way Harmony (A/E) - Used for Plural (-lar/-ler), Dative (-a/-e)
  const get2WaySuffix = (v: string) => {
    if (['a', 'ı', 'o', 'u'].includes(v)) return 'a';
    if (['e', 'i', 'ö', 'ü'].includes(v)) return 'e';
    return '-';
  };

  // 4-Way Harmony (I/İ/U/Ü) - Used for Questions (mı/mi), Present Tense (ıyor)
  const get4WaySuffix = (v: string) => {
    if (v === 'a' || v === 'ı') return 'ı';
    if (v === 'e' || v === 'i') return 'i';
    if (v === 'o' || v === 'u') return 'u';
    if (v === 'ö' || v === 'ü') return 'ü';
    return '-';
  };

  const suffix2 = lastVowel ? get2WaySuffix(lastVowel) : '-';
  const suffix4 = lastVowel ? get4WaySuffix(lastVowel) : '-';

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6">
      <h4 className={`text-lg font-bold ${color.replace('bg-', 'text-')} mb-4 flex items-center gap-2`}>
        <span className="p-1 rounded-md bg-white border border-gray-200">🛠️</span>
        أداة التوافق الصوتي التفاعلية
      </h4>
      
      <p className="text-sm text-gray-600 mb-4">
        اكتب أي كلمة تركية لترى كيف تتغير اللواحق بناءً على آخر حرف صوتي فيها.
      </p>

      <input
        type="text"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
        placeholder="اكتب كلمة هنا (مثال: Araba, Kalem)..."
        className="w-full p-4 text-left border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none tr-font text-xl mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 2-Way Harmony Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h5 className="font-bold text-center text-gray-700 mb-2">التوافق الثنائي (A - E)</h5>
          <p className="text-xs text-center text-gray-400 mb-4">للجمع (-lar/-ler) والجر (-a/-e)</p>
          
          <div className="flex items-center justify-center gap-2 text-2xl font-bold">
            <span className="text-gray-400">{inputWord || '...'}</span>
            <span className="text-gray-300">+</span>
            <span className={`px-3 py-1 rounded-lg ${lastVowel ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
              {suffix2 === 'a' ? 'lar / a' : suffix2 === 'e' ? 'ler / e' : '??'}
            </span>
          </div>
          
          {lastVowel && (
             <div className="mt-4 text-center text-sm text-gray-500 bg-gray-50 p-2 rounded">
                لأن آخر صوتي هو <span className="font-bold text-orange-500 mx-1 uppercase">{lastVowel}</span> 
                نختار مجموعة <span className="font-bold uppercase">{suffix2}</span>
             </div>
          )}
        </div>

        {/* 4-Way Harmony Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h5 className="font-bold text-center text-gray-700 mb-2">التوافق الرباعي (I - İ - U - Ü)</h5>
          <p className="text-xs text-center text-gray-400 mb-4">للسؤال (mı/mi) والملكية</p>
          
          <div className="flex items-center justify-center gap-2 text-2xl font-bold">
            <span className="text-gray-400">{inputWord || '...'}</span>
            <span className="text-gray-300">+</span>
            <span className={`px-3 py-1 rounded-lg ${lastVowel ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
              {suffix4 === '-' ? '??' : `m${suffix4}`}
            </span>
          </div>

          {lastVowel && (
             <div className="mt-4 text-center text-sm text-gray-500 bg-gray-50 p-2 rounded">
                لأن آخر صوتي هو <span className="font-bold text-blue-500 mx-1 uppercase">{lastVowel}</span> 
                اللاحقة المناسبة هي <span className="font-bold uppercase">{suffix4}</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GrammarTool;