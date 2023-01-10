import React from 'react'
import Logo from './Logo'


const NavBar = () => {
    return (
        <div className=' px-5 md:px-10 flex justify-between items-center py-5  text-sm md:text-base border-b border-b-gray-200 '>
            <Logo />
            <div className='space-x-3 flex items-center py-2 '>
                <div>eyosiyas@gmail.com</div>
                <button className='flex space-x-2 items-center  px-5 py-2 bg-black text-white rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <div>
                        logout
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NavBar