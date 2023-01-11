import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Layout from '../components/Layout'

const AddEditSupplierPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex items-center space-x-4'>
                <button onClick={() => navigate(-1)} className='border p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <div>
                    <div className='text-sm text-gray-600'>Back to supplier list</div>
                    <div className='font-bold text-xl'>Register New Supplier</div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-2 mt-5'>
                <div className='col-span-7'>
                    <div className="text-lg mb-2">Company Information</div>
                    <div className='space-y-3'>
                        <InputField title='Name' isRequired />
                        <InputField title='Address' isRequired />
                    </div>
                </div>
                <div className='col-span-5'>
                    <div>
                        <div className="text-lg mb-2">Contact Person</div>
                        <div className='space-y-3'>
                            <InputField title='Full Name' isRequired />
                            <InputField title='Email' isRequired />
                            <InputField title='Phone' isRequired />
                        </div>
                        <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                            <button className='px-3 py-2 rounded-lg border border-gray-300 '>Discard</button>
                            <button className='px-3 py-2 rounded-lg bg-black text-white  '>Save Supplier</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditSupplierPage