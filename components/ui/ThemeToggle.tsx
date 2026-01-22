'use client';

import { useTheme } from '@comp/providers/ThemeProvider';
import Icon from '@comp/ui/AppIcon';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Render placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-md ${className}`}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-smooth press-effect focus-ring ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon
        name={theme === 'light' ? 'MoonIcon' : 'SunIcon'}
        size={20}
        className="text-foreground"
      />
    </button>
  );
}
