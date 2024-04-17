import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  username: string;
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
  const [username, setUsername] = useState('');

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
};
