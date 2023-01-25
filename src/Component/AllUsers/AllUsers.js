import React, { useContext } from 'react'
import UserCard from '../UserCard/UserCard'
import {AppContext} from '../../Context/msgContext'

function AllUsers() {
    const {UserList,addFriends} = useContext(AppContext)
    const mappedList = UserList.map((user,i)=>{
        return(
            <div className='sm:mb-6 sm:w-full  xs:w-[90%] xs:p-0' key={i+1}>
                {<UserCard className="grid-cols-{i}" index={i+1} addFriend={addFriends} user={user}/>}
            </div>
        )
    })
  return (
    <div className=' w-[100%] p-8 sm:w-full '>
     <h1 className='text-orange-500 font-Coolvetica font-semibold tracking-widest text-[30px] sm:text-center '>Find Friends</h1>
     <div className='mt-4 p-8 ml-4 grid grid-cols-3 gap-4 sm:gap-0 sm:grid-cols-none sm:w-full  sm:ml-0 sm:p-0'>
      {mappedList}
      </div> 
    </div>
  )
}

export default AllUsers