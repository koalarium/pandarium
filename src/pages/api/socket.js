import { Server } from 'socket.io';

const SocketHandler = (req, res) => {

    if (res.socket.server.io) {
        console.log('Socket is already running');
    }
    else {
        console.log('Socket is initializing');
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

              
        io.on('connection', socket => {
            
            socket.on('join_to_room', async (roomId, prevRoomId) => {

                if(prevRoomId != '') socket.leave(prevRoomId);
                socket.join(roomId);

                socket.emit('get_data', roomId)
                console.log("Join to room", roomId);
                console.log("Left from room", prevRoomId);

            });

            socket.on('sended_message', (roomId) => {
                io.in(roomId).emit('get_data', roomId)
                console.log("sended_message", roomId);
            });

        })

    }



    res.end();

}

export default SocketHandler;