import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className=' px-5 md:px-10 flex justify-between items-center py-5  text-sm md:text-base border-b border-b-gray-200 '>
        <h1 className='font-bold text-3xl tracking-widest uppercase mt-9 mb-3'>
          <span className='p-2 '>Everything</span>
          <span className='p-2 bg-black text-white'>Addis</span>
        </h1>

      </div>
      <div className='text-center my-10'>
        <h1 className='text-4xl'>404 Page Not Found</h1>
        <div className='mt-5'>The page you requested does not exist.</div>
        <div className='flex justify-center mt-7'>
          <div onClick={() => navigate("/auth/login")} className='px-4 py-3 border border-black font-light uppercase text-sm hover:cursor-pointer'>Return to Login</div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage