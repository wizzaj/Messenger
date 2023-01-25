import React from 'react'
import images from "../../assets/index"

function Loader() {
  return (
    <div className='w-full   flex items-center justify-center'>
    <div className='max-w-[130px]  rounded-full '>
        <img src={images.loader} alt="loader" className='w-full rounded-full p-5'/>
    </div>
    </div>
  )
}

export default Loader