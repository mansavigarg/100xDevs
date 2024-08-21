// Prop Drilling
// Keep everything as low as possible at the (lowest common Ancestor)LCA of children that need a state 
// Push down state as much as possible


// The problem with passing props 
// Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
// But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.

// https://react.dev/learn/passing-data-deeply-with-context

//To solve this prop drilling which is that if a lower components needs a prop and it is defined at highest and we need to pass the props to each and every components in the middle



import { useState } from "react"


function App() {
  const [count,setCount] = useState(0);


  return (
    <div>
      <Count  count={count} setCount={setCount}></Count>

    </div>
  )
}

// Here even though Count do not need the setCount function at all (it only needs it so as to pass it down to the Buttons component) but we need to pass it down so we have to drill the prop down 
function Count({count ,setCount}){
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}></Buttons>
  </div>
}

function Buttons({count , setCount}){
  return <div>
      <button onClick={() =>{
        setCount(count+1)
      }}>Increase</button>
      <button onClick={() =>{
        setCount(count-1)
      }}>Decrease</button>
  </div>
}

export default App