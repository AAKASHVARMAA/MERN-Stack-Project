import {Server} from "socket.io"

export const ConnectToServer=(server)=>
{
    const io=new Server(server)

    return io
}