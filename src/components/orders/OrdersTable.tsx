import React from 'react'
import { IOrder } from '../../service/api/orderService'
import OrderTableRaw from './OrderTableRaw'

interface IProps {
    orders: IOrder[]
}
const OrdersTable = (props: IProps) => {
    return (
        <div className='border border-gray-300 rounded-lg p-4 w-[800px] md:w-full overflow-x-auto '>
            <div className='grid-cols-5 grid uppercase text-sm text-gray-500 gap-2 border-b pb-3 border-b-gray-300'>
                <div>Total</div>
                <div>Created</div>
                <div className='col-span-2'>Assigned To</div>
                <div>Actions</div>
            </div>
            <div>
                {
                    props.orders.map((order) => {
                        return <OrderTableRaw order={order} />
                    })
                }
            </div>
        </div>
    )
}

export default OrdersTable