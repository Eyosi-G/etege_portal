import React from 'react'
import Layout from '../components/Layout'
import OrdersTable from '../components/orders/OrdersTable'
import OrderSummerizeCard from '../components/orders/OrderSummerizeCard'
import Paginator from '../components/Paginator'

const OrdersPage = () => {
    return (
        <div className='pb-5 mt-5'>
            <div className='grid grid-cols-4 py-4 gap-2'>
                <OrderSummerizeCard
                    amount={32}
                    text="New"
                    color='bg-blue-200'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    }
                />
                 <OrderSummerizeCard
                    amount={20}
                    text="Processing"
                    color='bg-amber-200'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-amber-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    }
                />
                <OrderSummerizeCard
                    amount={302}
                    text="Delivered"
                    color='bg-green-200'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-green-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    }
                />
                 <OrderSummerizeCard
                    amount={20}
                    text="Cancelled"
                    color='bg-red-200'
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    }
                />
            </div>
            <div className='flex '>
                <div className='rounded-lg bg-white border px-3 py-1 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className='ml-4 outline-none p-1 w-full bg-white text-sm' placeholder='Search Order ID' />
                </div>
            </div>
            <div className='mb-3 mt-2 space-x-5 text-sm flex items-center'>
                <button className='px-2 py-1 rounded-lg bg-gray-200 '>All Orders</button>
                <button className='px-2 py-1 rounded-lg border border-gray-200'>Processing</button>
                <button className='px-2 py-1 rounded-lg border border-gray-200'>Ordered</button>
                <button className='px-2 py-1 rounded-lg border border-gray-200'>Delivered</button>
                <button className='px-2 py-1 rounded-lg border border-gray-200'>Cancelled</button>
                <button className='px-2 py-1 rounded-lg border border-gray-200'>New</button>
            </div>
            <OrdersTable />
            <div className='flex justify-center'>
                <Paginator />
            </div>
        </div>
    )
}

export default OrdersPage