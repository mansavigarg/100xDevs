// # CLOCK with start and stop functionality

import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const Clock = () => {
    const [currentCount, setCurrentCount] = React.useState(0)
    
    // Using useState variable but here what happens is that i am getting an extra re-render when i click on the start button (even though we are not using the timer variable in the app function but still react rerenders when setTimer is called (Which is an extra rerender))
    // const [timer, setTimer] = useState(0)
    // function startClock(){
        //     let value = setInterval(() => {
            //         setCurrentCount(c => c+1)
            //     }, 1000);
            //     console.log("inside startclock");
            
            //     setTimer(value)
            // }
            // function stopClock(){
                //     console.log(timer);
                //     clearInterval(timer)
                // }
                
                
                
    // Here useRef is used to store the value of the timer and it doesnt do any rerender
    const timer = useRef()
    function startClock(){
        let value = setInterval(() => {
            setCurrentCount(c => c+1)
        }, 1000);
        console.log("inside startclock");
        timer.current = value
    }
    function stopClock(){
        console.log(timer);
        clearInterval(timer.current)
    }



  return (
    <div>
        <div>
            {currentCount}
        </div>
        <div>
            <button onClick={startClock}>Start</button>
        </div>
        <div>
            <button onClick={stopClock}>Stop</button>
        </div>
    </div>
  )
}

export default Clock