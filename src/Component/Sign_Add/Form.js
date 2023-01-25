import React, { useState,useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {AppContext} from "../../Context/msgContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faSpaceAwesome} from '@fortawesome/free-brands-svg-icons'
import {faCircleUser,faAddressBook} from '@fortawesome/free-solid-svg-icons'
import images from "../../assets/index"
import Loader from '../Loading/Loader'


function Form() {
    const {createAccount,addFriends,Loading}= useContext(AppContext)
    const location = useLocation()
    const navigate= useNavigate()
    const {id} = location.state

    const paraFreind = 'You can Add friends by entering name and publickey of your friend'
    const paraUser =  'Please Enter Your name and public key to Sign UP'
    const [formdata,setFormdata] = useState({
        username:"",
        address:""
    })

     const handleChange =(event)=>
     { 
        const {name,value} = event.target
        setFormdata((oldvalue)=>
        {
            return {
                ...oldvalue,
                [name]: value
            }  
        })
     }

     const handleSubmit= async(e)=>
     {
       e.preventDefault()
       if(id === "1")
       {
       await createAccount(formdata.username,formdata.address)
       }
       if(id === "2")
       {
        await addFriends(formdata.username,formdata.address)
       }
     }

  return (
    <div className='flex items-center p-6  sm:flex sm:flex-col  w-full h-screen '>
        <div className='self-center    w-[50%] sm:w-full'><img src={images.hero} alt="buddy"className='w-[80%] sm:w-full' /></div>
        <div className=' h-full  w-50%  flex flex-col items-center justify-center flex-grow sm:w-full'>
         <div className='font-Coolvetica tracking-wider sm:text-center'>
         <p className='text-yellow-500'>{id ==='1'?paraUser:paraFreind}</p>
         </div >  
         {Loading? <Loader/> :  
        <form onSubmit={handleSubmit} className="w-[80%] p-4 sm:w-full hover:border-[3px]  border-blue-500 hover:p-4 hover:mt-2 vsm:p-0">
        <div className='w-full  relative my-6'>
            <input 
            className='w-full py-3 px-10 font-Coolvetica bg-sidebar text-usedcolor border-2 border-orange-500 capitalize'
            placeholder='Enter Username'
            type="text" 
            name='username'
            value={formdata.username}
            onChange={handleChange}
            required
            />
            <FontAwesomeIcon icon={faCircleUser} className="absolute left-2 top-[14px] text-[22px] text-blue-500"/>
        </div>
        <div className='w-full border-2 border-orange-500 relative'>
            <input 
            className='w-full py-3 px-10 bg-sidebar text-usedcolor font-Coolvetica'
            placeholder='Enter PubKey'
            type="text" 
            name='address'
            value={formdata.address}
            onChange={handleChange}
            required
            />
            <FontAwesomeIcon icon={faAddressBook} className="absolute left-2 top-[14px] text-[22px] text-blue-500"/>
        </div>
        <button className='text-usedcolor  my-6 px-4 py-1 border-[3px] border-orange-500 hover:bg-usedcolor hover:border-[3px] hover:border-blue-300 hover:text-orange-800 tracking-wider xs:block xs:w-full'>Submit</button>   
        <button onClick={()=>navigate(-1)} className=' text-usedcolor float-right  my-6  py-1 px-4 border-[3px] border-orange-500 hover:border-[3px] hover:border-blue-300 hover:bg-usedcolor hover:text-orange-800 tracking-wider xs:w-full xs:float-none xs:mt-2'>Cancel</button>
        </form>
         }
         
        </div>
    </div>
  )
}

export default Form