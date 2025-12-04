import React, { useState, useEffect } from 'react';
import { X, Bell, Clock } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTime: string;
  initialEnabled: boolean;
  onSave: (enabled: boolean, time: string) => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  initialTime,
  initialEnabled,
  onSave,
}) => {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setEnabled(initialEnabled);
    setTime(initialTime);
  }, [initialTime, initialEnabled, isOpen]);

  if (!isOpen) return null;

  const handleSave = async () => {
    if (enabled && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        onSave(true, time);
        onClose();
      } else {
        alert('يجب السماح بالإشعارات لتفعيل هذه الميزة');
        onSave(false, time); // Disable if permission denied
      }
    } else {
      onSave(enabled, time);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all scale-100">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-500" />
            تذكير الدراسة اليومي
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-sm">
            حدد وقتاً يومياً لتذكيرك بمتابعة دروس اللغة التركية.
            <br />
            <span className="text-xs text-slate-400">* ملاحظة: يجب أن تكون صفحة التطبيق مفتوحة ليعمل التذكير.</span>
          </p>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <label className="font-bold text-slate-700">تفعيل التنبيهات</label>
            <div 
              onClick={() => setEnabled(!enabled)}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${enabled ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${enabled ? '-translate-x-6' : 'translate-x-0'}`}></div>
            </div>
          </div>

          <div className={`transition-opacity duration-300 ${enabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              وقت التذكير
            </label>
            <input 
              type="time" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-800 text-lg"
            />
          </div>
        </div>

        <div className="p-6 bg-gray-50 flex gap-3">
          <button 
            onClick={handleSave}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            حفظ الإعدادات
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-3 bg-white border border-gray-200 text-slate-600 font-bold rounded-xl hover:bg-gray-50 transition-colors"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;