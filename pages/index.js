import { useSocket } from '../context/socket';
import { useEffect } from 'react';

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      console.log('Socket connected:', socket.id);
    }
  }, [socket]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">Welcome to We-Meet</h1>
      <p className="mt-3 text-2xl">
        {socket ? `Socket connected: ${socket.id}` : 'Connecting...'}
      </p>
    </div>
  );
}