import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <GlobalStateContext.Provider value={{ count, increment, decrement }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
