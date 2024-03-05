import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';
import MyComponent from './components/MyComponent';
import { SITE_LANG, VARS_CURRENCY } from './config/widgetConfig';

export default function App() {
  const { setContext } = useDContext();

  useEffect(() => {
    setContext({
      language: SITE_LANG,
      currency: VARS_CURRENCY,
    });
  }, [setContext]);

  return (
    <div className="border border-1 container my-8 p-8 rounded shadow-sm">
      <MyComponent />
    </div>
  );
}
