import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

interface IProps {
    children: React.ReactNode,

}
const Layout = (props: IProps) => {
    return (
        <div className=' bg-white'>
            <NavBar />
            <div className='px-5 md:px-10 grid grid-cols-12 gap-2 mt-5'>
                <div className='col-span-full md:col-span-3 '>
                    <SideBar />
                </div>
                <div className='col-span-full md:col-span-9 '>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout