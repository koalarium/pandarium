"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameController {
    on(socket, message) {
        socket.on(message).emit();
    }
}
exports.default = GameController;
//# sourceMappingURL=GameController.js.map