import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 首先检查 localStorage 中是否有用户保存的偏好
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // 如果没有，检查操作系统的首选颜色方案
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // 获取 <html> 根节点
    const root = window.document.documentElement;

    // 移除旧的类名，添加新的类名
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // 将用户偏好保存到 localStorage
    localStorage.setItem('theme', theme);
  }, []); // 移除 theme 依赖，只在挂载时执行一次初始化

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // 立刻执行 DOM 操作，避免等待下一次渲染周期
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}
