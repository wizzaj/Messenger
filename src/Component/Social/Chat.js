import React, { useEffect } from 'react'

import Msg from './Msg'


function Chat({userAddress,friendid,readMessage,friendMsg})
 {
     const friendDetail= friendid.split(',')

    useEffect(() => {
      if(friendDetail.length>0)
      {
        readMessage(friendDetail[1])
      }
    }, [])
    
    const messages = friendMsg.map((msg)=>
    {
      return(
        <div className='bg-purple-200 mb-4 text-bg font-serif w-[60%] xs:w-[90%] mx-4 border rounded-3xl xs:mx-1 '  key={msg.timestamp}>
          <Msg 
          msg={msg} 
          userkey={userAddress}
          friendkey={friendDetail[1]}
          friendname={friendDetail[0]}
          />
        </div>
      )
    })
  return (
    <div >
      { 
      messages.length === 0 ?  
      <div className="text-blue-500 text-center mt-4">
       Start Conversion
      </div>  
      : messages
      }
    </div>
  )
}

export default Chat