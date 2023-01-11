import React from 'react'
import OrderTableRaw from './OrderTableRaw'

const OrdersTable = () => {
    return (
        <div className='border border-gray-300 rounded-lg p-4'>
            <div className='grid-cols-4 grid uppercase text-sm text-gray-500 gap-2 border-b pb-3 border-b-gray-300'>
                <div>Order ID</div>
                <div>Total</div>
                <div>Created</div>
                <div>Actions</div>
            </div>
            <div>
                <OrderTableRaw isNew />
                <OrderTableRaw isNew/>
                <OrderTableRaw />
                <OrderTableRaw />

            </div>
        </div>
    )
}

export default OrdersTable