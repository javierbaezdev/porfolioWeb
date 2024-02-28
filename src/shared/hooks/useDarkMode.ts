import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const onToggleMode = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (themeMode === 'dark') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [themeMode]);

  return { onToggleMode };
};

export default useDarkMode;
