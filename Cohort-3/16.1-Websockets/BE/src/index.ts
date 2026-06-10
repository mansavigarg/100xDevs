import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 8000})


// event handler
wss.on('connection', function(socket){
    console.log("User Connected.")

    socket.on("message", (e) => {
        if(e.toString() === "ping"){
            socket.send("pong")
        }
    })
})