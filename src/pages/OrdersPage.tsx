import React from 'react'
import Layout from '../components/Layout'
import OrdersTable from '../components/orders/OrdersTable'
import Paginator from '../components/Paginator'

const OrdersPage = () => {
    return (
        <Layout>
            <div className=''>
                <div className='flex '>
                    <div className='rounded-lg bg-white border px-3 py-1 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='ml-4 outline-none p-1 w-full bg-white text-sm' placeholder='Search Order ID' />
                    </div>
                </div>
                <div className='mb-5 mt-2 space-x-5 text-sm flex items-center'>
                    <button className='px-2 py-1 rounded-lg bg-gray-200 '>All Orders</button>
                    <button className='px-2 py-1 rounded-lg border border-gray-200'>Out of Stock</button>
                    <button className='px-2 py-1 rounded-lg border border-gray-200'>Delivered</button>
                    <button className='px-2 py-1 rounded-lg border border-gray-200'>Cancelled</button>
                    <button className='px-2 py-1 rounded-lg border border-gray-200'>New</button>
                </div>
                <OrdersTable />
                <div className='flex justify-center'>
                    <Paginator />
                </div>
            </div>
        </Layout>
    )
}

export default OrdersPage