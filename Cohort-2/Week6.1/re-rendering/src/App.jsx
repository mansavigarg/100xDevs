// import { useState } from 'react'

// function App() {
//   const [title,setTitle] = useState("My name is Mansavi");
  
//   function updateTitle(){
//     setTitle("My name is " + Math.random());
//   }
//   return (

//     // here this <div> creates a extra div in html so to avoid this we can use 
//     // 1~ <> </> 
//     // 2~ <React.Fragment> </React.Fragment>
//     <div>
//       <br />
//       <br /><button onClick={updateTitle}>Click me to update the title</button><br />
//       <br /><Header title={title}/>
//       <br /><Header title={"MY name is Manuu"} />
//       <br /><Header title={"MY name is Manuu2"} />
//       <br /><Header title={"MY name is Manuu3"} />
//       <br /><Header title={"MY name is Manuu4"} />
//       <br />
//     </div>
//   )
// }

// //takes title as a input and renders it inside the div
// function Header({title}){  // {title} ~ this is Object destructuring
//   return <div>
//     {title}
//   </div>
// }
// //this will also do the same function as above
// // function Header(props){  
// //   return <div>
// //     {props.title}
// //   </div>
// // }

// export default App;














// Here above all the app is re-rendering again and again as the whole app is re rendering with all its children 
// To solve this in a different way we use the code like

// import { useState } from "react"

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={changeTitle}>Click me to change the title</button>
//     <Header title={firstTitle} />
//   </>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App;













// React provides a api called as {memo} that {lets you skip re-rendering a component when its props are unchanged.}

// synatax:
// import { memo } from 'react';

// const SomeComponent = memo(function SomeComponent(props) {
//   // ...
// });


import { useState } from 'react';
import React from 'react';

function App() {
  const [title,setTitle] = useState("My name is Mansavi");
  
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <br />
      <br /><button onClick={updateTitle}>Click me to update the title</button><br />
      <br /><Header title={title}/>
      <br /><Header title={"MY name is Manuu"} />
      <br /><Header title={"MY name is Manuu2"} />
      <br /><Header title={"MY name is Manuu3"} />
      <br /><Header title={"MY name is Manuu4"} />
      <br />
    </div>
  )
}

//memo which skips the re-rendering of the componets that are not updated
const Header = React.memo( function Header({title}){ 
  return <div>
    {title}
  </div>
});

export default App;
