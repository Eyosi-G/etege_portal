import React from 'react'
import OrderTableRaw from './OrderTableRaw'

const OrdersTable = () => {
    return (
        <div>
            <div className='grid-cols-5 grid uppercase text-sm text-gray-500 gap-2'>
                <div>Order ID</div>
                <div>Status</div>
                <div>Total</div>
                <div>Created</div>
                <div>Actions</div>
            </div>
            <div>
                <OrderTableRaw />
                <OrderTableRaw />
                <OrderTableRaw />
                <OrderTableRaw />

            </div>
        </div>
    )
}

export default OrdersTable