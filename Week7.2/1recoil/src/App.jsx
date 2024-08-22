// import { useRecoilValue, useSetRecoilState } from "recoil";

// const [ count , setCount ] = useState(0);  
// -->> this (useState) here return two values which is 
//   1~ the curent value 
//   2~ how to update the current value

// useRecoilState => return both 
//                               1~ the curent value 
//                               2~ how to update the current value

// useRecoilValue => return just the current value

// useSetRecoilState => return how to update the current value

// if we know a state variable needs to be defined and used inside the same Component  then we can use usestate 

// Sign up component has three fields, name, email and password  
// Sign in component has two fields, email and password
// should I create state variable for both component differently or should I do use recoil?
// use library like react-hook-forms , formik



import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";


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
  const count = useRecoilValue(countAtom);  // here we only need the current value but no worry about the updation
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  // const [count , setCount] = useRecoilState(countAtom);  
  // here we are getting both count and setcount but we donot really need count here as oonly setCount is being updated so this extra count makes the button re-renders every time which are unnecessay renders
  // so we use useSetRecoilState to get the setCount only and
  // use setCount(count => count+1) instead of setCount(count + 1) 

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


// all these 3 do the same think. Except for the situation that 2nd and 3rd donot need count as a input, we can simply call the setcount and this will take count as an argument as returns the value
//1~ setCount(count + 1)
//2~ setCount(c => c + 1)
//3~ setCount( function(c) =>{
//   return c + 1
//   })