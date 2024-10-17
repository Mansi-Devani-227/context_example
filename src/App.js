import React from 'react';
import { GlobalStateProvider } from './GlobalStateContext';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import './styles.css';

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Global State with React Context</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
