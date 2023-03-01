import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@modyo-dynamic/modyo-design-system/dist/design-system/design-system.css';

import './styles/base.scss';
import './config/liquidConfig';
import './config/i18nConfig';

import { LiquidContextProvider } from '@modyo-dynamic/modyo-design-system-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('widgetName') as Element);
root.render(
  <React.StrictMode>
    <LiquidContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LiquidContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
