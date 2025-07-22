import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { isLocalStorageAvailable } from '@/lib/clientUtils';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }));
      },
      
      setTheme: (theme: Theme) => {
        set({ theme });
      },
    }),
    {
      name: 'theme-storage',
      storage: {
        getItem: (name) => {
          if (isLocalStorageAvailable()) {
            const value = localStorage.getItem(name);
            return value ? JSON.parse(value) : null;
          }
          return null;
        },
        setItem: (name, value) => {
          if (isLocalStorageAvailable()) {
            localStorage.setItem(name, JSON.stringify(value));
          }
        },
        removeItem: (name) => {
          if (isLocalStorageAvailable()) {
            localStorage.removeItem(name);
          }
        },
      },
    }
  )
);
