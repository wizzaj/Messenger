import React from 'react'
import Index from '../Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <div >
        {<Index/>}
        </div>
        <div>
         <Outlet/>
        </div>
    </div>
  )
}

export default Layout