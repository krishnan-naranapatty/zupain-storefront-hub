
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ColorPalette {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  sidebar: string;
  sidebarText: string;
  cardBg: string;
}

const colorPalettes: ColorPalette[] = [
  {
    id: 'default',
    name: 'Ocean Blue',
    primary: 'bg-blue-600',
    secondary: 'bg-slate-100',
    accent: 'bg-blue-500',
    background: 'bg-gray-50',
    sidebar: 'bg-slate-900',
    sidebarText: 'text-white',
    cardBg: 'bg-white'
  },
  {
    id: 'forest',
    name: 'Forest Green',
    primary: 'bg-green-600',
    secondary: 'bg-emerald-100',
    accent: 'bg-green-500',
    background: 'bg-green-50',
    sidebar: 'bg-emerald-900',
    sidebarText: 'text-white',
    cardBg: 'bg-white'
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    primary: 'bg-orange-600',
    secondary: 'bg-orange-100',
    accent: 'bg-orange-500',
    background: 'bg-orange-50',
    sidebar: 'bg-orange-900',
    sidebarText: 'text-white',
    cardBg: 'bg-white'
  },
  {
    id: 'royal',
    name: 'Royal Purple',
    primary: 'bg-purple-600',
    secondary: 'bg-purple-100',
    accent: 'bg-purple-500',
    background: 'bg-purple-50',
    sidebar: 'bg-purple-900',
    sidebarText: 'text-white',
    cardBg: 'bg-white'
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    primary: 'bg-gray-700',
    secondary: 'bg-gray-800',
    accent: 'bg-gray-600',
    background: 'bg-gray-900',
    sidebar: 'bg-gray-950',
    sidebarText: 'text-gray-100',
    cardBg: 'bg-gray-800'
  }
];

interface ThemeContextType {
  currentPalette: ColorPalette;
  changePalette: (paletteId: string) => void;
  availablePalettes: ColorPalette[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(colorPalettes[0]);

  useEffect(() => {
    const savedPalette = localStorage.getItem('admin-color-palette');
    if (savedPalette) {
      const palette = colorPalettes.find(p => p.id === savedPalette);
      if (palette) {
        setCurrentPalette(palette);
      }
    }
  }, []);

  const changePalette = (paletteId: string) => {
    const palette = colorPalettes.find(p => p.id === paletteId);
    if (palette) {
      setCurrentPalette(palette);
      localStorage.setItem('admin-color-palette', paletteId);
    }
  };

  return (
    <ThemeContext.Provider value={{
      currentPalette,
      changePalette,
      availablePalettes: colorPalettes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
