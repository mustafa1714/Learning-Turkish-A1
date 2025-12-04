import { User } from '../types';

const USERS_KEY = 'yedi_iklim_users';
const CURRENT_USER_KEY = 'yedi_iklim_current_user';

export const register = (name: string, email: string): User => {
  const usersStr = localStorage.getItem(USERS_KEY);
  const users: User[] = usersStr ? JSON.parse(usersStr) : [];
  
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    throw new Error('البريد الإلكتروني مسجل بالفعل');
  }

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    progress: []
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  
  return newUser;
};

export const login = (email: string): User => {
  const usersStr = localStorage.getItem(USERS_KEY);
  const users: User[] = usersStr ? JSON.parse(usersStr) : [];
  
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('المستخدم غير موجود');
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

export const updateUserProgress = (userId: string, completedUnitId: number) => {
  const usersStr = localStorage.getItem(USERS_KEY);
  if (!usersStr) return;

  const users: User[] = JSON.parse(usersStr);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    if (!users[userIndex].progress.includes(completedUnitId)) {
      users[userIndex].progress.push(completedUnitId);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      
      // Also update current session
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));
    }
  }
};