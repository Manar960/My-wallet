import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import { AppStoreProvider } from './context/app-store';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <AppRoutes />
    </AppStoreProvider>
  </React.StrictMode>
);
