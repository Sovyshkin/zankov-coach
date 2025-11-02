// Общие типы для приложения ZankovCoach

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'coach' | 'client';
}

export interface Session {
  id: number;
  title: string;
  description: string;
  date: Date;
  duration: number; // в минутах
  coachId: number;
  clientId: number;
  status: 'planned' | 'active' | 'completed' | 'cancelled';
}

export interface Goal {
  id: number;
  title: string;
  description: string;
  targetDate: Date;
  progress: number; // процент от 0 до 100
  userId: number;
}