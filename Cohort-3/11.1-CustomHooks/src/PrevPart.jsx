import React from 'react'
import { useState } from 'react'
import { usePrev } from './hooks/usePrev'

const PrevPart = () => {
    const [state, setState] = useState(0)
    const prev = usePrev(state);

  return (
    <div>
        <p>{state}</p>
        <button onClick={() => {
            setState(curr => curr+1)
        }}>Click Me</button>
        <p>The previos State was {prev} </p>
    </div>
  )
}

export default PrevPart