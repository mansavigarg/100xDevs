// Wrapper components: you can create a Wrapper card component that takes the inner react component as an input

// Wrapper component means that a component takes another component as an input


// This is a real wrapper

function App() {
    return <div>
      <CardWrapper>
        Hi there from Real Wrapper
      </CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
  }
  
  function CardWrapper({children}){ 
    // using children we always gets access to everything written CardWrapper
      return <div style={{border: "2px solid black", padding: "20px"}}>
          {children}
      </div>
  }

  function TextComponent(){
    return <div>
        hi there from the TextComponent
    </div>
  }
  
  export default App
  