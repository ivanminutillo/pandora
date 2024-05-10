'use client'
import React from 'react'
import { AgentDetails } from '@/components/agent-details'
import {Stats} from '@/components/stats'
import {useEffect, useState} from 'react'
import socket from '../app/socket'
import Feed from '@/components/feed'


function App() {
  // const [tradesPerPage] = React.useState(10);
  const jan2024 = new Date('2024-01-01T00:00:00Z').getTime();  
  const today = new Date().getTime();
  const [isConnected, setIsConnected] = useState(false)
  const [transport, setTransport] = useState("N/A")
  const [address, setAddress] = useState("0xccb133749b4a2d58be39d66238e56f29D042c219")

  useEffect(() => {
    if (socket.connected) {
      onConnect()
    }

    function onConnect() {
      setIsConnected(true)
      setTransport(socket.io.engine.transport.name)
      // Set address and ServiceID here
      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name)
      })
    }

    function onDisconnect() {
      setIsConnected(false)
      setTransport("N/A")
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect)
      socket.off("disconnect", onDisconnect)
    }
  }, [])

  return (
    <div className="App p-2 md:p-0">
        <div className='max-w-screen-md mx-auto md:my-6'>
          <div className='flex flex-col gap-2'>
            <AgentDetails isConnected={isConnected} transport={transport} address={address} />
            <Stats id={address} jan2024={jan2024} today={today} />
            <Feed id={address} jan2024={jan2024} today={today} />
          </div>
        </div>
      </div>
    ) 
  }


export default App