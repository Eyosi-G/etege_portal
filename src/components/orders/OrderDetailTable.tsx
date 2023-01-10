import React from 'react'
import OrderDetailTableRow from './OrderDetailTableRow'

const OrderDetailTable = () => {
    return (
        <div className='border border-gray-300 rounded-lg p-4 mt-5'>
            <div className='grid grid-cols-8 text-sm text-gray-500 gap-2 pb-3 border-b border-b-gray-300'>
                <div>ID</div>
                <div className='col-span-2'>Product Name</div>
                <div>Qty</div>
                <div>Price</div>
                <div>Total</div>
                <div className='col-span-2' >Status</div>
            </div>
            <div>
                <OrderDetailTableRow />
                <OrderDetailTableRow />
                <OrderDetailTableRow />
            </div>
        </div>
    )
}

export default OrderDetailTable