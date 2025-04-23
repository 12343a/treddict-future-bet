
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-treddict-dark hover:bg-treddict-dark/80"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun size={16} className="text-white" />
      ) : (
        <Moon size={16} className="text-white" />
      )}
    </Button>
  );
};

export default ThemeToggle;
