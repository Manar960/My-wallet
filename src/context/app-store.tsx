import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  username: string;
  setUsername: (username: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useUsername = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }
  return context;
};

interface UsernameProviderProps {
  children: ReactNode;
}

export const UsernameProvider: React.FC<UsernameProviderProps> = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
};
