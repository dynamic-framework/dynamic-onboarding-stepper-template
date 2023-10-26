import React from 'react';
import ReactDOM from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';

require('@dynamic-framework/ui-react/dist/css/dynamic-ui.css');
require('./styles/base.scss');

const root = ReactDOM.createRoot(document.getElementById('widgetName') as Element);
root.render(
  <StrictMode>
    <DContextProvider>
      <App />
    </DContextProvider>
  </StrictMode>,
);
