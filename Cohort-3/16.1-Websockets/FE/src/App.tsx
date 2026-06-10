import { useEffect, useRef, useState } from "react"



function App() {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    function sendMessage () {
        // need to send message to the server so we need ws here that we can get using a state variable
        if(!socket) return
        const mss = ref.current?.value || "ping"
        socket.send(mss)
    }

    useEffect( () => {
        const ws = new WebSocket("ws://localhost:8000")
        setSocket(ws)
        // this is receiving message from the server
        ws.onmessage = (e) => {
            alert(e.data)
        }
    }, [])

    return (
        <div>
            <input ref={ref} type='text' placeholder='Message ....' />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default App
