import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalProvider from 'mui-modal-provider';
// import ModalProvider from './providerTest/modal-provider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);

