import React, { useState, useEffect } from 'react';
import { units } from './data';
import UnitCard from './components/UnitCard';
import LessonView from './components/LessonView';
import NotificationModal from './components/NotificationModal';
import { Unit } from './types';
import { GraduationCap, Bell } from 'lucide-react';

const App: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [completedUnitIds, setCompletedUnitIds] = useState<number[]>([]);
  
  // Notification State
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState("18:00");

  // Load progress and settings from local storage on mount
  useEffect(() => {
    // Load Progress
    const savedProgress = localStorage.getItem('completedUnitIds');
    if (savedProgress) {
      try {
        setCompletedUnitIds(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }

    // Load Notification Settings
    const savedEnabled = localStorage.getItem('reminderEnabled') === 'true';
    const savedTime = localStorage.getItem('reminderTime') || "18:00";
    setReminderEnabled(savedEnabled);
    setReminderTime(savedTime);
  }, []);

  // Notification Logic Loop
  useEffect(() => {
    if (!reminderEnabled) return;

    const checkInterval = setInterval(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const lastNotified = localStorage.getItem('lastNotificationDate');
        const today = new Date().toDateString();

        if (currentTime === reminderTime && lastNotified !== today) {
             if ('Notification' in window && Notification.permission === 'granted') {
                new Notification("حان وقت الدراسة! 📚", {
                    body: "لا تنس متابعة دروس اللغة التركية اليوم. دقيقة واحدة كل يوم تصنع فرقاً!",
                    requireInteraction: true
                });
                localStorage.setItem('lastNotificationDate', today);
             }
        }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(checkInterval);
  }, [reminderEnabled, reminderTime]);

  // Save progress when a unit is completed
  const handleUnitComplete = (unitId: number) => {
    if (!completedUnitIds.includes(unitId)) {
      const newCompletedIds = [...completedUnitIds, unitId];
      setCompletedUnitIds(newCompletedIds);
      localStorage.setItem('completedUnitIds', JSON.stringify(newCompletedIds));
    }
  };

  const handleSaveReminder = (enabled: boolean, time: string) => {
    setReminderEnabled(enabled);
    setReminderTime(time);
    localStorage.setItem('reminderEnabled', String(enabled));
    localStorage.setItem('reminderTime', time);
  };

  const isUnitLocked = (index: number) => {
    // First unit is always unlocked
    if (index === 0) return false;
    // Unit is unlocked if the previous unit is completed
    const previousUnitId = units[index - 1].id;
    return !completedUnitIds.includes(previousUnitId);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">
      {selectedUnit ? (
        <LessonView 
          unit={selectedUnit} 
          onBack={() => setSelectedUnit(null)}
          onUnitComplete={() => handleUnitComplete(selectedUnit.id)}
        />
      ) : (
        <div className="container mx-auto px-4 py-8 max-w-6xl relative">
          {/* Notification Button */}
          <button 
            onClick={() => setIsNotificationModalOpen(true)}
            className="absolute top-8 left-4 p-3 bg-white rounded-full shadow-md hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors group z-10"
            title="إعدادات التذكير"
          >
            <Bell className={`w-6 h-6 ${reminderEnabled ? 'fill-blue-100 text-blue-600' : ''}`} />
            {reminderEnabled && (
              <span className="absolute top-2 right-2 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </button>

          <NotificationModal
            isOpen={isNotificationModalOpen}
            onClose={() => setIsNotificationModalOpen(false)}
            initialEnabled={reminderEnabled}
            initialTime={reminderTime}
            onSave={handleSaveReminder}
          />

          {/* Header */}
          <header className="text-center mb-12 mt-8">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-6">
              <GraduationCap className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Yedi İklim Türkçe <span className="text-blue-600">A1</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              تطبيقك التفاعلي لتعلم اللغة التركية من الصفر. أكمل الوحدات بالترتيب لفتح الدروس التالية.
            </p>
          </header>

          {/* Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {units.map((unit, index) => (
              <UnitCard 
                key={unit.id} 
                unit={unit} 
                onClick={setSelectedUnit}
                isLocked={isUnitLocked(index)}
                isCompleted={completedUnitIds.includes(unit.id)}
              />
            ))}
          </div>
          
          {/* Footer Info */}
          <div className="mt-16 text-center text-slate-400 text-sm">
             <p>مبني على منهج Yedi İklim Türkçe A1</p>
             <button 
               onClick={() => {
                 if(window.confirm('هل أنت متأكد من رغبتك في حذف تقدمك والبدء من جديد؟')) {
                   localStorage.removeItem('completedUnitIds');
                   setCompletedUnitIds([]);
                 }
               }}
               className="mt-4 text-xs text-red-300 hover:text-red-500 underline"
             >
               إعادة تعيين التقدم
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;