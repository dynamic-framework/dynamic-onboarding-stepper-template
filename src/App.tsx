import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';
import { CONTEXT_CONFIG } from './config/widgetConfig';

export default function App() {
  const { setContext } = useDContext();

  useEffect(() => {
    setContext(CONTEXT_CONFIG);
  }, [setContext]);

  return (
    <h1>Stepper</h1>
  );
}
