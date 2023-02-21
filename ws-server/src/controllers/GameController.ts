import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default class GameController {
    
    static on: any;

    public on(socket: any, message: string) {
        socket.on(message).emit();
    }

}