import {useContext, createContext, useState, useEffect} from "react";
import {io} from "socket.io-client";

const SocketContext = createContext({
  chartData: [],
});

const SocketsProvider = (props) => {
  const [chartData, setChartData] = useState();

  useEffect( () => {
    const socket = io(process.env.NEXT_PUBLIC_API_KEY);

    socket.on('update_data', (data) => {
      setChartData(data);
    });

    return () => { socket.disconnect() };
  },[]);

  return (
    <SocketContext.Provider value={{chartData}} {...props} />
  );
}

const useSocket = () => useContext(SocketContext);

export { SocketsProvider, useSocket };