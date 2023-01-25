import React from 'react'
import images from '../../assets/index'

function UserCard({user,index,addFriend}) {

  return (
    <div className=' text-gray-900 bg-purple-300  sm:w-full p-6 sm:p-0 xs:p-0  hover:bg-pink sm:max-w-none min-w-[50%] max-w-[80%] border-4'>
        <img src={images[`image${index}`]} alt="avatar" className=' mx-auto my-0 rounded-full w-[280px] ' />
        <div className='px-4 pb-4 flex flex-col  gap-2 text-sidebar'>
        <h3 className=' self-center font-Coolvetica font-semibold tracking-[4px] text-[22px]'>{user.name}</h3>
        <p className='overflow-hidden font-Coolvetica tracking-wider text-[18px]'>{user.accountAddress.slice(0,24)}...</p>
        <div className=' text-center '><button onClick={()=>addFriend(user.name,user.accountAddress)} className="font-serif tracking-wider border-[3px] border-sidebar py-2 w-full hover:bg-blue-400 hover:text-white text-[20px] ">Add Friend</button></div>
        </div>
    </div>
  )
}

export default UserCard