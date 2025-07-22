'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeStore();
  
  // テーマの変更をDOMに反映
  useEffect(() => {
    const root = window.document.documentElement;
    
    // 以前のテーマクラスを削除
    root.classList.remove('light', 'dark');
    
    // 新しいテーマクラスを追加
    root.classList.add(theme);
    
    // カラースキームのメタタグを更新
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme);
  }, [theme]);
  
  return <>{children}</>;
}
