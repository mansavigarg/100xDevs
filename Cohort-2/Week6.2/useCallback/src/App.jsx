import { useCallback, useState, memo} from 'react'

var a=1;
function App() {
  const [count, setCount] = useState(0)

  // lets say we have a function (just like sum and sum2 in readme.md), now even they both are equal but they are not referencly equal
              // function a(){
              //   console.log("Hi there from function");
              // }
  // so during rendering react thinks that the function is different beacuse it is not referencly same even though the function is same this happens because every time rendering happens, the function is redefined again in the memory.
  // Due to this redefining of same function, the function also gets rendered again and again
  // to prevent this rendering of the function we use useCallback

  //useCallback
  const inputFunction = useCallback(function(){
    console.log("Hi there from function");
  },[])

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Demo inputFunction={inputFunction} />
    </div>
  )
}

// even though Demo component is wrapped around a memo, ideally it should not render again and again
// but as we click counter button, App gets rerendered again => so as the {inputFunction} function also gets rerendered and even thought it is same but not referencly same => so this Demo function is again called and rendered
const Demo = memo(({inputFunction})=>{
  console.log("rendered");
  return <div>
    Hi there {a}
  </div>
})

export default App