import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClockLoader } from 'react-spinners'
import { useActivateAccountMutation } from '../service/api/authService'

const ActivateAccountPage = () => {
    const navigate = useNavigate()
    const { token } = useParams()
    const [activateAccountHandler, { isLoading, isSuccess, isError }] = useActivateAccountMutation()


    useEffect(() => {

        if (token) {
            activateAccountHandler(token)
        }

    }, [token])

    const returnToLogin = <div className='flex justify-center mt-5'>
        <div onClick={() => navigate("/auth/login")} className='px-3 py-1 border flex items-center justify-center space-x-2 hover:cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className='text-lg capitalize'>Return To Login</span>
        </div>
    </div>
    return (
        <div>
            <div className=' px-5 md:px-10 flex justify-between items-center py-5  text-sm md:text-base border-b border-b-gray-200 '>
                <h1 className='px-4  md:px-9 font-bold text-lg md:text-3xl tracking-widest uppercase mt-9 mb-3 hover:cursor-pointer'>
                    <span className='p-2 '>Everything</span>
                    <span className='p-2 bg-black text-white'>Addis</span>
                </h1>
            </div>

            <div className='flex justify-center mt-10'>
                {isSuccess && <div className='w-[80%] md:w-[60%] text-center'>
                    <p className='flex justify-center text-green-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </p>
                    <h1 className='font-bold text-3xl tracking-widest uppercase mb-3 text-green-500'>
                        Your account has been successfully activated
                    </h1>
                    {returnToLogin}
                </div>}
                {isError && <div className='w-[80%] md:w-[60%] text-center '>
                    <p className='flex justify-center text-red-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                    </p>
                    <h1 className='font-bold text-3xl tracking-widest uppercase mb-3 text-red-500'>
                        Failed To Activate Your Account
                    </h1>
                    {returnToLogin}
                </div>}

                {isLoading && <div className=''>
                    <ClockLoader />
                    <div>Loading ... </div>
                </div>}

            </div>

        </div>
    )
}

export default ActivateAccountPage