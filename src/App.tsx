import { MApp } from '@modyo-dynamic/modyo-design-system-react';
import MyComponent from './components/MyComponent';

export default function App() {
  return (
    <MApp className="h-100 m-app">
      <div className="container">
        <MyComponent />
      </div>
    </MApp>
  );
}
