import React from 'react'
import { IOrder } from '../../service/api/orderService'
interface IProps {
    order: IOrder
}
const CustomerInformation = (props: IProps) => {
    const { order } = props;
    return (
        <div className='border border-gray-300 rounded-lg p-4 mt-5 text-sm space-y-5'>
            <div>
                <div className='text-gray-500'>Name</div>
                <div className='capitalize'>{order.customerName}</div>
            </div>
            <div>
                <div className='text-gray-500'>Email</div>
                <div className='capitalize'>{order.customerEmail}</div>
            </div>
            <div>
                <div className='text-gray-500'>Phone Number</div>
                <div className='capitalize'>{order.customerPhone}</div>
            </div>
            <div>
                <div className='text-gray-500'>Shipping Address</div>
                <div className='capitalize'>{order.shippingAddress}</div>
            </div>
        </div>
    )
}

export default CustomerInformation