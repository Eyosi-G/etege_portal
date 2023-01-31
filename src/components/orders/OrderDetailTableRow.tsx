import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux-hook';
import { IOrderDetail, useUpdateOrderStatusMutation } from '../../service/api/orderService'
import Confirmation from '../Confirmation';
import Modal from '../Modal';
import SuccessDialog from '../SuccessDialog';

interface IProps {
    orderDetail: IOrderDetail
}
const OrderDetailTableRow = (props: IProps) => {
    const { orderDetail } = props;
    const [status, setStatus] = useState(orderDetail.status)
    const [hasChanged, setHasChanged] = useState(false)
    const { data: userData } = useAppSelector(state => state.user)
    const [updateOrderStatus] = useUpdateOrderStatusMutation({ fixedCacheKey: "update-order-status" })


    useEffect(() => {
        if (!userData || !hasChanged) return
        updateOrderStatus({ status, id: orderDetail.id, token: userData.token });
    }, [status, userData])

    return (
        <div className='grid grid-cols-7 items-center mt-5 text-sm gap-2'>

            <div className='col-span-2 capitalize'>{orderDetail.productName}</div>
            <div>{`${orderDetail.quantity}`}</div>
            <div>{`${orderDetail.price} ETB`}</div>
            <div>{`${orderDetail.total.toFixed(2)} ETB`}</div>
            <div className='col-span-2'>
                <div className='pr-2 border w-fit'>
                    <select onChange={(e) => {
                        setHasChanged(true)
                        setStatus(e.target.value)
                    }} value={status} className='p-2 outline-none bg-white'>
                        <option value="PENDING">Pending</option>
                        <option value="PROCESSING">Proccessing</option>
                        <option value="DELIVERED">Delivered</option>
                        <option value="CANCELED">Cancelled</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailTableRow