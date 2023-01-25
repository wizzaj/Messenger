import React from 'react'
import images from '../../assets/index'
import { messageTime } from '../../Utils/apiProvider'

function Msg({msg,friendname,friendkey,userkey}) {
   
   const nameResolve = ()=>
   {
    const senderkey = msg.sender.toString()
    
    if(userkey.toLowerCase() === senderkey.toLowerCase())
     {
          return "you"
     }
     else
     {
      return friendname
     }
   }

   const keyslice= (key)=>
   {
    const newkey = <p>{key.slice(0,4)}...{key.slice(38)}</p>
    return newkey
   }

  return (
    <div className='flex flex-col text-gray-800 rounded-3xl' >

     <div className='flex bg-purple-200 max-w-[45%] max-h-[42px] font-Coolvetica rounded-3xl border-2 '>

     <img src={images.user1} alt="user" className='max-w-[40px] h-full rounded-3xl' />

     <div className='flex flex-col ml-3 '>

      <span className=' flex max-h-[20px] m-0 gap-2'>
      <p className='capitalize text-blue-700'>{nameResolve()}</p>
      {nameResolve()===friendname? keyslice(friendkey):keyslice(userkey) }
      </span>

      <span className='flex flex-col m-0 max-h-5'>
      <p>{messageTime(msg.timestamp)}</p>
      </span>

      </div>
     </div>

     <div className='px-4 pb-5 bg-blue-300 mt-2 text-black rounded-3xl'>
      <p>{msg.message}</p>
     </div>

    </div>
  )
}

export default Msg