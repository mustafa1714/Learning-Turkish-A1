import React from 'react';
import { Unit } from '../types';
import { ArrowLeft, BookOpen, Users, Clock, Handshake, Briefcase, Train, Phone, Sun, Lock, CheckCircle, MapPin } from 'lucide-react';

interface UnitCardProps {
  unit: Unit;
  onClick: (unit: Unit) => void;
  isLocked?: boolean;
  isCompleted?: boolean;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit, onClick, isLocked = false, isCompleted = false }) => {
  const getIcon = () => {
    if (isLocked) return <Lock className="w-8 h-8 text-gray-400" />;
    
    switch (unit.icon) {
      case 'handshake': return <Handshake className="w-8 h-8 text-white" />;
      case 'users': return <Users className="w-8 h-8 text-white" />;
      case 'clock': return <Clock className="w-8 h-8 text-white" />;
      case 'map-pin': return <MapPin className="w-8 h-8 text-white" />;
      case 'briefcase': return <Briefcase className="w-8 h-8 text-white" />;
      case 'train': return <Train className="w-8 h-8 text-white" />;
      case 'phone': return <Phone className="w-8 h-8 text-white" />;
      case 'sun': return <Sun className="w-8 h-8 text-white" />;
      default: return <BookOpen className="w-8 h-8 text-white" />;
    }
  };

  const handleCardClick = () => {
    if (!isLocked) {
      onClick(unit);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`
        relative rounded-xl shadow-md transition-all duration-300 overflow-hidden
        ${isLocked 
          ? 'bg-gray-100 cursor-not-allowed opacity-80' 
          : 'bg-white hover:shadow-xl cursor-pointer hover:-translate-y-1 group'
        }
      `}
    >
      {isCompleted && (
        <div className="absolute top-4 left-4 z-10 bg-white rounded-full p-1 shadow-sm">
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
      )}

      <div className={`
        p-6 flex items-center justify-between
        ${isLocked ? 'bg-gray-200' : unit.color}
      `}>
        <div className="flex items-center gap-4">
          <div className={`
            p-3 rounded-full backdrop-blur-sm
            ${isLocked ? 'bg-gray-300' : 'bg-white/20'}
          `}>
            {getIcon()}
          </div>
          <div>
            <h3 className={`
              font-bold text-xl tr-font
              ${isLocked ? 'text-gray-500' : 'text-white'}
            `}>
              {unit.title}
            </h3>
            <p className={`
              font-medium
              ${isLocked ? 'text-gray-400' : 'text-white/90'}
            `}>
              {unit.subtitle}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">
          {isLocked ? 'أكمل الوحدة السابقة لفتح هذا الدرس.' : unit.description}
        </p>
        
        {!isLocked && (
          <div className="flex justify-between items-center text-sm font-medium">
            <span className={isCompleted ? "text-green-600" : "text-gray-400"}>
              {isCompleted ? 'مراجعة الدرس' : 'ابدأ الدرس'}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${unit.color.replace('bg-', 'text-')} bg-opacity-10 group-hover:bg-opacity-20`}>
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitCard;