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
            
            socket.on('input-change', msg => {
                socket.broadcast.emit('update-input', msg )
            })

            socket.on('sended', msg => {
                socket.broadcast.emit('update-mess', msg )
                console.log('update-mess', msg)
            })
        })

    }



    res.end();

}

export default SocketHandler;