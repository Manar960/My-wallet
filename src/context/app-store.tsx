import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
const CACHE_KEY = `username`;

interface AppContextType {
  username: string | null;
  setUsername: (username: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppStore = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }
  return context;
};

interface AppStoreProviderProps {
  children: ReactNode;
}

export const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const cachedName = sessionStorage.getItem(CACHE_KEY);

  const [username, setUsername] = useState(cachedName);

  useEffect(() => {
    if (username) sessionStorage.setItem(CACHE_KEY, username);
    else sessionStorage.removeItem(CACHE_KEY);
  }, [username]);

  return <AppContext.Provider value={{ username, setUsername }}>{children}</AppContext.Provider>;
};
