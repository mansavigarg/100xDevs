import CounterHook from "./CounterPart"
import {DebouncePart, DebouncePart2} from "./DebouncePart"
import FetchPart from "./FetchPart"
import PrevPart from "./PrevPart"

function App() {

  return (
    <>
        <br />
         {/* UseCounter Hook */}
        <CounterHook />
        <br />
         {/* UseFetch Hook */}
        <FetchPart />
        <br />
         {/* usePrev Hook */}
        <PrevPart />
        <br />
         {/* useDebounce Hook */}
        <DebouncePart />
        <DebouncePart2 />
    </>
  )
}

export default App
