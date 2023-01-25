import React from 'react'
import images from '../../assets/index'


function FriendList({friend}) {
  return (
    <>
    <div className='flex w-[100%] bg-blue-300 rounded'>
       <div className='w-[20%] self-center'>
        <img src={images.accountName} alt="user" className=' w-[full] min-h-[80%] ' />
       </div>
       <div className='self-center w-[80%] flex flex-col '>
       <div className='text-[20px] font-mono text-bg capitalize  '>Name: {friend.username}</div>
       <div className='text-[20px] font-mono text-bg  sm:tracking-tighter  overflow-clip'>Key:{friend.pubkey.slice(24)}...</div>
       </div>
    </div>
    </>

  )
}

export default FriendList