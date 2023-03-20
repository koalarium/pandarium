import { createServer } from "http";
import { Server } from "socket.io";
import GameController from "./controllers/GameController";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on('connection', socket => {

  //////////////////////////////////////////
  // KÓŁKO I KRZYŻYK
  //////////////////////////////////////////
            
  socket.on('join_to_room', (roomId, prevRoomId) => {

    if(prevRoomId != '') socket.leave(prevRoomId);
    socket.join(roomId);

    socket.to(roomId.toString()).emit('get_data', roomId)
    console.log("Join to room", roomId);
    console.log("Left from room", prevRoomId);

  });

  socket.on('sended_message', (roomId) => {

      socket.to(roomId.toString()).emit('get_data');
      console.log("sended_message", roomId);
      
  });

})

httpServer.listen(9000);