import { skipToken } from '@reduxjs/toolkit/dist/query'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import CustomerInformation from '../components/orders/CustomerInformation'
import OrderDetailTable from '../components/orders/OrderDetailTable'
import { useFetchSingleOrderQuery } from '../service/api/orderService'

const OrderDetailPage = () => {
    const { id } = useParams()
    const { data } = useFetchSingleOrderQuery(id ? id : skipToken)
    const navigate = useNavigate()
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                    <button onClick={() => navigate(-1)} className='border p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <div>
                        <div className='text-sm text-gray-600'>Back to order list</div>
                        <div className='font-bold text-xl'>{data?.slug}</div>
                    </div>
                </div>
            </div>
            <div className='grid-cols-12 grid gap-2 mt-10'>
                <div className='col-span-8'>
                    <div>
                        <div className='font-bold text-xl'>Order Details</div>
                        {data?.orderDetails && <OrderDetailTable orderDetails={data?.orderDetails} />}
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='font-bold text-xl'>Customer Information</div>
                    {data && <CustomerInformation order={data} />}
                </div>
            </div>
        </>
    )
}

export default OrderDetailPage