import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faUserGroup} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/msgContext'

function Filter() {
    const navigate = useNavigate()
    const {account} = useContext(AppContext)

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

  return (
    <div className=' flex  p-4 sm:flex sm:flex-col sm:gap-8'>
        <form action="" className=" relative w-[40%] sm:self-center sm:w-[100%] ">
            <input 
            className='bg-slate-600 w-full p-2 rounded-lg pl-[8px] text-bg '
            type="text" 
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute top-[10px] left-2 text-[25px]'/>
        </form>
        <div className=' flex-grow text-end sm:text-start '>
        <span className='relative'>
        <button onClick={handleClick} className="  mr-20 p-2 pl-8 bg-gray-500 text-[15px] font-Coolvetica tracking-wider rounded-md text-bg hover:border-2 hover:border-mustyellow ">Add Friend</button>
        <FontAwesomeIcon icon={faUserGroup} className="cursor-pointer text-[20px] self-center mr-6 text-bg absolute left-[4px] top-0 "/>
        </span>
        </div>
    </div>
  )
}

export default Filter