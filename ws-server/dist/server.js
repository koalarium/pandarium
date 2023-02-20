"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const httpServer = (0, http_1.createServer)();
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
    },
});
io.on('connection', socket => {
    socket.on('join_to_room', (roomId, prevRoomId) => {
        if (prevRoomId != '')
            socket.leave(prevRoomId);
        socket.join(roomId);
        socket.to(roomId.toString()).emit('get_data', roomId);
        console.log("Join to room", roomId);
        console.log("Left from room", prevRoomId);
    });
    socket.on('sended_message', (roomId) => {
        socket.to(roomId.toString()).emit('get_data');
        console.log("sended_message", roomId);
    });
});
httpServer.listen(9000);
//# sourceMappingURL=server.js.map