import React, { createContext, useState } from 'react';
import Parent from './Components/Parent';
import Child from './Components/Child';
export const COUNTER_CONTEXT = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }


  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className='flex justify-center'>
        <Parent />
 
        <Child />
      </div>
    </COUNTER_CONTEXT.Provider>
  );
};

export default App;