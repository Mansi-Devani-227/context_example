import React, { useContext } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const CounterDisplay = () => {
  const { count } = useContext(GlobalStateContext);

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
