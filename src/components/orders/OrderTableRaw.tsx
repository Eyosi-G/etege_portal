import React from 'react'
import OrderStatus from './OrderStatus'

const OrderTableRaw = () => {
    return (
        <div className='grid-cols-5 grid mt-5 gap-2 hover:cursor-pointer'>

            <div>ST7280283</div>
            <div className='flex'>
                <OrderStatus status='OUT_OF_STOKE' />
            </div>
            <div>3000 ETB</div>
            <div className='flex items-center space-x-2'>
                <div>Jun 12, 2023</div>
                <div className='flex text-xs'>
                    <div className='bg-blue-700 rounded-lg px-2 py-1 text-white'>New</div>
                </div>
            </div>
            <div className='flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default OrderTableRaw