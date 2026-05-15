import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue] = useState(1);

  /* 
    // -->> this is using the old method in which the problem arises.
    // Every time count is updated, setCount is called then state value of count(i.e. setCount) is called and a complete render of all the app is done again. That for loop is the expensive and is rendering again and again every time setCount is called and the value of counterr is updated.
 
    let counter = 0;
    for (let i = 1; i <= inputValue;i++){
      counter = counter + i;
    }
 
  */

    
  /* 
    // -->Using useEffect: This can be done using useEffect also but problem is that it will cause an extra re-render

    const [finalValue,setFinalValue] = useState(0);
    useEffect(()=>{
      let counter = 0;
      for (let i = 1; i <= inputValue; i++){
        counter = counter + i;
      }
      setFinalValue(counter);
    },[inputValue]);

    //~ Change the {Sum from 1 to {inputValue} is {counter}} to=> {Sum from 1 to {inputValue} is {finalValue}}
  */



    
    // -->> useMemo : which is kind of similar to useEffect which will run whenever inputValue cahnges
    let counter = useMemo(()=>{
      let finalCount = 0;
      for (let i = 1; i <= inputValue;i++){
        finalCount = finalCount + i;
      }      
      return finalCount;
    },[inputValue]);
 

  return (
    <div>
      <input placeholder='Enter the number'  onChange={ (event) => {
          setInputValue(event.target.value); 
      }}></input>
      <br />
      Sum from 1 to {inputValue} is {counter}
      
      <br/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App

// Every time count is updated, setCount is called then state value of count(i.e. setCount) is called and a complete render of all the app is done again. That for loop is the expensive and is rendering again and again every time setCount is called and the value of counterr is updated.

// cant we just remember the valur from the last render, rather then iterationg again and again

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
//  across renders if you want to memoize The value, then we can use useMemo
