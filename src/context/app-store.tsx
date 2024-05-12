import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const CACHE_KEY_USERNAME = `username`;
const CACHE_KEY_USERTYPE = `userType`;

interface AppContextType {
  username: string | null;
  setUsername: (username: string) => void;
  userType: string | null;
  setUserType: (userType: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppStore = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppStore must be used within a AppStoreProvider');
  }
  return context;
};

interface AppStoreProviderProps {
  children: ReactNode;
}

export const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const cachedUsername = sessionStorage.getItem(CACHE_KEY_USERNAME);
  const cachedUserType = sessionStorage.getItem(CACHE_KEY_USERTYPE);

  const [username, setUsername] = useState<string | null>(cachedUsername);
  const [userType, setUserType] = useState<string | null>(cachedUserType);

  useEffect(() => {
    if (username) sessionStorage.setItem(CACHE_KEY_USERNAME, username);
    else sessionStorage.removeItem(CACHE_KEY_USERNAME);

    if (userType) sessionStorage.setItem(CACHE_KEY_USERTYPE, userType);
    else sessionStorage.removeItem(CACHE_KEY_USERTYPE);
  }, [username, userType]);

  return (
    <AppContext.Provider value={{ username, setUsername, userType, setUserType }}>
      {children}
    </AppContext.Provider>
  );
};
