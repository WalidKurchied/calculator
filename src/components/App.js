import React, { useState, createContext } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';

export const CalculationContext = createContext({});

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div id="calcultorContainer">
        <CalculationContext.Provider value={{number, setNumber}}>
          <CalculatorDisplay number={number} />
          <CalculatorButtons />
        </CalculationContext.Provider>
      </div>
    </div>
  );
}

export default App;
