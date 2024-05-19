import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const CACHE_KEY_USERNAME = `username`;
const CACHE_KEY_USERTYPE = `userType`;
const CACHE_KEY_CURRENCY = `currency`;
const CACHE_KEY_SIGN = `sign`;

interface AppContextType {
  username: string | null;
  setUsername: (username: string) => void;
  userType: string | null;
  setUserType: (userType: string) => void;
  currency: string | null;
  setCurrency: (currency: string) => void;
  sign: string | null;
  setSign: (currency: string) => void;
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
  const cachedCurrency = sessionStorage.getItem(CACHE_KEY_CURRENCY);
  const cachedSign = sessionStorage.getItem(CACHE_KEY_SIGN);

  const [username, setUsername] = useState<string | null>(cachedUsername);
  const [userType, setUserType] = useState<string | null>(cachedUserType);
  const [currency, setCurrency] = useState<string | null>(cachedCurrency);
  const [sign, setSign] = useState<string | null>(cachedSign);

  useEffect(() => {
    if (username) sessionStorage.setItem(CACHE_KEY_USERNAME, username);
    else sessionStorage.removeItem(CACHE_KEY_USERNAME);

    if (userType) sessionStorage.setItem(CACHE_KEY_USERTYPE, userType);
    else sessionStorage.removeItem(CACHE_KEY_USERTYPE);

    if (currency) localStorage.setItem(CACHE_KEY_CURRENCY, currency);
    else localStorage.removeItem(CACHE_KEY_CURRENCY);

    if (sign) localStorage.setItem(CACHE_KEY_SIGN, sign);
    else localStorage.removeItem(CACHE_KEY_SIGN);
  }, [username, userType, currency, sign]);

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        userType,
        setUserType,
        currency,
        setCurrency,
        sign,
        setSign
      }}>
      {children}
    </AppContext.Provider>
  );
};
