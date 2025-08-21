'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en';
import fr from '../translations/fr';
import ar from '../translations/ar';

// Define the shape of our translations
export type Translations = typeof en;

// Define language codes we support
export type LanguageCode = 'en' | 'fr' | 'ar';

// Define the translations object
type TranslationFiles = {
  en: typeof en;
  fr: Partial<typeof en>;
  ar: Partial<typeof en>;
};

// Create a map of language codes to their translations
const translations: Record<LanguageCode, Record<string, any>> = {
  en,
  fr: fr as Record<string, any>,
  ar: ar as Record<string, any>
};

// Create a type for the language metadata
export type LanguageInfo = {
  code: LanguageCode;
  name: string;
  flag: string;
  direction: 'ltr' | 'rtl';
};

// Define metadata for each language
export const languages: Record<LanguageCode, LanguageInfo> = {
  en: { code: 'en', name: 'English', flag: '/assets/images/en-flag.webp', direction: 'ltr' },
  fr: { code: 'fr', name: 'Français', flag: '/assets/images/fr-flag.webp', direction: 'ltr' },
  ar: { code: 'ar', name: 'العربية', flag: '/assets/images/ar-flag.webp', direction: 'rtl' }
};

// Define the shape of our context
type TranslationContextType = {
  t: <T = string>(key: string, options?: { returnObjects?: boolean }) => T extends string ? string : any;
  currentLanguage: LanguageCode;
  currentLanguageInfo: LanguageInfo;
  changeLanguage: (lang: LanguageCode) => void;
  allLanguages: typeof languages;
};

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to track the current language
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');
  
  // Function to get a translation by key
  const t = <T = string>(key: string, options?: { returnObjects?: boolean }): T extends string ? string : any => {
    const value = translations[currentLanguage][key as keyof Translations] || key;
    if (options?.returnObjects && Array.isArray(value)) {
      return value as any;
    }
    return value as any;
  };
  
  // Function to change the language
  const changeLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document direction for RTL support
    document.documentElement.dir = languages[lang].direction;
    
    // You could also update other language-specific settings here
  };
  
  // On first load, check if user has a saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      changeLanguage(savedLanguage);
    }
  }, []);
  
  return (
    <TranslationContext.Provider 
      value={{ 
        t, 
        currentLanguage, 
        currentLanguageInfo: languages[currentLanguage], 
        changeLanguage,
        allLanguages: languages
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use translations
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
