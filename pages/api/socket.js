import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
    res.end();
    return;
  }

  console.log('Socket is initializing');
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on('connection', socket => {
    console.log(`Socket ${socket.id} connected`);
    
    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  });

  res.end();
};

export default SocketHandler;