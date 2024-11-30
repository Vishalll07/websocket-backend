import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port:3000 });

interface User {
    socket: WebSocket;
    room: String;
}

let allSockets: User[] = [];

wss.on('connection',(socket) => {
    socket.on("message",(message) => {
        //@ts-ignore
        console.log("message recieved " + message.toString());
        setTimeout(()=>{
            socket.send(message.toString() + " : Message Sent fromt the server");
        }, 1000);
        // const parsedMessage = JSON.parse(message);
        // if(parsedMessage.type === "join"){
        //     console.log("user joined room" + parsedMessage.payload.roomId);
        //     allSockets.push({
        //         socket,
        //         room: parsedMessage.payload.roomId
        //     })
        // }

        // if(parsedMessage.type === "chat"){
        //     console.log("user joined the chat");
        //     let currentUserRoom = null ;
        //     for(let i =0; i < allSockets.length; i++){
        //         if(allSockets[i].socket == socket){
        //             currentUserRoom = allSockets[i].room ;
        //         }
        //     }
        //     for(let i = 0 ; i < allSockets.length ; i++){
        //         if(allSockets[i].room == currentUserRoom){
        //             allSockets[i].socket.send(parsedMessage.payload.message)
        //         }
        //     }
        // }
    })
})
