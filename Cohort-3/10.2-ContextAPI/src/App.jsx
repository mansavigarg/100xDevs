// # CONTEXT-API

import React, { useState } from "react"
import { useContext } from "react"

const BulbContext = React.createContext()

function App() {
    const [bulbOn, setbulbOn] = useState(true)
    return (
        <div>
            <BulbContext.Provider value={{bulbOn: bulbOn, setbulbOn: setbulbOn}}>
                <LightBulb />
            </BulbContext.Provider>
            <ContextAPI />
        </div>
    )
}

function LightBulb(){
    
    return <div>
        <BulbState />
        <ToggleBulbState />
    </div>
}

function BulbState(){
    const {bulbOn} = useContext(BulbContext)
    return <div>
        {bulbOn ? "Bulb is On" : "Bulb is off"}
    </div>
}

function ToggleBulbState(){
    const {bulbOn, setbulbOn} = useContext(BulbContext)
    function toggleBulb(){
        setbulbOn(c => !c)
    }
    return <div>
        <button onClick={toggleBulb}>
            Toggle Bulb
        </button>
    </div>
}

export default App