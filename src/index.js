import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/client/App';
import { GlobalStyle } from './app/client/styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

