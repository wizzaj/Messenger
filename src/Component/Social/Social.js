import React, { useContext, useEffect, useState} from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import Chat from './Chat'
import FriendList from './FriendList'
import { AppContext } from '../../Context/msgContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMessage, faPaperPlane,faUserGroup} from '@fortawesome/free-solid-svg-icons'
import images from '../../assets/index'
import Loader from '../Loading/Loader'
import './index.css'

function Social() {
  const {
    account,
    friendlist,
    friendMsg,
    Loading,
    currentUser,
    currentUserAddress,
    readUserinfo,
    readMessage,
    sendingMessage
  } = useContext(AppContext)
   
  const [formdata,setFormdata] = useState("")
  const [toggle,settoggle] = useState(false)
  const {friendId} = useParams()
  const navigate = useNavigate()
 

  const mappedList= friendlist.map((friend)=>
  {
     return (
      <div className='mb-3 w-full' key={friend[1]}  onClick={()=>readMessage(friend.pubkey,currentUserAddress)} >
       <Link to={`/friend/${friend}`}><FriendList  friend={friend}/></Link>
      </div>
     )
  })

  function handleClick()
  {
    if(account === "")
    {
      navigate('/form',{state:{id:"1"}})
    }
    else
    {
      navigate('/form',{state:{id:"2"}})
    }
  }



   const handleSubmit = async(e)=>
   {  
    settoggle(true)
    e.preventDefault()
    try { 
      
      if(friendId === undefined || formdata === "")
      {
        alert("Select a friend Or can't send empty msg ")
      }
      else
      {
        const friendNewid= friendId.split(',')
        await sendingMessage(formdata,friendNewid[1])
      }
    } 
    catch (error) {
      console.log(error.message)
    }  
    settoggle(false)
   }


  useEffect(() => {
      readUserinfo(account)
  }, [])
  
  return (
    <div className='flex gap-8 sm:flex-col mb-4 '>

        <div className=' w-[39%] ml-4 p-4 bg-slate-700 sm:w-[90%] sm:p-4 min-h-[150px] rounded-lg relative '>
          <h1 className='font-Coolvetica text-[30px] text-orange-500 tracking-wide mb-4'>Friends</h1>

          <div className='absolute right-[8px] top-6  '>
            <button onClick={handleClick} className="   p-2 pl-8 bg-gray-500 text-[15px] font-Coolvetica tracking-wider rounded-md text-bg hover:border-2 hover:border-mustyellow ">Add Friend</button>
            <FontAwesomeIcon icon={faUserGroup} className="cursor-pointer text-[20px] self-center mr-6 text-bg absolute left-[4px] top-2 "/>
          </div>        
        
        {mappedList.length === 0 ? 
        <div>
          <div className="text-blue-500 text-center mt-4">
           Add Friends
        </div> 
        </div>
        :
        mappedList
        }
        </div>

        <div className=' min-h-[550px] mr-4 w-[55%] p-2 sm:ml-4 bg-slate-700 sm:w-[90%] grid grid-rows-[50px_minmax(250px,_1fr)_60px] gap-4 rounded-lg'> 
        <header className='  flex  bg-purple-300 font-Coolvetica text-bg rounded-lg items-center gap-2 mt-3 min-h-[40px] xs:w-[90%]'>
          <div className='w-[30px] min-w-[30px]'><img src={images.accountName} alt="logo" /></div>
          <div className='capitalize '>{currentUser}</div>
          <div className='tracking-[1px] '>{`...${currentUserAddress.slice(30)}`}</div>
        </header>
           
         {Loading 
         ?
        <Loader/> 
         :
         <main className=' grid-row-60  max-h-[400px] overflow-y-scroll outline-none '> 
         {
         friendId === undefined ?
         <div className="text-blue-500 text-center mt-4">
           Choose Friend  to Chat 
        </div>  : 
          <Chat
          userAddress={currentUserAddress}
          username={currentUser}
          friendid={friendId}
          readMessage={readMessage}
          friendMsg={friendMsg}
        
         />
         }
         </main>
        }

         <footer className=' grid-row-20  border-2   flex w-full items-center bg-purple-300 p-1 relative rounded-lg mb-4'>
          <form onSubmit={handleSubmit} className=' w-full'>
          <FontAwesomeIcon icon={faMessage} className='text-bg text-[27px] absolute left-1 top-2'/>
            <input
            className='bg-inherit text-bg text-[20px] w-[85%] ml-8 outline-none '
            type="text"
            name='input'
            value={formdata}
            onChange={(e)=>setFormdata(e.target.value)} 
             />
           <button className='absolute right-1 top-2' disabled={toggle} ><FontAwesomeIcon icon={faPaperPlane} className='text-[27px] text-bg' /></button>
          </form>
         </footer>
        </div>
    </div>
  )
}

export default Social