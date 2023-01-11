import React from 'react'

const Logo = () => {
    return (
        <h1 className='text-3xl text-center relative w-fit'>
            All Habesha
            <div className='absolute -bottom-2 flex space-x-2 ml-2'>
                <div className='h-1 w-2 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                <div className='h-1 w-10 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
            </div>
        </h1>
    )
}

export default Logo