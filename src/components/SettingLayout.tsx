import React from 'react'
import { Outlet } from 'react-router-dom'
import SettingsSideBar from './SettingsSideBar'

const SettingLayout = () => {
    return (
        <div className='grid grid-cols-12 gap-3 '>
            <div className='col-span-full md:col-span-3 ml-10 md:ml-0'>
                <SettingsSideBar />
            </div>
            <div className='col-span-full md:col-span-9 '>
                <Outlet />
            </div>
        </div>
    )
}

export default SettingLayout