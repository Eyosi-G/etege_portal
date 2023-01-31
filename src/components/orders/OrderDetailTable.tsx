import React from 'react'
import { IOrder, IOrderDetail } from '../../service/api/orderService'
import SuccessDialog from '../SuccessDialog'
import OrderDetailTableRow from './OrderDetailTableRow'

interface IProps {
    orderDetails: IOrderDetail[]
}
const OrderDetailTable = (props: IProps) => {
    const { orderDetails } = props;
    return (
        <div className='w-[700px] md:w-full border border-gray-300 rounded-lg p-4 mt-5'>

            <div className='grid grid-cols-7 text-sm text-gray-500 gap-2 pb-3 border-b border-b-gray-300'>
                <div className='col-span-2'>Product Name</div>
                <div>Qty</div>
                <div>Price</div>
                <div>Total</div>
                <div className='col-span-2' >Status</div>
            </div>
            <div>
                {
                    orderDetails.map(orderDetail => {
                        return <OrderDetailTableRow orderDetail={orderDetail} />

                    })
                }

            </div>
        </div>
    )
}

export default OrderDetailTable