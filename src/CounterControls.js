import React, { useContext } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const CounterControls = () => {
  const { increment, decrement } = useContext(GlobalStateContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;
