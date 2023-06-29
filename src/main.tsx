import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './context/AppProvider.tsx';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
