import React from 'react'
import { useState } from 'react'

const Counter=({prop}) => {

    const [count, setCount] = useState(prop);

    const oddeven=() => {
        if(count%2==0){
            return "even";
        }else{
            return "odd";
        }
    }

  return (
    <div className='main'>
        <h1 className={oddeven()}>Counter App: {count}</h1>
        <div className='counter'>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count*2)}>Double</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    </div>
  );
};

export default Counter