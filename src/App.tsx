import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect } from 'react';
import MyComponent from './components/MyComponent';
import { CONTEXT_CONFIG } from './config/widgetConfig';

export default function App() {
  const { setContext } = useDContext();

  useEffect(() => {
    setContext(CONTEXT_CONFIG);
  }, [setContext]);

  return (
    <div className="border border-1 container my-14 p-14 rounded shadow-sm">
      <MyComponent />
    </div>
  );
}
