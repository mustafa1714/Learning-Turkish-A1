import React, { useState } from 'react';
import { ReadingItem } from '../types';
import { MessageCircle, Check, X, RefreshCw, Volume2 } from 'lucide-react';

interface ConversationPracticeProps {
  reading: ReadingItem;
  color: string;
}

const ConversationPractice: React.FC<ConversationPracticeProps> = ({ reading, color }) => {
  const [mode, setMode] = useState<'read' | 'quiz'>('read');
  
  // Parsing the dialogue into lines
  const lines = reading.turkish.split('\n').map(line => {
    const parts = line.split(':');
    return {
      speaker: parts.length > 1 ? parts[0].trim() : '',
      text: parts.length > 1 ? parts.slice(1).join(':').trim() : line.trim()
    };
  });

  const arabicLines = reading.arabic.split('\n').map(line => {
      const parts = line.split(':');
      return parts.length > 1 ? parts.slice(1).join(':').trim() : line.trim();
  });

  // Quiz State
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [options, setOptions