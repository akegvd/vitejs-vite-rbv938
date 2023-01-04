import { useState, useEffect } from 'react';
import './App.css';
import { NotifyContainer, notifySuccess } from './notify';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);
  useEffect(() => setDoubleCount(count * 2), [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>

        <button type="button" onClick={() => notifySuccess('Hello')}>
          Hello
        </button>
        <Button>Test</Button>

        <p>count: {count}</p>
        <p>2倍したcount: {doubleCount}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          ++
        </button>
      </header>
      <NotifyContainer />
    </div>
  );
}

export default App;
