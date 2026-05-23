import React from 'react'
import { useDebounce, useDebounce2 } from './hooks/useDebounce'
import { useState } from 'react'
import { useEffect } from 'react'

const DebouncePart = () => {
    function sendDataToBackend(){
        // fetech call
        fetch("api.amazon.com/search/")
        console.log("Fetch call happened")
    }

    const debouncedFn = useDebounce(sendDataToBackend)

  return (
    <div>
        <input type='text' onChange={debouncedFn} placeholder='Using First Approach'></input>
    </div>
  )
}
const DebouncePart2 = () => {
    const [inputVal, setInputVal] = useState("")
    const debouncedValue = useDebounce2(inputVal, 200)

    function change(e){
        setInputVal(e.target.value)
    }

    useEffect(() => {
        // expensive operation such as fetch
        console.log("Kuch to hua hai");
        
    }, [debouncedValue])

  return (
    <div>
        <input type='text' onChange={change} placeholder='Using Second Approach'></input>
    </div>
  )
}

export  {DebouncePart, DebouncePart2}