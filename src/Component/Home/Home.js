import React from 'react'
import images from "../../assets/index"

function Home() {
  return (
    <div className='flex sm:flex sm:flex-col  sm:gap-10 '>
       <div className='  '>
        <div className='w-full '>
        <div className='w-full text-[35px] text-orange-500 text-center tracking-wider font-medium p-8'><h1 className='capitalize font-Coolvetica'>Welcome To DM (Decentralize Messenger) app</h1></div>
        <div className='w-full p-12 mt-4 sm:mt-0 max-h-[200px] text-purple-300 tracking-wide text-[20px] font-serif xs:p-2' ><p>This app provides you with different cool features, you can start interacting with your friends securely with  Decentralization, Add friends to your friend list and start conversation. </p></div>
        </div> 
       </div>
       <div className='max-w-[50%] sm:max-w-full sm:p-4 p-8 sm:mt-4 xl:mt-5'>
       <div className='w-[100%]'>
       <img src={images.home} alt="home" className='w-[100%] rounded-3xl bg-transparent' />
       </div>
       </div>
    </div>
  )
}

export default Home