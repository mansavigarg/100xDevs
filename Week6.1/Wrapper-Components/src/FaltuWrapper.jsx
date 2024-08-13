// Wrapper components: you can create a Wrapper card component that takes the inner react component as an input

// Wrapper component means that a component takes another component as an input

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent />} />
  </div>
}

function TextComponent(){
  return (
    <div>
      Hi there
    </div>
  )
}

// This CardWrapper Component needs to accept some react component as an input and render that react component here inside some extra syles (like bg white box Shadow)
function CardWrapper({innerComponent}){
    // create a div which has a boder 
    // and inside the div, renders the prop
    return <div style={{border: "2px solid black"}}>
        {innerComponent}
    </div>
}

export default App
