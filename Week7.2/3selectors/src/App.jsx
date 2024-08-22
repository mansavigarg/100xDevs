//Selectors

// Lets say to render IT IS EVEN if current value is even 




import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";


function App() {

  return (
    <RecoilRoot>
    <div>
        <Count></Count>
    </div>
    </RecoilRoot>
  )
}

function Count(){ 
  console.log("rerendered");
  return <div>
    <CountRendered ></CountRendered>
    <Buttons></Buttons>
  </div>
}

function CountRendered(){ 
  const count = useRecoilValue(countAtom); 
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer></EvenCountRenderer>
  </div>
}


// // without using the useMemo which is very ugly way as it will rerender even if count is unchanged 
// function EvenCountRenderer(){
//   const count = useRecoilValue(countAtom); 
//   return <div>
//     {(count % 2 == 0) ? "It is even" : null}
//   </div>
// }

// // optimal way is to use useMemo because it will only rerender when the count change
// function EvenCountRenderer(){
//   const count = useRecoilValue(countAtom);
//   const isEven = useMemo(()=>{
//     return count % 2 == 0;
//   },[count]) 
//   return <div>
//     {(isEven) ? "It is even" : null}
//   </div>
// }

// similarly we can also use [selectors] in recoil when u know something completely depends on another state varible 
// defining the selector in the /store/atoms folder 
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector); 

  return <div>
    {(isEven) ? "It is even" : null}
  </div>
}

function Buttons(){

  const setCount = useSetRecoilState(countAtom);
  return <div>
      <button onClick={() =>{
        setCount(count => count+1)
      }}>Increase</button>
      <button onClick={() =>{
        setCount(count => count-1)
      }}>Decrease</button>
  </div>
}

export default App
