import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import { SITE_LANG, VARS_CURRENCY } from './config/widgetConfig';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('widgetName') as Element);
root.render(
  <StrictMode>
    <DContextProvider
      language={SITE_LANG}
      currency={VARS_CURRENCY}
    >
      <App />
    </DContextProvider>
  </StrictMode>,
);
