import React, { useContext, useEffect, useState} from 'react'
import {  NavLink,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus,faUserGroup,faSpa,faBars} from '@fortawesome/free-solid-svg-icons'
import {AppContext} from "../../Context/msgContext"
import images from "../../assets/index"



function Index() {
  const {username,account,connectWallet}= useContext(AppContext)
  const navigate = useNavigate()
  const [size,setSize] = useState(null)
  const [open,setopen] = useState(false)

  const handleClick =async()=>
  {
    const value =  await connectWallet()
   if(value !== null) 
   {
    sessionStorage.setItem("address",value)
    window.location.reload()
   }
     
  }

  const Menu = [
    {
      name:"Home",
      link:"/" 
    },
    {
      name:"All Users",
      link:"/userList" 
    },
    {
      name:"Chat",
      link:"/friend" 
    },
  ]

  const deskmenu = Menu.map((item,i)=>{
    return(
      <div  className='font-Coolvetica ' key={i+1}  >
        <NavLink to={item.link} className={({isActive})=>isActive?'text-purple-300':'text-orange-600'} >
           {item.name}
        </NavLink>
      </div>
    )
  })
  useEffect(() => {
    const width = ()=>
    {
      setSize(window.innerWidth)
    }
     width()
  },[])
  
  return (
    <>
    {size > 750 ? 
    // Desktop version
     ( <div className='flex flex-row  mb-3 p-4  bg-sidebar '>
      <div className='self-center'>
      <NavLink to="/"><FontAwesomeIcon icon={faSpa} color= "#4d4d4e" className='text-purple-500 ml-2 text-[70px] '/></NavLink> 
      </div>
      <div className='my-0 mx-auto flex gap-8 text-white self-center text-[25px]  tracking-wide '>{deskmenu}</div>
     {username ===""? 
     <div className=' self-center mr-3'>     
       <FontAwesomeIcon icon={faUserPlus} onClick={()=>navigate('/form',{state:{id:"1" }}) } className="cursor-pointer   text-[40px] text-purple-300"/>
      </div>
      :
      <div className='flex mr-2 p-4'>
        <FontAwesomeIcon icon={faUserGroup} onClick={()=>navigate('/form',{state:{id:"2"}})} className="cursor-pointer text-[40px] self-center mr-6 text-purple-300"/>
       <div className='bg-sidebar flex items-center justify-center rounded-xl '>
       <div ><img src={images.accountName} alt="user" className='w-[50px] my-0 mx-auto' /></div>
       <small className='text-orange-500 self-center text-[25px] p-2 capitalize font-Coolvetica tracking-wide'>{username}</small>
       </div>
      </div>
      } 
     {account === null || account === undefined ?
     <div className='cursor-pointer text-orange-500 flex gap-1 items-center bg-sidebar self-center p-2  text-[25px] capitalize font-Coolvetica rounded-xl mr-2' onClick={handleClick}><img src={images.logo} alt="etherlogo" className='xs:w-[25px] sm:w-[35px] w-[40px]' />connect Wallet</div>
     :
     <div className='cursor-pointer text-orange-500 flex gap-1 items-center bg-sidebar self-center p-2  text-[25px]  font-Coolvetica rounded-xl tracking-wide mr-2'  onClick={handleClick}> <img src={images.logo} alt="etherlogo" className='xs:w-[25px] sm:w-[35px] w-[40px]' /> {`${account.slice(0,4)}...${account.slice(38)}`}</div>
     }
    </div>
    )
     :
     // Mobile version
    (
    <div className='  flex justify-between min-h-[70px] bg-sidebar'>
       
       <div className='self-center'>
        <NavLink to='/'><FontAwesomeIcon icon={faSpa} color= "#4d4d4e" className='text-purple-500  text-[60px] xs:text-[40px] ml-2  '/></NavLink>
      </div>

      <div className='self-center'>
      {
      username === ""? 
     <div className=' self-center'>     
       <FontAwesomeIcon icon={faUserPlus} onClick={()=>navigate('/form',{state:{id:"1" }}) } className="cursor-pointer   text-[40px] text-purple-300 xs:text-[25px] xs:m-0"/>
      </div>

      :
      <div className='flex gap-6 xs:gap-2'>
       <div className='flex items-center justify-center  '>
       <div ><img src={images.accountName} alt="user" className='w-[40px] xs:min-w-[30px] min-w-[40px]' /></div>
       <small className='text-orange-500 self-center text-[20px] p-1 capitalize font-Coolvetica tracking-wide'>{username}</small>
       </div>
      </div>
      } 
       </div>

       <div className=' sm:text-[15px]  max-h-[40px] self-center '>
      {
     account === null || account === undefined ?
      <div className='cursor-pointer  text-orange-500 bg-sidebar flex gap-1 items-center  text-[20px] capitalize font-Coolvetica rounded-xl max-h-[40px] xs:text-[15px]' onClick={handleClick}><img src={images.logo} alt="etherlogo" className='xs:w-[25px] sm:w-[35px] w-[40px]'/>connect Wallet</div>
      : 
      "value"
    //  <div className='cursor-pointer text-orange-500 bg-sidebar flex gap-1 items-center   text-[20px]  font-Coolvetica rounded-xl  max-h-[40px] xs:text-[15px] '  onClick={handleClick}><img src={images.logo} alt="etherlogo" className='xs:w-[25px] sm:w-[35px] w-[40px]'/>{`${account.slice(0,4)}...${account.slice(38)}`}</div>
      }
      </div>

      <div className='self-center mr-3'><FontAwesomeIcon icon={faBars} className="text-[40px] text-purple-500 xs:text-[25px] " onClick={()=>setopen(oldvalue=>!oldvalue)}/></div>
     
    </div>
    )
    }

    {
      open && <div className='border border-purple-200 right-1 z-10 bg-sidebar p-4 mx-1 flex justify-between '>
        <div className='flex  justify-between text-yellow  text-[20px] tracking-wide  w-[80%] self-center '>{deskmenu} 
        </div>
        <div className=' mr-2'><FontAwesomeIcon icon={faUserGroup} onClick={()=>navigate('/form',{state:{id:"2"}})} className="cursor-pointer text-[40px] self-center xs:text-[25px] text-purple-300"/></div>
      </div>

    }
     
    
    </>
  )
}

export default Index