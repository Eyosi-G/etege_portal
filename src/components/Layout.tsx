import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'

// is
const Layout = () => {
    return (
        <div className=' bg-white'>
            <NavBar />
            <div className='px-5 md:px-10 grid grid-cols-12 gap-3 mt-5'>
                <div className='col-span-full md:col-span-3 '>
                    <SideBar />
                </div>
                <div className='col-span-full md:col-span-9 '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout